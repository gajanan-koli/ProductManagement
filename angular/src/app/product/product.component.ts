import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { ProductService, ProductDto } from '@proxy/products';
import { CategoryService, CategoryDto } from '@proxy/categories';
import { BrandService, BrandDto } from '@proxy/brands';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product = { items: [], totalCount: 0 } as PagedResultDto<ProductDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedProduct = {} as ProductDto;
  brands = { items: [], totalCount: 0 } as PagedResultDto<BrandDto>;
  categories = { items: [], totalCount: 0 } as PagedResultDto<CategoryDto>;

  constructor(public readonly list: ListService, 
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService) {
  }

  ngOnInit() {
    const ProductStreamCreator = (query) => this.productService.getList(query);
    this.list.hookToQuery(ProductStreamCreator).subscribe((response) => {
      this.product = response;
    });

    const brandStreamCreator = (query) => this.brandService.getList(query);
    this.list.hookToQuery(brandStreamCreator).subscribe((response) => {
      this.brands = response;
    });

    const categoryStreamCreator = (query) => this.categoryService.getList(query);
    this.list.hookToQuery(categoryStreamCreator).subscribe((response) => {
      this.categories = response;
    });
  }

  createProduct() {
    this.selectedProduct = {} as ProductDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  buildForm() {
    this.form = this.fb.group({
      productName: [this.selectedProduct.productName || '', Validators.required],
      productDescription: [this.selectedProduct.productDescription || '', Validators.required],
      color: [this.selectedProduct.color || '', Validators.required],
      categoryId: [this.selectedProduct.categoryId || '', Validators.required],
      brandId: [this.selectedProduct.brandId || '', Validators.required],
      quantityInStock: [this.selectedProduct.quantityInStock || '', Validators.required],
      price: [this.selectedProduct.price || '', Validators.required],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedProduct.id
      ? this.productService.update(this.selectedProduct.id, this.form.value)
      : this.productService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  editProduct(id: string) {
    this.productService.get(id).subscribe((item) => {
      this.selectedProduct = item;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  delete(id: string) {
    this.confirmation.warn('AreYouSureToDelete', 'AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.productService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

}

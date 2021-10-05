import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { BrandService, BrandDto } from '@proxy/brands';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  brand = { items: [], totalCount: 0 } as PagedResultDto<BrandDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedBrand = {} as BrandDto;

  constructor(
    public readonly list: ListService,
    private brandService: BrandService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit() {
    const BrandStreamCreator = (query) => this.brandService.getList(query);

    this.list.hookToQuery(BrandStreamCreator).subscribe((response) => {
      this.brand = response;
    });
  }
 

  createBrand() {
    this.selectedBrand = {} as BrandDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  buildForm() {
    this.form = this.fb.group({
      brandName: [this.selectedBrand.brandName || '', Validators.required],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedBrand.id
      ? this.brandService.update(this.selectedBrand.id, this.form.value)
      : this.brandService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  editBrand(id: string) {
    this.brandService.get(id).subscribe(item => {
      this.selectedBrand = item;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  delete(id: string) {
    this.confirmation.warn('AreYouSureToDelete', 'AreYouSure').subscribe(status => {
      if (status === Confirmation.Status.confirm) {
        this.brandService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
}

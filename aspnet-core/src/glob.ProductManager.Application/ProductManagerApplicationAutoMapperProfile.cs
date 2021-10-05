using AutoMapper;
using glob.ProductManager.Brands;
using glob.ProductManager.Categories;
using glob.ProductManager.Products;

namespace glob.ProductManager
{
    public class ProductManagerApplicationAutoMapperProfile : Profile
    {
        public ProductManagerApplicationAutoMapperProfile()
        {
            CreateMap<Product, ProductDto>();
            CreateMap<Category, CategoryDto>();
            CreateMap<Brand, BrandDto>();

            CreateMap<ProductContract, Product>();
            CreateMap<CategoryContract, Category>();
            CreateMap<BrandContract, Brand>();
        }
    }
}

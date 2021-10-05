using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace glob.ProductManager.Products
{
    public interface IProductAppService :
        ICrudAppService< //Defines CRUD methods
            ProductDto, //Used to show product
            Guid, //Primary key of the product entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            ProductContract> //Used to create/update a product
    {
    }
}

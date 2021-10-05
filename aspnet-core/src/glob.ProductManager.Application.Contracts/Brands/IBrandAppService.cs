using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace glob.ProductManager.Brands
{
    public interface IBrandAppService :
        ICrudAppService< //Defines CRUD methods
            BrandDto, //Used to show Brand
            Guid, //Primary key of the Brand entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            BrandContract> //Used to create/update a Brand
    {

    }
}

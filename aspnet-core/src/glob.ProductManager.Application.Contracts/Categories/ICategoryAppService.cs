using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace glob.ProductManager.Categories
{
    public interface ICategoryAppService :
        ICrudAppService< //Defines CRUD methods
            CategoryDto, //Used to show Category
            Guid, //Primary key of the Category entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CategoryContract> //Used to create/update a Category
    {
    }
}

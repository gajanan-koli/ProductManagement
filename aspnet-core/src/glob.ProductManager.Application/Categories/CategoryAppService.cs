using glob.ProductManager.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace glob.ProductManager.Categories
{
    public class CategoryAppService :
        CrudAppService<
            Category, 
            CategoryDto, 
            Guid, 
            PagedAndSortedResultRequestDto, 
            CategoryContract>, 
        ICategoryAppService 
    {
        public CategoryAppService(IRepository<Category, Guid> repository)
            : base(repository)
        {

        }
    }
}

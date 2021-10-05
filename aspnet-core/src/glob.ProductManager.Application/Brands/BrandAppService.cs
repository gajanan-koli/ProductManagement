using glob.ProductManager.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace glob.ProductManager.Brands
{
    public class BrandAppService :
        CrudAppService<
            Brand,
            BrandDto,
            Guid,
            PagedAndSortedResultRequestDto,
            BrandContract>,
        IBrandAppService
    {
        public BrandAppService(IRepository<Brand, Guid> repository)
            : base(repository)
        {

        }
    }
}

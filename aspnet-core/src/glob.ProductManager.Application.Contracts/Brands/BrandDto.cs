using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace glob.ProductManager.Brands
{
    public class BrandDto : AuditedEntityDto<Guid>
    {
        public string BrandName { get; set; }

    }
}

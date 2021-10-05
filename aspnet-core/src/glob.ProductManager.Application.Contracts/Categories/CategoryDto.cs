using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace glob.ProductManager.Categories
{
    public class CategoryDto : AuditedEntityDto<Guid>
    {
        public string CategoryName { get; set; }

    }
}

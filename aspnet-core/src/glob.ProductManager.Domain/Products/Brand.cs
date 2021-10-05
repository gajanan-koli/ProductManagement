using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace glob.ProductManager.Products
{
    public class Brand : AuditedAggregateRoot<Guid>
    {
        public string BrandName { get; set; }

        public ICollection<Product> Product { get; set; }
    }
}

using glob.ProductManager.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace glob.ProductManager
{
    [DependsOn(
        typeof(ProductManagerEntityFrameworkCoreTestModule)
        )]
    public class ProductManagerDomainTestModule : AbpModule
    {

    }
}
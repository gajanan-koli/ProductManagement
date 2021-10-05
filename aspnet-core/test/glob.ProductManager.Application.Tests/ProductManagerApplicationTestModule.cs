using Volo.Abp.Modularity;

namespace glob.ProductManager
{
    [DependsOn(
        typeof(ProductManagerApplicationModule),
        typeof(ProductManagerDomainTestModule)
        )]
    public class ProductManagerApplicationTestModule : AbpModule
    {

    }
}
using System;
using System.Collections.Generic;
using System.Text;
using glob.ProductManager.Localization;
using Volo.Abp.Application.Services;

namespace glob.ProductManager
{
    /* Inherit your application services from this class.
     */
    public abstract class ProductManagerAppService : ApplicationService
    {
        protected ProductManagerAppService()
        {
            LocalizationResource = typeof(ProductManagerResource);
        }
    }
}

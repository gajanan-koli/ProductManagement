import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'ProductManager',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44375',
    redirectUri: baseUrl,
    clientId: 'ProductManager_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone ProductManager',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44375',
      rootNamespace: 'glob.ProductManager',
    },
  },
} as Environment;

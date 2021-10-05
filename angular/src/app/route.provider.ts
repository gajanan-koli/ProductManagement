import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/product-manage',
        name: 'Product',
        iconClass: 'fas fa-product-hunt',
        order: 2,
        layout: eLayoutType.application,
      },/*
      {
        path: '/create-product',
        name: 'Create',
        parentName: 'Product',
        layout: eLayoutType.application,
      },*/
      {
        path: '/brand-manage/brands',
        name: 'Brand',
        iconClass: 'fas fa-band-aid',
        order: 3,
        layout: eLayoutType.application,
      },/*
      {
        path: '/create-brand',
        name: 'Create',
        parentName: 'Brand',
        layout: eLayoutType.application,
      },*/
      {
        path: '/category-manage/categories',
        name: 'Category',
        iconClass: 'fas fa-betamax',
        order: 4,
        
        layout: eLayoutType.application,
      },/*
      {
        path: '/create-category',
        name: 'Create',
        parentName: 'Category',
        layout: eLayoutType.application,
      }*/
    ]);
  };
}

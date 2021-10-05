import type { AuditedEntityDto } from '@abp/ng.core';

export interface ProductContract {
  productName: string;
  color: string;
  productDescription: string;
  quantityInStock: number;
  price: number;
  categoryId: string;
  brandId: string;
}

export interface ProductDto extends AuditedEntityDto<string> {
  productName?: string;
  color?: string;
  productDescription?: string;
  quantityInStock: number;
  price: number;
  categoryId?: string;
  brandId?: string;
}

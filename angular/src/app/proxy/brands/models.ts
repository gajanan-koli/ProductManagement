import type { AuditedEntityDto } from '@abp/ng.core';

export interface BrandContract {
  brandName: string;
}

export interface BrandDto extends AuditedEntityDto<string> {
  brandName?: string;
}

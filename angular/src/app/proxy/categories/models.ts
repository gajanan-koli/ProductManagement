import type { AuditedEntityDto } from '@abp/ng.core';

export interface CategoryContract {
  categoryName: string;
}

export interface CategoryDto extends AuditedEntityDto<string> {
  categoryName?: string;
}

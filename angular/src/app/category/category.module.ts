import { NgModule } from '@angular/core';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }

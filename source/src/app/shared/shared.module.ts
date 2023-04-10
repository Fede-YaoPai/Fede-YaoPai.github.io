import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const shared: any[] = [

];

@NgModule({
  declarations: shared,
  imports: [
    CommonModule
  ],
  exports: shared
})
export class SharedModule { }

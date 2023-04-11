import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ButtonModule } from 'primeng/button';

const layoutComponents = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...layoutComponents
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ...layoutComponents
  ]
})
export class CoreModule { }

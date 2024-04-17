import { Component } from '@angular/core';
import { Iproducts } from 'src/app/Models/products/iproducts';
import { StaticDataService } from 'src/app/Services/static-data.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  
  newproduct:Iproducts ={} as Iproducts;

  constructor(private staticdata:StaticDataService){

  }

  Add(){
    this.staticdata.AddProduct(this.newproduct);
  }
}

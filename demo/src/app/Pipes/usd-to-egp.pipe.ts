import { Pipe, PipeTransform } from '@angular/core';
import { Iproducts } from '../Models/products/iproducts';

@Pipe({
  name: 'usdToEgp'
})
export class UsdToEgpPipe implements PipeTransform {

  transform(value:number): number {
  
    return value * 50;
  }

}

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproducts } from 'src/app/Models/products/iproducts';
import { StaticDataService } from 'src/app/Services/static-data.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit{
  filteredCatgs: Iproducts[]=[];
  TotalPrice: number = 0;

  @Input() products: Iproducts[] = [];
  @Output() OutTotalPrice: EventEmitter<number>;
  @Input() category: string = '0';



  constructor(private router:Router, private staticdata:StaticDataService) {
    this.OutTotalPrice = new EventEmitter<number>(); 
  }



  ngOnInit(): void {
    this.filteredCatgs = this.staticdata.GetAll();
  }
  

  trackbyID(index: number, products: Iproducts): number {
    return products.id;
  }

  Buy(product: Iproducts, count: any) {
    let itemCount = Number(count);
    if (itemCount > product.stock) {
      alert(`There is only one item left in stock.`);
      return;
    }
    this.TotalPrice += product.price * itemCount;
    product.stock -= itemCount;
    this.OutTotalPrice.emit(this.TotalPrice)
  }

  goToDetails(id:number){
    this.router.navigateByUrl('/order/'+ id)
  }
 
  DeleteById(id:number){
    this.staticdata.Delete(id);
  }
 
}

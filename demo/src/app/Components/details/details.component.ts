import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from 'src/app/Models/products/iproducts';
import { StaticDataService } from 'src/app/Services/static-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  recievedId:number=0;
  product : Iproducts|null = null;
 constructor(private activatedRoute: ActivatedRoute, private staticdata: StaticDataService){

 }
  ngOnInit(): void {
    this.recievedId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.product = this.staticdata.GetById(this.recievedId);
  }
}

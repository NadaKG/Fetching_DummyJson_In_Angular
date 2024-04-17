import { Component, OnInit } from '@angular/core';
import { DynamicDataService } from 'src/app/Services/dynamic-data.service';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.css'],
})
export class CookingComponent implements OnInit {
  data: any[] = [];

  constructor(private dynamicData: DynamicDataService) {}
  ngOnInit(): void {
    this.GetAll();
    console.log(this.data);
  }

  GetAll() {
    this.dynamicData.getAllRecipes().subscribe((rcp) => (this.data = rcp));
  }

  Delete(id:number){
    this.dynamicData.DeleteRecipe(id).subscribe(()=>this.dynamicData.getAllRecipes().subscribe(rcp => (this.data = rcp)));
  }
  trackbyid(index:number, rcp:any){
    return rcp.id;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicDataService } from 'src/app/Services/dynamic-data.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
rcpId:number=0;
recipe:any;
constructor(private activatedroute: ActivatedRoute, private dynamicdata:DynamicDataService){

}
  ngOnInit(): void {
this.rcpId = Number(this.activatedroute.snapshot.paramMap.get("id"));
  this.dynamicdata.getRecipeByID(this.rcpId).subscribe((rec)=>{
    console.log(rec)
    this.recipe = rec;
  })
}

}

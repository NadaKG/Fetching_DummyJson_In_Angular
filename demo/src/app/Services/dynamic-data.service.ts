import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {

  constructor(private httpclien: HttpClient) { }

  getAllRecipes():Observable<any>{
   return this.httpclien.get("http://localhost:3000/recipes");
  }

  getRecipeByID(id:number):Observable<any>{
    return this.httpclien.get(`http://localhost:3000/recipes/${id}`)
  }

  DeleteRecipe(id:number):Observable<void>{
   return this.httpclien.delete<void>(`http://localhost:3000/recipes/${id}`)
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { ParentComponent } from './Components/parent/parent.component';
import { OrderComponent } from './Components/order/order.component';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';
import { CookingComponent } from './Components/cooking/cooking.component';
import { RecipeDetailsComponent } from './Components/recipe-details/recipe-details.component';
import { TemplateDrivenFormComponent } from './Components/Forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './Components/Forms/reactive-form/reactive-form.component';

const routes: Routes = [
  {path:"order", component:ParentComponent},
  {path:"order/:id", component:DetailsComponent},
  {path:'', redirectTo:"home" , pathMatch:"full"},
  {path: "home", component:HomeComponent},
  {path: "recipes" , component:CookingComponent},
  {path: "recipes/:id", component:RecipeDetailsComponent},
  {path:"add",component:TemplateDrivenFormComponent},
  {path:"register", component:ReactiveFormComponent},
  {path: "**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

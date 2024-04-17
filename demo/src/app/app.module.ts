import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './Components/slideshow/slideshow.component';
import { OrderComponent } from './Components/order/order.component';
import { UsdToEgpPipe } from './Pipes/usd-to-egp.pipe';
import { ShadowOnHoverDirective } from './Directives/shadow-on-hover.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './Components/parent/parent.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';
import { CookingComponent } from './Components/cooking/cooking.component';
import { RecipeDetailsComponent } from './Components/recipe-details/recipe-details.component';
import { TemplateDrivenFormComponent } from './Components/Forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './Components/Forms/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    OrderComponent,
    UsdToEgpPipe,
    ShadowOnHoverDirective,
    ParentComponent,
    ErrorPageComponent,
    HomeComponent,
    DetailsComponent,
    CookingComponent,
    RecipeDetailsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component" ;
import {ReadMoreComponent} from "./read-more/read-more.component"


const routes: Routes = [{
  path:"" , component:HomeComponent
} ,
{path:"readmore" , component:ReadMoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { BookDescriptionComponent } from './Components/book-description/book-description.component';
import { DisplaybooksComponent } from './Components/displaybooks/displaybooks.component';

const routes: Routes = [
  { path: 'login', component: RegisterComponent },
  {path : 'forgot',component:ForgotpasswordComponent},
  {path : 'home',component: HomeComponent,
children:[
{path :'displaybooks',component : DisplaybooksComponent},
{path : 'description',component: BookDescriptionComponent},

]
},
  

  {path : 'orderplaced',component: OrderPlacedComponent},
  // {path : 'description',component: BookDescriptionComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

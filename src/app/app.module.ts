import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';



import { MatFormFieldModule } from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatRadioModule} from '@angular/material/radio';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { HomeComponent } from './Components/home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { BookDescriptionComponent } from './Components/book-description/book-description.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    HomeComponent,
    OrderPlacedComponent,
    BookDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatRadioModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatMenuModule,
    MatDividerModule,
    MatSelectModule,
    MatTooltipModule,
    FlexLayoutModule                

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

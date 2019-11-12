import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderItemComponent,
    HeaderComponent,
    AddCustomerComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
 
@NgModule({
    imports: [
        BrowserModule, 
        HttpModule,
    RouterModule ],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
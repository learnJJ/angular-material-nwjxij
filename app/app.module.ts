import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";

import "hammerjs";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  declarations: [AppComponent, MenuComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

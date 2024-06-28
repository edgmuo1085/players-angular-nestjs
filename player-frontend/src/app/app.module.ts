import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { PlayersComponent } from './components/players/players.component';

@NgModule({
  declarations: [AppComponent, PlayersComponent],
  imports: [BrowserModule, AppRoutingModule, PlayersModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

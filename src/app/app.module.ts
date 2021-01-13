import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire'
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import {MatModule} from './mat/mat.module'
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    JwPaginationModule,
    HttpClientModule,
    NgbModule,
    MatModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

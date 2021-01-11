import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import {MatModule} from '../mat/mat.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { JwPaginationModule } from 'jw-angular-pagination';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [LandingComponent, PopUpComponent, FooterComponent],
  entryComponents: [PopUpComponent],
  imports: [
    CommonModule,
    NgbModule,
    LandingRoutingModule,
    FlexLayoutModule,
    MatModule,
    FontAwesomeModule,
    JwPaginationModule,
    CarouselModule.forRoot()
    

  ]
})
export class LandingModule { }

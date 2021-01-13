import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  show = true;
  constructor( private route: Router) { }
  facebook = faFacebook;
  google = faGoogle;
  backArrow = faArrowAltCircleLeft;
  ngOnInit(): void {
  }
  textChanger(tab){
   if (tab.index === 0){
    this.show = true;
   } else {
    this.show = false;
   }
  }
  nav() {
    this.route.navigate(['../'])
  }

}

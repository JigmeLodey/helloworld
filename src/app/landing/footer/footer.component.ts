import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mail= faEnvelope;
  ig = faInstagram;
  subscribe: FormGroup;
  facebook = faFacebook;
  constructor(private formbuild: FormBuilder, private service: LandingService, private router: Router) { }

  ngOnInit(): void {
    this.formBuild();
  }
  formBuild(){
    this.subscribe = this.formbuild.group({
      email: [undefined,[Validators.required,  Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    });
  }
  onSubscribe() {
    if (this.subscribe.valid) {
      this.service.postSubscribe(this.subscribe.value);
      this.subscribe.reset();
    }
  }
  createAcc() {
    this.router.navigate(['../../auth']);
  }

}

import { style } from '@angular/animations';
import { Component, OnInit,  HostListener, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faFacebook, faInstagram, faLinkedin, faLinkedinIn, faMailchimp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBriefcase, faEnvelope, faHandshake, faLink, faPhone, faSearch, faThumbtack, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { PopUpComponent } from './pop-up/pop-up.component';
import { LandingService} from './landing.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  checker = false;
  mail = faEnvelope;
  phone = faPhone;
  ig = faInstagram;
  facebook = faFacebook;
  twitter = faTwitter;
  in = faLinkedinIn;
  menu = faBars;
  cross = faTimes;
  searchIcon = faSearch;
  jobs = faBriefcase;
  user = faUser;
  services = faHandshake;
  sidebarStatus = false;
  items = [];
  links = faLink;
  location = faThumbtack;
  colorChecker:undefined;
  value = 80;
  max = 100;
  min = 0;
  contactUs: FormGroup;
  disable = "true";
  pageOfItems: Array<any>;
  
  constructor( public readonly dialog: MatDialog, public router: Router, private formbuild: FormBuilder, private service: LandingService) { }

  ngOnInit(): void {
    this.paginator();
    this.formBuilds();
  }
  @HostListener('window:scroll', ['$event']) scrollHandler(event) {
    this.checker =  window.scrollY > 100;
  }
  paginator() {
    this.service.getValue().subscribe(res => {
      this.items = res;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  toggle() {
    if (this.sidebarStatus === false) {
      this.sidebarStatus = true;
    } else {
      this.sidebarStatus = false;
    }
  }

  Popup(job, qualify, experince, cat, details, location, company, contact, email ){
    this.dialog.open(PopUpComponent, {
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { 
        jobtitle: job,
        qualify: qualify,
        name: company,
        exp: experince,
        cat: cat,
        detail: details,
        locations: location,
        contact: contact,
        email: email
      }
    });
  }
  nav() {
    this.router.navigate(['../auth']);
  }
  formBuilds(){
    this.contactUs = this.formbuild.group({
      name: [undefined, [Validators.required]],
      phone: [undefined, [Validators.required,  Validators.pattern(/^[0-9]{8,12}$/)]],
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      message: [undefined, [Validators.required]]
    });
  }
  sendMessage() {
    if(this.contactUs.valid){
      this.service.postMessage(this.contactUs.value);
      this.contactUs.reset();
      this.contactUs.controls['name'].setErrors(null);
      this.contactUs.controls['phone'].setErrors(null);
      this.contactUs.controls['email'].setErrors(null);
      this.contactUs.controls['message'].setErrors(null);
    }
  }

}

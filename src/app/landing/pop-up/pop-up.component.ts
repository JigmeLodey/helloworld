import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faBriefcase, faCertificate, faEnvelope, faGraduationCap, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  qualification = faGraduationCap;
  badge = faCertificate;
  category = faBriefcase;
  id:undefined;
  items = [];
  val:undefined;
  job:undefined;
  Cname: undefined;
  qualify: undefined;
  exp: undefined;
  cat: undefined;
  detail: undefined;
  skills: undefined;
  location: undefined;
  contact: undefined;
  email: undefined;
  iconPhone = faPhone;
  iconLocation = faLocationArrow;
  iconMail = faEnvelope;
  iconExp = faCertificate;
  iconQualify = faGraduationCap;
  iconCat = faBriefcase;

  constructor(private route: Router, private dialogRef: MatDialogRef<PopUpComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.job = data.jobtitle;
    this.qualify = data.qualify;
    this.Cname = data.name;
    this.cat = data.cat;
    this.exp = data.exp;
    this.detail = data.detail;
    this.location = data.locations;
    this.email = data.email;
    this.contact = data.contact;
  }

  ngOnInit(): void {
  }
  nav() {
    this.dialogRef.close();
    this.route.navigate(['./auth']);
  }

}

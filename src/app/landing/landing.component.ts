import { style } from '@angular/animations';
import { Component, OnInit,  HostListener, ViewEncapsulation} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faFacebook, faInstagram, faLinkedin, faLinkedinIn, faMailchimp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBriefcase, faEnvelope, faHandshake, faLink, faPhone, faSearch, faThumbtack, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { PopUpComponent } from './pop-up/pop-up.component';

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
  disable = "true";
  pageOfItems: Array<any>;
  
  constructor( public readonly dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    this.paginator();
  }
  @HostListener('window:scroll', ['$event']) scrollHandler(event) {
    this.checker =  window.scrollY > 100;
  }
  paginator() {
    this.items = [
      {
      id: 1,
      Cname: 'Drukbit', 
      job: 'Frontend Developer',
      link: 'Facebook',
      type: 'full-time',
      color: 'pink',
      location: 'Paro',
      qulification: 'Degree',
      experince: '2 years',
      email: 'drukbit@gmail.com',
      contact: '+975-77885577',
      describtion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
    },{
      id: 2,
      Cname: 'DCPL', 
      job: 'Full Stack Developer',
      link: 'Kuensel',
      type: 'partime',
      color: 'red',
      location: 'Bumtang',
      qulification: 'Degree',
      experince: '0 year',
      email: 'dcpl@gmail.com',
      contact: '+975-77885577',
      describtion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
    },
    {
      id: 3,
      Cname: 'Drukbit', 
      job: 'Open Source Interactive Developer',
      link: 'Facebook',
      type: 'partime',
      color: 'blue',
      location: 'Trongsa',
      qulification: 'none',
      experince: '0 years',
      email: 'drukbit@gmail.com',
      contact: '+975-77885577',
      describtion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

    },
    {
      id: 4,
      Cname: 'DCPL', 
      job: 'Backend Developer',
      link: 'Instragram',
      type: 'freelance',
      color: 'yellow',
      location: 'Thimpu',
      qulification: 'none',
      experince: '0 year',
      email: 'dcpl@gmail.com',
      contact: '+975-77885577',
      describtion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'

    },{
      id: 5,
      Cname: 'Drukbit', 
      job: 'Accountant',
      link: 'Facebook',
      type: 'full-time',
      color: 'green',
      location: 'Mongar',
      qulification: 'Master',
      experince: '2 years',
      email: 'drukbit@gmail.com',
      contact: '+975-77885577',
      describtion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

    },
    {
      id: 6,
      Cname: 'DCPL', 
      job: 'Marking & Sale',
      link: 'Instragram',
      type: 'freelance',
      color: 'none',
      location: 'Thimpu',
      qulification: 'Master',
      experince: '0 year',
      email: 'dcpl@gmail.com',
      contact: '+975-77885577',
      describtion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
      id: 7,
      Cname: 'Health', 
      job: 'Driver',
      link: 'Kuensel',
      type: 'full-time',
      color: 'orange',
      location: 'Punakha',
      qulification: 'Lower School',
      experince: '3 years',
      email: 'MoH@gmail.com',
      contact: '+975-77885577',
      describtion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

    },{
      id: 8,
      Cname: 'Shopping', 
      job: 'Sales Person',
      link: 'Facebook',
      type: 'temporary',
      color: 'yellow',
      location: 'Paro',
      qulification: 'Lower School',
      experince: '0 years',
      email: 'shopping@gmail.com',
      contact: '+975-77885577',
      describtion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
      id: 9,
      Cname: 'Noryang', 
      job: 'Construction Helper',
      link: 'Facebook',
      type: 'full-time',
      color: 'pink',
      location: 'Thimpu',
      qulification: 'none',
      experince: '1 years',
      email: 'noryang@gmail.com',
      contact: '+975-77885577',
      describtion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

    },
    {
      id: 10,
      Cname: 'RICBL', 
      job: 'Technicain',
      link: 'Facebook',
      type: 'full-time',
      color: 'green',
      location: 'Trashigang',
      qulification: 'Degree',
      experince: '0 years',
      email: 'ricbl@gmail.com',
      contact: '+975-77885577',
      describtion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },{
      id: 11,
      Cname: 'aBit', 
      job: 'Data Warehousing Specialists',
      link: 'Facebook',
      type: 'full-time',
      color: 'blue',
      location: 'Thimpu',
      qulification: 'Phd',
      experince: '2 years',
      email: 'abit@gmail.com',
      contact: '+975-17888888',
      describtion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

    },
    {
      id: 12,
      Cname: 'FabLab', 
      job: 'Video Game Designers',
      link: 'Facebook',
      type: 'full-time',
      color: 'red',
      location: 'Thimpu',
      qulification: 'Degree',
      experince: '2 years',
      email: 'fablab@gmail.com',
      contact: '+975-1766778899',
      describtion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
      id: 13,
      Cname: 'None', 
      job: 'Housekeeper',
      link: 'Facebook',
      type: 'full-time',
      color: 'red',
      location: 'Thimpu',
      qulification: 'none',
      experince: '0 years',
      email: 'nocompany@gmail.com',
      contact: '+975-77999999',
      describtion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

    },
    {
      id: 14,
      Cname: 'Selise', 
      job: 'Web Designers',
      link: 'Facebook',
      type: 'full-time',
      color: 'blue',
      location: 'Chukkha',
      qulification: 'none',
      experince: '0 years',
      email: 'selise@gmail.com',
      contact: '+975-77777777',
      describtion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
      id: 15,
      Cname: 'Selise', 
      job: 'Graphic Designers',
      link: 'Facebook',
      type: 'full-time',
      color: 'yellow',
      location: 'Thimpu',
      qulification: 'none',
      experince: '1 years',
      email: 'selise@gmail.com',
      contact: '+975-77666666',
      describtion: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

    },
    {
      id: 16,
      Cname: 'Hotel Name', 
      job: 'Cook',
      link: 'Facebook',
      type: 'half-time',
      color: 'red',
      location: 'Thimpu',
      qulification: 'none',
      experince: '2 years',
      email: 'hotelname@gmail.com',
      contact: '+975-77777777',
      describtion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
      id: 17,
      Cname: 'None', 
      job: 'Babysitting',
      link: 'Facebook',
      type: 'half-time',
      color: 'red',
      location: 'Thimpu',
      qulification: 'none',
      experince: '0 years',
      email: 'nocompany@gmail.com',
      contact: '+975-17171717',
      describtion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    }
  ]
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  toggle() {
    if (this.sidebarStatus === false) {
      this.sidebarStatus = true;
      console.log("true")
    } else {
      this.sidebarStatus = false;
      console.log("false")
    }
  }

  Popup(job, qualify, experience, cat, details, location, companyName, contact, email ){
    this.dialog.open(PopUpComponent, {
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { 
        jobtitle: job,
        qualify: qualify,
        name: companyName,
        exp: experience,
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

}

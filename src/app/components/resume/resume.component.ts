import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  show_resume: boolean = false;
  firstname: string = '';
  lastname: string = '';
  address: string = '';
  cp: string = '';
  city: string = '';
  country: string = '';
  phone: string = '';
  email: string = '';
  civ: string = '';
  login: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  @Input()
  set data(data: any) {
    if (data) {
      this.lastname = data['lastname'];
      this.firstname = data['firstname'];
      this.address = data['address'];
      this.city = data['city'];
      this.cp = data['cp'];
      this.civ = data['civ'];
      this.phone = data['phone'];
      this.country = data['country'];
      this.email = data['email'];
      this.login = data['login'];
      this.password = data['password'];
      this.show_resume = data['show_resume'];
    }
  }
}

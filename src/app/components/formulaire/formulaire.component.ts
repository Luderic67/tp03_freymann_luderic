import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  validatorEmail: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  validatorPhone: RegExp = /^((\+)33|0)[1-9](\d{2}){4}$/;

  @Output() redirect: EventEmitter<Event> = new EventEmitter();
  user: any = {};

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
  confirm_password: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      this.firstname !== '' &&
      this.lastname !== '' &&
      this.address !== '' &&
      this.cp !== '' &&
      this.city !== '' &&
      this.country !== '' &&
      this.phone !== '' &&
      this.validatorPhone.test(this.phone) &&
      this.email !== '' &&
      this.validatorEmail.test(this.email) &&
      this.civ !== '' &&
      this.login !== '' &&
      this.password !== '' &&
      this.password.length >= 8 &&
      this.confirm_password !== '' &&
      this.confirm_password === this.password
    ) {
      this.show_resume = true;
      this.user = {
        lastname: this.lastname,
        firstname: this.firstname,
        address: this.address,
        city: this.city,
        cp: this.cp,
        phone: this.phone,
        civ: this.civ,
        country: this.country,
        email: this.email,
        login: this.login,
        password: this.password,
        show_resume: this.show_resume,
      };
      this.redirect.emit(this.user);
    } else {
      alert('Il y a encore des erreurs !');
    }
  }
}

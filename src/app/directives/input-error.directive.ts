import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputError]',
})
export class InputErrorDirective {
  validatorEmail: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private el: ElementRef) {}

  @HostListener('change')
  onChange() {
    this.checkIfValid();
  }

  private checkIfValid() {
    // Check not empty
    if (this.el.nativeElement.value.trim() === '') {
      this.el.nativeElement.style.borderColor = 'red';
    } else {
      this.el.nativeElement.style.borderColor = 'lightgray';
    }

    // Check email is good
    if (this.el.nativeElement.id === 'email') {
      this.validateEmail(this.el.nativeElement.value);
    }

    // Check password
    if (this.el.nativeElement.id === 'password') {
      if (this.el.nativeElement.value.length < 8) {
        this.el.nativeElement.style.borderColor = 'red';
      } else {
        this.el.nativeElement.style.borderColor = 'lightgray';
      }
    }
  }

  private validateEmail(email: string) {
    if (this.validatorEmail.test(email)) {
      this.el.nativeElement.style.borderColor = 'lightgray';
    } else {
      this.el.nativeElement.style.borderColor = 'red';
    }
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name1: string = '';
  email1: string = '';
  message1: string = '';

  sendEmail()
  {
    console.log(this.name1);
    console.log(this.email1);
    console.log(this.message1);
  }
}

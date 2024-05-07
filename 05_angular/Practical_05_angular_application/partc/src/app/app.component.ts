import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration From';
  displayname='';
  displaycontact='';
  displayaddress='';
  displayemail='';

getValue(name:string, contact:string, address:string, email:string)
{
  this.displayname=name;
  this.displaycontact=contact;
  this.displayaddress=address;
  this.displayemail=email;
}
}

import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RecoveryComponent } from '../recovery/recovery.component';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  standalone: true,
  imports: [LoginComponent, RegistrationComponent, RecoveryComponent],
  selector: 'app-sharedform',
  templateUrl: './sharedform.component.html',
  styleUrls: ['./sharedform.component.scss'],
})
export class SharedformComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

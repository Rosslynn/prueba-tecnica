import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  formProfile: FormGroup = this.fb.group({
    name: [, [Validators.required]],
    email: [, [Validators.required, Validators.pattern(this.emailPattern)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}

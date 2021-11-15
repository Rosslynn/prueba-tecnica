import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  formProfile: FormGroup = this.fb.group({
    username: [, [Validators.required]],
    email: [, [Validators.required, Validators.pattern(this.emailPattern)]],
    genre: ['M'],
    biography: []
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  requiredError(name: string) {
    return this.formProfile.get(name)?.hasError('required') && this.formProfile.get(name)?.touched;
  }

  requiredPattern(name: string) {
    return this.formProfile.get(name)?.hasError('pattern') && this.formProfile.get(name)?.touched;
  }

  saveForm() {
    if (this.formProfile.invalid) {
      this.formProfile.markAllAsTouched();
      return;
    }
    Swal.fire('Todo correcto', 'El formulario es válido', 'success');
  }

}

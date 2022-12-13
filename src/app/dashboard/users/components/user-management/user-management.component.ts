import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { UsersService } from "src/app/shared/services/users.service";

import { User } from "../../../../shared/models/user";

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"],
})
export class UserManagementComponent implements OnInit {
  @Input() title: string;
  @Input() userName: string | null = null;
  user: User;
  registerForm: FormGroup;
  submitted: boolean = false;
  roles: string[] = ['Admin', 'Developer', 'Manager', 'Tester'];
  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      userName: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      role: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.user = {
      id:'',
      firstname: this.registerForm.value.firstName,
      lastname: this.registerForm.value.lastName,
      birthday: this.registerForm.value.birthday,
      username: this.registerForm.value.userName,
      email: this.registerForm.value.email,
      role: this.registerForm.value.role,
      password: this.registerForm.value.password,
      skills: []
    }

    this.usersService.create(this.user);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  get form() {
    return this.registerForm.controls;
  }
}

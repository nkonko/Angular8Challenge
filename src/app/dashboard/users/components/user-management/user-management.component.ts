import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { UsersService } from "src/app/shared/services/users.service";

import { User } from "../../../../shared/models/user";
import { minimumAge, mustMatch } from "../../../../shared/helpers/CustomValidators"

@Component({
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrls: ["./user-management.component.scss"],
})
export class UserManagementComponent implements OnInit, OnDestroy {
  title: string = "Create";
  isUpdate: boolean = false;
  userName: string | null = null;
  user: User;
  registerForm: FormGroup;
  submitted: boolean = false;
  roles: string[] = ['Admin', 'Developer', 'Manager', 'Tester'];
  selectedRole: string;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
  }
  ngOnDestroy(): void {
    this.isUpdate = false;
    this.title = "";
  }

  ngOnInit(): void {
    if(history.state.data) {
      this.title = history.state.data.title;
      this.isUpdate = true;
    }

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      userName: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      role: ['', Validators.required],
      password: ['', [Validators.minLength(8), Validators.required]],
      repeatPassword: ['', Validators.required]
    },{validators: mustMatch, minimumAge });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.user = {
      id: '',
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

  changeFn(selection) {
    this.selectedRole = selection;
  }
}

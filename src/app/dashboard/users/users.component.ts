import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/models/user';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public usersLoaded: boolean = false;
  searchSubject: Subject<void> = new Subject<void>();

  constructor(
    private userService: UsersService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => {
        if (res) {
        this.usersLoaded = true;
        this.toastr.success("Users loaded successfully");
        this.users = res;
        }
      });
  }

  emitSearch(event) {
    this.searchSubject.next(event);
  }

  deleteUser(user) {
    this.userService.delete(user);
  }

}

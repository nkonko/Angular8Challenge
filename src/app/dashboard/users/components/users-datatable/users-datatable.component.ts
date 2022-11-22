import { Component, Input, OnInit, ViewChild  } from "@angular/core";
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Observable, Subscription } from "rxjs";
import { User } from "src/app/shared/models/user";

@Component({
  selector: "app-users-datatable",
  templateUrl: "./users-datatable.component.html",
  styleUrls: ["./users-datatable.component.scss"],
})
export class UsersDatatableComponent implements OnInit {
  @ViewChild(DatatableComponent, {static: false}) userTable: DatatableComponent;
  @Input() userList: User[]
  @Input() searchValue: Observable<void>;
  private searchValueSubs: Subscription;

  rows = [];
  temp = [];
  constructor() {}

  ngOnInit() {
    this.rows = this.userList;
    this.temp = [...this.userList];

    this.searchValueSubs = this.searchValue.subscribe((res: any) =>  {
      this.updateFilter(res.target.value.toLowerCase());
    });
  }

  updateFilter(val: string) {
    // filter our data

    const temp = this.temp.filter((d) => {
      return d.firstname.toLowerCase().indexOf(val) !== -1 ||
                 d.lastname.toLowerCase().indexOf(val) !== -1 ||
                 d.username.toLowerCase().indexOf(val) !== -1 ||
                 d.email.toLowerCase().indexOf(val) !== -1 ||
                 new Date(d.birthday).toLocaleDateString().toLowerCase().indexOf(val) !== -1 ||
                 d.role.toLowerCase().indexOf(val) !== -1 ||
                !val  ;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.userTable.offset = 0;
  }


}


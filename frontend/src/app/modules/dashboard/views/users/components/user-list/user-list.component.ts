import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserInterface} from "../../../../../../shared/types/user.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public users$: Observable<UserInterface[]> = this.usersService.getUsers();

  constructor(private usersService: UsersService) {
  }

}

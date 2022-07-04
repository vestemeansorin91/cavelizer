import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {UsersService} from "../../../../../../shared/services/users.service";
import {UserInterface} from "../../../../../../shared/types/user.interface";

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

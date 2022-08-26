import { Component } from '@angular/core';
import { UserInterface, UsersService } from '@cavelizer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public users$: Observable<UserInterface[]> = this.usersService.getUsers();

  constructor(private usersService: UsersService) {}
}

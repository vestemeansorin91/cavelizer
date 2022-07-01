import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {JwtPayloadInterface} from "../../shared/types/jwt-payload.interface";
import {StoreStateInterface} from "../../store";
import {getUserSelector} from "../auth/store/auth.selectors";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser$: Observable<JwtPayloadInterface> = this.store.select(getUserSelector);

  constructor(private store: Store<StoreStateInterface>) { }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {JwtPayloadInterface} from "../../shared/types/jwt-payload.interface";
import {StoreStateInterface} from "../../store";
import {JWTTokenService} from "../auth/services/jwt-token.service";
import {getUserSelector} from "../auth/store/auth.selectors";
import {ProfileService} from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser$: Observable<JwtPayloadInterface> = this.store.select(getUserSelector);
  private userId: string = '';

  constructor(
    private store: Store<StoreStateInterface>,
    private jwtTokenService: JWTTokenService,
    public profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  private getUserProfile() {
    this.userId = this.jwtTokenService.getUser()._id;
    this.profileService.getUserByIdWithProfile(this.userId).subscribe(response => this.profileService.profile = response);
  }
}

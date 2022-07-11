import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {JwtPayloadInterface} from "../../../../shared/types/jwt-payload.interface";
import {StoreStateInterface} from "../../../../store";
import {JWTTokenService} from "../../../auth/services/jwt-token.service";
import {authActions} from "../../../auth/store";
import {getUserSelector} from "../../../auth/store/auth.selectors";

import {ProfileService} from "./profile.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('uploadInputRef') public uploadInputRef: ElementRef;
  public currentUser$: Observable<JwtPayloadInterface> = this.store.select(getUserSelector);
  public fileToUpload: File | null = null;
  private userId: string = '';

  constructor(
    private store: Store<StoreStateInterface>,
    private jwtTokenService: JWTTokenService,
    public profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  public handleFileInput(event: any) {
    const file: File = event.files.item(0);
    this.uploadFileToActivity(file);
    event.value = null;
  }

  public uploadFileToActivity(file: File) {
    this.store.dispatch(authActions.avatarUpdate({file}));
  }
  private getUserProfile() {
    this.userId = this.jwtTokenService.getUser()._id;
    this.profileService.getUserByIdWithProfile(this.userId).subscribe(response => this.profileService.profile = response);
  }
}

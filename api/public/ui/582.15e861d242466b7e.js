"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[582],{4582:(R,p,a)=>{a.r(p),a.d(p,{UserProfileModule:()=>Y});var c=a(9808),e=a(5e3);let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-bank-details"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"user-bank-details works!"),e.qZA())},styles:[""]}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-clothes-sizes"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"user-clothes-sizes works!"),e.qZA())},styles:[""]}),t})(),m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-emergency-contact"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"user-emergency-contact works!"),e.qZA())},styles:[""]}),t})(),d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-hr-information"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"user-hr-information works!"),e.qZA())},styles:[""]}),t})(),h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-payroll-information"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"user-payroll-information works!"),e.qZA())},styles:[""]}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-personal-data"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"user-personal-data works!"),e.qZA())},styles:[""]}),t})();var s=a(2382),v=a(4254),T=a(2496),b=a(217),A=a(4015),U=a(7322),_=a(4107),M=a(508),x=a(42);let C=(()=>{class t{constructor(n,r,i){this.fb=n,this.profileService=r,this.notificationsService=i,this.buildFormGroup(),this.patchFormGroup()}onSavePublicProfile(){this.profileService.saveUserPublicProfile(this.userPublicProfileFormGroup.value).subscribe(()=>{this.notificationsService.success("Success","User profile saved!")})}buildFormGroup(){this.userPublicProfileFormGroup=this.fb.group({office:this.fb.control(""),department:this.fb.control(""),position:this.fb.control(""),team:this.fb.control(""),phone:this.fb.control("")})}patchFormGroup(){const{publicProfile:n}=this.profileService.profile;!n||this.userPublicProfileFormGroup.patchValue({office:n.office,department:n.department,position:n.position,team:n.team,phone:n.phone})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.qu),e.Y36(v.H),e.Y36(T.TF))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-profile"]],decls:46,vars:2,consts:[[1,"flex","justify--center"],[1,"flex--column","gap--8","mt--32","width--300",3,"formGroup"],[1,"flex--column","align--start"],["for","office",1,"mr--16","text--bold"],[1,"width--full"],["id","office","type","text","formControlName","office",1,"width--full"],["appearance","fill",1,"mt--16"],["formControlName","department"],["value","development"],["value","qa"],["appearance","fill"],["formControlName","position"],["value","junior"],["value","medior"],["value","senior"],["formControlName","team"],["value","frontend"],["value","backend"],["value","tester"],["value","project manager"],["for","phone",1,"mr--16","text--bold"],["id","phone","type","text","formControlName","phone"],[1,"width--full","mt--32",3,"click"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"label",3),e._uU(4,"Office"),e.qZA(),e.TgZ(5,"cavelizer-input-group",4),e._UZ(6,"cavelizer-text-input",5),e.qZA()(),e.TgZ(7,"mat-form-field",6)(8,"mat-label"),e._uU(9,"Department"),e.qZA(),e.TgZ(10,"mat-select",7)(11,"mat-option",8),e._uU(12,"Development"),e.qZA(),e.TgZ(13,"mat-option",9),e._uU(14,"QA"),e.qZA()()(),e.TgZ(15,"mat-form-field",10)(16,"mat-label"),e._uU(17,"Position"),e.qZA(),e.TgZ(18,"mat-select",11)(19,"mat-option",12),e._uU(20,"Junior"),e.qZA(),e.TgZ(21,"mat-option",13),e._uU(22,"Medior"),e.qZA(),e.TgZ(23,"mat-option",14),e._uU(24,"Senior"),e.qZA()()(),e.TgZ(25,"mat-form-field",10)(26,"mat-label"),e._uU(27,"Team"),e.qZA(),e.TgZ(28,"mat-select",15)(29,"mat-option",16),e._uU(30,"Frontend"),e.qZA(),e.TgZ(31,"mat-option",17),e._uU(32,"Backend"),e.qZA(),e.TgZ(33,"mat-option",18),e._uU(34,"Tester"),e.qZA(),e.TgZ(35,"mat-option",9),e._uU(36,"QA"),e.qZA(),e.TgZ(37,"mat-option",19),e._uU(38,"Project manager"),e.qZA()()(),e.TgZ(39,"div",2)(40,"label",20),e._uU(41,"Phone"),e.qZA(),e.TgZ(42,"cavelizer-input-group",4),e._UZ(43,"cavelizer-text-input",21),e.qZA()(),e.TgZ(44,"cavelizer-button",22),e.NdJ("click",function(){return r.onSavePublicProfile()}),e._uU(45,"Save "),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("formGroup",r.userPublicProfileFormGroup),e.xp6(43),e.uIk("disabled",!r.userPublicProfileFormGroup.dirty))},directives:[s._Y,s.JL,s.sg,b.g,A.t,s.JJ,s.u,U.KE,U.hX,_.gD,M.ey,x.r],encapsulation:2}),t})(),P=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-start-end-dates"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"user-start-end-dates works!"),e.qZA())},styles:[""]}),t})();var l=a(4997),O=a(698),I=a(665),S=a(5620),F=a(7902),Z=a(3251),k=a(5728);const D=["uploadInputRef"];function J(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e.NdJ("click",function(){return e.CHM(n),e.MAs(7).click()}),e._UZ(3,"img",5),e.ALo(4,"defaultImage"),e._UZ(5,"i",6),e.TgZ(6,"input",7,8),e.NdJ("change",function(i){return e.CHM(n),e.oxw().handleFileInput(i.target)}),e.qZA()(),e.TgZ(8,"h1",9),e._uU(9),e.qZA(),e.TgZ(10,"h2"),e._uU(11),e.qZA()()()}if(2&t){const n=o.ngIf;e.xp6(3),e.Q6J("src",e.lcZ(4,3,n.avatarBlobUrl),e.LSH),e.xp6(6),e.Oqu(null==n?null:n.fullName),e.xp6(2),e.Oqu(null==n?null:n.username)}}const q=function(){return["/dashboard","user","profile"]},z=function(){return["/dashboard","user","personal-data"]},w=function(){return["/dashboard","user","hr-information"]},Q=function(){return["/dashboard","user","payroll-information"]},B=function(){return["/dashboard","user","start-end-dates"]},L=function(){return["/dashboard","user","clothes-sizes"]},N=function(){return["/dashboard","user","bank-details"]},j=function(){return["/dashboard","user","emergency-contact"]};function E(t,o){1&t&&(e.ynx(0),e.TgZ(1,"nav",10)(2,"span",11),e._uU(3,"Profile"),e.qZA(),e.TgZ(4,"span",11),e._uU(5,"Personal Data"),e.qZA(),e.TgZ(6,"span",11),e._uU(7,"HR Information"),e.qZA(),e.TgZ(8,"span",11),e._uU(9,"Payroll Information"),e.qZA(),e.TgZ(10,"span",11),e._uU(11,"Start End Dates"),e.qZA(),e.TgZ(12,"span",11),e._uU(13,"Clothes sizes"),e.qZA(),e.TgZ(14,"span",11),e._uU(15,"Bank details"),e.qZA(),e.TgZ(16,"span",11),e._uU(17,"Emergency contact"),e.qZA()(),e._UZ(18,"router-outlet"),e.BQk()),2&t&&(e.xp6(2),e.Q6J("routerLink",e.DdM(8,q)),e.xp6(2),e.Q6J("routerLink",e.DdM(9,z)),e.xp6(2),e.Q6J("routerLink",e.DdM(10,w)),e.xp6(2),e.Q6J("routerLink",e.DdM(11,Q)),e.xp6(2),e.Q6J("routerLink",e.DdM(12,B)),e.xp6(2),e.Q6J("routerLink",e.DdM(13,L)),e.xp6(2),e.Q6J("routerLink",e.DdM(14,N)),e.xp6(2),e.Q6J("routerLink",e.DdM(15,j)))}const G=[{path:"",component:(()=>{class t{constructor(n,r,i){this.store=n,this.jwtTokenService=r,this.profileService=i,this.currentUser$=this.store.select(I.UH),this.fileToUpload=null,this.userId=""}ngOnInit(){this.getUserProfile()}handleFileInput(n){const r=n.files.item(0);this.uploadFileToActivity(r),n.value=null}uploadFileToActivity(n){this.store.dispatch(O.Y.avatarUpdate({file:n}))}getUserProfile(){this.userId=this.jwtTokenService.getUser()._id,this.profileService.getUserByIdWithProfile(this.userId).subscribe(n=>this.profileService.profile=n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(S.yh),e.Y36(F.C),e.Y36(v.H))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile"]],viewQuery:function(n,r){if(1&n&&e.Gf(D,5),2&n){let i;e.iGM(i=e.CRH())&&(r.uploadInputRef=i.first)}},decls:3,vars:4,consts:[["class","profile",4,"ngIf"],[4,"ngIf"],[1,"profile"],[1,"profile-header"],[1,"avatar-wrapper",3,"click"],["alt","",1,"avatar",3,"src"],[1,"las","la-pen"],["type","file","id","file","accept","image/jpeg",3,"change"],["uploadInputRef",""],[1,"mb--0"],["mat-tab-nav-bar",""],["mat-tab-link","","routerLinkActive","active",3,"routerLink"]],template:function(n,r){1&n&&(e.YNc(0,J,12,5,"div",0),e.ALo(1,"async"),e.YNc(2,E,19,16,"ng-container",1)),2&n&&(e.Q6J("ngIf",e.lcZ(1,2,r.currentUser$)),e.xp6(2),e.Q6J("ngIf",r.profileService.profile))},directives:[c.O5,Z.BU,Z.Nj,l.Od,l.rH,l.lC],pipes:[c.Ov,k.S],styles:[".profile[_ngcontent-%COMP%]{display:flex;justify-content:center}.profile-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]{position:relative;width:150px;height:150px}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;cursor:pointer}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);visibility:hidden;color:#fff;font-size:32px}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{visibility:hidden}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]:hover   .avatar[_ngcontent-%COMP%]{filter:brightness(.5)}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{visibility:visible}.profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;font-size:38px}.profile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 32px;font-weight:400}nav[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),t})(),data:{breadcrumb:"Profile",breadcrumbPath:"/user/profile"},children:[{path:"",pathMatch:"full",redirectTo:"profile"},{path:"profile",component:C,data:{breadcrumb:"",breadcrumbPath:"/user/profile"}},{path:"hr-information",component:d},{path:"start-end-dates",component:P},{path:"personal-data",component:g},{path:"clothes-sizes",component:f},{path:"bank-details",component:u},{path:"emergency-contact",component:m},{path:"payroll-information",component:h},{path:"**",redirectTo:"profile"}]}];let H=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(G)],l.Bz]}),t})();var X=a(8616);let Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,H,X.m]]}),t})()}}]);
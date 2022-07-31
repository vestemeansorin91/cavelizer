"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[582],{4582:(V,f,s)=>{s.r(f),s.d(f,{UserProfileModule:()=>X});var m=s(9808),S=s(9754),e=s(5e3),r=s(2382),l=s(4254),u=s(2496),c=s(42);let h=(()=>{class o{constructor(t,n,a){this.fb=t,this.profileService=n,this.notificationsService=a,this.buildFormGroup(),this.patchFormGroup()}ngOnInit(){}onSaveBankDetails(){this.profileService.saveUserBankDetails(this.userBankDetailsFormGroup.value).subscribe(()=>{this.notificationsService.success("Success","User Clothes Sizes saved!")})}buildFormGroup(){this.userBankDetailsFormGroup=this.fb.group({iban:this.fb.control(""),bic:this.fb.control("")})}patchFormGroup(){const{bankDetails:t}=this.profileService.profile;!t||this.userBankDetailsFormGroup.patchValue({iban:t.iban,bic:t.bic})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(l.H),e.Y36(u.TF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-bank-details"]],decls:12,vars:1,consts:[[1,"flex","justify--center"],[1,"flex--column","mt--40","gap--8",3,"formGroup"],["for","iban",1,"mr--16"],["formControlName","iban","id","iban","type","string"],["for","bic",1,"mr--16"],["formControlName","bic","id","bic","type","string"],[3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div")(3,"label",2),e._uU(4,"Hip Size"),e.qZA(),e._UZ(5,"input",3),e.qZA(),e.TgZ(6,"div")(7,"label",4),e._uU(8,"Bic"),e.qZA(),e._UZ(9,"input",5),e.qZA(),e.TgZ(10,"cavelizer-button",6),e.NdJ("click",function(){return n.onSaveBankDetails()}),e._uU(11," Save"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.userBankDetailsFormGroup))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,c.r],styles:[""]}),o})(),d=(()=>{class o{constructor(t,n,a){this.fb=t,this.profileService=n,this.notificationsService=a,this.buildFormGroup(),this.patchFormGroup()}ngOnInit(){}onSaveClothesSizes(){this.profileService.saveUserClothesSizes(this.userClothesSizesFormGroup.value).subscribe(()=>{this.notificationsService.success("Success","User Clothes Sizes saved!")})}buildFormGroup(){this.userClothesSizesFormGroup=this.fb.group({shirtSize:this.fb.control(""),hipSize:this.fb.control(""),footSize:this.fb.control("")})}patchFormGroup(){const{clothesSizes:t}=this.profileService.profile;!t||this.userClothesSizesFormGroup.patchValue({shirtSize:t.shirtSize,hipSize:t.hipSize,footSize:t.footSize})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(l.H),e.Y36(u.TF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-clothes-sizes"]],decls:28,vars:1,consts:[[1,"flex","justify--center"],[1,"flex--column","mt--40","gap--8",3,"formGroup"],["for","shirtSize",1,"mr--16"],["formControlName","shirtSize","id","shirtSize"],["value","xs"],["value","s"],["value","m"],["value","l"],["value","xl"],["value","xxl"],["for","hipSize",1,"mr--16"],["formControlName","hipSize","id","hipSize","type","number"],["for","footSize",1,"mr--16"],["formControlName","footSize","id","footSize","type","number"],[3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div")(3,"label",2),e._uU(4,"Shirt Size "),e.qZA(),e.TgZ(5,"select",3)(6,"option",4),e._uU(7,"XS"),e.qZA(),e.TgZ(8,"option",5),e._uU(9,"S"),e.qZA(),e.TgZ(10,"option",6),e._uU(11,"M"),e.qZA(),e.TgZ(12,"option",7),e._uU(13,"L"),e.qZA(),e.TgZ(14,"option",8),e._uU(15,"XL"),e.qZA(),e.TgZ(16,"option",9),e._uU(17,"XXL"),e.qZA()()(),e.TgZ(18,"div")(19,"label",10),e._uU(20,"Hip Size"),e.qZA(),e._UZ(21,"input",11),e.qZA(),e.TgZ(22,"div")(23,"label",12),e._uU(24,"Foot Size"),e.qZA(),e._UZ(25,"input",13),e.qZA(),e.TgZ(26,"cavelizer-button",14),e.NdJ("click",function(){return n.onSaveClothesSizes()}),e._uU(27," Save"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.userClothesSizesFormGroup))},directives:[r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,r.YN,r.Kr,r.Fj,r.wV,c.r],styles:[""]}),o})(),v=(()=>{class o{constructor(t,n,a){this.fb=t,this.profileService=n,this.notificationsService=a,this.buildFormGroup(),this.patchFormGroup()}onSaveUserEmergencyContact(){this.profileService.saveUserEmergencyContact(this.userEmergencyContactFormGroup.value).subscribe(()=>{this.notificationsService.success("Success","User profile saved!")})}buildFormGroup(){this.userEmergencyContactFormGroup=this.fb.group({fullName:this.fb.control(""),phoneNumber:this.fb.control(""),relationshipType:this.fb.control("")})}patchFormGroup(){const{emergencyContact:t}=this.profileService.profile;!t||this.userEmergencyContactFormGroup.patchValue({fullName:t.fullName,phoneNumber:t.phoneNumber,relationshipType:t.relationshipType})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(l.H),e.Y36(u.TF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-emergency-contact"]],decls:26,vars:1,consts:[[1,"flex","justify--center"],[1,"flex--column","mt--40","gap--8",3,"formGroup"],["for","fullName",1,"mr--16"],["formControlName","fullName","id","fullName","type","string"],["for","phoneNumber",1,"mr--16"],["formControlName","phoneNumber","id","phoneNumber","type","string"],["for","relationshipType",1,"mr--16"],["formControlName","relationshipType","id","relationshipType","name",""],["value","partner"],["value","sibling"],["value","parent"],["value","child"],["value","friend"],[3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div")(3,"label",2),e._uU(4,"Full Name"),e.qZA(),e._UZ(5,"input",3),e.qZA(),e.TgZ(6,"div")(7,"label",4),e._uU(8,"Phone Number"),e.qZA(),e._UZ(9,"input",5),e.qZA(),e.TgZ(10,"div")(11,"label",6),e._uU(12,"Relationship Type"),e.qZA(),e.TgZ(13,"select",7)(14,"option",8),e._uU(15,"Partner"),e.qZA(),e.TgZ(16,"option",9),e._uU(17,"Sibling"),e.qZA(),e.TgZ(18,"option",10),e._uU(19,"Parent"),e.qZA(),e.TgZ(20,"option",11),e._uU(21,"Child"),e.qZA(),e.TgZ(22,"option",12),e._uU(23,"Friend"),e.qZA()()(),e.TgZ(24,"cavelizer-button",13),e.NdJ("click",function(){return n.onSaveUserEmergencyContact()}),e._uU(25," Save"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.userEmergencyContactFormGroup))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.EJ,r.YN,r.Kr,c.r],styles:[""]}),o})(),g=(()=>{class o{constructor(t,n,a){this.fb=t,this.profileService=n,this.notificationsService=a,this.buildFormGroup(),this.patchFormGroup()}ngOnInit(){}onSaveHrInformation(){this.profileService.saveUserHrInformation(this.userHrInformationFormGroup.value).subscribe(()=>{this.notificationsService.success("Success","User Clothes Sizes saved!")})}buildFormGroup(){this.userHrInformationFormGroup=this.fb.group({birthDate:this.fb.control(""),employmentType:this.fb.control(""),status:this.fb.control(""),nationality:this.fb.control(""),weeklyHours:this.fb.control(""),gender:this.fb.control("")})}patchFormGroup(){const{hrInformation:t}=this.profileService.profile;if(!t)return;const n=t.birthDate.substring(0,10);this.userHrInformationFormGroup.patchValue({birthDate:n,employmentType:t.employmentType,status:t.status,nationality:t.nationality,weeklyHours:t.weeklyHours,gender:t.gender,footSize:t.footSize})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(l.H),e.Y36(u.TF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-hr-information"]],decls:41,vars:4,consts:[[1,"flex","justify--center"],[1,"flex--column","mt--40","gap--8",3,"formGroup"],["for","birthDate",1,"mr--16"],["formControlName","birthDate","id","birthDate","type","date"],["for","employmentType",1,"mr--16"],["formControlName","employmentType","id","employmentType"],["value","internal"],["value","external"],["for","status",1,"mr--16"],["formControlName","status","id","status","type","checkbox"],["for","nationality",1,"mr--16"],["formControlName","nationality","id","nationality","type","string"],["for","weeklyHours",1,"mr--16"],["formControlName","weeklyHours","id","weeklyHours","type","number"],["for","gender",1,"mr--16"],["formControlName","gender","id","gender"],["value","man"],["value","woman"],["value","all"],[3,"click"],[1,"justify--center"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div")(3,"label",2),e._uU(4,"Birth Date"),e.qZA(),e._UZ(5,"input",3),e.qZA(),e.TgZ(6,"div")(7,"label",4),e._uU(8,"Employment Type"),e.qZA(),e.TgZ(9,"select",5)(10,"option",6),e._uU(11,"Internal"),e.qZA(),e.TgZ(12,"option",7),e._uU(13,"External"),e.qZA()()(),e.TgZ(14,"div")(15,"label",8),e._uU(16,"Status"),e.qZA(),e._UZ(17,"input",9),e.qZA(),e.TgZ(18,"div")(19,"label",10),e._uU(20,"Nationality"),e.qZA(),e._UZ(21,"input",11),e.qZA(),e.TgZ(22,"div")(23,"label",12),e._uU(24,"Weekly Hours"),e.qZA(),e._UZ(25,"input",13),e.qZA(),e.TgZ(26,"div")(27,"label",14),e._uU(28,"Gender"),e.qZA(),e.TgZ(29,"select",15)(30,"option",16),e._uU(31,"Man"),e.qZA(),e.TgZ(32,"option",17),e._uU(33,"Woman"),e.qZA(),e.TgZ(34,"option",18),e._uU(35,"All"),e.qZA()()(),e.TgZ(36,"cavelizer-button",19),e.NdJ("click",function(){return n.onSaveHrInformation()}),e._uU(37,"Save"),e.qZA()()(),e.TgZ(38,"pre",20),e._uU(39),e.ALo(40,"json"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.userHrInformationFormGroup),e.xp6(38),e.Oqu(e.lcZ(40,2,n.userHrInformationFormGroup.value)))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.EJ,r.YN,r.Kr,r.Wl,r.wV,c.r],pipes:[m.Ts],styles:[""]}),o})(),Z=(()=>{class o{constructor(t,n,a){this.fb=t,this.profileService=n,this.notificationsService=a,this.buildFormGroup(),this.patchFormGroup()}onSavePayrollInformation(){this.profileService.saveUserPayrollInformation(this.userPayrollInformationFormGroup.value).subscribe(()=>{this.notificationsService.success("Success","User Payroll Information saved!")})}buildFormGroup(){this.userPayrollInformationFormGroup=this.fb.group({levelOfEducation:this.fb.control(""),salaryType:this.fb.control(""),typeOfHealthInsurance:this.fb.control(""),religion:this.fb.control(""),cnp:this.fb.control(""),healthInsurance:this.fb.control("")})}patchFormGroup(){const{payrollInformation:t}=this.profileService.profile;!t||this.userPayrollInformationFormGroup.patchValue({levelOfEducation:t.levelOfEducation,salaryType:t.salaryType,typeOfHealthInsurance:t.typeOfHealthInsurance,religion:t.religion,cnp:t.cnp,healthInsurance:t.healthInsurance})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(l.H),e.Y36(u.TF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-payroll-information"]],decls:46,vars:1,consts:[[1,"flex","justify--center"],[1,"flex--column","mt--40","gap--8",3,"formGroup"],["for","levelOfEducation",1,"mr--16"],["formControlName","levelOfEducation","id","levelOfEducation","name",""],["value","primary_school"],["value","high_school"],["value","faculy"],["for","salaryType",1,"mr--16"],["formControlName","salaryType","id","salaryType","name",""],["value","fixed"],["value","flexible"],["for","typeOfHealthInsurance",1,"mr--16"],["formControlName","typeOfHealthInsurance","id","typeOfHealthInsurance","name",""],["value","private"],["value","public"],["for","religion",1,"mr--16"],["formControlName","religion","id","religion","name",""],["value","ortodox"],["value","catolic"],["for","cnp",1,"mr--16"],["formControlName","cnp","id","cnp","type","string"],["for","healthInsurance",1,"mr--16"],["formControlName","healthInsurance","id","healthInsurance","type","string"],[3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div")(3,"label",2),e._uU(4,"Level of Education"),e.qZA(),e.TgZ(5,"select",3)(6,"option",4),e._uU(7,"Primary"),e.qZA(),e.TgZ(8,"option",5),e._uU(9,"High School"),e.qZA(),e.TgZ(10,"option",6),e._uU(11,"Faculty"),e.qZA()()(),e.TgZ(12,"div")(13,"label",7),e._uU(14,"Salary Type"),e.qZA(),e.TgZ(15,"select",8)(16,"option",9),e._uU(17,"Fixed"),e.qZA(),e.TgZ(18,"option",10),e._uU(19,"Flexible"),e.qZA()()(),e.TgZ(20,"div")(21,"label",11),e._uU(22,"Type of Health Insurance"),e.qZA(),e.TgZ(23,"select",12)(24,"option",13),e._uU(25,"Private"),e.qZA(),e.TgZ(26,"option",14),e._uU(27,"Public"),e.qZA()()(),e.TgZ(28,"div")(29,"label",15),e._uU(30,"Religion"),e.qZA(),e.TgZ(31,"select",16)(32,"option",17),e._uU(33,"Ortodox"),e.qZA(),e.TgZ(34,"option",18),e._uU(35,"Catolic"),e.qZA()()(),e.TgZ(36,"div")(37,"label",19),e._uU(38,"CNP"),e.qZA(),e._UZ(39,"input",20),e.qZA(),e.TgZ(40,"div")(41,"label",21),e._uU(42,"Health Insurance"),e.qZA(),e._UZ(43,"input",22),e.qZA(),e.TgZ(44,"cavelizer-button",23),e.NdJ("click",function(){return n.onSavePayrollInformation()}),e._uU(45," Save"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.userPayrollInformationFormGroup))},directives:[r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,r.YN,r.Kr,r.Fj,c.r],styles:[""]}),o})(),b=(()=>{class o{constructor(t,n,a){this.fb=t,this.profileService=n,this.notificationsService=a,this.buildFormGroup(),this.patchFormGroup()}ngOnInit(){}onSavePersonalData(){this.profileService.saveUserPersonalData(this.userPersonalDataFormGroup.value).subscribe(()=>{this.notificationsService.success("Success","User personal data saved!")})}buildFormGroup(){this.userPersonalDataFormGroup=this.fb.group({street:this.fb.control(""),houseNumber:this.fb.control(""),zipCode:this.fb.control(""),city:this.fb.control(""),phoneNumber:this.fb.control(""),privateEmail:this.fb.control(""),validityIdentityCard:this.fb.control(""),children:this.fb.control("")})}patchFormGroup(){const{personalData:t}=this.profileService.profile;!t||this.userPersonalDataFormGroup.patchValue({street:t.street,houseNumber:t.houseNumber,zipCode:t.zipCode,city:t.city,phoneNumber:t.phoneNumber,privateEmail:t.privateEmail,validityIdentityCard:t.validityIdentityCard,children:t.children})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(l.H),e.Y36(u.TF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-personal-data"]],decls:32,vars:1,consts:[[1,"flex","justify--center"],[1,"flex--column","mt--40","gap--8",3,"formGroup"],["for","street",1,"mr--16"],["formControlName","street","id","street","type","text"],["for","houseNumber",1,"mr--16"],["formControlName","houseNumber","id","houseNumber","type","number"],["for","zipCode",1,"mr--16"],["formControlName","zipCode","id","zipCode","type","text"],["for","city",1,"mr--16"],["formControlName","city","id","city","type","text"],["for","phoneNumber",1,"mr--16"],["formControlName","phoneNumber","id","phoneNumber","type","text"],["for","validityIdentityCard",1,"mr--16"],["formControlName","validityIdentityCard","id","validityIdentityCard","type","date"],["for","privateEmail",1,"mr--16"],["formControlName","privateEmail","id","privateEmail","type","email"],[3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div")(3,"label",2),e._uU(4,"Street"),e.qZA(),e._UZ(5,"input",3),e.qZA(),e.TgZ(6,"div")(7,"label",4),e._uU(8,"House Number"),e.qZA(),e._UZ(9,"input",5),e.qZA(),e.TgZ(10,"div")(11,"label",6),e._uU(12,"Zip Code"),e.qZA(),e._UZ(13,"input",7),e.qZA(),e.TgZ(14,"div")(15,"label",8),e._uU(16,"City"),e.qZA(),e._UZ(17,"input",9),e.qZA(),e.TgZ(18,"div")(19,"label",10),e._uU(20,"Phone Number"),e.qZA(),e._UZ(21,"input",11),e.qZA(),e.TgZ(22,"div")(23,"label",12),e._uU(24,"Validity Identity Card"),e.qZA(),e._UZ(25,"input",13),e.qZA(),e.TgZ(26,"div")(27,"label",14),e._uU(28,"Private Email"),e.qZA(),e._UZ(29,"input",15),e.qZA(),e.TgZ(30,"cavelizer-button",16),e.NdJ("click",function(){return n.onSavePersonalData()}),e._uU(31,"Save"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.userPersonalDataFormGroup))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.wV,c.r],styles:[""]}),o})();var A=s(217),P=s(4015),y=s(7322),q=s(4107),F=s(508);let U=(()=>{class o{constructor(t,n,a){this.fb=t,this.profileService=n,this.notificationsService=a,this.buildFormGroup(),this.patchFormGroup()}onSavePublicProfile(){this.profileService.saveUserPublicProfile(this.userPublicProfileFormGroup.value).subscribe(()=>{this.notificationsService.success("Success","User profile saved!")})}buildFormGroup(){this.userPublicProfileFormGroup=this.fb.group({office:this.fb.control(""),department:this.fb.control(""),position:this.fb.control(""),team:this.fb.control(""),phone:this.fb.control("")})}patchFormGroup(){const{publicProfile:t}=this.profileService.profile;!t||this.userPublicProfileFormGroup.patchValue({office:t.office,department:t.department,position:t.position,team:t.team,phone:t.phone})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(l.H),e.Y36(u.TF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-profile"]],decls:46,vars:2,consts:[[1,"flex","justify--center"],[1,"flex--column","gap--8","mt--32","width--300",3,"formGroup"],[1,"flex--column","align--start"],["for","office",1,"mr--16","text--bold"],[1,"width--full"],["formControlName","office","id","office","type","text",1,"width--full"],["appearance","fill",1,"mt--16"],["formControlName","department"],["value","development"],["value","qa"],["appearance","fill"],["formControlName","position"],["value","junior"],["value","medior"],["value","senior"],["formControlName","team"],["value","frontend"],["value","backend"],["value","tester"],["value","project manager"],["for","phone",1,"mr--16","text--bold"],["formControlName","phone","id","phone","type","text"],[1,"width--full","mt--32",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"label",3),e._uU(4,"Office"),e.qZA(),e.TgZ(5,"cavelizer-input-group",4),e._UZ(6,"cavelizer-text-input",5),e.qZA()(),e.TgZ(7,"mat-form-field",6)(8,"mat-label"),e._uU(9,"Department"),e.qZA(),e.TgZ(10,"mat-select",7)(11,"mat-option",8),e._uU(12,"Development"),e.qZA(),e.TgZ(13,"mat-option",9),e._uU(14,"QA"),e.qZA()()(),e.TgZ(15,"mat-form-field",10)(16,"mat-label"),e._uU(17,"Position"),e.qZA(),e.TgZ(18,"mat-select",11)(19,"mat-option",12),e._uU(20,"Junior"),e.qZA(),e.TgZ(21,"mat-option",13),e._uU(22,"Medior"),e.qZA(),e.TgZ(23,"mat-option",14),e._uU(24,"Senior"),e.qZA()()(),e.TgZ(25,"mat-form-field",10)(26,"mat-label"),e._uU(27,"Team"),e.qZA(),e.TgZ(28,"mat-select",15)(29,"mat-option",16),e._uU(30,"Frontend"),e.qZA(),e.TgZ(31,"mat-option",17),e._uU(32,"Backend"),e.qZA(),e.TgZ(33,"mat-option",18),e._uU(34,"Tester"),e.qZA(),e.TgZ(35,"mat-option",9),e._uU(36,"QA"),e.qZA(),e.TgZ(37,"mat-option",19),e._uU(38,"Project manager"),e.qZA()()(),e.TgZ(39,"div",2)(40,"label",20),e._uU(41,"Phone"),e.qZA(),e.TgZ(42,"cavelizer-input-group",4),e._UZ(43,"cavelizer-text-input",21),e.qZA()(),e.TgZ(44,"cavelizer-button",22),e.NdJ("click",function(){return n.onSavePublicProfile()}),e._uU(45,"Save "),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.userPublicProfileFormGroup),e.xp6(43),e.uIk("disabled",!n.userPublicProfileFormGroup.dirty))},directives:[r._Y,r.JL,r.sg,A.g,P.t,r.JJ,r.u,y.KE,y.hX,q.gD,F.ey,c.r],encapsulation:2}),o})(),_=(()=>{class o{constructor(t,n,a){this.fb=t,this.profileService=n,this.notificationsService=a,this.buildFormGroup(),this.patchFormGroup()}ngOnInit(){}onSaveStartEndDates(){this.profileService.saveUserStartEndDates(this.userStardEndDatesFormGroup.value).subscribe(()=>{this.notificationsService.success("Success","User Clothes Sizes saved!")})}buildFormGroup(){this.userStardEndDatesFormGroup=this.fb.group({hireDate:this.fb.control(""),contractEndDate:this.fb.control(""),subCompany:this.fb.control("")})}patchFormGroup(){const{startEndDates:t}=this.profileService.profile;if(!t)return;const n=t.hireDate.substring(0,10),a=t.contractEndDate.substring(0,10);this.userStardEndDatesFormGroup.patchValue({hireDate:n,contractEndDate:a,subCompany:t.subCompany})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(l.H),e.Y36(u.TF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-start-end-dates"]],decls:16,vars:1,consts:[[1,"flex","justify--center"],[1,"flex--column","mt--40","gap--8",3,"formGroup"],["for","hireDate",1,"mr--16"],["formControlName","hireDate","id","hireDate","type","date"],["for","contractEndDate",1,"mr--16"],["formControlName","contractEndDate","id","contractEndDate","type","date"],["for","subCompany",1,"mr--16"],["formControlName","subCompany","id","subCompany","type","string"],[3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div")(3,"label",2),e._uU(4,"Hire Date"),e.qZA(),e._UZ(5,"input",3),e.qZA(),e.TgZ(6,"div")(7,"label",4),e._uU(8,"Contract Date"),e.qZA(),e._UZ(9,"input",5),e.qZA(),e.TgZ(10,"div")(11,"label",6),e._uU(12,"Sub Company"),e.qZA(),e._UZ(13,"input",7),e.qZA(),e.TgZ(14,"cavelizer-button",8),e.NdJ("click",function(){return n.onSaveStartEndDates()}),e._uU(15," Save"),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.userStardEndDatesFormGroup))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,c.r],styles:[""]}),o})();var G=s(698),N=s(665),z=s(5620),I=s(7902),C=s(3251),p=s(1725),D=s(5728);const x=["uploadInputRef"];function J(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4),e.NdJ("click",function(){return e.CHM(t),e.MAs(7).click()}),e._UZ(3,"img",5),e.ALo(4,"defaultImage"),e._UZ(5,"i",6),e.TgZ(6,"input",7,8),e.NdJ("change",function(a){return e.CHM(t),e.oxw().handleFileInput(a.target)}),e.qZA()(),e.TgZ(8,"h1",9),e._uU(9),e.qZA(),e.TgZ(10,"h2"),e._uU(11),e.qZA()()()}if(2&o){const t=i.ngIf;e.xp6(3),e.Q6J("src",e.lcZ(4,3,t.avatarBlobUrl),e.LSH),e.xp6(6),e.Oqu(null==t?null:t.fullName),e.xp6(2),e.Oqu(null==t?null:t.username)}}const k=function(){return["/dashboard","user","profile"]},O=function(){return["/dashboard","user","personal-mock"]},E=function(){return["/dashboard","user","hr-information"]},M=function(){return["/dashboard","user","payroll-information"]},H=function(){return["/dashboard","user","start-end-dates"]},Y=function(){return["/dashboard","user","clothes-sizes"]},j=function(){return["/dashboard","user","bank-details"]},L=function(){return["/dashboard","user","emergency-contact"]};function B(o,i){1&o&&(e.ynx(0),e.TgZ(1,"nav",10)(2,"span",11),e._uU(3,"Profile"),e.qZA(),e.TgZ(4,"span",11),e._uU(5,"Personal Data"),e.qZA(),e.TgZ(6,"span",11),e._uU(7,"HR Information"),e.qZA(),e.TgZ(8,"span",11),e._uU(9,"Payroll Information"),e.qZA(),e.TgZ(10,"span",11),e._uU(11,"Start End Dates"),e.qZA(),e.TgZ(12,"span",11),e._uU(13,"Clothes sizes"),e.qZA(),e.TgZ(14,"span",11),e._uU(15,"Bank details"),e.qZA(),e.TgZ(16,"span",11),e._uU(17,"Emergency contact"),e.qZA()(),e._UZ(18,"router-outlet"),e.BQk()),2&o&&(e.xp6(2),e.Q6J("routerLink",e.DdM(8,k)),e.xp6(2),e.Q6J("routerLink",e.DdM(9,O)),e.xp6(2),e.Q6J("routerLink",e.DdM(10,E)),e.xp6(2),e.Q6J("routerLink",e.DdM(11,M)),e.xp6(2),e.Q6J("routerLink",e.DdM(12,H)),e.xp6(2),e.Q6J("routerLink",e.DdM(13,Y)),e.xp6(2),e.Q6J("routerLink",e.DdM(14,j)),e.xp6(2),e.Q6J("routerLink",e.DdM(15,L)))}const Q=[{path:"",component:(()=>{class o{constructor(t,n,a){this.store=t,this.jwtTokenService=n,this.profileService=a,this.currentUser$=this.store.select(N.UH),this.fileToUpload=null,this.userId=""}ngOnInit(){this.getUserProfile()}handleFileInput(t){const n=t.files.item(0);this.uploadFileToActivity(n),t.value=null}uploadFileToActivity(t){this.store.dispatch(G.Y.avatarUpdate({file:t}))}getUserProfile(){this.userId=this.jwtTokenService.getUser()._id,this.profileService.getUserByIdWithProfile(this.userId).subscribe(t=>this.profileService.profile=t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(z.yh),e.Y36(I.C),e.Y36(l.H))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile"]],viewQuery:function(t,n){if(1&t&&e.Gf(x,5),2&t){let a;e.iGM(a=e.CRH())&&(n.uploadInputRef=a.first)}},decls:3,vars:4,consts:[["class","profile",4,"ngIf"],[4,"ngIf"],[1,"profile"],[1,"profile-header"],[1,"avatar-wrapper",3,"click"],["alt","",1,"avatar",3,"src"],[1,"las","la-pen"],["accept","image/jpeg","id","file","type","file",3,"change"],["uploadInputRef",""],[1,"mb--0"],["mat-tab-nav-bar",""],["mat-tab-link","","routerLinkActive","active",3,"routerLink"]],template:function(t,n){1&t&&(e.YNc(0,J,12,5,"div",0),e.ALo(1,"async"),e.YNc(2,B,19,16,"ng-container",1)),2&t&&(e.Q6J("ngIf",e.lcZ(1,2,n.currentUser$)),e.xp6(2),e.Q6J("ngIf",n.profileService.profile))},directives:[m.O5,C.BU,C.Nj,p.Od,p.rH,p.lC],pipes:[m.Ov,D.S],styles:[".color--primary[_ngcontent-%COMP%]{color:#6a983c}.color--grey[_ngcontent-%COMP%]{color:#575757}.bg-light[_ngcontent-%COMP%]{background-color:#d1d1d1}.bg-white[_ngcontent-%COMP%]{background-color:#fff}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #ebebeb}.profile[_ngcontent-%COMP%]{display:flex;justify-content:center}.profile-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]{position:relative;width:150px;height:150px}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;cursor:pointer}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);visibility:hidden;color:#fff;font-size:32px}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{visibility:hidden}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]:hover   .avatar[_ngcontent-%COMP%]{filter:brightness(.5)}.profile-header[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{visibility:visible}.profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;font-size:38px}.profile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 32px;font-weight:400}nav[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),o})(),data:{breadcrumb:"Profile",breadcrumbPath:"/user/profile"},children:[{path:"",pathMatch:"full",redirectTo:"profile"},{path:"profile",component:U,data:{breadcrumb:"",breadcrumbPath:"/user/profile"}},{path:"hr-information",component:g},{path:"start-end-dates",component:_},{path:"personal-mock",component:b},{path:"clothes-sizes",component:d},{path:"bank-details",component:h},{path:"emergency-contact",component:v},{path:"payroll-information",component:Z},{path:"**",redirectTo:"profile"}]}];let w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.Bz.forChild(Q)],p.Bz]}),o})(),X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,w,S.m]]}),o})()}}]);
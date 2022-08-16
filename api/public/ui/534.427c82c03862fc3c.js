"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[534],{9534:(z,u,s)=>{s.r(u),s.d(u,{IconsModule:()=>S});var a=s(9808),o=s(5e3);class g{constructor(i,t){this._document=t;const n=this._textarea=this._document.createElement("textarea"),c=n.style;c.position="fixed",c.top=c.opacity="0",c.left="-999em",n.setAttribute("aria-hidden","true"),n.value=i,this._document.body.appendChild(n)}copy(){const i=this._textarea;let t=!1;try{if(i){const n=this._document.activeElement;i.select(),i.setSelectionRange(0,i.value.length),t=this._document.execCommand("copy"),n&&n.focus()}}catch(n){}return t}destroy(){const i=this._textarea;i&&(i.remove(),this._textarea=void 0)}}let C=(()=>{class e{constructor(t){this._document=t}copy(t){const n=this.beginCopy(t),c=n.copy();return n.destroy(),c}beginCopy(t){return new g(t,this._document)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(a.K0))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const h=new o.OlP("CDK_COPY_TO_CLIPBOARD_CONFIG");let y=(()=>{class e{constructor(t,n,c){this._clipboard=t,this._ngZone=n,this.text="",this.attempts=1,this.copied=new o.vpe,this._pending=new Set,c&&null!=c.attempts&&(this.attempts=c.attempts)}copy(t=this.attempts){if(t>1){let n=t;const c=this._clipboard.beginCopy(this.text);this._pending.add(c);const r=()=>{const p=c.copy();p||!--n||this._destroyed?(this._currentTimeout=null,this._pending.delete(c),c.destroy(),this.copied.emit(p)):this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(r,1))};r()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(t=>t.destroy()),this._pending.clear(),this._destroyed=!0}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(C),o.Y36(o.R0b),o.Y36(h,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(t,n){1&t&&o.NdJ("click",function(){return n.copy()})},inputs:{text:["cdkCopyToClipboard","text"],attempts:["cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"}}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),e})();var T=s(9776),l=s(2382),m=s(508),d=s(7322),x=s(7531),f=s(4107),Z=s(1725),b=s(8293);const I=["arrow-down","arrow-left","arrow-right","arrow-top-bottom","article","basket","category","chat","check","close","closed-eye","comment","compare","components","dashboard","docs","download","edit","external-link","facebook","facebook-colored","gmail","google-colored","heart","icons","instagram-colored","key","lock-closed","lock-open","logout","mail","mobile","more-horizontal","more-vertical","notification","open-eye","permission","plus-circle","product","remove","role","save","search","settings","shop","star-empty","star-full","tag","tiktok","twitter","twitter-colored","upload","user","users","video","youtube"];var M=s(2496),k=s(2775);const U=function(e,i){return[e,i]};function w(e,i){if(1&e){const t=o.EpF();o.TgZ(0,"div",15),o.NdJ("click",function(){const r=o.CHM(t).$implicit;return o.oxw().copiedToClipboard(r)}),o._UZ(1,"cvz-icon",16),o.TgZ(2,"span",17),o._uU(3),o.qZA()()}if(2&e){const t=i.$implicit,n=o.oxw();o.Q6J("cdkCopyToClipboard",n.copyToClipboard(t)),o.xp6(1),o.Q6J("name",t)("ngClass",o.WLB(4,U,n.iconsSize,n.iconsColor)),o.xp6(2),o.Oqu(t)}}let O=(()=>{class e{constructor(t){this.notificationsService=t,this.projectIcons=I,this.iconsSize="",this.iconsColor=""}copyToClipboard(t){let n="";return(this.iconsColor||this.iconsSize)&&(n=` class="${this.iconsSize} ${this.iconsColor}"`),`<cvz-icon name="${t}"${n}></cvz-icon>`}copiedToClipboard(t){this.notificationsService.success("Success",`Icon '${t}' copied!`)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(M.TF))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-icons"]],decls:33,vars:3,consts:[[1,"justify--center","gap--30"],["appearance","outline"],[3,"ngModel","ngModelChange"],["value","small"],["value",""],["value","big"],["value","xl"],["value","xxl"],["value","color-primary"],["value","color-warning"],["value","color-error"],["value","color-info"],["value","color-white"],[1,"flex","flex--wrap","justify--space-evenly","gap--12"],["class","flex--column justify--center align--center pointer width--140 b-radius--8 hovered p--8",3,"cdkCopyToClipboard","click",4,"ngFor","ngForOf"],[1,"flex--column","justify--center","align--center","pointer","width--140","b-radius--8","hovered","p--8",3,"cdkCopyToClipboard","click"],[3,"name","ngClass"],[1,"fs--12","mt--4"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),o._uU(3,"Size"),o.qZA(),o.TgZ(4,"mat-select",2),o.NdJ("ngModelChange",function(r){return n.iconsSize=r}),o.TgZ(5,"mat-option",3),o._uU(6,"Small (16x16px)"),o.qZA(),o.TgZ(7,"mat-option",4),o._uU(8,"Normal (24x24px)"),o.qZA(),o.TgZ(9,"mat-option",5),o._uU(10,"Big (32x32px)"),o.qZA(),o.TgZ(11,"mat-option",6),o._uU(12,"XL (64x64px)"),o.qZA(),o.TgZ(13,"mat-option",7),o._uU(14,"XXL (128x128px)"),o.qZA()()(),o.TgZ(15,"mat-form-field",1)(16,"mat-label"),o._uU(17,"Color"),o.qZA(),o.TgZ(18,"mat-select",2),o.NdJ("ngModelChange",function(r){return n.iconsColor=r}),o.TgZ(19,"mat-option",4),o._uU(20,"Default"),o.qZA(),o.TgZ(21,"mat-option",8),o._uU(22,"color-primary"),o.qZA(),o.TgZ(23,"mat-option",9),o._uU(24,"color-warning"),o.qZA(),o.TgZ(25,"mat-option",10),o._uU(26,"color-error"),o.qZA(),o.TgZ(27,"mat-option",11),o._uU(28,"color-info"),o.qZA(),o.TgZ(29,"mat-option",12),o._uU(30,"color-white"),o.qZA()()()(),o.TgZ(31,"div",13),o.YNc(32,w,4,7,"div",14),o.qZA()),2&t&&(o.xp6(4),o.Q6J("ngModel",n.iconsSize),o.xp6(14),o.Q6J("ngModel",n.iconsColor),o.xp6(14),o.Q6J("ngForOf",n.projectIcons))},directives:[d.KE,d.hX,f.gD,l.JJ,l.On,m.ey,a.sg,y,k.o,a.mk],encapsulation:2}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[a.ez,l.u5,l.UX,Z.Bz.forChild([{path:"",component:O}]),m.Ng,d.lN,x.c,f.LD,v,T.U8,b.QX]]}),e})()}}]);
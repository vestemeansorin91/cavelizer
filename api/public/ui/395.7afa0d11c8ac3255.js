"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[395],{9395:(B,u,r)=>{r.r(u),r.d(u,{DashboardModule:()=>Q});var c=r(9808),x=r(2401),n=r(5e3),y=r(698),Z=r(665),T=r(5620),a=r(3692);function U(t,o){1&t&&(n.TgZ(0,"h1"),n._uU(1,"cavelizer"),n.qZA())}function D(t,o){1&t&&(n.TgZ(0,"h1"),n._uU(1,"c"),n.qZA())}function A(t,o){if(1&t&&(n.TgZ(0,"div",20)(1,"span"),n._uU(2),n.qZA(),n.TgZ(3,"strong"),n._uU(4,"Profile"),n.qZA()()),2&t){const e=n.oxw().ngIf;n.xp6(2),n.Oqu(e.fullName)}}const L=function(){return["/user/profile"]};function k(t,o){if(1&t&&(n.TgZ(0,"div",17),n._UZ(1,"img",18),n.YNc(2,A,5,1,"div",19),n.qZA()),2&t){const e=o.ngIf,s=n.oxw();n.Q6J("routerLink",n.DdM(3,L)),n.xp6(1),n.Q6J("src",(null==e?null:e.avatarBlobUrl)||"https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1320751178?k=20&m=1320751178&s=612x612&w=0&h=qBg0zl3GQvll4dI5m0VDidziZN5VWnghNQ2rt-6aln0=",n.LSH),n.xp6(1),n.Q6J("ngIf",s.isExpanded)}}function F(t,o){1&t&&n._UZ(0,"i",21)}function I(t,o){1&t&&n._UZ(0,"i",22)}const w=function(){return["/dashboard","panel"]},i=function(){return{exact:!0}},b=function(){return["/dashboard","users"]},E=function(){return["/dashboard","products"]},S=function(){return["/dashboard","roles"]},q=function(){return["/dashboard","permissions"]},R=function(){return["/dashboard","categories"]},J=function(){return["/dashboard","docs"]},z=function(){return["/dashboard","cavelizer-components"]};let d=(()=>{class t{constructor(e){this.store=e,this.expanded=new n.vpe,this.isExpanded=!1,this.currentUser$=this.store.select(Z.UH)}ngOnInit(){}logout(){this.store.dispatch(y.Y.logoutAction())}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(T.yh))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-sidenav"]],inputs:{isExpanded:"isExpanded"},outputs:{expanded:"expanded"},decls:45,vars:41,consts:[[1,"sidenav"],[4,"ngIf"],["class","profile",3,"routerLink",4,"ngIf"],[1,"sidenav--menu-toggle",3,"click"],["class","las la-angle-left",4,"ngIf"],["class","las la-angle-right",4,"ngIf"],["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions"],[1,"las","la-desktop"],[1,"las","la-user-friends"],[1,"las","la-shopping-bag"],[1,"las","la-id-badge"],[1,"las","la-user-shield"],[1,"las","la-list"],[1,"las","la-book"],[1,"las","la-shapes"],[1,"logout",3,"click"],[1,"las","la-power-off"],[1,"profile",3,"routerLink"],[1,"profile-img",3,"src"],["class","profile-info",4,"ngIf"],[1,"profile-info"],[1,"las","la-angle-left"],[1,"las","la-angle-right"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0),n.YNc(1,U,2,0,"h1",1),n.YNc(2,D,2,0,"h1",1),n.YNc(3,k,3,4,"div",2),n.ALo(4,"async"),n.TgZ(5,"span",3),n.NdJ("click",function(){return s.isExpanded=!s.isExpanded}),n.YNc(6,F,1,0,"i",4),n.YNc(7,I,1,0,"i",5),n.qZA(),n.TgZ(8,"ul")(9,"li",6),n._UZ(10,"i",7),n.TgZ(11,"span"),n._uU(12,"Dashboard"),n.qZA()(),n.TgZ(13,"li",6),n._UZ(14,"i",8),n.TgZ(15,"span"),n._uU(16,"Users"),n.qZA()(),n.TgZ(17,"li",6),n._UZ(18,"i",9),n.TgZ(19,"span"),n._uU(20,"Products"),n.qZA()(),n.TgZ(21,"li",6),n._UZ(22,"i",10),n.TgZ(23,"span"),n._uU(24,"Roles"),n.qZA()(),n.TgZ(25,"li",6),n._UZ(26,"i",11),n.TgZ(27,"span"),n._uU(28,"Permissions"),n.qZA()(),n.TgZ(29,"li",6),n._UZ(30,"i",12),n.TgZ(31,"span"),n._uU(32,"Categories"),n.qZA()(),n.TgZ(33,"li",6),n._UZ(34,"i",13),n.TgZ(35,"span"),n._uU(36,"Documentation"),n.qZA()(),n.TgZ(37,"li",6),n._UZ(38,"i",14),n.TgZ(39,"span"),n._uU(40,"Components"),n.qZA()(),n.TgZ(41,"li",15),n.NdJ("click",function(){return s.logout()}),n._UZ(42,"i",16),n.TgZ(43,"span"),n._uU(44,"Logout"),n.qZA()()()()),2&e&&(n.ekj("isExpanded",s.isExpanded),n.xp6(1),n.Q6J("ngIf",s.isExpanded),n.xp6(1),n.Q6J("ngIf",!s.isExpanded),n.xp6(1),n.Q6J("ngIf",n.lcZ(4,23,s.currentUser$)),n.xp6(3),n.Q6J("ngIf",s.isExpanded),n.xp6(1),n.Q6J("ngIf",!s.isExpanded),n.xp6(2),n.Q6J("routerLink",n.DdM(25,w))("routerLinkActiveOptions",n.DdM(26,i)),n.xp6(4),n.Q6J("routerLink",n.DdM(27,b))("routerLinkActiveOptions",n.DdM(28,i)),n.xp6(4),n.Q6J("routerLink",n.DdM(29,E))("routerLinkActiveOptions",n.DdM(30,i)),n.xp6(4),n.Q6J("routerLink",n.DdM(31,S))("routerLinkActiveOptions",n.DdM(32,i)),n.xp6(4),n.Q6J("routerLink",n.DdM(33,q))("routerLinkActiveOptions",n.DdM(34,i)),n.xp6(4),n.Q6J("routerLink",n.DdM(35,R))("routerLinkActiveOptions",n.DdM(36,i)),n.xp6(4),n.Q6J("routerLink",n.DdM(37,J))("routerLinkActiveOptions",n.DdM(38,i)),n.xp6(4),n.Q6J("routerLink",n.DdM(39,z))("routerLinkActiveOptions",n.DdM(40,i)))},directives:[c.O5,a.rH,a.Od],pipes:[c.Ov],styles:[".sidenav--menu-toggle[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:16px}.sidenav--menu-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:8px;border-radius:8px;cursor:pointer;transition:all .3s ease-in-out;background-color:#fff;color:#000;border:1px solid black}.sidenav--menu-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{background-color:#000;color:#fff}.sidenav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:32px;cursor:default;-webkit-user-select:none;user-select:none}.sidenav[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{display:flex;margin:0 16px;border-radius:8px;transition:all .3s ease-in-out;cursor:pointer}.sidenav[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]:hover{background-color:#f3f3f3}.sidenav[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:8px;border:1px solid grey;padding:2px}.sidenav[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:8px 0 0;padding:0;display:flex;flex-direction:column;align-items:center;height:100%}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;margin-bottom:4px;padding-left:16px;padding-right:16px;text-decoration:none;color:#000;cursor:pointer}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:8px 0;font-size:24px}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:azure}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{font-weight:700}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#00f}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.logout[_ngcontent-%COMP%]{flex:1}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.logout[_ngcontent-%COMP%]:hover{background-color:#fff}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.logout[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.logout[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#8b0000}.sidenav.isExpanded[_ngcontent-%COMP%]   .sidenav--menu-toggle[_ngcontent-%COMP%]{justify-content:flex-end}.sidenav.isExpanded[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{margin-right:8px}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{align-items:flex-start;min-width:300px}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{justify-content:flex-start}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:16px}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}"]}),t})();var m=r(4889);let g=(()=>{class t{constructor(){this.isExpanded=!0}onResize(){this.isExpanded=window.innerWidth>820}ngOnInit(){this.onResize()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-dashboard"]],hostBindings:function(e,s){1&e&&n.NdJ("resize",function(l){return s.onResize(l)},!1,n.Jf7)},decls:6,vars:1,consts:[["autosize",""],["mode","side","disableClose","true","opened","true"],["drawer",""],[3,"isExpanded","expanded"],[1,"dashboard-wrapper"]],template:function(e,s){1&e&&(n.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1,2)(3,"app-sidenav",3),n.NdJ("expanded",function(l){return s.isExpanded=l}),n.qZA()(),n.TgZ(4,"div",4),n._UZ(5,"router-outlet"),n.qZA()()),2&e&&(n.xp6(3),n.Q6J("isExpanded",s.isExpanded))},directives:[m.kh,m.jA,d,a.lC],styles:[".dashboard-wrapper[_ngcontent-%COMP%]{padding:16px 32px}"]}),t})(),C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-category-list"]],decls:2,vars:0,template:function(e,s){1&e&&(n.TgZ(0,"h1"),n._uU(1,"CATEGORIES LIST"),n.qZA())},styles:[""]}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-cavelizer-components"]],decls:2,vars:0,template:function(e,s){1&e&&(n.TgZ(0,"h1"),n._uU(1,"CAVELIZER COMPONENTS"),n.qZA())},styles:[""]}),t})(),_=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-documentation"]],decls:2,vars:0,template:function(e,s){1&e&&(n.TgZ(0,"h1"),n._uU(1,"DOCUMENTATION"),n.qZA())},styles:[""]}),t})(),O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-panel"]],decls:2,vars:0,template:function(e,s){1&e&&(n.TgZ(0,"h1"),n._uU(1,"PANEL"),n.qZA())},styles:[""]}),t})(),v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-permission-list"]],decls:2,vars:0,template:function(e,s){1&e&&(n.TgZ(0,"h1"),n._uU(1,"PERMISSIONS LIST"),n.qZA())},styles:[""]}),t})(),P=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-product-list"]],decls:2,vars:0,template:function(e,s){1&e&&(n.TgZ(0,"h1"),n._uU(1,"PRODUCTS LIST"),n.qZA())},styles:[""]}),t})(),M=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-role-list"]],decls:2,vars:0,template:function(e,s){1&e&&(n.TgZ(0,"h1"),n._uU(1,"ROLES LIST"),n.qZA())},styles:[""]}),t})();const N=[{path:"",component:g,children:[{path:"",pathMatch:"full",redirectTo:"panel"},{path:"panel",component:O},{path:"users",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-user-list"]],decls:2,vars:0,template:function(e,s){1&e&&(n.TgZ(0,"h1"),n._uU(1,"USERS LIST"),n.qZA())},styles:[""]}),t})()},{path:"categories",component:C},{path:"cavelizer-components",component:f},{path:"docs",component:_},{path:"permissions",component:v},{path:"products",component:P},{path:"roles",component:M}]},{path:"**",redirectTo:"panel"}];let X=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[a.Bz.forChild(N)],a.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.ez,X,x.m]]}),t})()}}]);
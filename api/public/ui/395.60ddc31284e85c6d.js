"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[395],{9395:(Y,m,r)=>{r.r(m),r.d(m,{DashboardModule:()=>j});var l=r(9808),P=r(4131),e=r(5e3),x=r(698),h=r(665),M=r(5620),a=r(3692);function y(n,o){1&n&&(e.TgZ(0,"h1"),e._uU(1,"cavelizer"),e.qZA())}function z(n,o){1&n&&(e.TgZ(0,"h1"),e._uU(1,"c"),e.qZA())}function A(n,o){if(1&n&&(e.TgZ(0,"div",20)(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"strong"),e._uU(4,"Profile"),e.qZA()()),2&n){const t=e.oxw().ngIf;e.xp6(2),e.Oqu(t.fullName)}}const S=function(){return["/user/profile"]};function q(n,o){if(1&n&&(e.TgZ(0,"div",17),e._UZ(1,"img",18),e.YNc(2,A,5,1,"div",19),e.qZA()),2&n){const t=o.ngIf,i=e.oxw();e.Q6J("routerLink",e.DdM(3,S)),e.xp6(1),e.Q6J("src",(null==t?null:t.avatarBlobUrl)||"https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1320751178?k=20&m=1320751178&s=612x612&w=0&h=qBg0zl3GQvll4dI5m0VDidziZN5VWnghNQ2rt-6aln0=",e.LSH),e.xp6(1),e.Q6J("ngIf",i.isExpanded)}}function D(n,o){1&n&&e._UZ(0,"i",21)}function L(n,o){1&n&&e._UZ(0,"i",22)}const F=function(){return["/dashboard","panel"]},s=function(){return{exact:!0}},k=function(){return["/dashboard","users"]},I=function(){return["/dashboard","products"]},w=function(){return["/dashboard","roles"]},E=function(){return["/dashboard","permissions"]},R=function(){return["/dashboard","categories"]},J=function(){return["/dashboard","docs"]},N=function(){return["/dashboard","cavelizer-components"]};let d=(()=>{class n{constructor(t){this.store=t,this.expanded=new e.vpe,this.isExpanded=!1,this.currentUser$=this.store.select(h.UH)}ngOnInit(){}logout(){this.store.dispatch(x.Y.logoutAction())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(M.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sidenav"]],inputs:{isExpanded:"isExpanded"},outputs:{expanded:"expanded"},decls:45,vars:41,consts:[[1,"sidenav"],[4,"ngIf"],["class","profile",3,"routerLink",4,"ngIf"],[1,"sidenav--menu-toggle",3,"click"],["class","las la-angle-left",4,"ngIf"],["class","las la-angle-right",4,"ngIf"],["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions"],[1,"las","la-desktop"],[1,"las","la-user-friends"],[1,"las","la-shopping-bag"],[1,"las","la-id-badge"],[1,"las","la-user-shield"],[1,"las","la-list"],[1,"las","la-book"],[1,"las","la-shapes"],[1,"logout",3,"click"],[1,"las","la-power-off"],[1,"profile",3,"routerLink"],[1,"profile-img",3,"src"],["class","profile-info",4,"ngIf"],[1,"profile-info"],[1,"las","la-angle-left"],[1,"las","la-angle-right"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,y,2,0,"h1",1),e.YNc(2,z,2,0,"h1",1),e.YNc(3,q,3,4,"div",2),e.ALo(4,"async"),e.TgZ(5,"span",3),e.NdJ("click",function(){return i.isExpanded=!i.isExpanded}),e.YNc(6,D,1,0,"i",4),e.YNc(7,L,1,0,"i",5),e.qZA(),e.TgZ(8,"ul")(9,"li",6),e._UZ(10,"i",7),e.TgZ(11,"span"),e._uU(12,"Dashboard"),e.qZA()(),e.TgZ(13,"li",6),e._UZ(14,"i",8),e.TgZ(15,"span"),e._uU(16,"Users"),e.qZA()(),e.TgZ(17,"li",6),e._UZ(18,"i",9),e.TgZ(19,"span"),e._uU(20,"Products"),e.qZA()(),e.TgZ(21,"li",6),e._UZ(22,"i",10),e.TgZ(23,"span"),e._uU(24,"Roles"),e.qZA()(),e.TgZ(25,"li",6),e._UZ(26,"i",11),e.TgZ(27,"span"),e._uU(28,"Permissions"),e.qZA()(),e.TgZ(29,"li",6),e._UZ(30,"i",12),e.TgZ(31,"span"),e._uU(32,"Categories"),e.qZA()(),e.TgZ(33,"li",6),e._UZ(34,"i",13),e.TgZ(35,"span"),e._uU(36,"Documentation"),e.qZA()(),e.TgZ(37,"li",6),e._UZ(38,"i",14),e.TgZ(39,"span"),e._uU(40,"Components"),e.qZA()(),e.TgZ(41,"li",15),e.NdJ("click",function(){return i.logout()}),e._UZ(42,"i",16),e.TgZ(43,"span"),e._uU(44,"Logout"),e.qZA()()()()),2&t&&(e.ekj("isExpanded",i.isExpanded),e.xp6(1),e.Q6J("ngIf",i.isExpanded),e.xp6(1),e.Q6J("ngIf",!i.isExpanded),e.xp6(1),e.Q6J("ngIf",e.lcZ(4,23,i.currentUser$)),e.xp6(3),e.Q6J("ngIf",i.isExpanded),e.xp6(1),e.Q6J("ngIf",!i.isExpanded),e.xp6(2),e.Q6J("routerLink",e.DdM(25,F))("routerLinkActiveOptions",e.DdM(26,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(27,k))("routerLinkActiveOptions",e.DdM(28,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(29,I))("routerLinkActiveOptions",e.DdM(30,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(31,w))("routerLinkActiveOptions",e.DdM(32,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(33,E))("routerLinkActiveOptions",e.DdM(34,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(35,R))("routerLinkActiveOptions",e.DdM(36,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(37,J))("routerLinkActiveOptions",e.DdM(38,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(39,N))("routerLinkActiveOptions",e.DdM(40,s)))},directives:[l.O5,a.rH,a.Od],pipes:[l.Ov],styles:[".sidenav--menu-toggle[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:16px}.sidenav--menu-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:8px;border-radius:8px;cursor:pointer;transition:all .3s ease-in-out;background-color:#fff;color:#000;border:1px solid black}.sidenav--menu-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{background-color:#000;color:#fff}.sidenav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:32px;cursor:default;-webkit-user-select:none;user-select:none}.sidenav[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{display:flex;margin:0 16px;border-radius:8px;transition:all .3s ease-in-out;cursor:pointer}.sidenav[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]:hover{background-color:#f3f3f3}.sidenav[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:8px;border:1px solid grey;padding:2px}.sidenav[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:8px 0 0;padding:0;display:flex;flex-direction:column;align-items:center;height:100%}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;margin-bottom:4px;padding-left:16px;padding-right:16px;text-decoration:none;color:#000;cursor:pointer}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:8px 0;font-size:24px}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:azure}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{font-weight:700}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#00f}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.logout[_ngcontent-%COMP%]{flex:1}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.logout[_ngcontent-%COMP%]:hover{background-color:#fff}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.logout[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.logout[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#8b0000}.sidenav.isExpanded[_ngcontent-%COMP%]   .sidenav--menu-toggle[_ngcontent-%COMP%]{justify-content:flex-end}.sidenav.isExpanded[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{margin-right:8px}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{align-items:flex-start;min-width:300px}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{justify-content:flex-start}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:16px}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}"]}),n})();var g=r(4889);let _=(()=>{class n{constructor(){this.isExpanded=!0}onResize(){this.isExpanded=window.innerWidth>820}ngOnInit(){this.onResize()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dashboard"]],hostBindings:function(t,i){1&t&&e.NdJ("resize",function(u){return i.onResize(u)},!1,e.Jf7)},decls:6,vars:1,consts:[["autosize",""],["mode","side","disableClose","true","opened","true"],["drawer",""],[3,"isExpanded","expanded"],[1,"dashboard-wrapper"]],template:function(t,i){1&t&&(e.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1,2)(3,"app-sidenav",3),e.NdJ("expanded",function(u){return i.isExpanded=u}),e.qZA()(),e.TgZ(4,"div",4),e._UZ(5,"router-outlet"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("isExpanded",i.isExpanded))},directives:[g.kh,g.jA,d,a.lC],styles:[".dashboard-wrapper[_ngcontent-%COMP%]{padding:16px 32px}"]}),n})(),C=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-category-list"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"CATEGORIES LIST"),e.qZA())},styles:[""]}),n})();var c=r(1125),Q=r(42);let f=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-cavelizer-components"]],decls:121,vars:1,consts:[["hideToggle","",3,"expanded"],[2,"display","flex","gap","16px","flex-direction","column"],[2,"display","flex","gap","16px"],[1,"white","big"],["prefix","",1,"las","la-angle-left"],["suffix","",1,"las","la-angle-right"],[1,"white"],[1,"white","small"],[1,"big"],[1,"small"],[1,"big","grey"],[1,"grey"],[1,"small","grey"],[1,"big","transparent"],[1,"transparent"],[1,"small","transparent"],[1,"margin:","30px;"]],template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"CAVELIZER COMPONENTS"),e.qZA(),e.TgZ(2,"mat-accordion")(3,"mat-expansion-panel",0)(4,"mat-expansion-panel-header")(5,"mat-panel-title")(6,"strong"),e._uU(7,"cavelizer-button"),e.qZA()(),e.TgZ(8,"mat-panel-description"),e._uU(9," Creat de Sorin "),e.qZA()(),e.TgZ(10,"div",1)(11,"div",2)(12,"cavelizer-button",3),e._uU(13,"Submit cavelizer"),e.qZA(),e.TgZ(14,"cavelizer-button",3),e._UZ(15,"i",4),e._uU(16," Submit cavelizer "),e.qZA(),e.TgZ(17,"cavelizer-button",3),e._uU(18," Submit cavelizer "),e._UZ(19,"i",5),e.qZA()(),e.TgZ(20,"div",2)(21,"cavelizer-button",6),e._uU(22,"Submit cavelizer"),e.qZA(),e.TgZ(23,"cavelizer-button",6),e._UZ(24,"i",4),e._uU(25,"Submit cavelizer "),e.qZA(),e.TgZ(26,"cavelizer-button",6),e._UZ(27,"i",5),e._uU(28,"Submit cavelizer "),e.qZA()(),e.TgZ(29,"div",2)(30,"cavelizer-button",7),e._uU(31,"Submit cavelizer"),e.qZA(),e.TgZ(32,"cavelizer-button",7),e._UZ(33,"i",4),e._uU(34,"Submit cavelizer "),e.qZA(),e.TgZ(35,"cavelizer-button",7),e._UZ(36,"i",5),e._uU(37,"Submit cavelizer "),e.qZA()(),e.TgZ(38,"div",2)(39,"cavelizer-button",8),e._uU(40,"Submit cavelizer"),e.qZA(),e.TgZ(41,"cavelizer-button",8),e._UZ(42,"i",4),e._uU(43,"Submit cavelizer "),e.qZA(),e.TgZ(44,"cavelizer-button",8),e._UZ(45,"i",5),e._uU(46,"Submit cavelizer "),e.qZA()(),e.TgZ(47,"div",2)(48,"cavelizer-button"),e._uU(49,"Submit cavelizer"),e.qZA(),e.TgZ(50,"cavelizer-button"),e._UZ(51,"i",4),e._uU(52,"Submit cavelizer"),e.qZA(),e.TgZ(53,"cavelizer-button"),e._UZ(54,"i",5),e._uU(55,"Submit cavelizer"),e.qZA()(),e.TgZ(56,"div",2)(57,"cavelizer-button",9),e._uU(58,"Submit cavelizer"),e.qZA(),e.TgZ(59,"cavelizer-button",9),e._UZ(60,"i",4),e._uU(61,"Submit cavelizer "),e.qZA(),e.TgZ(62,"cavelizer-button",9),e._UZ(63,"i",5),e._uU(64,"Submit cavelizer "),e.qZA()(),e.TgZ(65,"div",2)(66,"cavelizer-button",10),e._uU(67,"Submit cavelizer"),e.qZA(),e.TgZ(68,"cavelizer-button",10),e._UZ(69,"i",4),e._uU(70,"Submit cavelizer "),e.qZA(),e.TgZ(71,"cavelizer-button",10),e._UZ(72,"i",5),e._uU(73,"Submit cavelizer "),e.qZA()(),e.TgZ(74,"div",2)(75,"cavelizer-button",11),e._uU(76,"Submit cavelizer"),e.qZA(),e.TgZ(77,"cavelizer-button",11),e._UZ(78,"i",4),e._uU(79,"Submit cavelizer "),e.qZA(),e.TgZ(80,"cavelizer-button",11),e._UZ(81,"i",5),e._uU(82,"Submit cavelizer "),e.qZA()(),e.TgZ(83,"div",2)(84,"cavelizer-button",12),e._uU(85,"Submit cavelizer"),e.qZA(),e.TgZ(86,"cavelizer-button",12),e._UZ(87,"i",4),e._uU(88,"Submit cavelizer "),e.qZA(),e.TgZ(89,"cavelizer-button",12),e._UZ(90,"i",5),e._uU(91,"Submit cavelizer "),e.qZA()(),e.TgZ(92,"div",2)(93,"cavelizer-button",13),e._uU(94,"Submit cavelizer"),e.qZA(),e.TgZ(95,"cavelizer-button",13),e._UZ(96,"i",4),e._uU(97,"Submit cavelizer "),e.qZA(),e.TgZ(98,"cavelizer-button",13),e._UZ(99,"i",5),e._uU(100,"Submit cavelizer"),e.qZA()(),e.TgZ(101,"div",2)(102,"cavelizer-button",14),e._uU(103,"Submit cavelizer"),e.qZA(),e.TgZ(104,"cavelizer-button",14),e._UZ(105,"i",4),e._uU(106,"Submit cavelizer "),e.qZA(),e.TgZ(107,"cavelizer-button",14),e._UZ(108,"i",5),e._uU(109,"Submit cavelizer "),e.qZA()(),e.TgZ(110,"div",2)(111,"cavelizer-button",15),e._uU(112,"Submit cavelizer"),e.qZA(),e.TgZ(113,"cavelizer-button",15),e._UZ(114,"i",4),e._uU(115,"Submit cavelizer"),e.qZA(),e.TgZ(116,"cavelizer-button",15),e._UZ(117,"i",5),e._uU(118,"Submit cavelizer"),e.qZA()()(),e.TgZ(119,"button",16),e._uU(120,"Submit"),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("expanded",!0))},directives:[c.pp,c.ib,c.yz,c.yK,c.u4,Q.r],styles:[""]}),n})(),v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-documentation"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"DOCUMENTATION"),e.qZA())},styles:[""]}),n})(),Z=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-panel"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"PANEL"),e.qZA())},styles:[""]}),n})(),U=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-permission-list"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"PERMISSIONS LIST"),e.qZA())},styles:[""]}),n})(),T=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-product-list"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"PRODUCTS LIST"),e.qZA())},styles:[""]}),n})(),O=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-role-list"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"ROLES LIST"),e.qZA())},styles:[""]}),n})();const X=[{path:"",component:_,children:[{path:"",pathMatch:"full",redirectTo:"panel"},{path:"panel",component:Z},{path:"users",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user-list"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"USERS LIST"),e.qZA())},styles:[""]}),n})()},{path:"categories",component:C},{path:"cavelizer-components",component:f},{path:"docs",component:v},{path:"permissions",component:U},{path:"products",component:T},{path:"roles",component:O}]},{path:"**",redirectTo:"panel"}];let B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[a.Bz.forChild(X)],a.Bz]}),n})(),j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,B,P.m]]}),n})()}}]);
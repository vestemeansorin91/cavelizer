"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[470],{5470:(ee,m,i)=>{i.r(m),i.d(m,{DashboardModule:()=>K});var a=i(9808),z=i(4131),e=i(5e3),P=i(698),d=i(665),g=i(5620),c=i(3692);function M(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"cavelizer"),e.qZA())}function S(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"c"),e.qZA())}function D(t,o){1&t&&e._UZ(0,"i",17)}function q(t,o){1&t&&e._UZ(0,"i",18)}const L=function(){return["/dashboard","panel"]},s=function(){return{exact:!0}},F=function(){return["/dashboard","users"]},k=function(){return["/dashboard","products"]},I=function(){return["/dashboard","roles"]},w=function(){return["/dashboard","permissions"]},E=function(){return["/dashboard","categories"]},R=function(){return["/dashboard","docs"]},J=function(){return["/dashboard","cavelizer-components"]},N=function(){return["/shop"]};let f=(()=>{class t{constructor(n){this.store=n,this.expanded=new e.vpe,this.isExpanded=!1,this.currentUser$=this.store.select(d.UH)}ngOnInit(){}logout(){this.store.dispatch(P.Y.logoutAction())}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sidenav"]],inputs:{isExpanded:"isExpanded"},outputs:{expanded:"expanded"},decls:47,vars:42,consts:[[1,"sidenav"],[4,"ngIf"],[1,"sidenav--menu-toggle",3,"click"],["class","las la-angle-left",4,"ngIf"],["class","las la-angle-right",4,"ngIf"],["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions"],[1,"las","la-desktop"],[1,"las","la-user-friends"],[1,"las","la-shopping-bag"],[1,"las","la-id-badge"],[1,"las","la-user-shield"],[1,"las","la-list"],[1,"las","la-book"],[1,"las","la-shapes"],[1,"las","la-store-alt"],[3,"click"],[1,"las","la-power-off"],[1,"las","la-angle-left"],[1,"las","la-angle-right"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0),e.YNc(1,M,2,0,"h1",1),e.YNc(2,S,2,0,"h1",1),e.TgZ(3,"span",2),e.NdJ("click",function(){return r.isExpanded=!r.isExpanded}),e.YNc(4,D,1,0,"i",3),e.YNc(5,q,1,0,"i",4),e.qZA(),e.TgZ(6,"ul")(7,"li",5),e._UZ(8,"i",6),e.TgZ(9,"span"),e._uU(10,"Dashboard"),e.qZA()(),e.TgZ(11,"li",5),e._UZ(12,"i",7),e.TgZ(13,"span"),e._uU(14,"Users"),e.qZA()(),e.TgZ(15,"li",5),e._UZ(16,"i",8),e.TgZ(17,"span"),e._uU(18,"Products"),e.qZA()(),e.TgZ(19,"li",5),e._UZ(20,"i",9),e.TgZ(21,"span"),e._uU(22,"Roles"),e.qZA()(),e.TgZ(23,"li",5),e._UZ(24,"i",10),e.TgZ(25,"span"),e._uU(26,"Permissions"),e.qZA()(),e.TgZ(27,"li",5),e._UZ(28,"i",11),e.TgZ(29,"span"),e._uU(30,"Categories"),e.qZA()(),e.TgZ(31,"li",5),e._UZ(32,"i",12),e.TgZ(33,"span"),e._uU(34,"Documentation"),e.qZA()(),e.TgZ(35,"li",5),e._UZ(36,"i",13),e.TgZ(37,"span"),e._uU(38,"Components"),e.qZA()(),e.TgZ(39,"li",5),e._UZ(40,"i",14),e.TgZ(41,"span"),e._uU(42,"Go to shop"),e.qZA()(),e.TgZ(43,"li",15),e.NdJ("click",function(){return r.logout()}),e._UZ(44,"i",16),e.TgZ(45,"span"),e._uU(46,"Logout"),e.qZA()()()()),2&n&&(e.ekj("isExpanded",r.isExpanded),e.xp6(1),e.Q6J("ngIf",r.isExpanded),e.xp6(1),e.Q6J("ngIf",!r.isExpanded),e.xp6(2),e.Q6J("ngIf",r.isExpanded),e.xp6(1),e.Q6J("ngIf",!r.isExpanded),e.xp6(2),e.Q6J("routerLink",e.DdM(24,L))("routerLinkActiveOptions",e.DdM(25,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(26,F))("routerLinkActiveOptions",e.DdM(27,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(28,k))("routerLinkActiveOptions",e.DdM(29,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(30,I))("routerLinkActiveOptions",e.DdM(31,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(32,w))("routerLinkActiveOptions",e.DdM(33,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(34,E))("routerLinkActiveOptions",e.DdM(35,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(36,R))("routerLinkActiveOptions",e.DdM(37,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(38,J))("routerLinkActiveOptions",e.DdM(39,s)),e.xp6(4),e.Q6J("routerLink",e.DdM(40,N))("routerLinkActiveOptions",e.DdM(41,s)))},directives:[a.O5,c.Od,c.rH],styles:[".sidenav--menu-toggle[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:16px}.sidenav--menu-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:8px;border-radius:8px;cursor:pointer;transition:all .3s ease-in-out;background-color:#000;color:#fff;border:1px solid black}.sidenav--menu-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{background-color:#000;color:#fff}.sidenav[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:32px;cursor:default;-webkit-user-select:none;user-select:none;color:#fff}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:32px 0 0;padding:0;display:flex;flex-direction:column;align-items:center}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;margin-bottom:4px;padding-left:16px;padding-right:16px;text-decoration:none;color:#fff;cursor:pointer;transition:all .3s ease-in-out}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;margin:8px 0;font-size:24px}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#3e405c}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#4a4b5c}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#46b9df}.sidenav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type):nth-last-of-type(-n+2){margin-top:128px}.sidenav.isExpanded[_ngcontent-%COMP%]   .sidenav--menu-toggle[_ngcontent-%COMP%]{justify-content:flex-end}.sidenav.isExpanded[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-img[_ngcontent-%COMP%]{margin-right:8px}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{align-items:flex-start;min-width:300px}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{justify-content:flex-start}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:16px}.sidenav.isExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}"]}),t})();var _=i(4889);const Z=function(){return["/user/profile"]};function Q(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"span",7),e._uU(2),e.qZA(),e._UZ(3,"img",8),e.BQk()),2&t){const n=o.ngIf;e.xp6(1),e.Q6J("routerLink",e.DdM(4,Z)),e.xp6(1),e.Oqu(n.fullName),e.xp6(1),e.Q6J("routerLink",e.DdM(5,Z))("src",(null==n?null:n.avatarBlobUrl)||"https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1320751178?k=20&m=1320751178&s=612x612&w=0&h=qBg0zl3GQvll4dI5m0VDidziZN5VWnghNQ2rt-6aln0=",e.LSH)}}let v=(()=>{class t{constructor(n){this.store=n,this.currentUser$=this.store.select(d.UH)}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-topbar"]],decls:8,vars:3,consts:[[1,"bg-light","border-bottom","py--16","px--32","width--full","justify--space-between","align--center"],["type","text","placeholder","Search for ...",1,"width--320"],[1,"align--center"],[1,"las","la-cog","fs--32","mr--40"],[1,"las","la-bell","fs--32","mr--40"],[1,"vertical-divider","height--30"],[4,"ngIf"],[1,"ml--32","mr--12","fs--14","text--bold","pointer",3,"routerLink"],[1,"size--40","circle","pointer",3,"routerLink","src"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"input",1),e.TgZ(2,"div",2),e._UZ(3,"i",3)(4,"i",4)(5,"span",5),e.YNc(6,Q,4,6,"ng-container",6),e.ALo(7,"async"),e.qZA()()),2&n&&(e.xp6(6),e.Q6J("ngIf",e.lcZ(7,1,r.currentUser$)))},directives:[a.O5,c.rH],pipes:[a.Ov],styles:[".top-bar[_ngcontent-%COMP%]{background-color:#f5f5f5}"]}),t})(),C=(()=>{class t{constructor(){this.isExpanded=!0}onResize(){this.isExpanded=window.innerWidth>820}ngOnInit(){this.onResize()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],hostBindings:function(n,r){1&n&&e.NdJ("resize",function(u){return r.onResize(u)},!1,e.Jf7)},decls:7,vars:1,consts:[["autosize",""],["mode","side","disableClose","true","opened","true"],["drawer",""],[3,"isExpanded","expanded"],[1,"dashboard-wrapper"]],template:function(n,r){1&n&&(e.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1,2)(3,"app-sidenav",3),e.NdJ("expanded",function(u){return r.isExpanded=u}),e.qZA()(),e._UZ(4,"app-topbar"),e.TgZ(5,"div",4),e._UZ(6,"router-outlet"),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("isExpanded",r.isExpanded))},directives:[_.kh,_.jA,f,v,c.lC],styles:[".dashboard-wrapper[_ngcontent-%COMP%]{padding:16px 32px}"]}),t})(),U=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-category-list"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"h1"),e._uU(1,"CATEGORIES LIST"),e.qZA())},styles:[""]}),t})();var l=i(1125),X=i(42);let T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-cavelizer-components"]],decls:121,vars:0,consts:[["hideToggle",""],[2,"display","flex","gap","16px","flex-direction","column"],[2,"display","flex","gap","16px"],[1,"white","big"],["prefix","",1,"las","la-angle-left"],["suffix","",1,"las","la-angle-right"],[1,"white"],[1,"white","small"],[1,"big"],[1,"small"],[1,"big","grey"],[1,"grey"],[1,"small","grey"],[1,"big","transparent"],[1,"transparent"],[1,"small","transparent"],[1,"margin:","30px;"]],template:function(n,r){1&n&&(e.TgZ(0,"h1"),e._uU(1,"CAVELIZER COMPONENTS"),e.qZA(),e.TgZ(2,"mat-accordion")(3,"mat-expansion-panel",0)(4,"mat-expansion-panel-header")(5,"mat-panel-title")(6,"strong"),e._uU(7,"cavelizer-button"),e.qZA()(),e.TgZ(8,"mat-panel-description"),e._uU(9," Creat de Sorin "),e.qZA()(),e.TgZ(10,"div",1)(11,"div",2)(12,"cavelizer-button",3),e._uU(13,"Submit cavelizer"),e.qZA(),e.TgZ(14,"cavelizer-button",3),e._UZ(15,"i",4),e._uU(16," Submit cavelizer "),e.qZA(),e.TgZ(17,"cavelizer-button",3),e._uU(18," Submit cavelizer "),e._UZ(19,"i",5),e.qZA()(),e.TgZ(20,"div",2)(21,"cavelizer-button",6),e._uU(22,"Submit cavelizer"),e.qZA(),e.TgZ(23,"cavelizer-button",6),e._UZ(24,"i",4),e._uU(25,"Submit cavelizer "),e.qZA(),e.TgZ(26,"cavelizer-button",6),e._UZ(27,"i",5),e._uU(28,"Submit cavelizer "),e.qZA()(),e.TgZ(29,"div",2)(30,"cavelizer-button",7),e._uU(31,"Submit cavelizer"),e.qZA(),e.TgZ(32,"cavelizer-button",7),e._UZ(33,"i",4),e._uU(34,"Submit cavelizer "),e.qZA(),e.TgZ(35,"cavelizer-button",7),e._UZ(36,"i",5),e._uU(37,"Submit cavelizer "),e.qZA()(),e.TgZ(38,"div",2)(39,"cavelizer-button",8),e._uU(40,"Submit cavelizer"),e.qZA(),e.TgZ(41,"cavelizer-button",8),e._UZ(42,"i",4),e._uU(43,"Submit cavelizer "),e.qZA(),e.TgZ(44,"cavelizer-button",8),e._UZ(45,"i",5),e._uU(46,"Submit cavelizer "),e.qZA()(),e.TgZ(47,"div",2)(48,"cavelizer-button"),e._uU(49,"Submit cavelizer"),e.qZA(),e.TgZ(50,"cavelizer-button"),e._UZ(51,"i",4),e._uU(52,"Submit cavelizer"),e.qZA(),e.TgZ(53,"cavelizer-button"),e._UZ(54,"i",5),e._uU(55,"Submit cavelizer"),e.qZA()(),e.TgZ(56,"div",2)(57,"cavelizer-button",9),e._uU(58,"Submit cavelizer"),e.qZA(),e.TgZ(59,"cavelizer-button",9),e._UZ(60,"i",4),e._uU(61,"Submit cavelizer "),e.qZA(),e.TgZ(62,"cavelizer-button",9),e._UZ(63,"i",5),e._uU(64,"Submit cavelizer "),e.qZA()(),e.TgZ(65,"div",2)(66,"cavelizer-button",10),e._uU(67,"Submit cavelizer"),e.qZA(),e.TgZ(68,"cavelizer-button",10),e._UZ(69,"i",4),e._uU(70,"Submit cavelizer "),e.qZA(),e.TgZ(71,"cavelizer-button",10),e._UZ(72,"i",5),e._uU(73,"Submit cavelizer "),e.qZA()(),e.TgZ(74,"div",2)(75,"cavelizer-button",11),e._uU(76,"Submit cavelizer"),e.qZA(),e.TgZ(77,"cavelizer-button",11),e._UZ(78,"i",4),e._uU(79,"Submit cavelizer "),e.qZA(),e.TgZ(80,"cavelizer-button",11),e._UZ(81,"i",5),e._uU(82,"Submit cavelizer "),e.qZA()(),e.TgZ(83,"div",2)(84,"cavelizer-button",12),e._uU(85,"Submit cavelizer"),e.qZA(),e.TgZ(86,"cavelizer-button",12),e._UZ(87,"i",4),e._uU(88,"Submit cavelizer "),e.qZA(),e.TgZ(89,"cavelizer-button",12),e._UZ(90,"i",5),e._uU(91,"Submit cavelizer "),e.qZA()(),e.TgZ(92,"div",2)(93,"cavelizer-button",13),e._uU(94,"Submit cavelizer"),e.qZA(),e.TgZ(95,"cavelizer-button",13),e._UZ(96,"i",4),e._uU(97,"Submit cavelizer "),e.qZA(),e.TgZ(98,"cavelizer-button",13),e._UZ(99,"i",5),e._uU(100,"Submit cavelizer"),e.qZA()(),e.TgZ(101,"div",2)(102,"cavelizer-button",14),e._uU(103,"Submit cavelizer"),e.qZA(),e.TgZ(104,"cavelizer-button",14),e._UZ(105,"i",4),e._uU(106,"Submit cavelizer "),e.qZA(),e.TgZ(107,"cavelizer-button",14),e._UZ(108,"i",5),e._uU(109,"Submit cavelizer "),e.qZA()(),e.TgZ(110,"div",2)(111,"cavelizer-button",15),e._uU(112,"Submit cavelizer"),e.qZA(),e.TgZ(113,"cavelizer-button",15),e._UZ(114,"i",4),e._uU(115,"Submit cavelizer"),e.qZA(),e.TgZ(116,"cavelizer-button",15),e._UZ(117,"i",5),e._uU(118,"Submit cavelizer"),e.qZA()()(),e.TgZ(119,"button",16),e._uU(120,"Submit"),e.qZA()()())},directives:[l.pp,l.ib,l.yz,l.yK,l.u4,X.r],styles:[""]}),t})(),b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-documentation"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"h1"),e._uU(1,"DOCUMENTATION"),e.qZA())},styles:[""]}),t})(),h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-panel"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"h1"),e._uU(1,"PANEL"),e.qZA())},styles:[""]}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-permission-list"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"h1"),e._uU(1,"PERMISSIONS LIST"),e.qZA())},styles:[""]}),t})(),O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-product-list"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"h1"),e._uU(1,"PRODUCTS LIST"),e.qZA())},styles:[""]}),t})(),x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-role-list"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"h1"),e._uU(1,"ROLES LIST"),e.qZA())},styles:[""]}),t})();var Y=i(2340),j=i(520);const B=Y.N.apiUrl+"/users";let H=(()=>{class t{constructor(n){this.http=n}getUsers(){return this.http.get(B)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(j.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function $(t,o){if(1&t&&(e.TgZ(0,"div"),e._uU(1,"\n    "),e.TgZ(2,"pre"),e._uU(3),e.ALo(4,"json"),e.qZA(),e._uU(5,"\n  "),e.qZA()),2&t){const n=o.$implicit;e.xp6(3),e.Oqu(e.lcZ(4,1,n))}}function G(t,o){if(1&t&&(e.TgZ(0,"pre"),e._uU(1,"  "),e.YNc(2,$,6,3,"div",1),e._uU(3,"\n"),e.qZA()),2&t){const n=o.ngIf;e.xp6(2),e.Q6J("ngForOf",n)}}const V=[{path:"",component:C,children:[{path:"",pathMatch:"full",redirectTo:"panel"},{path:"panel",component:h},{path:"users",component:(()=>{class t{constructor(n){this.usersService=n,this.users$=this.usersService.getUsers()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(H))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-list"]],decls:4,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(n,r){1&n&&(e.TgZ(0,"h1"),e._uU(1,"USERS LIST"),e.qZA(),e.YNc(2,G,4,1,"pre",0),e.ALo(3,"async")),2&n&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,r.users$)))},directives:[a.O5,a.sg],pipes:[a.Ov,a.Ts],styles:[""]}),t})()},{path:"categories",component:U},{path:"cavelizer-components",component:T},{path:"docs",component:b},{path:"permissions",component:y},{path:"products",component:O},{path:"roles",component:x}]},{path:"**",redirectTo:"panel"}];let W=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(V)],c.Bz]}),t})(),K=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez,W,z.m]]}),t})()}}]);
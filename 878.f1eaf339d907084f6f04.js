"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[878],{1878:(x,m,s)=>{s.r(m),s.d(m,{HomeModule:()=>A});var r=s(9763),v=s(8239),e=s(7716),c=s(7093),u=s(8295),p=s(9983),d=s(3679),f=s(8583),h=s(1095),C=s(1436),M=s(6627);function T(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(o),e.oxw().goToMain()}),e.TgZ(1,"mat-icon"),e._uU(2,"thumb_up_alt"),e.qZA(),e.qZA()}}function y(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1,"Der Zugangscode war nicht korrekt. Versuche es erneut \u{1f60a}"),e.qZA())}const E=[{path:"",component:(()=>{class t{constructor(o,n){this._router=o,this._route=n,this.passCode="",this.wrongCode=!1}ngOnInit(){var o,n;this.redirectIfNecessary(),console.log(null===(n=null===(o=this._route.routeConfig)||void 0===o?void 0:o.component)||void 0===n?void 0:n.name),this._route.queryParams.subscribe(i=>{console.log(i),i.code&&null!=i.code&&(this.passCode=i.code)})}goToMain(){console.log(this.passCode),"220527"==this.passCode?this._router.navigate(["/paragraph"],{queryParams:{code:this.passCode}}):(this.wrongCode=!0,this.passCode="")}redirectIfNecessary(){var o=this;return(0,v.Z)(function*(){let n=sessionStorage.getItem("path");if(n){let i={};if(-1!=n.indexOf("?")){const g=n.split("?")[1],O=new URLSearchParams(g);i=o.fromEntries(O),n=n.split("?")[0]}const l=n.split("/").filter(g=>g.length>0).slice(1).join("/");console.log(l),yield o._router.navigate(["/"+decodeURI(l)],{queryParams:i}),sessionStorage.removeItem("path")}})()}fromEntries(o){return o.reduce((n,[i,l])=>Object.assign(Object.assign({},n),{[i]:l}),{})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(r.F0),e.Y36(r.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:10,vars:3,consts:function(){let a,o;return a=$localize`:localized.home.typeCode|type the code:Bitte gebe deinen Zuganscode aus der Einladung ein:`,o=$localize`:localized.home.code|code:Zugangscode`,[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","25px",2,"height","90vh"],[2,"text-align","center","color","#354F52","padding-left","20px","padding-right","20px"],a,["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px"],["appearance","fill",2,"width","200px"],o,["matInput","",3,"ngModel","ngModelChange"],["class","add-btn","matTooltip","Und los!","mat-mini-fab","","color","primary","aria-label","Und los!",3,"click",4,"ngIf"],[4,"ngIf"],["matTooltip","Und los!","mat-mini-fab","","color","primary","aria-label","Und los!",1,"add-btn",3,"click"]]},template:function(o,n){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"p",1),e.SDv(2,2),e.qZA(),e.TgZ(3,"div",3),e.TgZ(4,"mat-form-field",4),e.TgZ(5,"mat-label"),e.SDv(6,5),e.qZA(),e.TgZ(7,"input",6),e.NdJ("ngModelChange",function(l){return n.passCode=l}),e.qZA(),e.qZA(),e.YNc(8,T,3,0,"button",7),e.qZA(),e.YNc(9,y,2,0,"div",8),e.qZA()),2&o&&(e.xp6(7),e.Q6J("ngModel",n.passCode),e.xp6(1),e.Q6J("ngIf",n.passCode),e.xp6(1),e.Q6J("ngIf",n.wrongCode))},directives:[c.xw,c.Wh,c.SQ,u.KE,u.hX,p.Nt,d.Fj,d.JJ,d.On,f.O5,h.lW,C.gM,M.Hw],encapsulation:2}),t})()}];let H=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.Bz.forChild(E)],r.Bz]}),t})();var Z=s(7356);let A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.ez,H,d.u5,u.lN,p.c,M.Ps,h.ot,C.AV,Z.o9]]}),t})()}}]);
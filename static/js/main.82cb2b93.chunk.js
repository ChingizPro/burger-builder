(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__34C0c",BreadTop:"BurgerIngredient_BreadTop__3jaeF",Seeds1:"BurgerIngredient_Seeds1__3yaYr",Seeds2:"BurgerIngredient_Seeds2__3O4zq",Meat:"BurgerIngredient_Meat__oIsr4",Cheese:"BurgerIngredient_Cheese__EdX88",Salad:"BurgerIngredient_Salad__2UJfl",Bacon:"BurgerIngredient_Bacon__2FfqK"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2IzyO",Label:"BuildControl_Label__2Rb4T",Less:"BuildControl_Less__22afS",More:"BuildControl_More__3F8_l"}},,function(e,t,n){e.exports={Burger:"Burger_Burger__2estx","Burger-text":"Burger_Burger-text__3tkMj"}},function(e,t,n){},,function(e,t,n){e.exports={content:"Layout_content__1I57I"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1wO66"}},,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(7),c=n.n(s),l=(n(6),function(e){return e.children}),o=n(8),i=n.n(o),d=n(0),u=function(e){return Object(d.jsxs)(l,{children:["[Nav] [Toolbar] [Backdrop]",Object(d.jsx)("main",{className:i.a.content,children:e.children})]})},b=n(9),j=n(10),_=n(14),B=n(12),g=n(13),x=n(2),O=n.n(x),h=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(d.jsx)("div",{className:O.a.BreadBottom});break;case"bread-top":t=Object(d.jsxs)("div",{className:O.a.BreadTop,children:[Object(d.jsx)("div",{className:O.a.Seeds1}),Object(d.jsx)("div",{className:O.a.Seeds2})]});break;case"meat":t=Object(d.jsx)("div",{className:O.a.Meat});break;case"cheese":t=Object(d.jsx)("div",{className:O.a.Cheese});break;case"salad":t=Object(d.jsx)("div",{className:O.a.Salad});break;case"bacon":t=Object(d.jsx)("div",{className:O.a.Bacon});break;default:t=null}return t},m=n(5),p=n.n(m),f=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(g.a)(Array(e.ingredients[t])).map((function(e,n){return Object(d.jsx)(h,{type:t},t+n)}))}));return 0===(t=t.reduce((function(e,t){return e.concat(t)}),[])).length&&(t=Object(d.jsx)("p",{className:p.a["Burger-text"],children:" Please start adding ingredients!"})),Object(d.jsxs)("div",{className:p.a.Burger,children:[Object(d.jsx)(h,{type:"bread-top"}),t,Object(d.jsx)(h,{type:"bread-bottom"})]})},v=n(3),C=n.n(v),y=function(e){return Object(d.jsxs)("div",{className:C.a.BuildControl,children:[Object(d.jsx)("div",{className:C.a.Label,children:e.label}),Object(d.jsx)("button",{className:C.a.Less,children:"Less"}),Object(d.jsx)("button",{className:C.a.More,children:"More"})]})},N=n(11),I=n.n(N),S=[{label:"Salad",type:"salad"},{label:"Meat",type:"meat"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"}],k=function(){return Object(d.jsx)("div",{className:I.a.BuildControls,children:S.map((function(e){return Object(d.jsx)(y,{label:e.label},e.label)}))})},L=function(e){Object(_.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{salad:0,meat:0,cheese:0,bacon:0}},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(l,{children:[Object(d.jsx)(f,{ingredients:this.state.ingredients}),Object(d.jsx)(k,{})]})}}]),n}(r.Component);var M=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(u,{children:Object(d.jsx)(L,{})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),F()}],[[20,1,2]]]);
//# sourceMappingURL=main.82cb2b93.chunk.js.map
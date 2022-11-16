/*! For license information please see component---src-pages-aboutya-js-9d46a7781ba2c84fab4b.js.LICENSE.txt */
"use strict";(self.webpackChunkyateractives=self.webpackChunkyateractives||[]).push([[789],{4817:function(e,t){var n,a=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case r:case s:case i:case u:case p:return e;default:switch(e=e&&e.$$typeof){case l:case c:case m:case y:case f:case d:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference")},9665:function(e,t,n){n(4817)},6961:function(e,t,n){var a=(0,n(4040).Z)();t.Z=a},8130:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(4942),o=n(3366),r=n(7462),i=n(7294),s=n(5505),d=n(6550),c=n(1351),l=n(9236),m=n(197),u=(0,n(5512).ZP)(),p=n(3409),f=n(5893),y=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,p.Z)(),v=u("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,d.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),h=function(e){return(0,m.Z)({props:e,name:"MuiContainer",defaultTheme:g})},b=function(e,t){var n=e.classes,a=e.fixed,o=e.disableGutters,r=e.maxWidth,i={root:["root",r&&"maxWidth".concat((0,d.Z)(String(r))),a&&"fixed",o&&"disableGutters"]};return(0,l.Z)(i,(function(e){return(0,c.Z)(t,e)}),n)};var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?v:t,d=e.useThemeProps,c=void 0===d?h:d,l=e.componentName,m=void 0===l?"MuiContainer":l,u=n((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,a.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var a=n,o=t.breakpoints.values[a];return 0!==o&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({},"xs"===n.maxWidth&&(0,a.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,a.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),p=i.forwardRef((function(e,t){var n=c(e),a=n.className,i=n.component,d=void 0===i?"div":i,l=n.disableGutters,p=void 0!==l&&l,g=n.fixed,v=void 0!==g&&g,h=n.maxWidth,x=void 0===h?"lg":h,w=(0,o.Z)(n,y),Z=(0,r.Z)({},n,{component:d,disableGutters:p,fixed:v,maxWidth:x}),S=b(Z,m);return(0,f.jsx)(u,(0,r.Z)({as:d,ownerState:Z,className:(0,s.Z)(S.root,a),ref:t},w))}));return p}(),w=x},6600:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var a=n(7294),o=n(7957),r=n(5444),i=n(9692),s=n(6125),d=n.p+"static/YaterVId-b2dd815a8b61dd165911aaceed33ca5b.mp4",c=n(3366),l=n(7462),m=n(9236),u=n(5505),p=n(8379),f=n(6981),y=n(1351),g=n(9508);function v(e){return(0,y.Z)("MuiImageList",e)}(0,g.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var h=a.createContext({}),b=n(5893),x=["children","className","cols","component","rowHeight","gap","style","variant"],w=(0,p.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant]]}})((function(e){var t=e.ownerState;return(0,l.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===t.variant&&{display:"block"})})),Z=a.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiImageList"}),o=n.children,r=n.className,i=n.cols,s=void 0===i?2:i,d=n.component,p=void 0===d?"ul":d,y=n.rowHeight,g=void 0===y?"auto":y,Z=n.gap,S=void 0===Z?4:Z,I=n.style,C=n.variant,N=void 0===C?"standard":C,_=(0,c.Z)(n,x),k=a.useMemo((function(){return{rowHeight:g,gap:S,variant:N}}),[g,S,N]);a.useEffect((function(){0}),[]);var E="masonry"===N?(0,l.Z)({columnCount:s,columnGap:S},I):(0,l.Z)({gridTemplateColumns:"repeat(".concat(s,", 1fr)"),gap:S},I),T=(0,l.Z)({},n,{component:p,gap:S,rowHeight:g,variant:N}),L=function(e){var t=e.classes,n={root:["root",e.variant]};return(0,m.Z)(n,v,t)}(T);return(0,b.jsx)(w,(0,l.Z)({as:p,className:(0,u.Z)(L.root,L[N],r),ref:t,style:E,ownerState:T},_,{children:(0,b.jsx)(h.Provider,{value:k,children:o})}))})),S=n(4942),I=(n(9665),n(6340));function C(e){return(0,y.Z)("MuiImageListItem",e)}var N=(0,g.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),_=["children","className","cols","component","rows","style"],k=(0,p.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,S.Z)({},"& .".concat(N.img),t.img),t.root,t[n.variant]]}})((function(e){var t=e.ownerState;return(0,l.Z)({display:"block",position:"relative"},"standard"===t.variant&&{display:"flex",flexDirection:"column"},"woven"===t.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},(0,S.Z)({},"& .".concat(N.img),(0,l.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===t.variant&&{height:"auto",flexGrow:1})))})),E=a.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiImageListItem"}),o=n.children,r=n.className,i=n.cols,s=void 0===i?1:i,d=n.component,p=void 0===d?"li":d,y=n.rows,g=void 0===y?1:y,v=n.style,x=(0,c.Z)(n,_),w=a.useContext(h),Z=w.rowHeight,S=void 0===Z?"auto":Z,N=w.gap,E=w.variant,T="auto";"woven"===E?T=void 0:"auto"!==S&&(T=S*g+N*(g-1));var L=(0,l.Z)({},n,{cols:s,component:p,gap:N,rowHeight:S,rows:g,variant:E}),M=function(e){var t=e.classes,n={root:["root",e.variant],img:["img"]};return(0,m.Z)(n,C,t)}(L);return(0,b.jsx)(k,(0,l.Z)({as:p,className:(0,u.Z)(M.root,M[E],r),ref:t,style:(0,l.Z)({height:T,gridColumnEnd:"masonry"!==E?"span ".concat(s):void 0,gridRowEnd:"masonry"!==E?"span ".concat(g):void 0,marginBottom:"masonry"===E?N:void 0},v),ownerState:L},x,{children:a.Children.map(o,(function(e){return a.isValidElement(e)?"img"===e.type||(0,I.Z)(e,["Image"])?a.cloneElement(e,{className:(0,u.Z)(M.img,e.props.className)}):e:null}))}))})),T=n(3854),L=n(8151);function M(e){return(0,y.Z)("MuiListItemText",e)}var W=(0,g.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),R=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],j=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,S.Z)({},"& .".concat(W.primary),t.primary),(0,S.Z)({},"& .".concat(W.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,l.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),z=a.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiListItemText"}),o=n.children,r=n.className,i=n.disableTypography,s=void 0!==i&&i,d=n.inset,p=void 0!==d&&d,y=n.primary,g=n.primaryTypographyProps,v=n.secondary,h=n.secondaryTypographyProps,x=(0,c.Z)(n,R),w=a.useContext(L.Z).dense,Z=null!=y?y:o,S=v,I=(0,l.Z)({},n,{disableTypography:s,inset:p,primary:!!Z,secondary:!!S,dense:w}),C=function(e){var t=e.classes,n=e.inset,a=e.primary,o=e.secondary,r={root:["root",n&&"inset",e.dense&&"dense",a&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,m.Z)(r,M,t)}(I);return null==Z||Z.type===T.Z||s||(Z=(0,b.jsx)(T.Z,(0,l.Z)({variant:w?"body2":"body1",className:C.primary,component:null!=g&&g.variant?void 0:"span",display:"block"},g,{children:Z}))),null==S||S.type===T.Z||s||(S=(0,b.jsx)(T.Z,(0,l.Z)({variant:"body2",className:C.secondary,color:"text.secondary",display:"block"},h,{children:S}))),(0,b.jsxs)(j,(0,l.Z)({className:(0,u.Z)(C.root,r),ownerState:I,ref:t},x,{children:[Z,S]}))})),P=n(8130),A=n(6961),G=i.default.div.withConfig({displayName:"aboutya__AboutCon",componentId:"sc-1fybr50-0"})([""]),H=i.default.video.withConfig({displayName:"aboutya__AboutVid",componentId:"sc-1fybr50-1"})(["width:100% !important;height:auto !important;"]),B=i.default.div.withConfig({displayName:"aboutya__BtnCon",componentId:"sc-1fybr50-2"})(["display:flex;justify-content:center;padding-top:30px;padding-bottom:30px;"]),F=i.default.button.withConfig({displayName:"aboutya__AboutIngaBtn",componentId:"sc-1fybr50-3"})([":hover{background:#dcc9a4;}@media only screen and (min-width:2560px){font-size:40px;}"]),$=i.default.h1.withConfig({displayName:"aboutya__AboutTitle",componentId:"sc-1fybr50-4"})(["font-size:30px;text-align:center;@media only screen and (min-width:600px){font-size:40px;}@media only screen and (min-width:900px){font-size:35px;}@media only screen and (min-width:2560px){font-size:60px;}"]),V=i.default.p.withConfig({displayName:"aboutya__AboutSubText",componentId:"sc-1fybr50-5"})(["padding-top:20px;@media only screen and (min-width:600px){font-size:30px;}@media only screen and (min-width:900px){font-size:24px;padding:1rem;}@media only screen and (min-width:2560px){font-size:30px;}"]),q=i.default.div.withConfig({displayName:"aboutya__AboutHead",componentId:"sc-1fybr50-6"})(["padding:1rem;padding-bottom:40px;"]),D=i.default.div.withConfig({displayName:"aboutya__Card",componentId:"sc-1fybr50-7"})(["margin-bottom:20px;"]),O=i.default.div.withConfig({displayName:"aboutya__IngredientTitle",componentId:"sc-1fybr50-8"})(["font-size:18px;@media only screen and (min-width:600px){font-size:40px;}@media only screen and (min-width:2560px){font-size:60px;}"]),Y=(0,i.default)(s.G).withConfig({displayName:"aboutya__IngredientPic",componentId:"sc-1fybr50-9"})(["height:auto;"]),Q=i.default.div.withConfig({displayName:"aboutya__IngredientInfo",componentId:"sc-1fybr50-10"})(["display:none;@media only screen and (min-width:600px){display:initial;}"]),J=function(){var e=(0,r.useStaticQuery)("4165823278");return a.createElement(o.Z,null,a.createElement(P.Z,null,a.createElement(H,{loop:!0,autoPlay:!0,muted:!0,width:"560",height:"349",controls:!0},a.createElement("source",{src:d,type:"video/mp4"})),a.createElement(B,null,a.createElement(r.Link,{to:"/aboutInga"}," ",a.createElement(F,null,"About Inga"))),a.createElement(G,null,a.createElement(q,null,a.createElement($,null,e.sanityAboutya.aboutTitle),e.sanityAboutya.subTitle.map((function(e){return e.children.map((function(e){return a.createElement(V,null," ",e.text)}))})),a.createElement(Z,{sx:{"@media only screen and (min-width: 390px)":{display:"flex",flexFlow:"column nowrap",justifyContent:"center"},"@media only screen and (min-width: 600px)":{display:"grid"}}},e.sanityAboutya.cardArray.map((function(e,t){return a.createElement(E,{key:t},a.createElement(Y,{image:e.ingredientPic.image.asset.gatsbyImageData,alt:e.ingredientPic.altText,loading:"lazy"}),a.createElement(A.Z,{sx:{position:"absolute",display:"flex",flexFlow:"column wrap",justifyContent:"center",bottom:0,left:0,width:"100%",bgcolor:"rgba(0, 0, 0, 0.54)",color:"white",height:"100%",textAlign:"center",paddingBottom:"20px"}},a.createElement(D,null,a.createElement(O,null,e.ingredientTitle),e.ingredientText.map((function(e){return a.createElement(Q,null,e.children.map((function(e){return a.createElement(z,{sx:{position:"absolute",display:"flex",flexFlow:"column nowrap",justifyContent:"center"}},e.text)})))})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-aboutya-js-9d46a7781ba2c84fab4b.js.map
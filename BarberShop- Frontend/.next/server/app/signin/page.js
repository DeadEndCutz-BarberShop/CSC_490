(()=>{var e={};e.id=281,e.ids=[281],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},2181:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1825:()=>{},162:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=t(482),o=t(9108),n=t(2563),a=t.n(n),i=t(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let c=["",{children:["signin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5729)),"C:\\Users\\masad\\OneDrive\\Desktop\\barbershop-app\\src\\app\\signin\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,5848)),"C:\\Users\\masad\\OneDrive\\Desktop\\barbershop-app\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(t.bind(t,4496)),"C:\\Users\\masad\\OneDrive\\Desktop\\barbershop-app\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\masad\\OneDrive\\Desktop\\barbershop-app\\src\\app\\signin\\page.js"],u="/signin/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/signin/page",pathname:"/signin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7543:(e,r,t)=>{Promise.resolve().then(t.bind(t,5357)),Promise.resolve().then(t.bind(t,47))},4958:(e,r,t)=>{Promise.resolve().then(t.bind(t,6837)),Promise.resolve().then(t.bind(t,2628)),Promise.resolve().then(t.bind(t,8671)),Promise.resolve().then(t.bind(t,9642)),Promise.resolve().then(t.bind(t,807))},128:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},1494:(e,r,t)=>{Promise.resolve().then(t.bind(t,9899))},773:(e,r,t)=>{"use strict";t.d(r,{Z:()=>A});var s=t(1848),o=t(5651),n=t(3729),a=t(6815),i=t(5599),l=t(5866),c=t(9448),d=t(3139),u=t(7494),p=t(3722),m=t(5442),h=t(9927),g=t(7895);function x(e){return(0,g.ZP)("MuiLink",e)}let b=(0,h.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var v=t(6224),f=t(1143);let y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=e=>y[e]||e,P=({theme:e,ownerState:r})=>{let t=Z(r.color),s=(0,v.DW)(e,`palette.${t}`,!1)||r.color,o=(0,v.DW)(e,`palette.${t}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,f.Fq)(s,.4)};var j=t(5344);let C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=e=>{let{classes:r,component:t,focusVisible:s,underline:o}=e,n={root:["root",`underline${(0,l.Z)(o)}`,"button"===t&&"button",s&&"focusVisible"]};return(0,i.Z)(n,x,r)},w=(0,c.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`underline${(0,l.Z)(t.underline)}`],"button"===t.component&&r.button]}})(({theme:e,ownerState:r})=>(0,o.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:P({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.focusVisible}`]:{outline:"auto"}})),A=n.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiLink"}),{className:i,color:l="primary",component:c="a",onBlur:m,onFocus:h,TypographyClasses:g,underline:x="always",variant:b="inherit",sx:v}=t,f=(0,s.Z)(t,C),{isFocusVisibleRef:Z,onBlur:P,onFocus:A,ref:D}=(0,u.Z)(),[z,q]=n.useState(!1),L=(0,p.Z)(r,D),I=(0,o.Z)({},t,{color:l,component:c,focusVisible:z,underline:x,variant:b}),M=k(I);return(0,j.jsx)(w,(0,o.Z)({color:l,className:(0,a.Z)(M.root,i),classes:g,component:c,onBlur:e=>{P(e),!1===Z.current&&q(!1),m&&m(e)},onFocus:e=>{A(e),!0===Z.current&&q(!0),h&&h(e)},ref:L,ownerState:I,variant:b,sx:[...Object.keys(y).includes(l)?[]:[{color:l}],...Array.isArray(v)?v:[v]]},f))})},905:(e,r,t)=>{"use strict";function s(e){let r=document.cookie.split(";");for(let t=0;t<r.length;t++){let s=r[t].trim();if(s.startsWith(e+"="))return s.substring(e.length+1)}return null}function o(){window.location.pathname="/signin",document.cookie.split(";").forEach(e=>{let[r]=e.split("=");document.cookie=`${r}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`})}t.d(r,{e:()=>s,m:()=>o})},9899:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>N});var s=t(5344),o=t(3729),n=t(5183),a=t(6147),i=t(2503),l=t(1848),c=t(5651),d=t(6815),u=t(5599),p=t(1143),m=t(1963),h=t(6172);let g=(0,h.Z)((0,s.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,h.Z)((0,s.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=(0,h.Z)((0,s.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var v=t(5866),f=t(3139),y=t(9448),Z=t(2605),P=t(9927),j=t(7895);function C(e){return(0,j.ZP)("MuiCheckbox",e)}let k=(0,P.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],A=e=>{let{classes:r,indeterminate:t,color:s,size:o}=e,n={root:["root",t&&"indeterminate",`color${(0,v.Z)(s)}`,`size${(0,v.Z)(o)}`]},a=(0,u.Z)(n,C,r);return(0,c.Z)({},r,a)},D=(0,y.ZP)(m.Z,{shouldForwardProp:e=>(0,Z.Z)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.indeterminate&&r.indeterminate,r[`size${(0,v.Z)(t.size)}`],"default"!==t.color&&r[`color${(0,v.Z)(t.color)}`]]}})(({theme:e,ownerState:r})=>(0,c.Z)({color:(e.vars||e).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===r.color?e.vars.palette.action.activeChannel:e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,p.Fq)("default"===r.color?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${k.checked}, &.${k.indeterminate}`]:{color:(e.vars||e).palette[r.color].main},[`&.${k.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),z=(0,s.jsx)(x,{}),q=(0,s.jsx)(g,{}),L=(0,s.jsx)(b,{}),I=o.forwardRef(function(e,r){var t,n;let a=(0,f.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:i=z,color:u="primary",icon:p=q,indeterminate:m=!1,indeterminateIcon:h=L,inputProps:g,size:x="medium",className:b}=a,v=(0,l.Z)(a,w),y=m?h:p,Z=m?h:i,P=(0,c.Z)({},a,{color:u,indeterminate:m,size:x}),j=A(P);return(0,s.jsx)(D,(0,c.Z)({type:"checkbox",inputProps:(0,c.Z)({"data-indeterminate":m},g),icon:o.cloneElement(y,{fontSize:null!=(t=y.props.fontSize)?t:x}),checkedIcon:o.cloneElement(Z,{fontSize:null!=(n=Z.props.fontSize)?n:x}),ownerState:P,ref:r,className:(0,d.Z)(j.root,b)},v,{classes:j}))});var M=t(773),S=t(2850),O=t(4359),U=t(3472),_=t(5442),B=t(708),$=t(9410),R=t(7329),H=t(6506),E=t(8671),T=t(3608),F=t(8428);let N=function(){let e=(0,F.useRouter)(),[r,t]=o.useState(!1),{register:l,handleSubmit:c,setError:d,reset:u,formState:{errors:p}}=(0,B.cI)(),m=async r=>{t(!0);try{let t=await T.Z.post("http://localhost:4000/auth/signin",r);(0,E.toast)(t?.data?.message||"Register and profile picture updated successfully",{type:"success",position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!1,draggable:!0,theme:"light",transition:E.Bounce}),document.cookie=`access_token=${t?.data?.access_token}`,u(),e.push("/")}catch(e){e.response&&401===e.response.status?"Incorrect password"===(e?.response?.data?.message||"Unauthorized")?((0,E.toast)("Incorrect password",{type:"error",position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!1,draggable:!0,theme:"light",transition:E.Bounce}),d("password",{type:"custom",message:"Incorrect password"})):((0,E.toast)("User not found or incorrect email",{type:"error",position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!1,draggable:!0,theme:"light",transition:E.Bounce}),d("email",{type:"custom",message:"User not found or incorrect email"})):(0,E.toast)(e?.response?.data?.message,{type:"error"})}finally{t(!1)}};return(0,s.jsxs)(U.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[s.jsx(U.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url('./signinbg.jpg')",backgroundRepeat:"no-repeat",backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",justifyContent:"center"}}),s.jsx(U.ZP,{item:!0,xs:12,sm:8,md:5,component:S.Z,elevation:6,square:!0,minHeight:"100vh",sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,s.jsxs)(O.Z,{sx:{mt:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx($.default,{src:R.Z,width:80,height:80,alt:"logo",priority:!0}),s.jsx(_.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,s.jsxs)(O.Z,{component:"form",noValidate:!0,onSubmit:c(m),sx:{mt:1},children:[s.jsx(a.Z,{margin:"normal",fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,...l("email",{required:"Email is required"}),error:!!p.email,helperText:p.email?p.email.message:""}),s.jsx(a.Z,{margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",...l("password",{required:"Password is required"}),error:!!p.password,helperText:p.password?p.password.message:""}),s.jsx(i.Z,{control:s.jsx(I,{value:"remember",color:"primary"}),label:"Remember me"}),s.jsx(n.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:r,children:"Sign In"}),(0,s.jsxs)(U.ZP,{container:!0,children:[s.jsx(U.ZP,{item:!0,xs:!0}),s.jsx(U.ZP,{item:!0,children:s.jsx(M.Z,{href:"signup",variant:"body2",component:H.default,children:"Don't have an account? Sign Up"})})]})]})]})})]})}},6085:(e,r,t)=>{"use strict";t.d(r,{I:()=>s});let s={navbar:"#000000",blue:"#1565C0",black:"#000000",white:"#ffffff"}},9642:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(3082),o=t.n(s),n=t(411);t(6085);let a=(0,n.Z)({palette:{mode:"light"},typography:{fontFamily:o().style.fontFamily},components:{}})},807:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var s=t(5344);t(3729);var o=t(6013),n=t(448),a=t(4723);let i=(0,n.xC)({reducer:{user:a.Z}});function l({children:e}){return s.jsx(o.zt,{store:i,children:e})}},5555:(e,r,t)=>{"use strict";t.d(r,{BT:()=>i,Qz:()=>c,d1:()=>l});var s=t(3608),o=t(448),n=t(905);let a=s.Z.create({baseURL:"http://localhost:4000"});a.interceptors.request.use(e=>{let r=(0,n.e)("access_token");return r&&(e.headers.Authorization=`Bearer ${r}`),e});let i=(0,o.hg)("user/fetchUser",async()=>{try{return(await a.get("/auth/me")).data}catch(e){throw console.error("Error fetching user:",e),(0,n.m)(),e}}),l=(0,o.hg)("user/fetchBarbers",async()=>{try{return(await a.get("/auth/get-barbers")).data}catch(e){throw console.error("Error fetching barbers:",e),e}}),c=(0,o.hg)("user/fetchServices",async()=>{try{return(await a.get("/services/get-services")).data}catch(e){throw console.error("Error fetching barbers:",e),e}})},4723:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i,k:()=>a});var s=t(448),o=t(5555);let n=(0,s.oM)({name:"user",initialState:{user:null,isLoading:!1,error:null,barbers:[],services:[]},reducers:{logout(e){e.user=null,e.isLoading=!1,e.error=null}},extraReducers:e=>{e.addCase(o.BT.pending,e=>{e.isLoading=!0,e.error=null}).addCase(o.BT.fulfilled,(e,r)=>{e.user=r.payload,e.isLoading=!1}).addCase(o.BT.rejected,(e,r)=>{e.isLoading=!1,e.error=r.error.message,e.user=null}).addCase(o.d1.pending,e=>{e.isLoading=!0,e.error=null}).addCase(o.d1.fulfilled,(e,r)=>{e.barbers=r.payload,e.isLoading=!1}).addCase(o.d1.rejected,(e,r)=>{e.isLoading=!1,e.error=r.error.message}).addCase(o.Qz.pending,e=>{e.isLoading=!0,e.error=null}).addCase(o.Qz.fulfilled,(e,r)=>{e.services=r.payload,e.isLoading=!1}).addCase(o.Qz.rejected,(e,r)=>{e.isLoading=!1,e.error=r.error.message})}}),{logout:a}=n.actions,i=n.reducer},5848:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>x});var s=t(5036);t(2);var o=t(6016),n=t(5639),a=t(6843);let i=(0,a.createProxy)(String.raw`C:\Users\masad\OneDrive\Desktop\barbershop-app\src\app\theme\theme.js`),{__esModule:l,$$typeof:c}=i,d=i.default,u=(0,a.createProxy)(String.raw`C:\Users\masad\OneDrive\Desktop\barbershop-app\src\lib\ReduxProvider\ReduxProvider.js`),{__esModule:p,$$typeof:m}=u,h=u.default;var g=t(3222);function x(e){return s.jsx("html",{lang:"en",children:s.jsx("body",{suppressHydrationWarning:!0,children:(0,s.jsxs)(h,{children:[s.jsx(g.Ix,{}),(0,s.jsxs)(o.ThemeProvider,{theme:d,children:[s.jsx(n.ZP,{}),e.children]})]})})})}t(7001)},4496:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(5036);t(2);var o=t(5147),n=t.n(o),a=t(4484),i=t.n(a);function l(){return s.jsx(n(),{sx:{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center"},children:s.jsx(i(),{})})}function c(){return s.jsx(l,{})}},5729:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>n,__esModule:()=>o,default:()=>a});let s=(0,t(6843).createProxy)(String.raw`C:\Users\masad\OneDrive\Desktop\barbershop-app\src\app\signin\page.js`),{__esModule:o,$$typeof:n}=s,a=s.default},7329:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});let s={src:"/_next/static/media/Logo.6cb2116e.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mOYbsLLyMDAwNDsFZbQ5epzv8IndgIDFCg7ZzIxgIAlg5nwlNjkH/dWL/t/Zua0/06KAXMYQiqUGZCA6I7Wtg9/Thz8+3DTuv+ZfmmdDAyp7Awg8H9zOdiKZeUNx5fnF/3f1N79v71xnhIDAwNDUXodM0NlcBsriOPDwGC/JNr+f7szwywQ/8PsvUwMDFDg5zfHujDv4Z6+6otfGsvu38zPvtbIgAxio/dNqil69r+x7PP/juof/2uLn/1nUGLgZ2CAguio7cUJcftfZ6eevVFVeO9BbsbZk1Ze9TwMDAwMAMbrWLCuxjIpAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[510,333,370,472,732],()=>t(162));module.exports=s})();
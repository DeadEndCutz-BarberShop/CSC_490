(()=>{var e={};e.id=178,e.ids=[178],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},2181:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6531:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>d});var i=r(482),a=r(9108),s=r(2563),n=r.n(s),l=r(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3185)),"C:\\Users\\masad\\OneDrive\\Desktop\\barbershop-app\\src\\app\\profile\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5848)),"C:\\Users\\masad\\OneDrive\\Desktop\\barbershop-app\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,4496)),"C:\\Users\\masad\\OneDrive\\Desktop\\barbershop-app\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\masad\\OneDrive\\Desktop\\barbershop-app\\src\\app\\profile\\page.js"],p="/profile/page",h={require:r,loadChunk:()=>Promise.resolve()},x=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/profile/page",pathname:"/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5084:(e,t,r)=>{Promise.resolve().then(r.bind(r,3279))},9251:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var i=r(1848),a=r(5651),s=r(3729),n=r(6815),l=r(5599),o=r(3139),d=r(9448),c=r(9927),p=r(7895);function h(e){return(0,p.ZP)("MuiCardMedia",e)}(0,c.Z)("MuiCardMedia",["root","media","img"]);var x=r(5344);let u=["children","className","component","image","src","style"],A=e=>{let{classes:t,isMediaComponent:r,isImageComponent:i}=e;return(0,l.Z)({root:["root",r&&"media",i&&"img"]},h,t)},m=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{isMediaComponent:i,isImageComponent:a}=r;return[t.root,i&&t.media,a&&t.img]}})(({ownerState:e})=>(0,a.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),g=["video","audio","picture","iframe","img"],f=["picture","img"],v=s.forwardRef(function(e,t){let r=(0,o.Z)({props:e,name:"MuiCardMedia"}),{children:s,className:l,component:d="div",image:c,src:p,style:h}=r,v=(0,i.Z)(r,u),b=-1!==g.indexOf(d),Z=!b&&c?(0,a.Z)({backgroundImage:`url("${c}")`},h):h,j=(0,a.Z)({},r,{component:d,isMediaComponent:b,isImageComponent:-1!==f.indexOf(d)}),w=A(j);return(0,x.jsx)(m,(0,a.Z)({className:(0,n.Z)(w.root,l),as:d,role:!b&&c?"img":void 0,ref:t,style:Z,ownerState:j,src:b?c||p:void 0},v,{children:s}))})},6120:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i=r(1848),a=r(5651),s=r(3729),n=r(6815),l=r(5599),o=r(1143),d=r(9448),c=r(3139),p=r(2124),h=r(5344);let x=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],u=e=>{let{absolute:t,children:r,classes:i,flexItem:a,light:s,orientation:n,textAlign:o,variant:d}=e;return(0,l.Z)({root:["root",t&&"absolute",d,s&&"light","vertical"===n&&"vertical",a&&"flexItem",r&&"withChildren",r&&"vertical"===n&&"withChildrenVertical","right"===o&&"vertical"!==n&&"textAlignRight","left"===o&&"vertical"!==n&&"textAlignLeft"],wrapper:["wrapper","vertical"===n&&"wrapperVertical"]},p.V,i)},A=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,a.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,o.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>(0,a.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>(0,a.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:t})=>(0,a.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>(0,a.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),m=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,a.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),g=s.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiDivider"}),{absolute:s=!1,children:l,className:o,component:d=l?"div":"hr",flexItem:p=!1,light:g=!1,orientation:f="horizontal",role:v="hr"!==d?"separator":void 0,textAlign:b="center",variant:Z="fullWidth"}=r,j=(0,i.Z)(r,x),w=(0,a.Z)({},r,{absolute:s,component:d,flexItem:p,light:g,orientation:f,role:v,textAlign:b,variant:Z}),P=u(w);return(0,h.jsx)(A,(0,a.Z)({as:d,className:(0,n.Z)(P.root,o),role:v,ref:t,ownerState:w},j,{children:l?(0,h.jsx)(m,{className:P.wrapper,ownerState:w,children:l}):null}))});g.muiSkipListHighlight=!0;let f=g},3279:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var i=r(5344),a=r(3729),s=r(6013),n=r(5555),l=r(5862),o=r(1214),d=r(859),c=r(3608),p=r(905),h=r(2663),x=r(3472),u=r(4359),A=r(8166),m=r(5183),g=r(5442),f=r(6120),v=r(6147),b=r(708),Z=r(9740);let j=[],w=8,P="00";for(let e=0;e<48;e++){let e=w>=12?"PM":"AM",t=w>12?w-12:w;j.push(`${t.toString().padStart(2,"0")}:${P} ${e}`),"00"==(P="00"===P?"30":"00")&&(w=(w+1)%24)}function C(){let[e,t]=(0,a.useState)(!1),r=(0,s.v9)(e=>e.user?.user),w=(0,s.v9)(e=>e.user?.isLoading),[P,C]=(0,a.useState)(null),[y,D]=(0,a.useState)([]),B=(0,s.I0)(),S="http://localhost:4000";(0,a.useEffect)(()=>{r||B((0,n.BT)()),r&&(E("firstName",r?.firstName),E("lastName",r?.lastName),E("email",r?.email),E("phone",r?.phone),E("location",r?.location),D(r.availableHours||[]))},[r,B]);let{register:M,handleSubmit:q,setValue:E,clearErrors:I,control:k,formState:{errors:R}}=(0,b.cI)(),N=async e=>{try{console.log(e);let r=(0,p.e)("access_token"),i=new FormData;i.append("profilePic",e?.profilePic),i.append("userEmail",e?.email),await c.Z.post(`${S}/auth/update-user`,{...e,availableHours:y},{headers:{Authorization:`Bearer ${r}`}}),e?.profilePic&&await c.Z.post(`${S}/auth/update/profile-pic`,i),t(!1),B((0,n.BT)())}catch(e){console.error("Error updating user details:",e)}finally{}},Q=e=>{let t=e.target.files[0];if(t){let e=new FileReader;e.onloadend=()=>{C(e.result)},E("profilePic",t),e.readAsDataURL(t)}},L=e=>{y.includes(e)?D(y.filter(t=>t!==e)):D([...y,e])};return w?i.jsx(l.Z,{}):(0,i.jsxs)(i.Fragment,{children:[i.jsx(o.Z,{user:r}),i.jsx(h.Z,{style:{paddingTop:"30px",paddingBottom:"30px"},maxWidth:"lg",children:(0,i.jsxs)(x.ZP,{container:!0,spacing:4,children:[i.jsx(x.ZP,{item:!0,width:"100%",children:(0,i.jsxs)(u.Z,{children:[r?.profilePic||P?i.jsx(A.Z,{src:P||`data:image/jpeg;base64,${r?.profilePic}`,alt:"Profile Image",sx:{width:"100%",height:250},variant:"rounded"}):i.jsx(A.Z,{src:"",alt:"Profile Image",sx:{width:{xs:"100%",md:300},height:250},variant:"rounded"}),e&&i.jsx("input",{type:"file",accept:"image/*",onChange:Q,style:{display:"none"}}),e&&(0,i.jsxs)(m.Z,{variant:"contained",component:"label",sx:{mt:2},children:["Upload Avatar",i.jsx("input",{type:"file",accept:"image/*",onChange:Q,hidden:!0})]})]})}),(0,i.jsxs)(x.ZP,{item:!0,children:[(0,i.jsxs)(u.Z,{children:[(0,i.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[i.jsx(g.Z,{variant:"h4",children:"Profile Details"}),!e&&i.jsx(u.Z,{children:i.jsx(m.Z,{variant:"contained",onClick:()=>{t(!0)},children:"Edit"})}),e&&i.jsx(u.Z,{children:i.jsx(m.Z,{variant:"outlined",onClick:()=>{t(!1),I(),D(r.availableHours||[]),B((0,n.BT)())},children:"Cancel"})})]}),i.jsx(f.Z,{}),i.jsx(u.Z,{mt:2,children:i.jsx("form",{onSubmit:q(N),children:(0,i.jsxs)(x.ZP,{container:!0,spacing:2,children:[i.jsx(x.ZP,{item:!0,xs:12,md:6,children:i.jsx(v.Z,{fullWidth:!0,label:"First Name",...M("firstName",{required:"First Name is required"}),disabled:!e,error:!!R.firstName,helperText:R.firstName?R.firstName.message:""})}),i.jsx(x.ZP,{item:!0,xs:12,md:6,children:i.jsx(v.Z,{fullWidth:!0,label:"Last Name",...M("lastName",{required:"Last Name is required"}),disabled:!e,error:!!R.lastName,helperText:R.lastName?R.lastName.message:""})}),i.jsx(x.ZP,{item:!0,xs:12,children:i.jsx(v.Z,{fullWidth:!0,label:"Email",...M("email",{required:"Email is required"}),disabled:!e,error:!!R.email,helperText:R.email?R.email.message:""})}),(0,i.jsxs)(x.ZP,{item:!0,display:"flex",width:"100%",children:[i.jsx(b.Qr,{name:"phone",control:k,rules:{validate:e=>(0,Z.Cs)(e,{onlyCountryies:[],excludedCountryies:[],continents:[]})},render:({field:{ref:t,value:r,...a},fieldState:s})=>i.jsx(Z.Kr,{...a,value:r??"",inputRef:t,helperText:s.invalid?"Tel is invalid":"",error:s.invalid,disabled:!e,placeholder:"+92 300 0012321",sx:{width:"100%"}})}),R.phone?.message&&i.jsx(FormHelperText,{error:!0,sx:{mt:1},children:R.phone.message})]}),i.jsx(x.ZP,{item:!0,xs:12,children:i.jsx(v.Z,{...M("location"),fullWidth:!0,id:"location",label:"Location",name:"location",autoComplete:"location",disabled:!e})}),r?.role==="barber"&&(0,i.jsxs)(x.ZP,{item:!0,xs:12,children:[i.jsx(g.Z,{variant:"h7",children:"Available Hours:"}),i.jsx(u.Z,{display:"flex",flexWrap:"wrap",sx:{maxHeight:{xs:200,md:"100%"},overflow:"auto",mt:2},children:j.map(t=>i.jsx(m.Z,{variant:y.includes(t)?"contained":"outlined",sx:{borderRadius:"10%",minWidth:0,margin:"4px"},onClick:()=>L(t),disabled:!e,children:t},t))})]}),e&&i.jsx(x.ZP,{item:!0,xs:12,mt:3,children:i.jsx(m.Z,{variant:"contained",type:"submit",sx:{mr:2},children:"Save"})})]})})})]}),r?.role==="barber"&&(0,i.jsxs)(u.Z,{mt:4,children:[i.jsx(g.Z,{variant:"h4",children:"Services"}),i.jsx(u.Z,{display:"flex",flexDirection:"column",gap:"20px",mt:"10px",flexWrap:"wrap",children:r?.services?.map(e=>i.jsx(d.Z,{service:e},e.id))})]})]})]})})]})}},859:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var i=r(5344),a=r(4359),s=r(2742),n=r(9251),l=r(8154),o=r(5442);r(3729);var d=r(9410),c=r(5249);function p({service:e}){return i.jsx(a.Z,{sx:{width:"100%",bgcolor:"white",transition:"transform 0.3s ease-in-out",textDecoration:"none","&:hover":{transform:"scale(1.02)"}},children:(0,i.jsxs)(s.Z,{sx:{display:"flex",alignItems:{xs:"",md:"center"},flexDirection:{xs:"column",sm:"row"}},children:[e?.servicePic?i.jsx(n.Z,{title:"Barber's Profile Picture",image:`data:image/jpeg;base64,${e?.servicePic}`,sx:{backgroundSize:"cover",height:"200px",width:"400px"}}):i.jsx(d.default,{alt:"Default ",src:c.Z,width:400,height:200,objectFit:"cover"}),(0,i.jsxs)(l.Z,{sx:{flex:"1 0 auto",display:"flex",flexDirection:"column",gap:"5px"},children:[i.jsx(o.Z,{component:"div",variant:"h5",children:e?.title}),i.jsx(o.Z,{variant:"subtitle1",color:"text.secondary",component:"div",children:e?.description}),i.jsx(o.Z,{component:"div",variant:"h6",children:e?.price}),i.jsx(a.Z,{sx:{display:"flex",alignItems:"center",gap:"5px",mt:"5px"}})]})]})})}},3185:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var i=r(5036);r(2);let a=(0,r(6843).createProxy)(String.raw`C:\Users\masad\OneDrive\Desktop\barbershop-app\src\app\Components\Profile\Profile.js`),{__esModule:s,$$typeof:n}=a,l=a.default;function o(){return i.jsx("div",{children:i.jsx(l,{})})}},5249:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let i={src:"/_next/static/media/dummyservice.e552a8e8.jpg",height:2339,width:3508,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJwj/8QAHBAAAgICAwAAAAAAAAAAAAAAAgMBBAASBRRh/9oACAEBAAE/ALXPWAZKlrAS62+/s5//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMSMf/aAAgBAgEBPwCJKuH/xAAZEQABBQAAAAAAAAAAAAAAAAABAAMSIUH/2gAIAQMBAT8AeJkLxf/Z",blurWidth:8,blurHeight:5}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[510,333,370,484,472,308,740,601],()=>r(6531));module.exports=i})();
import{s as l,j as s,R as f,a as g,u as T,b as C,c as F}from"./index-5d572dfa.js";const v=()=>{const r=Math.floor(Math.random()*24)*4,a=Math.floor(Math.random()*(24-1+1))*4;return[r,a]},x={food:v(),direction:"RIGHT",speed:200,speedLevel:0,route:"menu",snakeDots:[[0,0],[0,4],[0,8]]},I=l.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #a2c579;
  border: 1px solid #ffffdd;
`,N=({snakeDots:e})=>s.jsx("div",{children:e.map((o,r)=>{const a={left:`${o[0]}%`,top:`${o[1]}%`};return s.jsx(I,{style:a},r)})}),R=l.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #ed5959;
  border-radius: 50%;
`,z=({dot:e})=>{const o={left:`${e[0]}%`,top:`${e[1]}%`};return s.jsx(R,{style:o})},P=l.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`,M=l.button`
  padding: 10px;
  border-radius: 7px;
  border: 0px;

  font-size: 18px;

  background-color: #d2de32;

  cursor: pointer;
`,W=({onRouteChange:e})=>s.jsx(P,{children:s.jsx(M,{onClick:e,type:"button",value:"start game",children:"Start Game"})}),_=l.div`
  background-color: #ffffdd;
  height: 100vh;
  overflow: hidden;
`,H=l.h1`
  text-align: center;
  background-color: #a2c579;
  color: #000;
  font-size: 40px;
  padding-block: 24px;
`,B=l.div`
  background-color: #d2de32;
  color: #000;
  font-variant: small-caps;
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  width: fit-content;
  margin-inline: auto;
  margin: 10px auto;
  padding: 10px 15px;
  border-radius: 16px;
`,U=l.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;

  & > span:first-child {
    display: block;
    padding: 10px 15px;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    background-color: #61a3ba;
    color: #fff;
  }

  & > span:last-child {
    display: block;
    padding: 10px 15px;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    background-color: #d2de32;
    color: #222;
  }
`,$=l.div`
  position: relative;
  width: 400px;
  height: 400px;

  display: flex;

  margin: 20px auto 0 auto;

  outline: 10px solid #61a3ba;
  background-color: #fff;
`;var y={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=f.createContext&&f.createContext(y),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var o,r=1,a=arguments.length;r<a;r++){o=arguments[r];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},u.apply(this,arguments)},A=globalThis&&globalThis.__rest||function(e,o){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)o.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(r[a[i]]=e[a[i]]);return r};function j(e){return e&&e.map(function(o,r){return f.createElement(o.tag,u({key:r},o.attr),j(o.child))})}function K(e){return function(o){return f.createElement(q,u({attr:u({},e.attr)},o),j(e.child))}}function q(e){var o=function(r){var a=e.attr,i=e.size,p=e.title,m=A(e,["attr","size","title"]),h=i||r.size||"1em",d;return r.className&&(d=r.className),e.className&&(d=(d?d+" ":"")+e.className),f.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,m,{className:d,style:u(u({color:e.color||r.color},r.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),p&&f.createElement("title",null,p),e.children)};return k!==void 0?f.createElement(k.Consumer,null,function(r){return o(r)}):o(y)}function J(e){return K({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M13,9 L13,2 L1,2 L1,22 L13,22 L13,15 M22,12 L5,12 M17,7 L22,12 L17,17"}}]})(e)}const Q=()=>{const[e,o]=g.useState(x),[r,a]=g.useState(0),[i,p]=g.useState(0);console.log("score: ",r);const m=T(),{user:h}=C();g.useEffect(()=>{const t=setInterval(w,e.speed);return document.addEventListener("keydown",d),S(),E(),r>=50&&r/50>e.speedLevel&&(o(n=>({...n,speedLevel:n.speedLevel+1})),O(),console.log("state.speed: ",e.speed)),()=>{clearInterval(t),document.removeEventListener("keydown",d)}},[e,r]),g.useEffect(()=>{i===1?a(t=>t+1):i===2?a(t=>t+5):i>=3&&a(t=>t+10)},[i]);const d=t=>{const n=e.direction;let c=n;switch(t.keyCode){case 37:c="LEFT";break;case 38:c="UP";break;case 39:c="RIGHT";break;case 40:c="DOWN";break}c!==n&&(c==="LEFT"&&n!=="RIGHT"||c==="RIGHT"&&n!=="LEFT"||c==="UP"&&n!=="DOWN"||c==="DOWN"&&n!=="UP")&&o({...e,direction:c})},w=()=>{if(e.route==="game"){let t=[...e.snakeDots],n=t[t.length-1];switch(e.direction){case"RIGHT":n=[n[0]+4,n[1]];break;case"LEFT":n=[n[0]-4,n[1]];break;case"DOWN":n=[n[0],n[1]+4];break;case"UP":n=[n[0],n[1]-4];break}t.push(n),n[0]===e.food[0]&&n[1]===e.food[1]?(D(),p(c=>c+1)):t.shift(),o(c=>({...c,snakeDots:t}))}},S=()=>{if(e.route==="game"){const t=e.snakeDots[e.snakeDots.length-1];(t[0]>=100||t[1]>=100||t[0]<0||t[1]<0)&&b()}},E=()=>{if(e.route==="game"){const t=[...e.snakeDots],n=t[t.length-1];t.pop(),t.forEach(c=>{n[0]===c[0]&&n[1]===c[1]&&b()})}},D=()=>{const t=v();o(n=>({...n,food:t})),L()},L=()=>{if(e.route==="game"){const t=[...e.snakeDots];t.unshift([]),o(n=>({...n,snakeDots:t}))}},O=()=>{e.route==="game"&&e.speed>10&&o(t=>({...t,speed:t.speed-20}))},G=()=>{o({...x,route:"game"}),a(0),p(0)},b=()=>{o({...x,route:"menu"})};return s.jsxs(_,{children:[s.jsxs("div",{children:[s.jsx(H,{children:"Snake Game"}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[s.jsx("span",{style:{marginRight:"10px"},children:h.name||h.user.name}),s.jsx(J,{style:{width:"24px",height:"24px",cursor:"pointer"},onClick:()=>m(F())})]})]}),s.jsxs(B,{children:["High Score: ",r]}),e.route==="menu"?s.jsx(W,{onRouteChange:G}):s.jsxs(s.Fragment,{children:[s.jsxs(U,{children:[s.jsx("span",{children:"Score"}),s.jsx("span",{children:r})]}),s.jsxs($,{children:[s.jsx(N,{snakeDots:e.snakeDots}),s.jsx(z,{dot:e.food})]})]})]})},X=()=>s.jsx(s.Fragment,{children:s.jsx(Q,{})});export{X as default};

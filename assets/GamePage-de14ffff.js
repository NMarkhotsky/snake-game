import{s as c,j as t,R as f,a as p,g as A,u as U,b as _,c as H,d as $}from"./index-05b3e0e9.js";const C=()=>{const s=Math.floor(Math.random()*24)*4,a=Math.floor(Math.random()*(24-1+1))*4;return[s,a]},k={food:C(),direction:"RIGHT",speed:200,speedLevel:0,route:"menu",snakeDots:[[0,0],[0,4],[0,8]]},K=c.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #a2c579;
  border: 1px solid #ffffdd;
`,Y=({snakeDots:e})=>t.jsx("div",{children:e.map((o,s)=>{const a={left:`${o[0]}%`,top:`${o[1]}%`};return t.jsx(K,{style:a},s)})}),q=c.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #ed5959;
  border-radius: 50%;
`,J=({dot:e})=>{const o={left:`${e[0]}%`,top:`${e[1]}%`};return t.jsx(q,{style:o})},Q=c.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`,j=c.button`
  padding: 10px;
  border-radius: 7px;
  border: 0px;

  font-size: 18px;

  background-color: #d2de32;

  cursor: pointer;
`,V=({onRouteChange:e})=>t.jsx(Q,{children:t.jsx(j,{onClick:e,type:"button",value:"start game",children:"Start Game"})}),X=c.div`
  background-color: #ffffdd;
  height: 100vh;
  overflow: hidden;
`,Z=c.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;

  & > span {
    margin-right: 10px;
  }

  & > svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;

    cursor: pointer;
  }
`,ee=c.button`
  margin-right: 10px;
  padding: 1px 5px;
  border-radius: 6px;
  border: none;
  background-color: #d2de32;

  cursor: pointer;
`,te=c.div`
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
`,ne=c.div`
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
`,oe=c.div`
  position: relative;
  width: 400px;
  height: 400px;

  display: flex;

  margin: 20px auto 0 auto;

  outline: 10px solid #61a3ba;
  background-color: #fff;
`;var D={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L=f.createContext&&f.createContext(D),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var o,s=1,a=arguments.length;s<a;s++){o=arguments[s];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},u.apply(this,arguments)},se=globalThis&&globalThis.__rest||function(e,o){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)o.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]]);return s};function E(e){return e&&e.map(function(o,s){return f.createElement(o.tag,u({key:s},o.attr),E(o.child))})}function re(e){return function(o){return f.createElement(ae,u({attr:u({},e.attr)},o),E(e.child))}}function ae(e){var o=function(s){var a=e.attr,i=e.size,x=e.title,m=se(e,["attr","size","title"]),h=i||s.size||"1em",d;return s.className&&(d=s.className),e.className&&(d=(d?d+" ":"")+e.className),f.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,m,{className:d,style:u(u({color:e.color||s.color},s.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),x&&f.createElement("title",null,x),e.children)};return L!==void 0?f.createElement(L.Consumer,null,function(s){return o(s)}):o(D)}function ie(e){return re({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M13,9 L13,2 L1,2 L1,22 L13,22 L13,15 M22,12 L5,12 M17,7 L22,12 L17,17"}}]})(e)}const G=c.div`
  position: fixed;
  inset: 0;
  outline: 1px solid red;
  background-color: #a2c579;
`,P=c.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;

  width: 700px;
  height: 500px;

  display: grid;
  place-content: center;
  text-align: center;
  border-radius: 10px;

  box-shadow: 0 0 10px 5px black, 0 0 100px 10px black;

  & > h2 {
    font-size: 64px;
  }
`,ce=c.p`
  font-size: 32px;

  & > span {
    font-size: 64px;
  }

  margin-bottom: 50px;
`,le=({onRouteChange:e,score:o})=>t.jsx(G,{children:t.jsxs(P,{children:[t.jsx("h2",{children:"Game Over"}),t.jsxs(ce,{children:["🏆Your Final Score: ",t.jsx("span",{children:o}),"🏆"]}),t.jsx(j,{onClick:()=>e(),children:"Play Again"})]})}),de=c.div`
  position: fixed;
  inset: 0;
  background-color: hsla(0, 0%, 10%, 0.7);
`,pe=c.div`
  width: 500px;
  height: 300px;
  background-color: #61a3ba;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-content: center;
  border-radius: 1rem;
  text-align: center;

  & > h2 {
    font-size: 3rem;
  }

  & > .click-dir {
    color: white;
  }
`,ue=c.p`
  color: hsl(0, 0%, 30%);
  font-style: italic;
  font-size: 1.3rem;
`,xe=()=>t.jsx(de,{onClick:()=>"",children:t.jsxs(pe,{children:[t.jsx("h2",{children:"Paused"}),t.jsxs(ue,{children:["Press ",t.jsx("strong",{children:"space"})," to continue"]})]})}),fe=c(P)`
  width: 500px;
  height: 500px;

  & > h2 {
    font-size: 36px;
  }

  & > button {
    margin-top: 20px;
  }
`,he=c.ol`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
`,ge=c.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > p {
    font-size: 16px;
  }

  & > p:first-child {
    color: green;
  }

  & > p:last-child {
    color: red;
  }
`,me=({isOpen:e})=>{const[o,s]=p.useState([]),a=async()=>{const i=await A();s(i)};return p.useEffect(()=>{a()},[]),t.jsx(G,{children:t.jsxs(fe,{children:[t.jsx("h2",{children:"🏆Best Scores🏆"}),t.jsx(he,{children:o.map(({name:i,score:x})=>t.jsxs(ge,{children:[t.jsx("p",{children:i}),t.jsx("p",{children:x})]},i))}),t.jsx(j,{onClick:()=>e(),children:"Close"})]})})},be=()=>{const[e,o]=p.useState(k),[s,a]=p.useState(0),[i,x]=p.useState(0),[m,h]=p.useState(!1),[d,z]=p.useState(!1),[I,F]=p.useState(!1),v=U(),{user:b}=_(),g=e.route==="game";p.useEffect(()=>{const n=setInterval(()=>{d||M()},e.speed);return document.addEventListener("keydown",y),T(),B(),s>=50&&s/50>e.speedLevel&&(o(r=>({...r,speedLevel:r.speedLevel+1})),W()),()=>{clearInterval(n),document.removeEventListener("keydown",y)}},[e,s,d]),p.useEffect(()=>{i===1?a(n=>n+1):i===2?a(n=>n+5):i>=3&&a(n=>n+10)},[i]);const y=n=>{console.log("e: ",n.key),n.key===" "&&z(!d);const r=e.direction;let l=r;switch(n.key){case"ArrowLeft":l="LEFT";break;case"ArrowUp":l="UP";break;case"ArrowRight":l="RIGHT";break;case"ArrowDown":l="DOWN";break}l!==r&&(l==="LEFT"&&r!=="RIGHT"||l==="RIGHT"&&r!=="LEFT"||l==="UP"&&r!=="DOWN"||l==="DOWN"&&r!=="UP")&&o({...e,direction:l})},M=()=>{if(g){let n=[...e.snakeDots],r=n[n.length-1];switch(e.direction){case"RIGHT":r=[r[0]+4,r[1]];break;case"LEFT":r=[r[0]-4,r[1]];break;case"DOWN":r=[r[0],r[1]+4];break;case"UP":r=[r[0],r[1]-4];break}n.push(r),r[0]===e.food[0]&&r[1]===e.food[1]?(N(),x(l=>l+1)):n.shift(),o(l=>({...l,snakeDots:n}))}},T=()=>{if(g){const n=e.snakeDots[e.snakeDots.length-1];(n[0]>=100||n[1]>=100||n[0]<0||n[1]<0)&&w()}},B=()=>{if(g){const n=[...e.snakeDots],r=n[n.length-1];n.pop(),n.forEach(l=>{r[0]===l[0]&&r[1]===l[1]&&w()})}},N=()=>{const n=C();o(r=>({...r,food:n})),R()},R=()=>{if(g){const n=[...e.snakeDots];n.unshift([]),o(r=>({...r,snakeDots:n}))}},W=()=>{g&&e.speed>10&&o(n=>({...n,speed:n.speed-20}))},S=()=>{o({...k,route:"game"}),a(0),x(0),h(!1)},w=()=>{s>b.score&&v(H(s)),h(!0),o({...k,route:"menu"})},O=()=>{F(n=>!n)};return t.jsxs(t.Fragment,{children:[t.jsxs(X,{children:[t.jsx("div",{children:t.jsxs(Z,{children:[t.jsx(ee,{onClick:O,children:"Best Scores"}),t.jsx("span",{children:b.name}),t.jsx(ie,{onClick:()=>v($())})]})}),t.jsxs(te,{children:["High Score: ",b.score]}),e.route==="menu"?t.jsx(V,{onRouteChange:S}):t.jsxs(t.Fragment,{children:[t.jsxs(ne,{children:[t.jsx("span",{children:"Score"}),t.jsx("span",{children:s})]}),t.jsx("div",{style:{textAlign:"center",marginBottom:"10px",fontSize:"20px"},children:t.jsxs("span",{children:["Press ",t.jsx("strong",{style:{color:"#a2c579"},children:"space"})," to pause"]})}),t.jsxs(oe,{children:[t.jsx(Y,{snakeDots:e.snakeDots}),t.jsx(J,{dot:e.food})]})]})]}),m&&t.jsx(le,{onRouteChange:S,score:s}),d&&t.jsx(xe,{}),I&&t.jsx(me,{isOpen:O})]})},je=()=>t.jsx(t.Fragment,{children:t.jsx(be,{})});export{je as default};

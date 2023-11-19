import{R as x,c as K,s as c,j as t,a as p,g as Y,u as J,b as Q,d as V,e as X}from"./index-d2d4e821.js";import{P as h}from"./index-fff5779d.js";const D=()=>{const s=Math.floor(Math.random()*24)*4,a=Math.floor(Math.random()*(24-1+1))*4;return[s,a]},k={food:D(),direction:"RIGHT",speed:200,speedLevel:0,route:"menu",snakeDots:[[0,0],[0,4],[0,8]]};var E={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=x.createContext&&x.createContext(E),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)},Z=globalThis&&globalThis.__rest||function(e,n){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]]);return s};function P(e){return e&&e.map(function(n,s){return x.createElement(n.tag,u({key:s},n.attr),P(n.child))})}function ee(e){return function(n){return x.createElement(te,u({attr:u({},e.attr)},n),P(e.child))}}function te(e){var n=function(s){var a=e.attr,i=e.size,f=e.title,b=Z(e,["attr","size","title"]),g=i||s.size||"1em",d;return s.className&&(d=s.className),e.className&&(d=(d?d+" ":"")+e.className),x.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,b,{className:d,style:u(u({color:e.color||s.color},s.style),e.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),f&&x.createElement("title",null,f),e.children)};return C!==void 0?x.createElement(C.Consumer,null,function(s){return n(s)}):n(E)}function ne(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M13,9 L13,2 L1,2 L1,22 L13,22 L13,15 M22,12 L5,12 M17,7 L22,12 L17,17"}}]})(e)}const oe=K`
  from {
    transform: rotate(-15deg);
  }
  to {
    transform: rotate(15deg);
  }
`,se=c.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`,v=c.button`
  width: 110px;
  height: 40px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 7px;
  border: 0px;

  font-size: 18px;

  background-color: #d2de32;

  cursor: pointer;

  animation: ${oe} 1000ms linear infinite alternate;
`,G=c.div`
  position: fixed;
  inset: 0;
  outline: 1px solid red;
  background-color: #a2c579;
`,T=c.div`
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
`,re=c.p`
  font-size: 32px;

  & > span {
    font-size: 64px;
  }

  margin-bottom: 50px;
`,R=({onRouteChange:e,score:n})=>t.jsx(G,{children:t.jsxs(T,{children:[t.jsx("h2",{children:"Game Over"}),t.jsxs(re,{children:["🏆Your Final Score: ",t.jsx("span",{children:n}),"🏆"]}),t.jsx(v,{onClick:()=>e(),children:"Play Again"})]})});R.propTypes={onRouteChange:h.func.isRequired,score:h.number.isRequired};const ae=c.div`
  position: fixed;
  inset: 0;
  background-color: hsla(0, 0%, 10%, 0.7);
`,ie=c.div`
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
`,ce=c.p`
  color: hsl(0, 0%, 30%);
  font-style: italic;
  font-size: 1.3rem;
`,le=()=>t.jsx(ae,{children:t.jsxs(ie,{children:[t.jsx("h2",{children:"Paused"}),t.jsxs(ce,{children:["Press ",t.jsx("strong",{children:"space"})," to continue"]})]})}),de=c(T)`
  width: 500px;
  height: 500px;

  & > h2 {
    font-size: 36px;
  }

  & > button {
    margin-top: 20px;
  }
`,pe=c.ol`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
`,ue=c.li`
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
`,z=({isOpen:e})=>{const[n,s]=p.useState([]),a=async()=>{const i=await Y();s(i)};return p.useEffect(()=>{a()},[]),t.jsx(G,{children:t.jsxs(de,{children:[t.jsx("h2",{children:"🏆Best Scores🏆"}),n.length>0?t.jsx(pe,{children:n.map(({name:i,score:f})=>t.jsxs(ue,{children:[t.jsx("p",{children:i}),t.jsx("p",{children:f})]},i))}):t.jsx("div",{children:"Loading..."}),t.jsx(v,{onClick:()=>e(),children:"Close"})]})})};z.propTypes={isOpen:h.func.isRequired};const fe=c.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #a2c579;
  border: 1px solid #ffffdd;
`,I=({snakeDots:e})=>t.jsx("div",{children:e.map((n,s)=>{const a={left:`${n[0]}%`,top:`${n[1]}%`};return t.jsx(fe,{style:a},s)})});I.propTypes={snakeDots:h.array.isRequired};const xe=c.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #ed5959;
  border-radius: 50%;
`,F=({dot:e})=>{const n={left:`${e[0]}%`,top:`${e[1]}%`};return t.jsx(xe,{style:n})};F.propTypes={dot:h.array.isRequired};const M=({onRouteChange:e})=>t.jsx(se,{children:t.jsx(v,{onClick:e,type:"button",value:"start game",children:"Start Game"})});M.propTypes={onRouteChange:h.func.isRequired};const he=c.div`
  background-color: #ffffdd;
  height: 100vh;
  overflow: hidden;
`,ge=c.div`
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
`,me=c.button`
  margin-right: 10px;
  padding: 1px 5px;
  border-radius: 6px;
  border: none;
  background-color: #d2de32;

  cursor: pointer;
`,be=c.div`
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
`,je=c.div`
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
`,ke=c.div`
  position: relative;
  width: 400px;
  height: 400px;

  display: flex;

  margin: 20px auto 0 auto;

  outline: 10px solid #61a3ba;
  background-color: #fff;
`,ve=()=>{const[e,n]=p.useState(k),[s,a]=p.useState(0),[i,f]=p.useState(0),[b,g]=p.useState(!1),[d,B]=p.useState(!1),[N,W]=p.useState(!1),y=J(),{user:j}=Q(),m=e.route==="game";p.useEffect(()=>{const o=setInterval(()=>{d||A()},e.speed);return document.addEventListener("keydown",S),U(),_(),s>=50&&s/50>e.speedLevel&&(n(r=>({...r,speedLevel:r.speedLevel+1})),$()),()=>{clearInterval(o),document.removeEventListener("keydown",S)}},[e,s,d]),p.useEffect(()=>{i===1?a(o=>o+1):i===2?a(o=>o+5):i>=3&&a(o=>o+10)},[i]);const S=o=>{o.key===" "&&B(!d);const r=e.direction;let l=r;switch(o.key){case"ArrowLeft":l="LEFT";break;case"ArrowUp":l="UP";break;case"ArrowRight":l="RIGHT";break;case"ArrowDown":l="DOWN";break}l!==r&&(l==="LEFT"&&r!=="RIGHT"||l==="RIGHT"&&r!=="LEFT"||l==="UP"&&r!=="DOWN"||l==="DOWN"&&r!=="UP")&&n({...e,direction:l})},A=()=>{if(m){let o=[...e.snakeDots],r=o[o.length-1];switch(e.direction){case"RIGHT":r=[r[0]+4,r[1]];break;case"LEFT":r=[r[0]-4,r[1]];break;case"DOWN":r=[r[0],r[1]+4];break;case"UP":r=[r[0],r[1]-4];break}o.push(r),r[0]===e.food[0]&&r[1]===e.food[1]?(H(),f(l=>l+1)):o.shift(),n(l=>({...l,snakeDots:o}))}},U=()=>{if(m){const o=e.snakeDots[e.snakeDots.length-1];(o[0]>=100||o[1]>=100||o[0]<0||o[1]<0)&&O()}},_=()=>{if(m){const o=[...e.snakeDots],r=o[o.length-1];o.pop(),o.forEach(l=>{r[0]===l[0]&&r[1]===l[1]&&O()})}},H=()=>{const o=D();n(r=>({...r,food:o})),q()},q=()=>{if(m){const o=[...e.snakeDots];o.unshift([]),n(r=>({...r,snakeDots:o}))}},$=()=>{m&&e.speed>10&&n(o=>({...o,speed:o.speed-20}))},w=()=>{n({...k,route:"game"}),a(0),f(0),g(!1)},O=()=>{s>j.score&&y(V(s)),g(!0),n({...k,route:"menu"})},L=()=>{W(o=>!o)};return t.jsxs(t.Fragment,{children:[t.jsxs(he,{children:[t.jsx("div",{children:t.jsxs(ge,{children:[t.jsx(me,{onClick:L,children:"Best Scores"}),t.jsx("span",{children:j.name}),t.jsx(ne,{onClick:()=>y(X())})]})}),t.jsxs(be,{children:["High Score: ",j.score]}),e.route==="menu"?t.jsx(M,{onRouteChange:w}):t.jsxs(t.Fragment,{children:[t.jsxs(je,{children:[t.jsx("span",{children:"Score"}),t.jsx("span",{children:s})]}),t.jsx("div",{style:{textAlign:"center",marginBottom:"10px",fontSize:"20px"},children:t.jsxs("span",{children:["Press ",t.jsx("strong",{style:{color:"#a2c579"},children:"space"})," to pause"]})}),t.jsxs(ke,{children:[t.jsx(I,{snakeDots:e.snakeDots}),t.jsx(F,{dot:e.food})]})]})]}),b&&t.jsx(R,{onRouteChange:w,score:s}),d&&t.jsx(le,{}),N&&t.jsx(z,{isOpen:L})]})},we=()=>t.jsx(t.Fragment,{children:t.jsx(ve,{})});export{we as default};

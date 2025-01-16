import{R as h,c as J,s as c,j as t,a as l,g as Q,u as V,b as X,d as C,e as Z}from"./index-35554c5c.js";import{P as m}from"./index-b550aa46.js";const T=()=>{const o=Math.floor(Math.random()*24)*4,a=Math.floor(Math.random()*(24-1+1))*4;return[o,a]},v={food:T(),direction:"RIGHT",speed:200,speedLevel:0,route:"menu",snakeDots:[[0,0],[0,4],[0,8]]};var G={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},D=h.createContext&&h.createContext(G),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var n,o=1,a=arguments.length;o<a;o++){n=arguments[o];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)},ee=globalThis&&globalThis.__rest||function(e,n){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]]);return o};function R(e){return e&&e.map(function(n,o){return h.createElement(n.tag,u({key:o},n.attr),R(n.child))})}function te(e){return function(n){return h.createElement(ne,u({attr:u({},e.attr)},n),R(e.child))}}function ne(e){var n=function(o){var a=e.attr,i=e.size,x=e.title,f=ee(e,["attr","size","title"]),k=i||o.size||"1em",p;return o.className&&(p=o.className),e.className&&(p=(p?p+" ":"")+e.className),h.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,a,f,{className:p,style:u(u({color:e.color||o.color},o.style),e.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),x&&h.createElement("title",null,x),e.children)};return D!==void 0?h.createElement(D.Consumer,null,function(o){return n(o)}):n(G)}function se(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M13,9 L13,2 L1,2 L1,22 L13,22 L13,15 M22,12 L5,12 M17,7 L22,12 L17,17"}}]})(e)}const oe=J`
  from {
    transform: rotate(-15deg);
  }
  to {
    transform: rotate(15deg);
  }
`,re=c.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`,y=c.button`
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
`,z=c.div`
  position: fixed;
  inset: 0;
  outline: 1px solid red;
  background-color: #a2c579;
`,I=c.div`
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
`,ae=c.p`
  font-size: 32px;

  & > span {
    font-size: 64px;
  }

  margin-bottom: 50px;
`,F=({onRouteChange:e,score:n})=>t.jsx(z,{children:t.jsxs(I,{children:[t.jsx("h2",{children:"Game Over"}),t.jsxs(ae,{children:["🏆Your Final Score: ",t.jsx("span",{children:n}),"🏆"]}),t.jsx(y,{onClick:()=>e(),children:"Play Again"})]})});F.propTypes={onRouteChange:m.func.isRequired,score:m.number.isRequired};const ie=c.div`
  background-color: #ffffdd;
  height: 100%;
`,ce=c.div`
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
`,de=c.button`
  margin-right: 10px;
  padding: 1px 5px;
  border-radius: 6px;
  border: none;
  background-color: #d2de32;

  cursor: pointer;
`,le=c.div`
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
`,pe=c.div`
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
`,ue=c.div`
  margin: 10px 0;
  text-align: center;
  font-size: 16px;
`,M=c.span`
  & kbd {
    display: inline-block;
    padding: 2px 4px;
    border-radius: 5px;
    background-color: #333;
    color: salmon;
  }
`,xe=c.div`
  position: relative;
  width: 80vw;
  height: 80vw;
  max-width: 400px;
  max-height: 400px;

  display: flex;

  margin: 20px auto 0 auto;

  outline: 10px solid #61a3ba;
  background-color: #fff;

  @media screen and (max-width: 1366px) {
    width: 70vw;
    height: 70vw;
    max-width: 300px;
    max-height: 300px;
  }
`,he=c.div`
  position: fixed;
  inset: 0;
  background-color: hsla(0, 0%, 10%, 0.7);
`,fe=c.div`
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
`,ge=()=>t.jsx(he,{children:t.jsxs(fe,{children:[t.jsx("h2",{children:"Paused"}),t.jsxs(M,{children:["Press ",t.jsx("kbd",{children:"esc"})," to continue"]})]})}),me=c(I)`
  width: 500px;
  height: 500px;

  & > h2 {
    font-size: 36px;
  }

  & > button {
    margin-top: 20px;
  }
`,be=c.ol`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
`,ke=c.li`
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
`,B=({isOpen:e})=>{const[n,o]=l.useState([]),a=async()=>{const i=await Q();o(i)};return l.useEffect(()=>{a()},[]),t.jsx(z,{children:t.jsxs(me,{children:[t.jsx("h2",{children:"🏆Best Scores🏆"}),n.length>0?t.jsx(be,{children:n.map(({name:i,score:x})=>t.jsxs(ke,{children:[t.jsx("p",{children:i}),t.jsx("p",{children:x})]},i))}):t.jsx("div",{children:"Loading..."}),t.jsx(y,{onClick:()=>e(),children:"Close"})]})})};B.propTypes={isOpen:m.func.isRequired};const je=c.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #a2c579;
  border: 1px solid #ffffdd;
`,N=({snakeDots:e})=>t.jsx("div",{children:e.map((n,o)=>{const a={left:`${n[0]}%`,top:`${n[1]}%`};return t.jsx(je,{style:a},o)})});N.propTypes={snakeDots:m.array.isRequired};const ve=c.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #ed5959;
  border-radius: 50%;
`,W=({dot:e})=>{const n={left:`${e[0]}%`,top:`${e[1]}%`};return t.jsx(ve,{style:n})};W.propTypes={dot:m.array.isRequired};const A=({onRouteChange:e})=>t.jsx(re,{children:t.jsx(y,{onClick:e,type:"button",value:"start game",children:"Start Game"})});A.propTypes={onRouteChange:m.func.isRequired};const ye=()=>{const[e,n]=l.useState(v),[o,a]=l.useState(0),[i,x]=l.useState(0),[f,k]=l.useState(!1),[p,w]=l.useState(!1),[S,U]=l.useState(!1),j=V(),{user:b}=X(),g=e.route==="game";l.useEffect(()=>{j(C(o))},[b.score]),l.useEffect(()=>{const s=setInterval(()=>{f||_()},e.speed);return document.addEventListener("keydown",O),H(),q(),o>=50&&o/50>e.speedLevel&&(n(r=>({...r,speedLevel:r.speedLevel+1})),Y()),()=>{clearInterval(s),document.removeEventListener("keydown",O)}},[e,o,f]),l.useEffect(()=>{i===1?a(s=>s+1):i===2?a(s=>s+5):i>=3&&a(s=>s+10)},[i]);const O=s=>{s.key==="Escape"&&g&&!p&&!S&&k(!f);const r=e.direction;let d=r;switch(s.key){case"ArrowLeft":d="LEFT";break;case"ArrowUp":d="UP";break;case"ArrowRight":d="RIGHT";break;case"ArrowDown":d="DOWN";break}d!==r&&(d==="LEFT"&&r!=="RIGHT"||d==="RIGHT"&&r!=="LEFT"||d==="UP"&&r!=="DOWN"||d==="DOWN"&&r!=="UP")&&n({...e,direction:d})},_=()=>{if(g){let s=[...e.snakeDots],r=s[s.length-1];switch(e.direction){case"RIGHT":r=[r[0]+4,r[1]];break;case"LEFT":r=[r[0]-4,r[1]];break;case"DOWN":r=[r[0],r[1]+4];break;case"UP":r=[r[0],r[1]-4];break}s.push(r),r[0]===e.food[0]&&r[1]===e.food[1]?($(),x(d=>d+1)):s.shift(),n(d=>({...d,snakeDots:s}))}},H=()=>{if(g){const s=e.snakeDots[e.snakeDots.length-1];(s[0]>=100||s[1]>=100||s[0]<0||s[1]<0)&&E()}},q=()=>{if(g){const s=[...e.snakeDots],r=s[s.length-1];s.pop(),s.forEach(d=>{r[0]===d[0]&&r[1]===d[1]&&E()})}},$=()=>{const s=T();n(r=>({...r,food:s})),K()},K=()=>{if(g){const s=[...e.snakeDots];s.unshift([]),n(r=>({...r,snakeDots:s}))}},Y=()=>{g&&e.speed>10&&n(s=>({...s,speed:s.speed-20}))},L=()=>{n({...v,route:"game"}),a(0),x(0),w(!1)},E=()=>{o>b.score&&j(C(o)),w(!0),n({...v,route:"menu"})},P=()=>{U(s=>!s)};return t.jsxs(t.Fragment,{children:[t.jsxs(ie,{children:[t.jsx("div",{children:t.jsxs(ce,{children:[t.jsx(de,{onClick:P,children:"Best Scores"}),t.jsx("span",{children:b.name}),t.jsx(se,{onClick:()=>j(Z())})]})}),t.jsxs(le,{children:["High Score: ",b.score?b.score:"0"]}),e.route==="menu"?t.jsx(A,{onRouteChange:L}):t.jsxs(t.Fragment,{children:[t.jsxs(pe,{children:[t.jsx("span",{children:"Score"}),t.jsx("span",{children:o})]}),t.jsx(ue,{children:t.jsxs(M,{children:["Press ",t.jsx("kbd",{children:"esc"})," to pause"]})}),t.jsxs(xe,{children:[t.jsx(N,{snakeDots:e.snakeDots}),t.jsx(W,{dot:e.food})]})]})]}),f&&t.jsx(ge,{}),p&&t.jsx(F,{onRouteChange:L,score:o}),S&&t.jsx(B,{isOpen:P})]})},Oe=()=>t.jsx(t.Fragment,{children:t.jsx(ye,{})});export{Oe as default};

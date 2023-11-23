import{R as h,c as Y,s as c,j as t,a as l,g as J,u as Q,b as V,d as X,e as Z}from"./index-9b521779.js";import{P as m}from"./index-6d55fc97.js";const D=()=>{const s=Math.floor(Math.random()*24)*4,a=Math.floor(Math.random()*(24-1+1))*4;return[s,a]},j={food:D(),direction:"RIGHT",speed:200,speedLevel:0,route:"menu",snakeDots:[[0,0],[0,4],[0,8]]};var T={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=h.createContext&&h.createContext(T),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)},ee=globalThis&&globalThis.__rest||function(e,n){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(s[a[i]]=e[a[i]]);return s};function G(e){return e&&e.map(function(n,s){return h.createElement(n.tag,u({key:s},n.attr),G(n.child))})}function te(e){return function(n){return h.createElement(ne,u({attr:u({},e.attr)},n),G(e.child))}}function ne(e){var n=function(s){var a=e.attr,i=e.size,x=e.title,f=ee(e,["attr","size","title"]),b=i||s.size||"1em",p;return s.className&&(p=s.className),e.className&&(p=(p?p+" ":"")+e.className),h.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,f,{className:p,style:u(u({color:e.color||s.color},s.style),e.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),x&&h.createElement("title",null,x),e.children)};return C!==void 0?h.createElement(C.Consumer,null,function(s){return n(s)}):n(T)}function oe(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M13,9 L13,2 L1,2 L1,22 L13,22 L13,15 M22,12 L5,12 M17,7 L22,12 L17,17"}}]})(e)}const se=Y`
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

  animation: ${se} 1000ms linear infinite alternate;
`,R=c.div`
  position: fixed;
  inset: 0;
  outline: 1px solid red;
  background-color: #a2c579;
`,z=c.div`
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
`,I=({onRouteChange:e,score:n})=>t.jsx(R,{children:t.jsxs(z,{children:[t.jsx("h2",{children:"Game Over"}),t.jsxs(ae,{children:["🏆Your Final Score: ",t.jsx("span",{children:n}),"🏆"]}),t.jsx(v,{onClick:()=>e(),children:"Play Again"})]})});I.propTypes={onRouteChange:m.func.isRequired,score:m.number.isRequired};const ie=c.div`
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
`,F=c.span`
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
`,ge=()=>t.jsx(he,{children:t.jsxs(fe,{children:[t.jsx("h2",{children:"Paused"}),t.jsxs(F,{children:["Press ",t.jsx("kbd",{children:"esc"})," to continue"]})]})}),me=c(z)`
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
`,M=({isOpen:e})=>{const[n,s]=l.useState([]),a=async()=>{const i=await J();s(i)};return l.useEffect(()=>{a()},[]),t.jsx(R,{children:t.jsxs(me,{children:[t.jsx("h2",{children:"🏆Best Scores🏆"}),n.length>0?t.jsx(be,{children:n.map(({name:i,score:x})=>t.jsxs(ke,{children:[t.jsx("p",{children:i}),t.jsx("p",{children:x})]},i))}):t.jsx("div",{children:"Loading..."}),t.jsx(v,{onClick:()=>e(),children:"Close"})]})})};M.propTypes={isOpen:m.func.isRequired};const je=c.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #a2c579;
  border: 1px solid #ffffdd;
`,B=({snakeDots:e})=>t.jsx("div",{children:e.map((n,s)=>{const a={left:`${n[0]}%`,top:`${n[1]}%`};return t.jsx(je,{style:a},s)})});B.propTypes={snakeDots:m.array.isRequired};const ve=c.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: #ed5959;
  border-radius: 50%;
`,N=({dot:e})=>{const n={left:`${e[0]}%`,top:`${e[1]}%`};return t.jsx(ve,{style:n})};N.propTypes={dot:m.array.isRequired};const W=({onRouteChange:e})=>t.jsx(re,{children:t.jsx(v,{onClick:e,type:"button",value:"start game",children:"Start Game"})});W.propTypes={onRouteChange:m.func.isRequired};const ye=()=>{const[e,n]=l.useState(j),[s,a]=l.useState(0),[i,x]=l.useState(0),[f,b]=l.useState(!1),[p,y]=l.useState(!1),[w,A]=l.useState(!1),S=Q(),{user:k}=V(),g=e.route==="game";l.useEffect(()=>{const o=setInterval(()=>{f||U()},e.speed);return document.addEventListener("keydown",O),_(),H(),s>=50&&s/50>e.speedLevel&&(n(r=>({...r,speedLevel:r.speedLevel+1})),K()),()=>{clearInterval(o),document.removeEventListener("keydown",O)}},[e,s,f]),l.useEffect(()=>{i===1?a(o=>o+1):i===2?a(o=>o+5):i>=3&&a(o=>o+10)},[i]);const O=o=>{o.key==="Escape"&&g&&!p&&!w&&b(!f);const r=e.direction;let d=r;switch(o.key){case"ArrowLeft":d="LEFT";break;case"ArrowUp":d="UP";break;case"ArrowRight":d="RIGHT";break;case"ArrowDown":d="DOWN";break}d!==r&&(d==="LEFT"&&r!=="RIGHT"||d==="RIGHT"&&r!=="LEFT"||d==="UP"&&r!=="DOWN"||d==="DOWN"&&r!=="UP")&&n({...e,direction:d})},U=()=>{if(g){let o=[...e.snakeDots],r=o[o.length-1];switch(e.direction){case"RIGHT":r=[r[0]+4,r[1]];break;case"LEFT":r=[r[0]-4,r[1]];break;case"DOWN":r=[r[0],r[1]+4];break;case"UP":r=[r[0],r[1]-4];break}o.push(r),r[0]===e.food[0]&&r[1]===e.food[1]?(q(),x(d=>d+1)):o.shift(),n(d=>({...d,snakeDots:o}))}},_=()=>{if(g){const o=e.snakeDots[e.snakeDots.length-1];(o[0]>=100||o[1]>=100||o[0]<0||o[1]<0)&&P()}},H=()=>{if(g){const o=[...e.snakeDots],r=o[o.length-1];o.pop(),o.forEach(d=>{r[0]===d[0]&&r[1]===d[1]&&P()})}},q=()=>{const o=D();n(r=>({...r,food:o})),$()},$=()=>{if(g){const o=[...e.snakeDots];o.unshift([]),n(r=>({...r,snakeDots:o}))}},K=()=>{g&&e.speed>10&&n(o=>({...o,speed:o.speed-20}))},L=()=>{n({...j,route:"game"}),a(0),x(0),y(!1)},P=()=>{s>k.score&&S(X(s)),y(!0),n({...j,route:"menu"})},E=()=>{A(o=>!o)};return t.jsxs(t.Fragment,{children:[t.jsxs(ie,{children:[t.jsx("div",{children:t.jsxs(ce,{children:[t.jsx(de,{onClick:E,children:"Best Scores"}),t.jsx("span",{children:k.name}),t.jsx(oe,{onClick:()=>S(Z())})]})}),t.jsxs(le,{children:["High Score: ",k.score]}),e.route==="menu"?t.jsx(W,{onRouteChange:L}):t.jsxs(t.Fragment,{children:[t.jsxs(pe,{children:[t.jsx("span",{children:"Score"}),t.jsx("span",{children:s})]}),t.jsx(ue,{children:t.jsxs(F,{children:["Press ",t.jsx("kbd",{children:"esc"})," to pause"]})}),t.jsxs(xe,{children:[t.jsx(B,{snakeDots:e.snakeDots}),t.jsx(N,{dot:e.food})]})]})]}),f&&t.jsx(ge,{}),p&&t.jsx(I,{onRouteChange:L,score:s}),w&&t.jsx(M,{isOpen:E})]})},Oe=()=>t.jsx(t.Fragment,{children:t.jsx(ye,{})});export{Oe as default};

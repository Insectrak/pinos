import{r as Z}from"./index-DzsgG8uf.js";function G(t,o){for(var d=0;d<o.length;d++){const a=o[d];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in t)){const l=Object.getOwnPropertyDescriptor(a,i);l&&Object.defineProperty(t,i,l.get?l:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var R={};function J(t){if(typeof window>"u")return;const o=document.createElement("style");return o.setAttribute("type","text/css"),o.innerHTML=t,document.head.appendChild(o),t}Object.defineProperty(R,"__esModule",{value:!0});var e=Z;function K(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var s=K(e);J(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const Q=e.forwardRef(function({style:o={},className:d="",autoFill:a=!1,play:i=!0,pauseOnHover:l=!1,pauseOnClick:b=!1,direction:n="left",speed:h=50,delay:S=0,loop:x=0,gradient:z=!1,gradientColor:N="white",gradientWidth:y=200,onFinish:$,onCycleComplete:P,onMount:j,children:g},W){const[q,B]=e.useState(0),[p,D]=e.useState(0),[w,k]=e.useState(1),[E,I]=e.useState(!1),L=e.useRef(null),u=W||L,m=e.useRef(null),v=e.useCallback(()=>{if(m.current&&u.current){const r=u.current.getBoundingClientRect(),M=m.current.getBoundingClientRect();let f=r.width,c=M.width;(n==="up"||n==="down")&&(f=r.height,c=M.height),k(a&&f&&c&&c<f?Math.ceil(f/c):1),B(f),D(c)}},[a,u,n]);e.useEffect(()=>{if(E&&(v(),m.current&&u.current)){const r=new ResizeObserver(()=>v());return r.observe(u.current),r.observe(m.current),()=>{r&&r.disconnect()}}},[v,u,E]),e.useEffect(()=>{v()},[v,g]),e.useEffect(()=>{I(!0)},[]),e.useEffect(()=>{typeof j=="function"&&j()},[]);const A=e.useMemo(()=>a?p*w/h:p<q?q/h:p/h,[a,q,p,w,h]),T=e.useMemo(()=>Object.assign(Object.assign({},o),{"--pause-on-hover":!i||l?"paused":"running","--pause-on-click":!i||l&&!b||b?"paused":"running","--width":n==="up"||n==="down"?"100vh":"100%","--transform":n==="up"?"rotate(-90deg)":n==="down"?"rotate(90deg)":"none"}),[o,i,l,b,n]),X=e.useMemo(()=>({"--gradient-color":N,"--gradient-width":typeof y=="number"?`${y}px`:y}),[N,y]),C=e.useMemo(()=>({"--play":i?"running":"paused","--direction":n==="left"?"normal":"reverse","--duration":`${A}s`,"--delay":`${S}s`,"--iteration-count":x?`${x}`:"infinite","--min-width":a?"auto":"100%"}),[i,n,A,S,x,a]),_=e.useMemo(()=>({"--transform":n==="up"?"rotate(90deg)":n==="down"?"rotate(-90deg)":"none"}),[n]),O=e.useCallback(r=>[...Array(Number.isFinite(r)&&r>=0?r:0)].map((M,f)=>s.default.createElement(e.Fragment,{key:f},e.Children.map(g,c=>s.default.createElement("div",{style:_,className:"rfm-child"},c)))),[_,g]);return E?s.default.createElement("div",{ref:u,style:T,className:"rfm-marquee-container "+d},z&&s.default.createElement("div",{style:X,className:"rfm-overlay"}),s.default.createElement("div",{className:"rfm-marquee",style:C,onAnimationIteration:P,onAnimationEnd:$},s.default.createElement("div",{className:"rfm-initial-child-container",ref:m},e.Children.map(g,r=>s.default.createElement("div",{style:_,className:"rfm-child"},r))),O(w-1)),s.default.createElement("div",{className:"rfm-marquee",style:C},O(w))):null});var U=R.default=Q;const Y=G({__proto__:null,default:U},[R]);export{Y as i};

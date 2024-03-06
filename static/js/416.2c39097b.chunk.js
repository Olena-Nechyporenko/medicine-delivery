"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[416],{416:function(n,e,r){r.r(e),r.d(e,{default:function(){return Pn}});var t,i,o,a,c,l,p=r(9439),d=r(9434),u=r(168),x=r(7924),s=x.ZP.div(t||(t=(0,u.Z)(["\n  position: relative;\n  width: 350px;\n  height: 300px;\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\n    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n  border-radius: 10px;\n  margin-bottom: 15px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n    height: 550px;\n    width: 300px;\n  }\n  @media screen and (min-width: 1200px) {\n    margin-bottom: 0;\n    height: 550px;\n    width: 300px;\n  }\n"]))),h=x.ZP.div(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n"]))),f=x.ZP.h2(o||(o=(0,u.Z)(["\n  font-weight: 600;\n  font-size: 25px;\n  line-height: 1.1;\n  color: var(--main-text-color);\n"]))),g=x.ZP.ul(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),m=x.ZP.li(c||(c=(0,u.Z)(["\n  width: 150px;\n"]))),v=x.ZP.button(l||(l=(0,u.Z)(["\n  font-family: inherit;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1.1;\n  color: var(--main-text-color);\n\n  width: 100%;\n  height: 50px;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  background-color: ",";\n  cursor: pointer;\n\n  transition: all var(--main-transition);\n\n  &:hover {\n    background-color: var(--hover-color);\n  }\n"])),(function(n){return n.disabled?"var(--hover-color)":"var(--accent-color)"})),b="NOT_FOUND";var w=function(n,e){return n===e};function y(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,i=void 0===t?w:t,o=r.maxSize,a=void 0===o?1:o,c=r.resultEqualityCheck,l=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,i=0;i<t;i++)if(!n(e[i],r[i]))return!1;return!0}}(i),p=1===a?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:b},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var i=r[t];return t>0&&(r.splice(t,1),r.unshift(i)),i.value}return b}return{get:t,put:function(e,i){t(e)===b&&(r.unshift({key:e,value:i}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(a,l);function d(){var e=p.get(arguments);if(e===b){if(e=n.apply(null,arguments),c){var r=p.getEntries(),t=r.find((function(n){return c(n.value,e)}));t&&(e=t.value)}p.put(arguments,e)}return e}return d.clearCache=function(){return p.clear()},d}function Z(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function j(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var i=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var o,a=0,c={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(c=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var p=c,d=p.memoizeOptions,u=void 0===d?r:d,x=Array.isArray(u)?u:[u],s=Z(t),h=n.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(x)),f=n((function(){for(var n=[],e=s.length,r=0;r<e;r++)n.push(s[r].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(f,{resultFunc:l,memoizedResultFunc:h,dependencies:s,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),f};return i}var k,P,z,C,F,N,S,_,A,E,O,T,I,q,D,R,J,L,U,V=j(y),B=function(n){return n.drugs.drugs.isLoading},G=function(n){return n.drugs.drugs.shops},H=V([function(n){return n.drugs.filterFrom},function(n){return n.drugs.filterTo},function(n){return n.drugs.drugs.items}],(function(n,e,r){return r.filter((function(r){var t=parseFloat(n),i=parseFloat(e);return(!!isNaN(t)||r.price>=t)&&(!!isNaN(i)||r.price<=i)}))})),K=r(2791),M=r(9289),Q=r(184),W=function(){var n=(0,K.useState)(""),e=(0,p.Z)(n,2),r=e[0],t=e[1],i=(0,d.I0)(),o=(0,d.v9)(G);(0,K.useEffect)((function(){i((0,M.N)())}),[i]);return(0,Q.jsx)(s,{children:(0,Q.jsxs)(h,{children:[(0,Q.jsx)(f,{children:"Shops"}),(0,Q.jsx)(g,{children:o.map((function(n){return(0,Q.jsx)(m,{children:(0,Q.jsx)(v,{type:"button",disabled:n.name===r,onClick:function(){return e={id:n._id,name:n.name},t(e.name),void i((0,M.i)(e.id));var e},children:n.name})},n._id)}))})]})})},X=x.ZP.div(k||(k=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  @media screen and (min-width: 1200px) {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n"]))),Y=r(5264),$=x.ZP.div(P||(P=(0,u.Z)(["\n  position: relative;\n  width: 350px;\n  height: 550px;\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\n    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n  border-radius: 10px;\n\n  @media screen and (min-width: 768px) {\n    width: 350px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 800px;\n  }\n"]))),nn=x.ZP.div(z||(z=(0,u.Z)(["\n  padding: 10px;\n\n  @media screen and (min-width: 768px) {\n    padding: 10px;\n  }\n  @media screen and (min-width: 1200px) {\n    padding: 10px;\n  }\n"]))),en=x.ZP.ul(C||(C=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px 50px;\n  height: 450px;\n  overflow-y: auto;\n  padding: 5px;\n\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 12px;\n    background-color: var(--accent-color);\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #e3fee1;\n    border-radius: 12px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 5px;\n  }\n  @media screen and (min-width: 1200px) {\n    padding: 5px 52px;\n  }\n"]))),rn=x.ZP.li(F||(F=(0,u.Z)(["\n  width: 300px;\n  height: 235px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  border-radius: 10px;\n"]))),tn=x.ZP.div(N||(N=(0,u.Z)(["\n  border-radius: 14px;\n  width: 300px;\n  height: 150px;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,\n    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;\n"]))),on=x.ZP.img(S||(S=(0,u.Z)(["\n  object-fit: cover;\n  height: 150px;\n  width: 300px;\n"]))),an=x.ZP.div(_||(_=(0,u.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 5px 10px;\n"]))),cn=x.ZP.div(A||(A=(0,u.Z)(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1.1;\n  color: var(--main-text-color);\n"]))),ln=x.ZP.div(E||(E=(0,u.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.1;\n  color: var(--secondary-text-color);\n"]))),pn=x.ZP.div(O||(O=(0,u.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1.1;\n  color: var(--main-text-color);\n"]))),dn=x.ZP.button(T||(T=(0,u.Z)(["\n  font-family: inherit;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.1;\n  color: var(--main-text-color);\n  border: none;\n  border-radius: 10px;\n  background-color: var(--accent-color);\n  padding: 5px;\n  cursor: pointer;\n\n  transition: all var(--main-transition);\n\n  &:hover {\n    background-color: var(--hover-color);\n  }\n"]))),un=x.ZP.div(I||(I=(0,u.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.1;\n  color: var(--main-text-color);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 250px;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 400px;\n  }\n"]))),xn=r(8117),sn=r(9258),hn=r(2894),fn=r(5705),gn=x.ZP.div(q||(q=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  gap: 18px;\n  margin-bottom: 10px;\n"]))),mn=x.ZP.label(D||(D=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.3;\n  color: var(--secondary-text-color);\n"]))),vn=x.ZP.div(R||(R=(0,u.Z)(["\n  display: flex;\n  gap: 10px;\n  width: 250px;\n"]))),bn=(0,x.ZP)(fn.gN)(J||(J=(0,u.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.1;\n  color: var(--main-text-color);\n  border-radius: 10px;\n  border: 1px solid rgba(18, 20, 23, 0.5);\n  width: 100px;\n  height: 28px;\n  background: var(--input-color);\n  padding-left: 14px;\n\n  &::placeholder {\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 1.1;\n    color: var(--main-text-color);\n  }\n"]))),wn=(0,x.ZP)(fn.gN)(L||(L=(0,u.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.1;\n  color: var(--main-text-color);\n  border-radius: 10px;\n  border: 1px solid rgba(18, 20, 23, 0.5);\n  width: 100px;\n  height: 28px;\n  background: var(--input-color);\n  padding-left: 14px;\n\n  &::placeholder {\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 1.1;\n    color: var(--main-text-color);\n  }\n"]))),yn=x.ZP.button(U||(U=(0,u.Z)(["\n  font-family: inherit;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.1;\n  color: var(--main-text-color);\n  border-radius: 10px;\n  border: none;\n  width: 120px;\n  height: 32px;\n  background: var(--accent-color);\n  cursor: pointer;\n  transition: all var(--main-transition);\n\n  &:hover {\n    background-color: var(--hover-color);\n  }\n"]))),Zn=r(5362),jn=function(){var n=(0,K.useState)(""),e=(0,p.Z)(n,2),r=e[0],t=e[1],i=(0,K.useState)(""),o=(0,p.Z)(i,2),a=o[0],c=o[1],l=(0,d.I0)();return(0,Q.jsx)(fn.J9,{onSubmit:function(){l((0,Zn.T)({from:r,to:a})),t(""),c("")},initialValues:{from:r,to:a},children:(0,Q.jsx)(fn.l0,{autoComplete:"off",children:(0,Q.jsxs)(gn,{children:[(0,Q.jsxs)(vn,{children:[(0,Q.jsxs)(mn,{htmlFor:"from",children:["Price from",(0,Q.jsx)(bn,{type:"number",name:"from",value:r,placeholder:"From",onChange:function(n){return t(n.target.value)}})]}),(0,Q.jsxs)(mn,{htmlFor:"to",children:["Price to",(0,Q.jsx)(wn,{type:"number",name:"to",value:a,placeholder:"To",onChange:function(n){return c(n.target.value)}})]})]}),(0,Q.jsx)(yn,{type:"submit",children:"Search"})]})})})},kn=function(){var n=(0,d.I0)(),e=(0,d.v9)(H),r=(0,d.v9)(hn.gd),t=(0,d.v9)(B);return(0,Q.jsxs)($,{children:[t&&(0,Q.jsx)(sn.a,{}),(0,Q.jsxs)(nn,{children:[(0,Q.jsx)(jn,{}),0!==e.length||t?(0,Q.jsx)(Q.Fragment,{children:!t&&(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsx)(en,{children:e.map((function(e){var t=e.img,i=e.name,o=e.group,a=e.price,c=e._id;return(0,Q.jsxs)(rn,{children:[(0,Q.jsx)(tn,{children:(0,Q.jsx)(on,{src:t,alt:i})}),(0,Q.jsxs)(an,{children:[(0,Q.jsx)(cn,{children:i}),(0,Q.jsx)(ln,{children:o}),(0,Q.jsxs)(pn,{children:[a," \u20b4"]}),(0,Q.jsx)(dn,{onClick:function(){return e=c,void(r.find((function(n){return n._id===e}))?Y.Notify.failure("Drug is already in cart!"):(n((0,xn.w)(e)),Y.Notify.success("Drugs added to cart!")));var e},children:"Add to Cart"})]})]},c)}))})})}):(0,Q.jsx)(un,{children:"The drugs list is now empty."})]})]})};function Pn(){return(0,Q.jsxs)(X,{children:[(0,Q.jsx)(W,{}),(0,Q.jsx)(kn,{})]})}},2894:function(n,e,r){r.d(e,{gd:function(){return t}});var t=function(n){return n.cart.cart.inCart}}}]);
//# sourceMappingURL=416.2c39097b.chunk.js.map
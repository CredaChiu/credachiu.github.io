!function(){var e=document.createElement("style");e.innerHTML=".TypeResult .label{font-size:20px;line-height:20px;color:var(--head-text-color);opacity:.5}.TypeResult .show-data{font-size:44px;line-height:44px;color:var(--primary-color)}.ReloadBtn{height:90px;width:90px;background-color:transparent;border-color:transparent;text-shadow:none;box-shadow:none}.ReloadBtn:hover,.ReloadBtn:focus{box-shadow:0 0 0 5px var(--home-input-focus-color);background-color:transparent;border-color:transparent;filter:brightness(1.1)}.ReloadBtn span{color:var(--head-text-color);opacity:.5;font-size:26px;position:relative;top:2px}\n",document.head.appendChild(e),System.register(["./vendor-legacy.32ea3a5c.js"],(function(e){"use strict";var a,n,o,t,r,l;return{setters:[function(e){a=e.j,n=e.e,o=e.R,t=e.C,r=e.B,l=e.x}],execute:function(){e("T",(e=>a("div",{className:"TypeResult",children:n(o,{justify:"center",gutter:80,children:[n(t,{span:6,children:[a("div",{className:"label",children:e.desc}),a("div",{className:"show-data",children:e.numStr})]}),n(t,{span:6,children:[a("div",{className:"label",children:"正确率"}),n("div",{className:"show-data",children:[e.acc,"%"]})]}),n(t,{span:6,children:[a("div",{className:"label",children:"用时"}),n("div",{className:"show-data",children:[e.secs,"s"]})]})]})})));e("R",(e=>a(r,{className:"ReloadBtn",onClick:e.onClick,type:"primary",icon:a(l,{})})))}}}))}();
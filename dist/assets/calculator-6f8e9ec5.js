import{d as p}from"./vuedraggable.umd-8b429fed.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{r as g,o as b,c as h,a as t,b as c,w as u,F as y,h as v,t as m}from"./index-76d147a3.js";const x={name:"calculator",display:"calculator",components:{draggable:p},data(){return{Num:["0","1","2","3","4","5","6","7","8","9"],Symbol:["+","-","x","÷"],Num_list:[[],[],[]],Sy_list:[[],[],[]],Ans:[],Carry:[]}},methods:{log:function(l){console.log(l),this.Num=["0","1","2","3","4","5","6","7","8","9"]},addrow:function(l){this.Num_list.push([]),this.Sy_list.push([])},removerow:function(l){this.Num_list.length>1&&(this.Num_list.pop(),this.Sy_list.pop())},clear:function(l){this.Num_list=[[]],this.Sy_list=[[]],this.Carry=[]},sym_control:function(){this.Sy_list[0]=[];for(var l in this.Sy_list)this.Sy_list[l].length>1&&this.Sy_list[l].pop()},Calculat:function(){this.Ans=[];var l=[],e=[];for(var s in this.Num_list)l.push(this.Num_list[s].join(""));for(var s in this.Sy_list)e.push(this.Sy_list[s].join(""));for(var n=l[0],s=0;s<=e.length;s++)e[s+1]=="+"?n=parseInt(n)+parseInt(l[s+1]):e[s+1]=="-"?n=parseInt(n)-parseInt(l[s+1]):e[s+1]=="x"?n=parseInt(n)*parseInt(l[s+1]):e[s+1]=="÷"&&(n=parseInt(n)/parseInt(l[s+1]));n=n.toString();for(var s in n)this.Ans.push(n[s])}}},w={class:"container"},C={class:"row"},N={class:"col-6"},S={class:"card p-4"},k=t("h3",null,"Template",-1),j={class:"row"},A={type:"button",class:"btn btn-primary m-1 my-btn"},I=t("hr",{style:{"background-color":"black",border:"solid","border-width":"5px"}},null,-1),B={class:"row"},R={type:"button",class:"btn btn-primary m-1 my-btn"},F={type:"button",class:"btn btn-primary m-1 my-btn"},V=t("hr",{style:{"background-color":"black",border:"solid","border-width":"5px"}},null,-1),D={type:"button",class:"btn btn-primary m-1 my-btn"},E={class:"d-flex flex-row flex-wrap"},L={class:"col-6"},T={class:"card p-3"},q={class:"row"},z={class:"col-6"},G=t("h3",null,"Number",-1),H={type:"button",class:"btn btn-primary m-1"},J={class:"col-6"},K=t("h3",null,"Symbol",-1),M={type:"button",class:"btn btn-primary m-1"},O=t("br",null,null,-1),P=t("br",null,null,-1);function Q(l,e,s,n,r,i){const a=g("draggable");return b(),h(y,null,[t("div",w,[t("div",C,[t("div",N,[t("div",S,[k,t("div",j,[c(a,{list:r.Carry,group:"Number","item-key":"name",class:"d-flex justify-content-end",style:{border:"solid","min-height":"55px"}},{item:u(({element:o})=>[t("button",A,m(o),1)]),_:1},8,["list"]),I,(b(!0),h(y,null,v(r.Num_list,(o,_)=>(b(),h("div",null,[t("div",B,[c(a,{list:r.Sy_list[_],group:"Symbol","item-key":"name",class:"d-flex justify-content-end col-2",onChange:d=>i.sym_control(_)},{item:u(({element:d})=>[t("button",R,m(d),1)]),_:2},1032,["list","onChange"]),c(a,{list:r.Num_list[_],group:"Number","item-key":"name",class:"d-flex justify-content-end col-10",style:{border:"solid","min-height":"55px"}},{item:u(({element:d})=>[t("button",F,m(d),1)]),_:2},1032,["list"])])]))),256)),V,c(a,{list:r.Ans,group:"Number","item-key":"name",class:"d-flex justify-content-end",style:{border:"solid","min-height":"55px"}},{item:u(({element:o})=>[t("button",D,m(o),1)]),_:1},8,["list"]),t("div",E,[t("button",{onClick:e[0]||(e[0]=(...o)=>i.addrow&&i.addrow(...o)),class:"btn btn-primary m-1 flex-grow-1"},"Add Row"),t("button",{onClick:e[1]||(e[1]=(...o)=>i.removerow&&i.removerow(...o)),class:"btn btn-primary m-1 flex-grow-1"},"Remove Row"),t("button",{onClick:e[2]||(e[2]=(...o)=>i.clear&&i.clear(...o)),class:"btn btn-primary m-1 flex-grow-1"},"Clear All"),t("button",{onClick:e[3]||(e[3]=(...o)=>i.Calculat&&i.Calculat(...o)),class:"btn btn-primary m-1 flex-grow-1"},"Calculat")])])])]),t("div",L,[t("div",T,[t("div",q,[t("div",z,[G,c(a,{class:"dragArea list-group d-flex justify-content-start",list:r.Num,group:{name:"Number",pull:"clone",put:!1},onChange:i.log,"item-key":"Number"},{item:u(({element:o})=>[t("button",H,m(o),1)]),_:1},8,["list","onChange"])]),t("div",J,[K,c(a,{class:"dragArea list-group d-flex justify-content-start",list:r.Symbol,group:{name:"Symbol",pull:"clone",put:!1},onChange:i.log,"item-key":"index"},{item:u(({element:o})=>[t("button",M,m(o),1)]),_:1},8,["list","onChange"])])])])])])]),O,P],64)}const Y=f(x,[["render",Q]]);export{Y as default};
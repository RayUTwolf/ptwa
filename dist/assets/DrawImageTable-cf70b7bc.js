import{G as d}from"./get_assets-ed6c2078.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{o as a,c as l,a as t,t as n,F as h,k as u,m as p,j as m,p as C,e as g}from"./index-4d742f7d.js";const D={name:"DrawImageTable",props:{Data:{type:Object,required:!0},ID:{type:String,required:!0}},data(){return{coloredCells:[],Src:""}},created(){this.Data.length=this.Data.Mother,this.Src=d(this.ID,this.Data.Src)},computed:{totalCells(){return Math.ceil(this.Data.length/4)*4}},methods:{toggleColor(e){this.coloredCells.includes(e)?this.coloredCells=this.coloredCells.filter(o=>o!==e):this.coloredCells.push(e)}}},f=e=>(C("data-v-4e48a5f5"),e=e(),g(),e),v={class:"Container"},I={class:"division"},S=f(()=>t("hr",null,null,-1)),k={class:"table-container"},y=["onClick"],b=["src","alt"];function w(e,o,r,B,c,i){return a(),l("div",v,[t("div",I,[t("p",null,n(this.Data.Child),1),S,t("p",null,n(this.Data.Mother),1)]),t("div",k,[(a(!0),l(h,null,u(i.totalCells,s=>(a(),l("div",{key:s,class:p(["table-cell",{colored:c.coloredCells.includes(s-1)}]),onClick:F=>i.toggleColor(s-1)},[s<=r.Data.length?(a(),l("img",{key:0,src:c.Src,alt:r.Data.Alt},null,8,b)):m("",!0)],10,y))),128))])])}const j=_(D,[["render",w],["__scopeId","data-v-4e48a5f5"]]);export{j as default};
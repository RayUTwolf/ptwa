import{$ as r}from"./jquery-eebbd0cf.js";import{G as f}from"./get_assets-8814068a.js";import{_ as m,o as d,c as h,a,t as l,F as u,j as g,au as b,p as _,e as v}from"./index-fce9030c.js";const j={name:"FindTheItem",data(){return{ObjPosition:[],ObjPositionRange:[],answered:[],btn:{},inputNumber:""}},props:{GameData:{type:Object,required:!0},GameConfig:{type:Object,required:!0},id:{type:String,required:!0}},created(){for(var t=0;t<this.GameData.Question.ObjNum;t++)this.answered.push(0);for(var t in this.GameData.Question.ObjName)this.btn[t]=this.GameData.Question.ObjName[t]},mounted(){var t=document.getElementById("cvs");const s=t.getContext("2d");var i=new Image;i.src=f(this.id,this.GameData.img),i.addEventListener("load",function(){s.drawImage(this,0,0,t.width,t.height)},!1);var e=r("#cvs").offset().left,o=r("#cvs").offset().top;console.log("page offset:",e,o),this.ObjPosition=this.GameData.Question.ObjLocation,this.ObjPositionRange=this.GameData.Answer},methods:{outCircle(t,s){var i=document.getElementById("cvs"),e=i.getContext("2d"),o=50,c=2,n="red";e.beginPath(),e.arc(t,s,o,0,2*Math.PI),e.lineWidth=c,e.strokeStyle=n,e.stroke()},judge_position(t){for(var s=r("#cvs").offset().left,i=r("#cvs").offset().top,e=0;e<11;e++)t.pageX>=this.ObjPositionRange[e][0][0]+s&&t.pageX<=this.ObjPositionRange[e][0][1]+s&&t.pageY>=this.ObjPositionRange[e][1][0]+i&&t.pageY<=this.ObjPositionRange[e][1][1]+i&&this.RightAns(e)},RightAns(t){this.ObjPosition[t][0],this.ObjPosition[t][1],this.$emit("play-effect","CorrectSound"),this.$emit("add-record",[t,"被找到","正確"]),this.outCircle(this.ObjPosition[t][0],this.ObjPosition[t][1]),r("#bt-"+t).css("background-color","gray"),this.detect_win(t)},detect_win(t){this.answered[t]=1;var s=0;for(t in this.answered)this.answered[t]==0&&(s+=1);s==0&&this.win()},win(){console.log("FindTheItemGame CheckAnswer :Wrong"),this.$emit("play-effect","HarraySound"),this.$emit("add-record",["全對","","正確"]),this.$emit("next-question",!0)}}},w=t=>(_("data-v-70b0cf43"),t=t(),v(),t),O={class:"container"},x={class:"h1"},y={class:"d-flex flex-row justify-content-between"},G={class:"objlistbar"},P=w(()=>a("p",{class:"h4"},"尚未被找到的:",-1)),I={class:"d-flex flex-column flex-wrap"};function C(t,s,i,e,o,c){return d(),h("div",O,[a("p",x,l(this.GameData.Question.Text),1),a("div",y,[a("canvas",{id:"cvs",class:"center",width:"800",height:"600",style:{border:"1px solid #000"},onClick:s[0]||(s[0]=n=>c.judge_position(n))}),a("div",G,[P,a("div",I,[(d(!0),h(u,null,g(o.btn,(n,p)=>(d(),h("button",{class:b(["btn btn-primary m-1 flex-grow-1",{"active-button":o.answered[p]==0}])},l(n),3))),256))])])])])}const S=m(j,[["render",C],["__scopeId","data-v-70b0cf43"]]);export{S as default};
import{d as k,r as h,A as b,b as r,B as X,q as C,D as N,u as i,E as D,o as V,a as M,f as n,p as l,t as g}from"./entry.8cba7e1e.js";import{_ as q}from"./_plugin-vue_export-helper.a1a6add7.js";const H=["alt","src"],O=["alt","src"],T={class:"left-line-label"},U={class:"right-line-label"},j=k({__name:"ImageCompare",props:{leftImage:{type:String,default:""},leftImageAlt:{type:String,default:null},leftLabel:{type:String,default:""},rightImage:{type:String,default:""},rightImageAlt:{type:String,default:null},rightLabel:{type:String,default:""},hover:{type:Boolean,default:!1},handleSize:{type:Number,default:40},sliderLineWidth:{type:Number,default:2},sliderPositionPercentage:{type:Number,default:.5},leftLineLabel:{type:String,default:""},rightLineLabel:{type:String,default:""}},setup(a,{expose:x}){const e=a,p=h(null),m=h(null),w=h(null),o=h(e.sliderPositionPercentage||.5),{width:d}=b(m),{width:_}=b(w),L=r(()=>({clip:`rect(auto, ${d.value*o.value}px, auto, auto)`})),E=r(()=>({clip:`rect(auto, auto, auto, ${Math.max(0,_.value+d.value*(o.value-1))}px)`})),$=r(()=>({cursor:!e.hover&&"ew-resize",left:d.value*o.value-e.handleSize/2+"px",width:`${e.handleSize}px`})),z=r(()=>({width:`${e.sliderLineWidth}px`})),I=r(()=>({border:`${e.sliderLineWidth}px solid white`,height:`${e.handleSize}px`,width:`${e.handleSize}px`,display:e.handleSize?"":"none"})),R=r(()=>({border:`inset ${e.handleSize*.15}px rgba(0,0,0,0)`,borderRight:`${e.handleSize*.15}px solid white`,marginLeft:`-${e.handleSize*.25}px`,marginRight:`${e.handleSize*.25}px`})),P=r(()=>({border:`inset ${e.handleSize*.15}px rgba(0,0,0,0)`,borderLeft:`${e.handleSize*.15}px solid white`,marginRight:`-${e.handleSize*.25}px`}));function v(t){"touches"in t||t.preventDefault(),c(t),window.addEventListener("mousemove",c),window.addEventListener("touchmove",c)}function s(){window.removeEventListener("mousemove",c),window.removeEventListener("touchmove",c)}function c(t){const f=t||window.event,B=(f.touches?f.touches[0].pageX:f.pageX)-window.pageXOffset,W=m.value.getBoundingClientRect();let u=B-W.left;const y=0+e.sliderLineWidth/2,S=d.value-e.sliderLineWidth/2;u<y&&(u=y),u>S&&(u=S),o.value=u/d.value}function A(){o.value=e.sliderPositionPercentage||.5}return x({resume:A}),X(()=>{console.log("onActivated")}),C(async()=>{await N();{const t=i(p);t.addEventListener("touchstart",v),window.addEventListener("touchend",s),e.hover?(t.addEventListener("mouseenter",v),t.addEventListener("mouseleave",s)):(t.addEventListener("mousedown",v),window.addEventListener("mouseup",s))}}),D(()=>{s(),window.removeEventListener("mouseup",s),window.removeEventListener("touchend",s)}),(t,f)=>(V(),M("div",{ref_key:"containerRef",ref:p,class:"vci-container"},[n("img",{ref:"leftImageRef",alt:a.leftImageAlt,src:a.leftImage,style:l(i(L)),class:"left-image"},null,12,H),n("div",{style:l(i(L)),class:"left-label"},g(a.leftLabel),5),n("img",{ref_key:"rightImageRef",ref:m,alt:a.rightImageAlt,src:a.rightImage,class:"right-image"},null,8,O),n("div",{ref_key:"rightLabelRef",ref:w,style:l(i(E)),class:"right-label"},g(a.rightLabel),5),n("div",{style:l(i($)),class:"vci-slider"},[n("div",{style:l(i(z)),class:"line"},[n("div",T,g(t.$t("features.compareLeftLabel")),1),n("div",U,g(t.$t("features.compareRightLabel")),1)],4),n("div",{style:l(i(I)),class:"handle"},[n("div",{style:l(i(R)),class:"left-arrow"},null,4),n("div",{style:l(i(P)),class:"right-arrow"},null,4)],4)],4)],512))}});const K=q(j,[["__scopeId","data-v-2b62c317"]]);export{K as default};

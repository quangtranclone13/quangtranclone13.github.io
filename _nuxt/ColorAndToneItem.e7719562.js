import y from"./CheckboxColorPicker.c2891fa1.js";import{_ as G}from"./CheckboxGroup.vue.27328ab5.js";import B from"./ImageCompare.9636921c.js";import F from"./Workspace.75423b79.js";import U from"./FlipWrapper.74d57294.js";import{u as P}from"./useImagePreload.758826e1.js";import{d as S,r as T,b as k,bt as i,au as N,o as l,e as m,w as d,f as t,t as I,u as p,I as R,a as u,v as E,F as W,h as z,m as D,U as L,V as j}from"./entry.8cba7e1e.js";/* empty css                             */import{_ as q}from"./_plugin-vue_export-helper.a1a6add7.js";import"./useCheckboxStatus.7c1562d4.js";import"./index.40a3e550.js";import"./isString.4072b557.js";import"./timer.4152b58e.js";/* empty css                                */const g=e=>(L("data-v-c1510531"),e=e(),j(),e),H=g(()=>t("div",{class:"placeholder pix-col-md-900-1 pix-col-md-1400-1 pix-col-lg-1920-3 pix-col-3"},null,-1)),J={class:"features-color-and-tone-wrapper-item pix-col-xs-375-4 pix-col-xs-600-4 pix-col-md-900-6 pix-col-md-1400-6 pix-col-lg-1920-8 pix-col-8"},K={class:"title"},M={class:"desc"},O=["src"],Q=g(()=>t("div",{class:"placeholder pix-col-md-900-1 pix-col-md-1400-1 pix-col-lg-1920-1 pix-col-1"},null,-1)),X=g(()=>t("div",{class:"placeholder-900 pix-col-md-900-1"},null,-1)),Y={class:"features-color-and-tone-wrapper-item workspace pix-col-xs-375-4 pix-col-xs-600-4 pix-col-md-900-6 pix-col-md-1400-7 pix-col-lg-1920-9 pix-col-9"},Z=["src"],ee=S({__name:"ColorAndToneItem",props:{token:{default:""},title:{default:""},desc:{default:""},reserve:{type:Boolean,default:!1},originalImage:null,checkboxGroup:{default(){return[]}},badgeIconUrl:{default:""}},setup(e){var h,b;const s=e,r=T((b=(h=s.checkboxGroup[0])==null?void 0:h.label)!=null?b:""),_=k(()=>{var o;return i(`/images/pages/features/colorAndTone/${(o=s.originalImage)!=null?o:""}.webp`)}),v=k(()=>{var a;const o=f(r.value);return i(`/images/pages/features/colorAndTone/${(a=s.originalImage)!=null?a:""}_${o}.webp`)});function f(o){return N(o)?o<10?`0${o}`:o.toString():o}const x=[];return s.checkboxGroup.forEach((o,a)=>{if(a){const n=f(o.label);x.push(i(`/images/pages/features/colorAndTone/${s.originalImage}_${n}.webp`),i(`/images/pages/features/colorAndTone/${s.originalImage}_${n}.webp`))}}),P({images:x}),(o,a)=>{const n=y,w=G,C=B,$=F,V=U;return l(),m(V,{class:"features-color-and-tone-wrapper",reserve:e.reserve},{default:d(()=>[H,t("div",J,[t("div",K,I(e.title),1),t("div",M,I(e.desc),1),e.checkboxGroup.length?(l(),m(w,{key:0,modelValue:p(r),"onUpdate:modelValue":a[0]||(a[0]=c=>R(r)?r.value=c:null),class:"checkbox-group"},{default:d(()=>[(l(!0),u(W,null,E(e.checkboxGroup,(c,A)=>(l(),m(n,{key:A,color:c.value,label:c.label,value:c.label},null,8,["color","label","value"]))),128))]),_:1},8,["modelValue"])):e.badgeIconUrl?(l(),u("img",{key:1,src:e.badgeIconUrl,class:"badge-icon",alt:""},null,8,O)):z("",!0)]),Q,X,t("div",Y,[e.checkboxGroup.length?(l(),m($,{key:0,feature:e.token},{content:d(()=>[D(C,{ref:"imageCompareRef",class:"image-compare","left-image":p(_),"right-image":p(v),hover:"","handle-size":0,"slider-line-width":1,"left-line-label":"Before","right-line-label":"After"},null,8,["left-image","right-image"])]),_:1},8,["feature"])):(l(),u("img",{key:1,class:"img",src:p(_),alt:""},null,8,Z))])]),_:1},8,["reserve"])}}}),_e=q(ee,[["__scopeId","data-v-c1510531"]]);export{_e as default};
import V from"./Collapse.cd28742a.js";import $ from"./ScrollText.94455b24.js";import P from"./Button.976436e5.js";import O from"./Card.250cbc18.js";import z from"./Form.074b64ba.js";import G from"./FullGrid.96dd19c1.js";import U from"./Container.84a5d59e.js";import{bH as K,L as e,m as t,d as J,aN as Q,K as c,r as m,M as X,q as Y,aA as Z,o as ee,a as te,w as i,bo as oe,U as ne,V as re,f as x,W as le,u as a,N as b,t as q,bx as ae,n as ie,aw as se}from"./entry.8cba7e1e.js";import{_ as ce}from"./_plugin-vue_export-helper.a1a6add7.js";/* empty css                     *//* empty css                   *//* empty css                 */import"./Form.vue.05855c5e.js";import"./FormItemRender.vue.7116eee4.js";import"./Upload.74a010bf.js";import"./CountrySelect.aae122e7.js";import"./payment.81dfa3b1.js";import"./VerificationCodeInput.d58b074a.js";import"./useValidator.21496c0f.js";import"./timer.4152b58e.js";var C=(o=>(o.contactAdd="/v1/app/contact/add",o))(C||{});const me=o=>K.post(C.contactAdd,o,{headers:{}}),ue={title:e("help.cardSettings.faq.title"),desc:e("help.cardSettings.faq.desc")},pe={title:e("help.cardSettings.contact.title"),desc:e("help.cardSettings.contact.desc")},de=[{title:e("common.faq[0].children[0].title"),value:"1",content:o=>t("div",{innerHTML:e("common.faq[0].children[0].content")},null)},{title:e("common.faq[0].children[1].title"),value:"2",content:o=>t("div",{innerHTML:e("common.faq[0].children[1].content")},null)},{title:e("common.faq[2].children[0].title"),value:"3",content:o=>t("div",{innerHTML:e("common.faq[2].children[0].content")},null)},{title:e("common.faq[2].children[1].title"),value:"4",content:o=>t("div",{innerHTML:e("common.faq[2].children[1].content")},null)},{title:e("common.faq[2].children[2].title"),value:"5",content:o=>t("div",{innerHTML:e("common.faq[2].children[2].content")},null)},{title:e("common.faq[2].children[3].title"),value:"6",content:o=>t("div",{innerHTML:e("common.faq[2].children[3].content")},null)}],fe=o=>(ne("data-v-5f9473ec"),o=o(),re(),o),_e={class:"help-support"},ge={class:"help-support-wrapper"},he=fe(()=>x("div",{class:"top-bg"},null,-1)),ve=J({__name:"index",setup(o){let{useHelpMp:y}=oe(),{_pointMpWebsiteHelpAndSupport:T}=y();T();let u=Q();const M=(l,s,n)=>le.test(s)?n():n(new Error(e("login.signIn.error"))),S=c(ue),L=c(pe);let _=m([]);_=m(de);const F=m("0"),g=m(),p=m(),d=m(),B=c({width:"438px",height:"42px",borderRadius:"60px",marginTop:"40px",backgroundColor:"#7D7BFF"}),R=c({width:"438px",height:"42px",borderRadius:"60px",marginTop:"0px",backgroundColor:"#1877F2"});c({hoverBackground:"transparent"});let r=c({email:"",subject:"",message:"",file:{fileName:"",file:null}});const H=m([{model:"email",type:"input",label:e("help.cardForm.email"),clearable:!0},{model:"subject",type:"input",label:e("help.cardForm.sub"),clearable:!0},{model:"message",label:e("help.cardForm.message"),clearable:!0,type:"textarea",autosize:!0,resize:"none"},{model:"file",type:"upload"}]);let k=c({email:[{trigger:"blur",required:!0,validator:M}],subject:[{trigger:"blur",required:!0,message:e("help.cardForm.subject")}],message:[{trigger:"blur",required:!0,message:e("help.cardForm.content")}]});X(()=>u.isLogin,l=>{l&&(r.email=u.userInfo.email)},{immediate:!0});const w=()=>{p.value&&p.value.validate()},I=()=>{r.email=u.isLogin?u.userInfo.email:"",r.message="",r.subject="",r.file.file=null,r.file.fileName=""},A=async l=>{if(l){d.value.openLoading();let s=new FormData;for(let n in r)n==="file"?r[n].file&&s.append(n,r[n].file):s.append(n,r[n]);await me(s),d.value.closeLoading(),ae("submit successfully"),I()}},E=()=>ie(se);function D(){let l=setTimeout(()=>{let n=g.value.$el.getBoundingClientRect().top-100;document.body.scrollTop?document.body.scrollTo({top:n,behavior:"smooth"}):document.documentElement.scrollTo({top:n,behavior:"smooth"}),clearTimeout(l)},300)}return Y(()=>{Z().query.anchor==="form"&&D()}),(l,s)=>{const n=V,f=$,h=P,v=O,j=z,N=G,W=U;return ee(),te("div",_e,[t(W,null,{default:i(()=>[t(N,null,{default:i(()=>[x("div",ge,[t(v,{"top-settings":a(S)},{default:i(()=>[t(n,{data:a(_),"active-value":a(F),accordion:!0},null,8,["data","active-value"]),t(h,{"button-style":a(B),onBtnClick:E},{default:i(()=>[t(f,null,{default:i(()=>[b(q(l.$t("common.faqBtnList.more")),1)]),_:1})]),_:1},8,["button-style"])]),_:1},8,["top-settings"]),t(v,{ref_key:"formWrapperRef",ref:g,"top-settings":a(L),type:2},{default:i(()=>[t(j,{ref_key:"formRef",ref:p,"form-input-list":a(H),"form-label-position":"top","form-rules":a(k),"form-model":a(r),"form-inline":!1,class:"contact-us_form",onValidate:A},null,8,["form-input-list","form-rules","form-model"]),t(h,{ref_key:"btnRef",ref:d,"button-style":a(R),onBtnClick:w},{default:i(()=>[t(f,null,{default:i(()=>[b(q(l.$t("common.faqBtnList.send")),1)]),_:1})]),_:1},8,["button-style"])]),_:1},8,["top-settings"])])]),_:1})]),_:1}),he])}}});const Ne=ce(ve,[["__scopeId","data-v-5f9473ec"]]);export{Ne as default};

(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3wHa":function(e,t,s){"use strict";s("6bLZ")},"6bLZ":function(e,t,s){},D5Hz:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var n=s("MkV5");Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var a=s("USkh"),r=null,o="https://api.emailjs.com";function i(e,t,s){return void 0===s&&(s={}),new Promise((function(a,r){var o=new XMLHttpRequest;for(var i in o.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?a(t):r(t)})),o.addEventListener("error",(function(e){r(new n.EmailJSResponseStatus(e.target))})),o.open("POST",e,!0),s)o.setRequestHeader(i,s[i]);o.send(t)}))}function l(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function u(e,t){r=e,o=t||"https://api.emailjs.com"}function c(e,t,s,n){var a={lib_version:"2.6.3",user_id:n||r,service_id:e,template_id:t,template_params:l(s)};return i(o+"/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})}function m(e,t,s,n){var l;if("string"==typeof s&&(s=document.querySelector("#"!==(l=s)[0]?"#"+l:l)),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";a.UI.progressState(s);var u=new FormData(s);return u.append("lib_version","2.6.3"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",n||r),i(o+"/api/v1.0/email/send-form",u).then((function(e){return a.UI.successState(s),e}),(function(e){return a.UI.errorState(s),Promise.reject(e)}))}t.init=u,t.send=c,t.sendForm=m,t.default={init:u,send:c,sendForm:m}},MkV5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=n},USkh:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n},w981:function(e,t,s){"use strict";s.r(t);var n=s("D5Hz"),a=s.n(n),r={data:function(){return{location:{lat:43.46096,lng:-80.4939}}}},o=s("KHd+"),i={metaInfo:{title:"Contact Us"},components:{StoreMap:Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("google-map",{staticStyle:{width:"100%",height:"100%"},attrs:{center:this.location,zoom:15,"map-type-id":"terrain"}},[t("google-marker",{attrs:{position:this.location}})],1)}),[],!1,null,null,null).exports},data:function(){return{valid:!1,name:"",email:"",subject:"",message:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],subjectRules:[function(e){return!!e||"Subject is required"}],messageRules:[function(e){return!!e||"Message is required"}]}},methods:{sendEmail:function(e){a.a.sendForm("service_oqzssfh","template_akk43nk",e.target,"user_pKI4L2oq2PTghoyAoFdLt").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)})),e.target.reset(),alert("Your message has been sent to Altro Garden. We will get back to you shortly.")}}},l=(s("3wHa"),Object(o.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Layout",[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"4"}},[s("h1",{staticClass:"brownText--text"},[e._v("Contact Us")]),s("p",{staticClass:"brownText--text"},[e._v("\n        Please wait for us to send you a confirmation email before arriving so\n        that we may prepare your order."),s("br")]),s("v-icon",{attrs:{color:"green darken-1",left:""}},[e._v("mdi-email")]),s("a",{attrs:{href:"mailto:AltroGarden@mail.com"}},[e._v("AltroGarden@mail.com")]),s("br"),s("br"),s("p",{staticClass:"brownText--text"},[e._v("\n        We currently do not provide postal delivery because of our limited and\n        fast selling stock. For the time being we only sell to customers\n        willing to pick up at our store location."),s("br"),s("br"),e._v("\n        We are located in Kitchener, Ontario on 30 Dieppe Avenue. N2H 4G1\n      ")])],1),s("v-col",{attrs:{cols:"12",md:"8"}},[s("store-map",{staticClass:"storeMap"})],1)],1),s("div",{staticClass:"contactForm"},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{sm:"9"}},[s("h1",{staticClass:"text-center brownText--text"},[e._v("Contact Form")]),s("p",{staticClass:"text-center brownText--text"},[e._v("\n          If you have any questions about our plants, please fill out the form\n          below and you'll receive a response promptly.\n        ")])])],1),s("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{sm:"3"}},[s("v-text-field",{attrs:{rules:e.nameRules,label:"name",required:"",name:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),s("v-col",{attrs:{sm:"3"}},[s("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:"",type:"email",name:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("v-col",{attrs:{sm:"3"}},[s("v-text-field",{attrs:{rules:e.subjectRules,label:"Subject",required:"",type:"subject",name:"subject"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}})],1)],1),s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{sm:"8"}},[s("v-textarea",{attrs:{rules:e.messageRules,color:"teal",required:"",name:"message",rows:"3"},scopedSlots:e._u([{key:"label",fn:function(){return[s("div",[e._v("Message")])]},proxy:!0}]),model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),s("v-col",{attrs:{sm:"1"}},[s("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"success"}},[e._v("Submit")])],1)],1)],1)],1)],1)}),[],!1,null,"23fc50b4",null));t.default=l.exports}}]);
!function e(t,r,n){function o(a,u){if(!r[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var d=r[a]={exports:{}};t[a][0].call(d.exports,function(e){var r=t[a][1][e];return o(r?r:e)},d,d.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/entry-main.js":[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=e("promise-polyfill"),a=n(i),u=e("react-dom"),s=n(u),c=e("./redux-dom-binding"),d=e("functional-utils"),p=e("react-redux"),l=e("react-markup"),f=e("./shared/redux-helpers"),h=e("./i18n"),m=n(h),y=e("./shared/definitions"),v=e("./react/action-creators/main-donation-form"),b=e("./react/reducers/donate-modal-reducer"),O=e("./react/container/donate-popup"),g=n(O);e("is-nan").shim(),document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelector(".team-row"),t=e.querySelectorAll(".team-member"),r=0;r<t.length;++r)e.appendChild(t[Math.floor(Math.random()*t.length)])}),new a["default"](function(e){document.addEventListener("DOMContentLoaded",e)}).then(function(){return m["default"].create({strings:["help/donate/donate-button-title","help/donate/provider-options/ym","help/donate/amount-options/other-amount","help/main-donation-form/money-template","help/donate/info/for-us/title","help/donate/info/for-them/title","help/donate/info/300/for-us/options/1","help/donate/info/300/for-us/options/2","help/donate/info/300/for-us/options/3","help/donate/info/300/for-them/options/1","help/donate/info/500/for-us/options/1","help/donate/info/500/for-us/options/2","help/donate/info/500/for-us/options/3","help/donate/info/500/for-them/options/1","help/donate/info/1000/for-us/options/1","help/donate/info/1000/for-us/options/2","help/donate/info/1000/for-them/options/1","help/donate/info/1000/for-them/options/2","help/donate/info/1000/for-them/options/3","help/donate/formcomment","help/donate/short-dest","help/donate/targets","widgets/shared/main-donate-form/targets","widgets/shared/main-donate-form/formcomment","widgets/shared/main-donate-form/short-dest"],texts:[]})}).then(function(e){var t=e.detectLanguage(),r=y.CurrencyType[e.settings.language[t].defaultCurrency],n=t===y.LanguageType.RU?y.ProviderType.YANDEX_MONEY:y.ProviderType.PAYPAL,i={modal:b.initialState.modal,form:o({},b.initialState.form,{currencySettings:e.settings.currency})},a=(0,f.createStore)(b.reducer,i);s["default"].render((0,l.h)(p.Provider,{store:a},(0,l.h)((0,g["default"])(e))),document.querySelector("#react-donate-popup-entry"));var u={value:e.settings.currency[r].donationOption3,focused:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case"DOM_FOCUS":return(0,d.merge)(e,{focused:!0});case"DOM_BLUR":return(0,d.merge)(e,{focused:!1});case"DOM_INPUT":var r=Number(t.text);return Number.isNaN(r)?e:(0,d.merge)(e,{value:r});default:return e}};Array.prototype.slice.apply(document.querySelectorAll(".widget-main-donate-form")).forEach(function(t){var o=t.querySelector(".widget-main-donate-form_form"),i=t.querySelector(".widget-main-donate-form_tips"),u=t.querySelector(".widget-main-donate-form_amount"),s=t.querySelector(".widget-main-donate-form_donate-button"),d=o.querySelector("input[name=sum]"),p=i.innerText,l=(0,f.createStore)(h),m=function(){var t=l.getState(),n=t.value,o=t.focused,a=.005,c=n-n*(a/(1+a)),f=n-c;o?u.value=n:r===y.CurrencyType.RUB?u.value=n+" "+e.settings.currency[r].symbol:u.value=e.settings.currency[r].symbol+n,s.disabled=!(n>0),r===y.CurrencyType.RUB&&(i.innerText=p.replace("{amount}",c.toFixed(2)).replace("{fee}",f.toFixed(2)),i.classList.remove("hidden")),d.value=n};l.subscribe(m),m(),(0,c.bindEvents)(u,["input","focus","blur"],l),o.addEventListener("submit",function(t){t.preventDefault();var o=l.getState(),i=o.value;a.dispatch((0,v.setProvider)(n)),a.dispatch((0,v.setCurrency)(r)),a.dispatch((0,v.setAmount)(i)),a.dispatch((0,v.setTargets)(e.t("strings","widgets/shared/main-donate-form/targets"))),a.dispatch((0,v.setFormComment)(e.t("strings","widgets/shared/main-donate-form/formcomment"))),a.dispatch((0,v.setShortDesc)(e.t("strings","widgets/shared/main-donate-form/short-dest"))),a.dispatch({type:"SET_MODAL_DISPLAYED",displayed:!0})})}),Array.prototype.slice.apply(document.querySelectorAll(".special-project_donate")).forEach(function(t){var o=t.querySelector(".special-project_donate-amount"),i=t.querySelector(".special-project_donate-button"),u=t.querySelector("input[name=sum]"),s=(0,f.createStore)(h),d=function(){var t=s.getState(),n=t.value,a=t.focused;a?o.value=n:r===y.CurrencyType.RUB?o.value=n+" "+e.settings.currency[r].symbol:o.value=e.settings.currency[r].symbol+n,i.disabled=!(n>0),u.value=n};s.subscribe(d),d(),(0,c.bindEvents)(o,["input","focus","blur"],s),t.addEventListener("submit",function(e){e.preventDefault();var o=s.getState(),i=o.value;a.dispatch((0,v.setProvider)(n)),a.dispatch((0,v.setCurrency)(r)),a.dispatch((0,v.setAmount)(i)),a.dispatch((0,v.setTargets)(t.querySelector("input[name=formcomment]").value)),a.dispatch((0,v.setFormComment)(t.querySelector("input[name=short-dest]").value)),a.dispatch((0,v.setShortDesc)(t.querySelector("input[name=targets]").value)),a.dispatch({type:"SET_MODAL_DISPLAYED",displayed:!0})})})})["catch"](function(e){console.error(e)})},{"./i18n":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/i18n.js","./react/action-creators/main-donation-form":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/action-creators/main-donation-form.js","./react/container/donate-popup":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/container/donate-popup.js","./react/reducers/donate-modal-reducer":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/reducers/donate-modal-reducer.js","./redux-dom-binding":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/redux-dom-binding.js","./shared/definitions":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/shared/definitions.js","./shared/redux-helpers":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/shared/redux-helpers.js","functional-utils":"functional-utils","is-nan":"is-nan","promise-polyfill":"promise-polyfill","react-dom":"react-dom","react-markup":"react-markup","react-redux":"react-redux"}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/i18n.js":[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=e("promise-polyfill"),c=n(s),d=e("./shared/definitions"),p=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this.data=t,this.settings=r}return u(e,[{key:"detectLanguage",value:function(){return e.detectLanguage()}},{key:"t",value:function(e,t){var r=this.data[e];if("undefined"==typeof r)throw new Error("Wrong category "+e);if(!(t in r))throw new Error("Wrong key: "+e+":"+t);return r[t]}}],[{key:"create",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r={language:e.detectLanguage()},n=new c["default"](function(e,t){var r=new XMLHttpRequest;r.addEventListener("load",function(){var n=200;r.status===n?e(JSON.parse(r.responseText)):t(r.responseText)}),r.addEventListener("error",function(){t(r.responseText)}),r.open("POST","/i18n/settings"),r.setRequestHeader("Content-type","application/json"),r.send("")}),o=new c["default"](function(e,n){var o=new XMLHttpRequest;o.addEventListener("load",function(){var t=200;o.status===t?e(JSON.parse(o.responseText)):n(o.responseText)}),o.addEventListener("error",function(){n(o.responseText)}),o.open("POST","/i18n/translate"),o.setRequestHeader("Content-type","application/json"),o.send(JSON.stringify(a({},t,r)))});return c["default"].all([o,n]).then(function(t){var r=i(t,2),n=r[0],o=r[1];return new e(n,o)})}},{key:"detectLanguage",value:function(){return/^(\/en$)|(\/en\/)/.test(window.location.pathname)?d.LanguageType.EN:/^(\/es$)|(\/es\/)/.test(window.location.pathname)?d.LanguageType.ES:d.LanguageType.RU}}]),e}();r["default"]=p},{"./shared/definitions":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/shared/definitions.js","promise-polyfill":"promise-polyfill"}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/action-creators/main-donation-form.js":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.setProvider=function(e){return{type:"SET_PROVIDER",provider:e}},r.setCurrency=function(e){return{type:"SET_CURRENCY",currency:e}},r.setAmountOption=function(e){return{type:"SET_AMOUNT_OPTION",amountOption:e}},r.setAmount=function(e){return{type:"SET_AMOUNT",amount:e}},r.setTargets=function(e){return{type:"SET_TARGETS",targets:e}},r.setFormComment=function(e){return{type:"SET_FORM_COMMENT",formComment:e}},r.setShortDesc=function(e){return{type:"SET_SHORT_DESC",shortDesc:e}}},{}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/action-creators/modal.js":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.setModalDisplayed=function(e){return{type:"SET_MODAL_DISPLAYED",displayed:e}}},{}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/container/donate-popup.js":[function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=e("react-redux"),u=e("redux"),s=e("../presentational/shared/donate-modal"),c=o(s),d=e("../action-creators/main-donation-form"),p=n(d),l=e("../action-creators/modal"),f=n(l);e("is-nan").shim();var h=function(e){return function(t){return i({},t,{i18n:e})}},m=function(e){return i({},(0,u.bindActionCreators)(p,e),(0,u.bindActionCreators)(f,e))};r["default"]=function(e){return(0,a.connect)(h(e),m)(c["default"])}},{"../action-creators/main-donation-form":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/action-creators/main-donation-form.js","../action-creators/modal":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/action-creators/modal.js","../presentational/shared/donate-modal":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/presentational/shared/donate-modal.js","is-nan":"is-nan","react-redux":"react-redux",redux:"redux"}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/presentational/shared/donate-modal.js":[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=e("react"),d=e("react-markup"),p=e("./modal"),l=n(p),f=e("./main-donation-form"),h=n(f),m=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props.i18n,t=this.props,r=t.modal,n=t.form,o=this.props.setModalDisplayed,i=this.props,a=i.setProvider,s=i.setCurrency,c=i.setAmountOption,p=i.setAmount;return(0,d.h)(l["default"],u({},r,{onClose:function(){return o(!1)}}),(0,d.h)(h["default"],u({i18n:e,onChangeProvider:a,onChangeCurrency:s,onChangeAmountOption:c,onChangeAmount:p},n)))}}]),t}(c.Component);r["default"]=m},{"./main-donation-form":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/presentational/shared/main-donation-form.js","./modal":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/presentational/shared/modal.js",react:"react","react-markup":"react-markup"}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/presentational/shared/main-donation-form.js":[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=e("react"),d=e("react-markup"),p=e("bem-prefixer"),l=n(p),f=e("../../../shared/definitions"),h=f.ProviderType.YANDEX_MONEY,m=f.ProviderType.PAYPAL,y=f.ProviderType.SBERBANK,v=f.CurrencyType.RUB,b=f.CurrencyType.USD,O=f.CurrencyType.EUR,g=f.AmountOptionType.OPTION_SUM_1,_=f.AmountOptionType.OPTION_SUM_2,T=f.AmountOptionType.OPTION_SUM_3,j=f.AmountOptionType.OPTION_OTHER,S="https://money.yandex.ru/quickpay/confirm.xml",E="410012180500847",P="donate",w="PC",x="/paypal",C=(0,l["default"])("main-donate-form"),U=function(e){function t(){var e,r,n,a;o(this,t);for(var s=arguments.length,c=Array(s),p=0;p<s;p++)c[p]=arguments[p];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.formatMoney=function(e,t){var r=n.props.i18n;return r.t("strings","help/main-donation-form/money-template").replace(/\{amount\}/g,e).replace(/\{currency\}/g,r.settings.currency[t].symbol)},n.handleChangeAmount=function(e){var t=e.target.value;/^[0-9]*$/.test(t)&&n.props.onChangeAmount(Number(t))},n.renderProviderOptions=function(){var e=n.props,t=e.i18n,r=e.provider,o=e.onChangeProvider,i=t.detectLanguage()===f.LanguageType.RU;return(0,d.h)(C("div#options"),(0,d.h)(C("div","option",r===h?["active"]:[]),{onClick:o.bind(null,f.ProviderType.YANDEX_MONEY)},t.t("strings","help/donate/provider-options/ym")),(0,d.h)(C("div","option",r===m?["active"]:[]),{onClick:o.bind(null,f.ProviderType.PAYPAL)},"PayPal"),i&&(0,d.h)(C("div","option",r===y?["active"]:[]),{onClick:o.bind(null,f.ProviderType.SBERBANK)},"Сбербанк"))},n.renderCurrencyOptions=function(){var e=n.props,t=e.i18n,r=e.currency,o=e.provider,i=e.onChangeCurrency;return o===m?(0,d.h)(C("div#options"),(0,d.h)(C("div","option",r===v?["active"]:[]),{onClick:i.bind(null,v)},t.settings.currency[v].symbol),(0,d.h)(C("div","option",r===b?["active"]:[]),{onClick:i.bind(null,b)},t.settings.currency[b].symbol),(0,d.h)(C("div","option",r===O?["active"]:[]),{onClick:i.bind(null,O)},t.settings.currency[O].symbol)):null},n.renderAmountOptions=function(){var e=n.props,t=e.i18n,r=e.currency,o=e.provider,i=e.amountOption,a=e.onChangeAmountOption;return o!==y?(0,d.h)(C("div#options"),(0,d.h)(C("div","option",i===g?["active"]:[]),{onClick:a.bind(null,g)},t.settings.currency[r].donationOption1),(0,d.h)(C("div","option",i===_?["active"]:[]),{onClick:a.bind(null,_)},t.settings.currency[r].donationOption2),(0,d.h)(C("div","option",i===T?["active"]:[]),{onClick:a.bind(null,T)},t.settings.currency[r].donationOption3),(0,d.h)(C("div","option",i===j?["active"]:[]),{onClick:a.bind(null,j)},t.t("strings","help/donate/amount-options/other-amount"))):null},n.renderAmount=function(){var e=n.props,t=e.i18n,r=e.amount,o=e.amountOption,i=e.provider,a=e.currency;if(i!==y){if(o!==f.AmountOptionType.OPTION_OTHER)return(0,d.h)(C("div#amount-info"),(0,d.h)(C("div#amount"),n.formatMoney(r,a)));var s=function(){var e=t.t("strings","help/main-donation-form/money-template").replace(/ /g," "),o=e.split("{amount}"),i=[];return o.forEach(function(e,o){0!==o&&i.push((0,d.h)("input",{value:r,size:4,onChange:n.handleChangeAmount})),i.push(e.replace("{currency}",t.settings.currency[a].symbol))}),{v:(0,d.h)(C("div#amount-info"),d.h.apply(void 0,[C("div#amount-input")].concat(i)))}}();if("object"===("undefined"==typeof s?"undefined":u(s)))return s.v}return null},n.renderYandexForm=function(){var e=n.props,t=e.i18n,r=e.amount,o=e.targets,i=e.formComment,a=e.shortDesc;return(0,d.h)(C("form#form"),{action:S},(0,d.h)("input",{type:"hidden",name:"sum",value:r}),(0,d.h)("input",{type:"hidden",name:"receiver",value:E}),(0,d.h)("input",{type:"hidden",name:"formcomment",value:i}),(0,d.h)("input",{type:"hidden",name:"short-dest",value:a}),(0,d.h)("input",{type:"hidden",name:"quickpay-form",value:P}),(0,d.h)("input",{type:"hidden",name:"targets",value:o}),(0,d.h)("input",{type:"hidden",name:"paymentType",value:w}),(0,d.h)(C("button#submit"),t.t("strings","help/donate/donate-button-title")))},n.renderPaypalForm=function(){var e=n.props,t=e.i18n,r=e.amount,o=e.currency,i=o;if(o===v)i="RUB";else if(o===b)i="USD";else{if(o!==O)throw new Error("Currency isn't supported: "+o);i="EUR"}return(0,d.h)(C("form#form"),{action:x},(0,d.h)("input",{type:"hidden",name:"amount",value:r}),(0,d.h)("input",{type:"hidden",name:"currency",value:i}),(0,d.h)(C("button#submit"),t.t("strings","help/donate/donate-button-title")))},n.renderSberbankForm=function(){return(0,d.h)(C("form#form"))},n.renderInfo=function(){var e=n.props.provider;return e===y?(0,d.h)(C("div#info"),(0,d.h)(C("div#info-p"),(0,d.h)("span","Вы можете сделать пожертвование на счет в Сбербанке. Проще всего это сделать по "),(0,d.h)("b","номеру карты:")),(0,d.h)(C("div#info-details.card"),"63900206 9033829878"),(0,d.h)(C("div#info-p"),(0,d.h)("a",{href:"http://tropical-doc.livejournal.com/profile"},"Реквизиты для банковского перевода"))):null},n.renderButton=function(){var e=n.props.provider;return e===h?n.renderYandexForm():e===m?n.renderPaypalForm():n.renderSberbankForm()},a=r,i(n,a)}return a(t,e),s(t,[{key:"render",value:function(){return(0,d.h)(C("div"),this.renderProviderOptions(),this.renderCurrencyOptions(),this.renderAmountOptions(),this.renderAmount(),this.renderInfo(),this.renderButton())}}]),t}(c.Component);r["default"]=U},{"../../../shared/definitions":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/shared/definitions.js","bem-prefixer":"bem-prefixer",react:"react","react-markup":"react-markup"}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/presentational/shared/modal.js":[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=e("react"),c=e("react-markup"),d=e("bem-prefixer"),p=n(d),l=(0,p["default"])("modal"),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.listener=window.addEventListener("keydown",function(t){if(e.props.displayed){var r=27;t.keyCode===r&&e.props.onClose()}})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.listener)}},{key:"render",value:function(){var e=this.props.displayed,t=this.props.onClose,r=e?[]:["hidden"];return(0,c.h)(l("div",r),(0,c.h)(l("div#content"),this.props.children),(0,c.h)(l("div#background"),{onClick:t}))}}]),t}(s.Component);r["default"]=f},{"bem-prefixer":"bem-prefixer",react:"react","react-markup":"react-markup"}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/reducers/donate-modal-reducer.js":[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.initialState=r.reducer=void 0;var o=e("redux"),i=e("./main-donation-form-reducer"),a=n(i),u=e("./modal-reducer"),s=n(u);r.reducer=(0,o.combineReducers)({form:a["default"],modal:s["default"]}),r.initialState={form:i.initialState,modal:u.initialState}},{"./main-donation-form-reducer":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/reducers/main-donation-form-reducer.js","./modal-reducer":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/reducers/modal-reducer.js",redux:"redux"}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/reducers/main-donation-form-reducer.js":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.initialState=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=e("../../shared/definitions"),i=o.AmountOptionType.OPTION_SUM_1,a=o.AmountOptionType.OPTION_SUM_2,u=o.AmountOptionType.OPTION_SUM_3,s=o.AmountOptionType.OPTION_OTHER,c=r.initialState={provider:o.ProviderType.YANDEX_MONEY,currency:o.CurrencyType.RUB,amountOption:a,amount:0,targets:"",formComment:"",shortDesc:"",currencySettings:{}},d=function(e,t,r){if(r===s)return e.amount;var n=e.currencySettings[t];if(!n)return e.amount;var o=n[r];return o?o:e.amount},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case"SET_PROVIDER":var r=t.provider,p=e.amountOption,l=r===o.ProviderType.YANDEX_MONEY?o.CurrencyType.RUB:e.currency,f=d(e,e.currency,p);return n({},e,{provider:r,currency:l,amount:f});case"SET_CURRENCY":var h=e.provider;if(h===o.ProviderType.PAYPAL){var m=t.currency,y=e.amountOption,v=y===s?e.amount:d(e,m,y);return n({},e,{currency:m,amount:v})}return e;case"SET_AMOUNT_OPTION":var b=t.amountOption,O=d(e,e.currency,b);return n({},e,{amountOption:b,amount:O});case"SET_AMOUNT":var g=t.amount,_=null;return _=g===d(e,e.currency,i)?i:g===d(e,e.currency,a)?a:g===d(e,e.currency,u)?u:s,n({},e,{amountOption:_,amount:g});case"SET_TARGETS":var T=t.targets;return n({},e,{targets:T});case"SET_FORM_COMMENT":var j=t.formComment;return n({},e,{formComment:j});case"SET_SHORT_DESC":var S=t.shortdesc;return n({},e,{shortdesc:S});default:return e}};r["default"]=p},{"../../shared/definitions":"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/shared/definitions.js"}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/react/reducers/modal-reducer.js":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r.initialState={displayed:!1};r["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"SET_MODAL_DISPLAYED":return n({},e,{displayed:t.displayed});default:return e}}},{}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/redux-dom-binding.js":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=["input","focus","blur"],o={};n.forEach(function(e){o[e]=function(){switch(e){case"input":return function(e){return{type:"DOM_INPUT",text:e.target.value}};case"focus":return function(e){return{type:"DOM_FOCUS"}};case"blur":return function(e){return{type:"DOM_BLUR"}};default:throw new Error("Unsupported event: "+e)}}()});var i={};n.forEach(function(e){var t=o[e];i[e]=function(r,n){r.addEventListener(e,function(e){n.dispatch(t(e))})}});r.bindEvents=function(e,t,r){var n="string"==typeof t?t.split(" "):t,o="length"in e?Array.prototype.slice.apply(e):[e];o.forEach(function(e){n.forEach(function(t){if(!(t in i))throw new Error("Undefined event type: "+t);var n=i[t];n(e,r)})})}},{}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/shared/definitions.js":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={EN:"en-US",RU:"ru-RU",ES:"es-ES"},o={YANDEX_MONEY:"YANDEX_MONEY",PAYPAL:"PAYPAL",SBERBANK:"SBERBANK"},i={ACCOUNT:"ACCOUNT",CARD:"CARD"},a={RUB:"RUB",USD:"USD",EUR:"EUR"},u={OPTION_SUM_1:"donationOption1",OPTION_SUM_2:"donationOption2",OPTION_SUM_3:"donationOption3",OPTION_OTHER:"OPTION_OTHER"};r.LanguageType=n,r.ProviderType=o,r.MethodType=i,r.CurrencyType=a,r.AmountOptionType=u},{}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/js/shared/redux-helpers.js":[function(e,t,r){(function(t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}Object.defineProperty(r,"__esModule",{value:!0}),r.createStore=void 0;var i=e("redux"),a=o(i),u=e("redux-logger"),s=n(u);(0,s["default"])(),r.createStore=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return a.createStore.apply(a,t)}}).call(this,e("_process"))},{_process:"/Users/koluch/Dropbox/dev/misc/hehe/repo/node_modules/process/browser.js",redux:"redux","redux-logger":"redux-logger"}],"/Users/koluch/Dropbox/dev/misc/hehe/repo/node_modules/process/browser.js":[function(e,t,r){"use strict";function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(p===setTimeout)return setTimeout(e,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function a(e){if(l===clearTimeout)return clearTimeout(e);if((l===o||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function u(){y&&h&&(y=!1,h.length?m=h.concat(m):v=-1,m.length&&s())}function s(){if(!y){var e=i(u);y=!0;for(var t=m.length;t;){for(h=m,m=[];++v<t;)h&&h[v].run();v=-1,t=m.length}h=null,y=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function d(){}var p,l,f=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(e){p=n}try{l="function"==typeof clearTimeout?clearTimeout:o}catch(e){l=o}}();var h,m=[],y=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];m.push(new c(e,t)),1!==m.length||y||i(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=d,f.addListener=d,f.once=d,f.off=d,f.removeListener=d,f.removeAllListeners=d,f.emit=d,f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}]},{},["/Users/koluch/Dropbox/dev/misc/hehe/repo/js/entry-main.js"]);
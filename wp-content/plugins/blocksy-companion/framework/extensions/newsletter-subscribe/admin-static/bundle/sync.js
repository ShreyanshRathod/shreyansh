!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=window.blocksyCustomizerSync},function(e,t,r){"use strict";r.r(t);var n,o=r(0),c=function(e){if([e.top,e.right,e.bottom,e.left].reduce((function(e,t){return!!e&&!("auto"!==t&&t&&t.toString().match(/\d/g))}),!0))return"CT_CSS_SKIP_RULE";var t=["auto"!==e.top&&e.top.toString().match(/\d/g)?e.top:0,"auto"!==e.right&&e.right.toString().match(/\d/g)?e.right:0,"auto"!==e.bottom&&e.bottom.toString().match(/\d/g)?e.bottom:0,"auto"!==e.left&&e.left.toString().match(/\d/g)?e.left:0];return t[0]===t[1]&&t[0]===t[2]&&t[0]===t[3]?t[0]:t[0]===t[2]&&t[1]===t[3]?"".concat(t[0]," ").concat(t[3]):t.join(" ")},s=function(e,t){var r=t.forcedOutput,n=void 0!==r&&r;if("CT_CSS_SKIP_RULE"===e)return"CT_CSS_SKIP_RULE";if("none"===e)return"none";if(!e.enable)return n?"none":"CT_CSS_SKIP_RULE";if(0===parseFloat(e.blur)&&0===parseFloat(e.spread)&&0===parseFloat(e.v_offset)&&0===parseFloat(e.h_offset))return n?"none":"CT_CSS_SKIP_RULE";var o=[];return e.inset&&o.push("inset"),o.push("".concat(e.h_offset,"px")),o.push("".concat(e.v_offset,"px")),0!==parseFloat(e.blur)&&(o.push("".concat(e.blur,"px")),0!==parseFloat(e.spread)&&o.push("".concat(e.spread,"px"))),0===parseFloat(e.blur)&&0!==parseFloat(e.spread)&&(o.push("".concat(e.blur,"px")),o.push("".concat(e.spread,"px"))),o.push(e.color.color),o.join(" ")},i=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desktop",n={desktop:"ct-main-styles-inline-css",tablet:"ct-main-styles-tablet-inline-css",mobile:"ct-main-styles-mobile-inline-css"},o=document.querySelector("style#".concat(n[r])),c=o.innerText,s="".concat(e["".concat(r,"_selector_prefix")]?"".concat(e["".concat(r,"_selector_prefix")]," "):"").concat(e.selector||":root"),i=null,a=c.match(i);0===c.trim().indexOf(s)?(i=new RegExp("".concat(s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s?{[\\s\\S]*?}"),"gm"),a=c.match(i)):(i=new RegExp("\\}\\s*?".concat(s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s?{[\\s\\S]*?}"),"gm"),a=c.match(i)),a||(0===(c="".concat(c," ").concat(s," {   }")).trim().indexOf(s)?(i=new RegExp("".concat(s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s?{[\\s\\S]*?}"),"gm"),a=c.match(i)):(i=new RegExp("\\}\\s*?".concat(s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s?{[\\s\\S]*?}"),"gm"),a=c.match(i))),o.innerText=c.replace(i,a[0].indexOf("--".concat(e.variable,":"))>-1?a[0].replace(new RegExp("--".concat(e.variable,":[\\s\\S]*?;"),"gm"),t.indexOf("CT_CSS_SKIP_RULE")>-1||t.indexOf(e.variable)>-1?"":"--".concat(e.variable,": ").concat(t,";")):a[0].replace(new RegExp("".concat(s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s?{"),"gm"),"".concat(s," {").concat(t.indexOf("CT_CSS_SKIP_RULE")>-1||t.indexOf(e.variable)>-1?"":"--".concat(e.variable,": ").concat(t,";"))))},a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desktop",n=(e.type||"").indexOf("color")>-1?t["color"===e.type?"default":e.type.split(":")[1]].color:t;"border"===(e.type||"")&&(n=t&&"none"!==t.style?"".concat(t.width,"px ").concat(t.style," ").concat(t.color.color):"none"),"spacing"===(e.type||"")&&(n=c(t)),"box-shadow"===(e.type||"")&&(n=s(t,e)),i(e,"".concat(n).concat(e.unit||"").concat(e.important?" !important":""),r)},l=function(e,t){var r=t;t=e.extractValue?e.extractValue(t):t,e.whenDone&&e.whenDone(t,r),t=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e&&Object.keys(e).indexOf("desktop")>-1?t?e:e.desktop:t?{desktop:e,tablet:e,mobile:e}:e}(t,!!e.responsive),e.responsive?(e.enabled&&"no"===!wp.customize(e.enabled)()&&(t.mobile="0"+(e.unit?"":"px"),t.tablet="0"+(e.unit?"":"px"),t.desktop="0"+(e.unit?"":"px")),a(e,t.desktop,"desktop"),a(e,t.tablet,"tablet"),a(e,t.mobile,"mobile")):a(e,t)};n={newsletter_subscribe_content:[{selector:".ct-newsletter-subscribe-block",variable:"color",type:"color:default"},{selector:".ct-newsletter-subscribe-block",variable:"linkHoverColor",type:"color:hover"}],newsletter_subscribe_button:[{selector:".ct-newsletter-subscribe-block",variable:"buttonInitialColor",type:"color:default"},{selector:".ct-newsletter-subscribe-block",variable:"buttonHoverColor",type:"color:hover"}],newsletter_subscribe_background:{selector:".ct-newsletter-subscribe-block",variable:"mailchimpBackground",type:"color"},newsletter_subscribe_shadow:{selector:".ct-newsletter-subscribe-block",type:"box-shadow",variable:"box-shadow",responsive:!0},newsletter_subscribe_spacing:{selector:".ct-newsletter-subscribe-block",variable:"padding",responsive:!0,unit:"px"}},wp.customize.bind("change",(function(e){return n[e.id]&&(Array.isArray(n[e.id])?n[e.id]:[n[e.id]]).map((function(t){return l(t,e())}))})),wp.customize("newsletter_subscribe_subscribe_visibility",(function(e){return e.bind((function(e){var t=document.querySelector(".ct-newsletter-subscribe-block");Object(o.responsiveClassesFor)("newsletter_subscribe_subscribe_visibility",t)}))})),(document.body.classList.contains("single")||document.body.classList.contains("page"))&&Object(o.checkAndReplace)({id:"newsletter_subscribe_single_post_enabled",strategy:"append",parent_selector:".site-main article",selector:".ct-newsletter-subscribe-block",fragment_id:"blocksy-mailchimp-subscribe",watch:["has_newsletter_subscribe_name","newsletter_subscribe_button_text","newsletter_subscribe_title","newsletter_subscribe_text","newsletter_subscribe_name_label","newsletter_subscribe_mail_label"],whenInserted:function(){if(document.body.classList.contains("single")||document.body.classList.contains("page")){var e=document.querySelector(".ct-newsletter-subscribe-block");Object(o.responsiveClassesFor)("newsletter_subscribe_subscribe_visibility",e),"yes"!==wp.customize("has_newsletter_subscribe_name")()?(e.querySelector("[data-fields]").dataset.fields=1,e.querySelector('[name="FNAME"]').remove()):(e.querySelector("[data-fields]").dataset.fields=2,e.querySelector('[name="FNAME"]').setAttribute("placeholder","".concat(wp.customize("newsletter_subscribe_name_label")()))),e.querySelector('[name="EMAIL"]').setAttribute("placeholder","".concat(wp.customize("newsletter_subscribe_mail_label")()," *")),e.querySelector("button").innerHTML=wp.customize("newsletter_subscribe_button_text")(),e.querySelector("h3").innerHTML=wp.customize("newsletter_subscribe_title")(),e.querySelector(".ct-newsletter-subscribe-description").innerHTML=wp.customize("newsletter_subscribe_text")()}}})}]);
!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,b=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,a,f,u,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,u=setTimeout(O,t),d?g(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=p();if(S(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-l);return s?b(n,a-(e-c)):n}(e))}function T(e){return u=void 0,m&&r?g(e):(r=i=void 0,f)}function h(){var e=p(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(s)return u=setTimeout(O,t),g(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=E(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(E(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},h.flush=function(){return void 0===u?f:T(p())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var j={formEl:document.querySelector(".feedback-form"),emailEl:document.querySelector(".feedback-form input"),messageEl:document.querySelector(".feedback-form textarea")};j.formEl.addEventListener("input",e(t)((function(e){e.preventDefault();var t={};t.email=j.emailEl.value,t.message=j.messageEl.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),j.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);j.emailEl.value=t.email,j.messageEl.value=t.textarea,console.log(t)}}()}();
//# sourceMappingURL=03-feedback.cc2b8dfe.js.map

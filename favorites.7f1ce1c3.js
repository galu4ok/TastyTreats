function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,s;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},s=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"iGlSd":"favorites.7f1ce1c3.js","lp5u4":"sprite.59731747.svg","aQ52u":"favorites.aab62732.js"}')),i("8FnLx");var a,o=i("tgDFu");a=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString();const l=new(0,o.default),c=document.querySelector(".fav-list"),u=document.querySelector(".fav-empty"),d=document.querySelector(".fav-hero");function f(e,t){return e<=t?"star-rated-item":"star-item"}function g(e){const{title:n,description:r,preview:s,rating:i,_id:o,category:l}=e,c=parseFloat(i);let u=c>5?5:c.toFixed(1);const d=`\n   <div class="rec-item" style="background: linear-gradient(0deg, rgba(5, 5, 5, 0.6),\n                      rgba(5, 5, 5, 0)),\n                      url(${s}); \n                      background-position: center;\n                      background-size: cover;">\n        <div class="upper-part">\n          \n          <button class="heart-btn ${g=o,JSON.parse(localStorage.getItem("favotires-data")||"[]").some((e=>e._id===g))?"active":""}" type="button">\n            <svg class="icon-heart" width="18" height="16">\n              <use href="${t(a)}#heart"></use>\n            </svg>\n          </button>\n  \n\n          <h2 class="rec-card-title title-cut">${n}</h2>\n          <p class="rec-card-desc desc-cut">\n            ${r}\n          </p>\n          \n          <div class="rec-rate">\n            <p class="rate">${u}</p>\n            ${function(e){return`<ul class='stars-list'>\n             <li class=${f(1,e)}>\n              <svg class='star-icon' width='18' height='18'>\n                <use href='${t(a)}#rate-star'></use>\n              </svg>\n            </li>\n            <li class=${f(2,e)}>\n              <svg class='star-icon' width='18' height='18'>\n                <use href='${t(a)}#rate-star'></use>\n              </svg>\n            </li>\n            <li class=${f(3,e)}>\n              <svg class='star-icon' width='18' height='18'>\n                <use href='${t(a)}#rate-star'></use>\n              </svg>\n            </li>\n            <li class=${f(4,e)}>\n              <svg class='star-icon' width='18' height='18'>\n                <use href='${t(a)}#rate-star'></use>\n              </svg>\n            </li>\n            <li class=${f(5,e)}>\n              <svg class='star-icon' width='18' height='18'>\n                <use href='${t(a)}#rate-star'></use>\n              </svg>\n            </li>\n          </ul>`}(u)}\n            <button type="button" class="rec-btn-open rec-btn" data-id="${o}">See recipe</button>\n          </div>\n        </div>\n      </div>`;var g;return d}l.getRecipe().then((e=>{const t=e.results,n=[];for(let e=0;e<6;e++){const{_id:r,title:s,category:i,rating:a,preview:o,description:l}=t[e];n.push({_id:r,title:s,category:i,rating:a,preview:o,description:l})}localStorage.setItem("favotires-data",JSON.stringify(n))})),function(e=1){var t;const n=JSON.parse(null!==(t=localStorage.getItem("favotires-data"))&&void 0!==t?t:"[]");if(n&&n.length){const t=function(e,t){const n={};for(let r=0;r<e.length;r+=t)n[Math.ceil((r+1)/t)]=e.slice(r,r+t);return n}(n,9)[e].map((e=>g(e))).join("");c.innerHTML=t,u.classList.add("visually-hidden")}else u.classList.remove("visually-hidden"),window.innerWidth<768&&d.classList.add("visually-hidden")}();
//# sourceMappingURL=favorites.7f1ce1c3.js.map

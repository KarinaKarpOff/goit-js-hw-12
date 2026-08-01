import{a as w,S,i as s}from"./assets/vendor-S2qh7U4E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const v="56851300-c491d43abc7e67be9ecfe50b0";async function u(n,t){return(await w.get("https://pixabay.com/api/",{params:{key:v,q:n,image_type:"photo",orientation:"horisontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const t=n.map(r=>`
<li class="gallery-item">

<a href="${r.largeImageURL}">

<img
src="${r.webformatURL}"
alt="${r.tags}"
/>

<div class="info">

<p>
<b>Likes</b>
${r.likes}
</p>

<p>
<b>Views</b>
${r.views}
</p>

<p>
<b>Comments</b>
${r.comments}
</p>

<p>
<b>Downloads</b>
${r.downloads}
</p>

</div>

</a>

</li>
`).join("");f.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){f.innerHTML=""}function p(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}function P(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}const L=document.querySelector(".form"),$=document.querySelector(".load-more");let c="",a=1,d=0;L.addEventListener("submit",B);$.addEventListener("click",I);async function B(n){if(n.preventDefault(),c=n.target.elements["search-text"].value.trim(),!c){s.warning({message:"Please enter a search query!",position:"topRight"});return}a=1,M(),b(),p();try{const t=await u(c,a);if(d=t.totalHits,t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(t.hits),d>15&&P()}catch{s.error({message:"Something went wrong!"})}finally{g()}L.reset()}async function I(){a++,p();try{const n=await u(c,a);y(n.hits),a*15>=d&&(b(),s.info({message:"We're sorry, but you've reached the end of search results."}));const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}catch{s.error({message:"Something went wrong!"})}finally{g()}}
//# sourceMappingURL=index.js.map

import{a as v,S,i as n}from"./assets/vendor-S2qh7U4E.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="56851300-c491d43abc7e67be9ecfe50b0";async function f(s,t){return(await v.get("https://pixabay.com/api/",{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),R=new S(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(o=>`
<li class="gallery-item">

<a href="${o.largeImageURL}">

<img
src="${o.webformatURL}"
alt="${o.tags}"
/>

<div class="info">

<p>
<b>Likes</b>
${o.likes}
</p>

<p>
<b>Views</b>
${o.views}
</p>

<p>
<b>Comments</b>
${o.comments}
</p>

<p>
<b>Downloads</b>
${o.downloads}
</p>

</div>

</a>

</li>
`).join("");h.insertAdjacentHTML("beforeend",t),R.refresh()}function M(){h.innerHTML=""}function y(){p.classList.remove("hidden")}function b(){p.classList.add("hidden")}function L(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}const w=document.querySelector(".form"),P=document.querySelector(".load-more");let c="",a=1,u=0;w.addEventListener("submit",$);P.addEventListener("click",B);async function $(s){if(s.preventDefault(),c=s.target.elements["search-text"].value.trim(),!c){n.warning({message:"Please enter a search query!",position:"topRight"});return}a=1,M(),d(),y();try{const t=await f(c,a);if(u=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),u<=15?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):L()}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{b()}w.reset()}async function B(){a++,d(),y();try{const s=await f(c,a);g(s.hits),a*15>=u?(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L();const o=document.querySelector(".gallery-item");if(o){const i=o.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{b()}}
//# sourceMappingURL=index.js.map

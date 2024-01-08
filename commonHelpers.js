import{S as d,i as p}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f=i=>{let r;return r=i.reduce((s,o)=>s+`<li class="photo-list__item">
        <a href="${o.largeImageURL}">
          <img
            width="360"
            height="200"
            src="${o.largeImageURL}"
            alt="${o.tags}"
          />
        </a>
        <div class="photo-list__block">
          <div class="photo-list__block__info">
            <p><b>Likes</b></p>
            <p>${o.likes}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Views</b></p>
            <p>${o.views}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Comments</b></p>
            <p>${o.comments}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Download</b></p>
            <p>${o.downloads}</p>
          </div>
        </div>
      </li>`,""),r},u="41690622-1f4c10e5fb0aefa04cb32f231",h="https://pixabay.com/api/",l=document.querySelector(".photo-list"),a=document.querySelector(".form"),c=document.querySelector(".loader"),m=new d(".photo-list a"),y=i=>{i.preventDefault(),l.children.length>0&&(l.innerHTML=""),c.style.display="inline-block";const r=new URLSearchParams({key:u,image_type:"photo",q:a.search.value,orientation:"horizontal",safesearch:!0});fetch(`${h}?${r}`).then(s=>s.json()).then(s=>{s.hits<1?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.style.display="none"):(l.innerHTML=f(s.hits),c.style.display="none",m.refresh())}),a.reset()};a.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map

import{S as d,i as p}from"./assets/vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=i=>{let s;return s=i.reduce((r,o)=>r+`<li class="photo-list__item">
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
      </li>`,""),s},u="41690622-1f4c10e5fb0aefa04cb32f231",h="https://pixabay.com/api/",l=document.querySelector(".photo-list"),a=document.querySelector(".form"),c=document.querySelector(".loader"),m=new d(".photo-list a"),y=i=>{i.preventDefault(),l.children.length>0&&(l.innerHTML=""),c.style.display="inline-block";const s=new URLSearchParams({key:u,image_type:"photo",q:a.search.value,orientation:"horizontal",safesearch:!0});fetch(`${h}?${s}`).then(r=>r.json()).then(r=>{r.hits.length===0?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.style.display="none"):(l.innerHTML=f(r.hits),c.style.display="none",m.refresh())}).catch(r=>p.error({message:"error server",position:"topRight"})),a.reset()};a.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map

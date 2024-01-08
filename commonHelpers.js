import{S as d,i as p}from"./assets/vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f=i=>{let s;return s=i.reduce((t,r)=>t+`<li class="photo-list__item">
        <a href="${r.largeImageURL}">
          <img
            width="360"
            height="200"
            src="${r.largeImageURL}"
            alt="${r.tags}"
          />
        </a>
        <div class="photo-list__block">
          <div class="photo-list__block__info">
            <p><b>Likes</b></p>
            <p>${r.likes}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Views</b></p>
            <p>${r.views}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Comments</b></p>
            <p>${r.comments}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Download</b></p>
            <p>${r.downloads}</p>
          </div>
        </div>
      </li>`,""),s},u="41690622-1f4c10e5fb0aefa04cb32f231",h="https://pixabay.com/api/",l=document.querySelector(".photo-list"),a=document.querySelector(".form"),c=document.querySelector(".loader"),m=new d(".photo-list a"),y=i=>{i.preventDefault(),l.children.length>0&&(l.innerHTML=""),c.style.display="inline-block";const s=new URLSearchParams({key:u,image_type:"photo",q:a.search.value,orientation:"horizontal",safesearch:!0});fetch(`${h}?${s}`).then(t=>t.json()).then(t=>{t.hits<1?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.style.display="none"):(l.innerHTML=f(t.hits),c.style.display="none",m.refresh())}).catch(t=>console.log(t)),a.reset()};a.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map

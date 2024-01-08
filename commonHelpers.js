(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const l=s=>{let i;return i=s.reduce((r,t)=>r+`<li class="photo-list__item">
        <a href="${t.largeImageURL}">
          <img
            width="360"
            height="200"
            src="${t.largeImageURL}"
            alt="${t.tags}"
          />
        </a>
        <div class="photo-list__block">
          <div class="photo-list__block__info">
            <p><b>Likes</b></p>
            <p>${t.likes}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Views</b></p>
            <p>${t.views}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Comments</b></p>
            <p>${t.comments}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Download</b></p>
            <p>${t.downloads}</p>
          </div>
        </div>
      </li>`,""),i},c=document.querySelector(".photo-list"),a="41690622-1f4c10e5fb0aefa04cb32f231",d="https://pixabay.com/api/",p=new URLSearchParams({key:a,image_type:"photo",q:"dog",orientation:"horizontal",safesearch:!0});fetch(`${d}?${p}`).then(s=>s.json()).then(s=>{console.log(s.hits),c.insertAdjacentHTML("afterbegin",l(s.hits))});
//# sourceMappingURL=commonHelpers.js.map

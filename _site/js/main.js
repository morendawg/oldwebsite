$(function(){function e(){l.classList.add("wave"),setTimeout(function(){l.classList.remove("wave")},2e3)}const t=new Date,o=t.getHours(),n=o>=19||o<=7,c=document.querySelector("body"),s=document.getElementById("toggle"),i=document.getElementById("switch");n&&(i.checked=!0,c.classList.add("night")),s.addEventListener("click",function(){i.checked?c.classList.remove("night"):c.classList.add("night")});const r=document.querySelector(".intro").offsetHeight,a=document.getElementById("top-button"),d=$("#top-button");window.addEventListener("scroll",function(){window.scrollY>r?d.fadeIn():d.fadeOut()},!1),a.addEventListener("click",function(){$("html, body").animate({scrollTop:0},500)});const l=document.querySelector(".emoji.wave-hand");setTimeout(function(){e()},1e3),l.addEventListener("mouseover",function(){l.classList.add("wave")}),l.addEventListener("mouseout",function(){l.classList.remove("wave")}),window.sr=ScrollReveal({reset:!1,duration:600,easing:"cubic-bezier(.694,0,.335,1)",scale:1,viewFactor:.3}),sr.reveal(".background"),sr.reveal(".skills"),sr.reveal(".experience",{viewFactor:.2}),sr.reveal(".featured-projects",{viewFactor:.1}),sr.reveal(".other-projects",{viewFactor:.05})});
(()=>{"use strict";const e=function(){let e=document.getElementById("content"),t=document.createElement("div");t.id="main",t.style.textAlign="center",t.innerHTML="Welcome to the Restaurant Page!<br />",t.innerHTML+="Created from the Odin Project.",e.appendChild(t)};(function(){let e=document.getElementById("content"),t=document.createElement("div");t.id="header",t.innerHTML="Restaurant Page";let n=document.createElement("nav");n.id="nav";let d=document.createElement("button");d.id="homeTab",d.classList.add("tab","active"),d.innerHTML="Home";let a=document.createElement("button");a.id="menuTab",a.classList.add("tab"),a.innerHTML="Menu";let c=document.createElement("button");c.id="contactTab",c.classList.add("tab"),c.innerHTML="Contact",n.appendChild(d),n.appendChild(a),n.appendChild(c),t.appendChild(n),e.appendChild(t)})(),e(),function(){let t=document.getElementById("content"),n=document.getElementById("homeTab"),d=document.getElementById("menuTab"),a=document.getElementById("contactTab");document.getElementById("main"),n.addEventListener("click",(()=>{t.removeChild(t.childNodes[1]),n.classList.add("active"),d.classList.remove("active"),a.classList.remove("active"),e()})),d.addEventListener("click",(()=>{t.removeChild(t.childNodes[1]),n.classList.remove("active"),d.classList.add("active"),a.classList.remove("active"),function(){let e=document.getElementById("content"),t=document.createElement("div");t.id="main",t.style.textAlign="unset";let n=document.createElement("ol");n.id="menu",["Chicken","Ham","Eggs","Soup","Fish","Burger","Pizza","Taco","Hot Dog","Sandwhich"].forEach((e=>{let t=document.createElement("li");t.innerHTML=e,n.appendChild(t)})),t.appendChild(n),e.appendChild(t)}()})),a.addEventListener("click",(()=>{t.removeChild(t.childNodes[1]),n.classList.remove("active"),d.classList.remove("active"),a.classList.add("active"),function(){let e=document.getElementById("content"),t=document.createElement("div");t.id="main",t.style.textAlign="center",t.innerHTML="Owner: The Restaurant Owner<br />",t.innerHTML+="Email: owner@restaurantpage.com",e.appendChild(t)}()}))}()})();
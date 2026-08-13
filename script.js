const searchBtn=document.getElementById("searchBtn"), modal=document.getElementById("searchModal"), close=document.getElementById("closeSearch"), input=document.getElementById("searchInput");
searchBtn?.addEventListener("click",()=>{modal.style.display="flex";input.focus()});
close?.addEventListener("click",()=>modal.style.display="none");
modal?.addEventListener("click",e=>{if(e.target===modal)modal.style.display="none"});
document.getElementById("subscribe")?.addEventListener("submit",e=>{e.preventDefault();alert("Thanks for subscribing to EXTREME GAME XTRA!");e.target.reset()});
document.querySelector(".menu")?.addEventListener("click",()=>alert("Mobile navigation: use the page sections by scrolling."));
input?.addEventListener("input",()=>{document.querySelector(".search-modal p").textContent=input.value?`Searching for “${input.value}”...`:"Type to search the site.";});

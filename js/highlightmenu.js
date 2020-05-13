
let menuitem = document.querySelector("[href$='"+window.location.pathname.substring(1)+"']");
menuitem.parentElement.classList.add("active");
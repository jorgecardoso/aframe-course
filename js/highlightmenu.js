console.log(window.location.pathname.substring(1))
let menuitem = document.querySelector("[href$='"+window.location.pathname.substring(1)+"']");
console.log(menuitem);
menuitem.parentElement.classList.add("active");
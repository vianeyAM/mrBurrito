let show_login = document.querySelector("#showlogIn")
let btnshow = document.querySelector("#log-button")

show_login.style.display="none";

btnshow.addEventListener("click", (e) => {    
    e.preventDefault();
    show_login.style.display="block";
});   






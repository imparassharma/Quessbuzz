const about = document.querySelector(".tab-container");
const btns = document.querySelectorAll(".btn");
const text = document.querySelectorAll(".content");

about.addEventListener("click",function(e){
    const id = e.target.dataset.id;

    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        text.forEach(function(text){
            text.classList.remove("active");;
        });

        const element = document.getElementById(id);
        element.classList.add("active");

    }
  
});

const toggle = document.querySelector(".nav-btn");
const linkscontainer = document.querySelector(".links-container");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click",function(){
    linkscontainer.classList.toggle("show-links");
    const container_height = linkscontainer.getBoundingClientRect().height;
    console.log(container_height);
    const links_height = links.getBoundingClientRect().height;
    console.log(links_height);
    if(container_height==0)
    {
        linkscontainer.style.height = `${links_height}px`;
    }
    else{
        linkscontainer.style.height = 0;
    }
});
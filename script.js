
/*************************NAV_BAR********************************/
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

/*************************NAV_BAR********************************/



/*******************************SLIDE_MOVE****************************************/
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
console.log(prev)
slides.forEach(function(slide,index){
    slide.style.left = `${index*100}%`;
})

let page_no = 0;

next.addEventListener("click",function(){
    page_no++;
    move_page();
});

prev.addEventListener("click",function(){
    page_no--;
    move_page();
});

function move_page(){

    if(page_no==slides.length){
        page_no=0;
    }

    if(page_no<0){
        page_no = slides.length-1;
    }
    
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${page_no * 100}%)`;
    })
}


/*******************************ANS_REVEAL****************************************/
const reveal = document.querySelector(".reveal-btn");
const text = document.querySelector(".ques");
const main = document.querySelector(".main")
const ans = document.querySelector(".answer");
const container = document.getElementById("container");
const paragraph = document.getElementById("para");

slides.forEach(function(slide){
    reveal.addEventListener('click',function(){
        console.log(reveal)
        text.classList.toggle("active");
        if(text.classList != "ques active"){
            reveal.innerHTML = "<i class=\"fas fa-eye-slash\"></i>"
            ans.classList.add("show");
            container.style.backgroundColor = "#17B978";
            paragraph.style.color = "white";
            reveal.style.color="white";
    
        }
        else{
            reveal.innerHTML= "<i class=\"far fa-eye\"></i>";
            ans.classList.remove("show");
            container.style.backgroundColor = "#C9D6DF";
            reveal.style.color="#52616B"
        }
    });
})

/*******************************SLIDE_MOVE****************************************/
let about=document.querySelector("#lineone #about");
let aboutsec=document.querySelector(".about-sec")
let experience=document.querySelector("#lineone #experi");
let experiencesec=document.querySelector(".experiencesec");
let contact=document.querySelector("#linetwo #contact")
let menu=document.querySelector(".contact-menu");
let project=document.querySelector("#linetwo #project");
let projectinfo=document.querySelector(".project-info");
let of=document.querySelector(".of");
let on=document.querySelector(".on");
let body=document.querySelector("body");
let btn=document.querySelector("#btn");
let main=document.querySelector(".main");

 
let mode="light";
btn.addEventListener("click",()=>{
    if(mode==="light"){
    mode="dark";
     body.style.backgroundColor="rgba(104, 99, 99, 0.685)";
     main.classList.remove("hide8");

    }else{
        mode="light";
    
        body.style.backgroundColor="black";
        body.style.color="black";
        main.classList.add("hide8");
        experiencesec.classList.add("hide1");
    menu.classList.add("hide4");
    aboutsec.classList.add("hide");
    projectinfo.classList.add("hide3");
        
    }
    console.log(mode);
});
 
// of.addEventListener("click",function(){
//     of.style.position="absolute";
//     of.style.right="0%";
//     body.style.backgroundColor="grey";
//     main.classList.remove("hide8");
   

    
 


// })
 
// of.addEventListener("dblclick",function(){
//     of.style.position="absolute";
//     of.style.left="0%";
//     body.style.backgroundColor="black";

//     main.classList.add("hide8");
 
    
    

// })
about.addEventListener("click",function(){
    console.log("hello world");
    
    aboutsec.classList.remove("hide");
    // aboutsec.classList.add("about-animation")
    aboutsec.classList.add("about-sec1");
    aboutsec.style.height="600px";
    // aboutsec.style.flexDirection="column";
    experiencesec.classList.add("hide1");
    
    menu.classList.add("hide4");
    projectinfo.classList.add("hide3");
    
    
})
about.addEventListener("dblclick",function(){
    aboutsec.classList.add("hide");
     
    
    
})
experience.addEventListener("click",function(){
    aboutsec.classList.add("hide");
    experiencesec.classList.remove("hide1");
    menu.classList.add("hide4");
    projectinfo.classList.add("hide3");

})
experience.addEventListener("dblclick",function(){
    experiencesec.classList.add("hide1");
    
    
})
contact.addEventListener("click",function(){
    menu.classList.remove("hide4");
    experiencesec.classList.add("hide1");

aboutsec.classList.add("hide");
projectinfo.classList.add("hide3");
    
})
contact.addEventListener("dblclick",function(){
    menu.classList.add("hide4");
    
})
project.addEventListener("click",function(){
    
    projectinfo.classList.remove("hide3");
    experiencesec.classList.add("hide1");
    menu.classList.add("hide4");
    aboutsec.classList.add("hide");

})
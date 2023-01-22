let codes=document.querySelectorAll(".code")

    codes[0].focus();
    codes.forEach((code,idx)=>{
   code.addEventListener("keydown",(e)=>{
    if(e.key>=0 &&e.key<=9){
        codes[idx].value=""
        setTimeout(()=>codes[idx+1].focus(), 10)
    }else if(e.key==="Backspace"){
        setTimeout(()=>codes[idx-1].focus(), 10)
    }
   })
    })

   
let popup=document.getElementById("popup")
function openPopup(){
    let body=document.querySelector(".container")
    body.style.opacity="0.5"
    popup.classList.add("open-popup")
  
    
}

function closePopup(){
    popup.classList.remove("open-popup")
    window.location.href="index.html"
};
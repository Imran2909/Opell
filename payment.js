document.querySelector("#lower>div div:nth-child(3)").addEventListener("click",function(){
    let card=document.querySelector("#card")
    // card.style.display="block"
})

    let main=document.querySelector("#main")
    main.style.display="block"
})

document.querySelector("#cash").addEventListener("click",function(){
    let contain=document.querySelector(".contain")
    contain.style.display="block"
})


function cap(){
    var alpha=["A","B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"]
 var a=alpha[Math.floor(Math.random()*62)]
 var b=alpha[Math.floor(Math.random()*62)]
 var c=alpha[Math.floor(Math.random()*62)]
 var d=alpha[Math.floor(Math.random()*62)]
 var e=alpha[Math.floor(Math.random()*62)]
 var f=alpha[Math.floor(Math.random()*62)]
 var sum=a+b+c+d+e+f;
 document.getElementById("capt").value=sum

}

function validcap(){
    var string1=document.getElementById("capt").value
    var string2=document.getElementById("textinput").value
    if(string1==string2){
     document.querySelector("#small").textContent="Catcha Is Validated Please Proceed to Place Order"
     document.querySelector("#small").style.color="green"
     return true
    }else{ 
        document.querySelector("#small").textContent="Please Enter A Valid Catcha"
        document.querySelector("#small").style.color="red"
        return false
    }
}

let popup=document.getElementById("popup")
function openPopup(){
    let body=document.querySelector(".cont")
    body.style.opacity="0.5"
    popup.classList.add("open-popup")
  
    
}

function closePopup(){
    popup.classList.remove("open-popup")
    window.location.href="index.html"
}
document.querySelector("#save-button").addEventListener("click",function(){
    window.location.href="OTP.html"
})

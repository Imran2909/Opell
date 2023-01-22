document.querySelector("#lower>div div:nth-child(3)").addEventListener("click",function(){

    let card=document.querySelector("#card")
    card.style.display="block"
})

document.querySelector("#lower>div div:nth-child(3)").addEventListener("click",function(){


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
  

    var id=JSON.parse(localStorage.getItem("id"));

const Url=`https://63c793e3e52516043f4040ed.mockapi.io/users/${id}`;


fetch(Url)
.then((res)=>res.json())
.then((data)=>{

    data.cart=[];
    update(data)
})

async function update(userdata){
    let res=await fetch(Url,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    })

    let d=await res.json();
}

    
}

function closePopup(){
    popup.classList.remove("open-popup")
    window.location.href="index.html"
}
document.querySelector("#save-button").addEventListener("click",function(){
  let cardNo=document.querySelector("#num").value
  let ex=document.querySelector("#ex").value
  let cvv=document.querySelector("#cvv").value
  if(cardNo==""||ex==""||cvv==""){
    document.getElementById("alert").textContent="Please Fill All The Required Details"
  }else{
 window.location.href="OTP.html"
   
  }
   
})

var id=JSON.parse(localStorage.getItem("id"));

const Url=`https://63c793e3e52516043f4040ed.mockapi.io/users/${id}`;

var amount=document.getElementById("amount");

fetch(Url)
.then((res)=>res.json())
.then((data)=>{
    // var index=1;
    data.cart.map((element,index)=>{
        element.id=index+1;
        element.totalPrice=element.price*element.itemCount;
        element.totalEmiPrice=element.emi*element.itemCount;
        return element;
    });
    display(data.cart);
})

function display(cart){

    var totalcartprice=0;
    // var totalemiprice=0;

    if(cart.length!=0)
    {
        cart.forEach((element)=>{
            totalcartprice+=element.totalPrice;
            // totalemiprice+=element.totalEmiPrice;
        });
    }
    amount.innerHTML=totalcartprice;
}

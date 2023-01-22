
var Qlogo=document.getElementById("Qlogo");
var closelogo=document.getElementById("closelogo");
var qnaDiv=document.getElementById("qnaDiv");
var payButton=document.getElementById("payButton");


payButton.addEventListener("click",(e)=>{
    e.preventDefault();
    location.href="Payment.html";
});

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

Qlogo.addEventListener("click",(e)=>{
    e.preventDefault();
    Qlogo.style.display="none";
    closelogo.style.display="block";

    qnaDiv.innerHTML=`
    <hr id="qnahr">
    <div id="qline">
        <p>Can I place a business order or add a business GST number to my invoice?</p>
        <img id="downIcon1" src="logo.png/down.png" alt="icon">
        <img id="upIcon1" src="logo.png/up.png" alt="icon">
    </div>
    <p id="ans1"></p>

    <hr id="qnahr">
    <div id="qline">
        <p>When will I get my items?</p>
        <img id="downIcon2" src="logo.png/down.png" alt="icon">
        <img id="upIcon2" src="logo.png/up.png" alt="icon">
    </div>
    <p id="ans2"></p>

    <hr id="qnahr">
    <div id="qline">
        <p>How much does delivery cost?</p>
        <img id="downIcon3" src="logo.png/down.png" alt="icon">
        <img id="upIcon3" src="logo.png/up.png" alt="icon">
    </div>
    <p id="ans3"></p>

    <hr id="qnahr">
    <div id="qline">
        <p>Can you deliver to somewhere other than my home?</p>
        <img id="downIcon4" src="logo.png/down.png" alt="icon">
        <img id="upIcon4" src="logo.png/up.png" alt="icon">
    </div>
    <p id="ans4"></p>

    <hr id="qnahr">
    <div id="qline">
        <p>Why is my PIN code unavailable for delivery?</p>
        <img id="downIcon5" src="logo.png/down.png" alt="icon">
        <img id="upIcon5" src="logo.png/up.png" alt="icon">
    </div>
    <p id="ans5"></p>

    <hr id="qnahr">
    <div id="qline">
        <p>How do I track my delivery?</p>
        <img id="downIcon6" src="logo.png/down.png" alt="icon">
        <img id="upIcon6" src="logo.png/up.png" alt="icon">
    </div>
    <p id="ans6"></p>
    `;

    var downIcon1=document.getElementById("downIcon1");
    var upIcon1=document.getElementById("upIcon1");
    var ans1=document.getElementById("ans1");

    downIcon1.addEventListener("click",()=>{
        downIcon1.style.display="none";
        ans1.innerText="No, only consumer orders can be placed at this time. You will receive a consumer invoice via email after delivery of your order. It is not possible to add a business GST number to your invoice and Customer Service cannot edit invoices to include it.";
        upIcon1.style.display="block";
    });

    upIcon1.addEventListener("click",()=>{
        upIcon1.style.display="none";
        ans1.innerText="";
        downIcon1.style.display="block";

    });

    var downIcon2=document.getElementById("downIcon2");
    var upIcon2=document.getElementById("upIcon2");
    var ans2=document.getElementById("ans2");

    downIcon2.addEventListener("click",()=>{
        downIcon2.style.display="none";
        ans2.innerText="By entering a PIN code, you’ll get estimated delivery dates for your items. You’ll get a final delivery date after you’ve placed your order. All estimates are based on item availability and the delivery option you choose.";
        upIcon2.style.display="block";
    });

    upIcon2.addEventListener("click",()=>{
        upIcon2.style.display="none";
        ans2.innerText="";
        downIcon2.style.display="block";

    });

    var downIcon3=document.getElementById("downIcon3");
    var upIcon3=document.getElementById("upIcon3");
    var ans3=document.getElementById("ans3");

    downIcon3.addEventListener("click",()=>{
        downIcon3.style.display="none";
        ans3.innerText="Express Delivery is free for most online orders. You can upgrade your delivery method for an additional charge.";
        upIcon3.style.display="block";
    });

    upIcon3.addEventListener("click",()=>{
        upIcon3.style.display="none";
        ans3.innerText="";
        downIcon3.style.display="block";

    });

    var downIcon4=document.getElementById("downIcon4");
    var upIcon4=document.getElementById("upIcon4");
    var ans4=document.getElementById("ans4");

    downIcon4.addEventListener("click",()=>{
        downIcon4.style.display="none";
        ans4.innerText="Yes. You can enter the address of your choice when prompted at checkout.";
        upIcon4.style.display="block";
    });

    upIcon4.addEventListener("click",()=>{
        upIcon4.style.display="none";
        ans4.innerText="";
        downIcon4.style.display="block";

    });

    var downIcon5=document.getElementById("downIcon5");
    var upIcon5=document.getElementById("upIcon5");
    var ans5=document.getElementById("ans5");

    downIcon5.addEventListener("click",()=>{
        downIcon5.style.display="none";
        ans5.innerText="We are currently unable to deliver to certain PIN codes in India. For some PIN codes this is temporary due to local COVID-19 restrictions.";
        upIcon5.style.display="block";
    });

    upIcon5.addEventListener("click",()=>{
        upIcon5.style.display="none";
        ans5.innerText="";
        downIcon5.style.display="block";

    });

    var downIcon6=document.getElementById("downIcon6");
    var upIcon6=document.getElementById("upIcon6");
    var ans6=document.getElementById("ans6");

    downIcon6.addEventListener("click",()=>{
        downIcon6.style.display="none";
        ans6.innerText="As each item is dispatched, we’ll send you a notification. Visit your online Order Status(opens in a new window) to view the up-to-date status of your order.";
        upIcon6.style.display="block";
    });

    upIcon6.addEventListener("click",()=>{
        upIcon6.style.display="none";
        ans6.innerText="";
        downIcon6.style.display="block";

    });
});

closelogo.addEventListener("click",(e)=>{
    e.preventDefault();
    closelogo.style.display="none";
    Qlogo.style.display="block";

    qnaDiv.innerHTML=null;
});

// fetch(Url)
// .then((res)=>res.json())
// .then((data)=>{
//     // var index=1;
//     data.cart.map((element,index)=>{
//         element.id=index+1;
//         element.totalPrice=element.price*element.itemCount;
//         element.totalEmiPrice=element.emi*element.itemCount;
//         return element;
//     });
//     userData=data;
//     // console.log(data.cart);
//     display(data.cart);
//     cartData=data.cart;
// })
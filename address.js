var Qlogo=document.getElementById("Qlogo");
var closelogo=document.getElementById("closelogo");
var qnaDiv=document.getElementById("qnaDiv");

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
        <p>What are my payment options?</p>
        <img id="downIcon3" src="logo.png/down.png" alt="icon">
        <img id="upIcon3" src="logo.png/up.png" alt="icon">
    </div>
    <p id="ans3"></p>

    <hr id="qnahr">
    <div id="qline">
        <p>What are my financing options?</p>
        <img id="downIcon4" src="logo.png/down.png" alt="icon">
        <img id="upIcon4" src="logo.png/up.png" alt="icon">
    </div>
    <p id="ans4"></p>

    <hr id="qnahr">
    <div id="qline">
        <p>Does Apple offer an education discount?</p>
        <img id="downIcon5" src="logo.png/down.png" alt="icon">
        <img id="upIcon5" src="logo.png/up.png" alt="icon">
    </div>
    <p id="ans5"></p>

    <hr id="qnahr">
    <div id="qline">
        <p>Can I shop for Family & Friends in other countries or regions?</p>
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
        ans3.innerText="We accept most credit and debit cards, as well as credit card and debit EMI. We also accept Net Banking, UPI and Payment on Delivery. Some payment options may not be available for all products. You can call 000800 040 1966 for more information.";
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
        ans4.innerText="You can pay in instalments* using any credit card or debit account with EMI. During Checkout, you can compare and select instalment options. *Subject to card eligibility. See terms.";
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
        ans5.innerText="Yes. Apple offers special pricing for students, teachers, administrators and staff members. If you think you qualify, visit the Apple Education Store(opens in a new window) to place your order.";
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
        ans6.innerText="Visit the online store of the country or region where the products will be delivered to place your order. You can call 000800 040 1966 for more information.";
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

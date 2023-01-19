const Url="https://63c793e3e52516043f4040ed.mockapi.io/users/2";

var cartContainer=document.getElementById("cartContainer");
var checkDiv=document.getElementById("checkDiv");
var remove=document.getElementById("remove");
var price=document.getElementById("price");
var emi=document.getElementById("emi");

var cartData=[];
var userData={};

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
    userData=data;
    // console.log(data.cart);
    display(data.cart);
    cartData=data.cart;
})



    function removeItem(item){
        console.log("OK");
        console.log(item.id);
        cartData=cartData.filter((element)=>element.id!=item.id);
        display(cartData);
        console.log(cartData);
        userData.cart=cartData;
        update(userData);
    }

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

    function getItemCount(select){
        console.log("OK");
        var id=select.dataset.id;
        var value=+document.getElementById(`itemCount${id}`).value;
        var userDt=userData.cart;
        var changed=userDt.map((element)=>{
            if(element.id==id)
            {
                element.itemCount=value;
                element.totalPrice=value*element.price;
                element.totalEmiPrice=value*element.emi;
                return element;
            }
            else
            return element;
        });
        display(changed);
        userData.cart=changed;
        update(userData);
    }

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
                    <p onclick="ans1()">Can I place a business order or add a business GST number to my invoice?</p>
                    <img id="downIcon" src="logo.png/down.png" alt="icon">
                </div>
                <p id="ans1">No, only consumer orders can be placed at this time. You will receive a consumer invoice via email after delivery of your order. It is not possible to add a business GST number to your invoice and Customer Service cannot edit invoices to include it.</p>
                <hr id="qnahr">
                <div id="qline">
                    <p onclick="ans2()">Can I place a business order or add a business GST number to my invoice?</p>
                    <img id="downIcon" src="logo.png/down.png" alt="icon">
                </div>
                <p id="ans2">No, only consumer orders can be placed at this time. You will receive a consumer invoice via email after delivery of your order. It is not possible to add a business GST number to your invoice and Customer Service cannot edit invoices to include it.</p>

        `;
    });

    closelogo.addEventListener("click",(e)=>{
        e.preventDefault();
        closelogo.style.display="none";
        Qlogo.style.display="block";

        qnaDiv.innerHTML=null;
    });

function display(cart){
    console.log(cart);

    var totalcartprice=0;
    var totalemiprice=0;

    if(cart.length!=0)
    {
        cartContainer.innerHTML=`${cart.map((element)=>{
            totalcartprice+=element.totalPrice;
            totalemiprice+=element.totalEmiPrice;
            return render(element);
        }).join("")}`+
        `<hr id="hr1">
        <div id="cartContainerEnd">
            <div id="cartContainerEndEmptyDiv"></div>
            <div id="cartContainerEndDiv">
                <div>
                    <p>Subtotal</p>
                    <p>₹${totalcartprice}.00</p>
                </div>
                <div>
                    <p>Shipping</p>
                    <p>FREE</p>
                </div>
                <hr id="hr2">
                <div>
                    <h3>Total</h3>
                    <h3>₹${totalcartprice}.00</h3>
                </div>
                <div>
                    <p>Monthly payment</p>
                    <p>₹${totalemiprice}.00/mo.per month with EMI</p>
                </div>
            </div>
        </div>
        <div id="lastcheckoutButton">
            <button>Check Out</button>
        </div>`;

        price.innerText=totalcartprice;
        emi.innerText=totalemiprice;

    }
    else
    {
        cartContainer.innerHTML=null;
    checkDiv.innerHTML=`
            <h1 id="checkDivEmptyProductH1">Your bag is empty.</h1>
            <p id="checkDivEmptyProductP">Sign in to see if you have any saved items. Or continue shopping.</p>
            <div id="checkDivEmptyProductButtons">
                <button>Sign In</button>
                <button>Continue Shopping</button>
            </div>
    `;
    }
}

function render(product){
    return `
    <hr id="hr1">
<div id="product">
    <img src="${product.image}" alt="image">
<div id="productOuterDiv">
    <div id="productDiv">
        <div id="title">
            <h3>${product.title}</h3>
        </div>
        <select class="itemCount" data-id="${product.id}" id="itemCount${product.id}" onchange="getItemCount(this)">
            <option value="">${product.itemCount}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        <p>₹${product.totalPrice}.00</p>
        
    </div>
    <div id="emiDiv">
                <p>Pay 16% pa for 6 months:</p>
                <p>₹${product.totalEmiPrice}.00/mo.</p>
            </div>
    <div id="priceremove">
            
            <p id="${product.id}" onclick="removeItem(this)">Remove</p>
        </div>
</div>
</div>
    `;

}
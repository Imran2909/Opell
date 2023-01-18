const Url="https://63c793e3e52516043f4040ed.mockapi.io/users/1";

var cartContainer=document.getElementById("cartContainer");
var checkDiv=document.getElementById("checkDiv");
var remove=document.getElementById("remove");

var cartData=[];
var userData={};

fetch(Url)
.then((res)=>res.json())
.then((data)=>{
    
    data.cart.map((element,index)=>{
        element.id=index+1;
        return element;
    });
    userData=data;
    console.log(data.cart);
    display(data.cart);
    cartData=data.cart;
})



    function removeItem(item){
        console.log("OK");
        console.log(item.id);
        cartData=cartData.filter((element)=>element.id!=item.id);
        display(cartData);
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
        console.log(d);
    }

function display(cart){
    
    if(cart.length!=0)
    cartContainer.innerHTML=`${cart.map((element)=>render(element)).join("")}`;
    else
    checkDiv.innerHTML=`
            <h1 id="checkDivEmptyProductH1">Your bag is empty.</h1>
            <p id="checkDivEmptyProductP">Sign in to see if you have any saved items. Or continue shopping.</p>
            <div id="checkDivEmptyProductButtons">
                <button>Sign In</button>
                <button>Continue Shopping</button>
            </div>
    `;
}

function render(product){
    return `
    <hr id="hr1">
    <div id="product">
    <img src="${product.image}" alt="image">
    <div>
        <div id="title">
            <h3>${product.title}</h3>
        </div>
        <select name="itemCount" id="itemCount">
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
        <div id="priceremove">
            <p>₹${product.price}.00</p>
            <p id="${product.id}" onclick="removeItem(this)">Remove</p>
        </div>
    </div>
</div>
    `;

}
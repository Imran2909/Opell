let iPhoneModels=document.getElementById("iphone-models");

// FETCH FOR DEFAULT
fetch("https://63c64ff64ebaa80285433dad.mockapi.io/apple").then((res)=>{
    return res.json()
})
.then((result)=>{
    let modelsData=(result[0].ShopiPhone[0].Allmodels);
    // console.log(modelsData)
    renderCards(modelsData)
})

// SORT BY PRICE
let sortPrice=document.getElementById("price-sort");
sortPrice.addEventListener("change",()=>{
    value=sortPrice.value;
    console.log(value)
    if(value=="l2h"){
        let filtered=fetch("https://63c64ff64ebaa80285433dad.mockapi.io/apple");
        filtered.then((res)=>{
            return res.json()
        })
        .then((result)=>{
            let fetched=(result[0].ShopiPhone[0].Allmodels.sort((a,b)=>a.price - b.price));
            console.log(fetched)
            renderCards(fetched)
        })
    } else if(value=="h2l"){
        let filtered=fetch("https://63c64ff64ebaa80285433dad.mockapi.io/apple");
        filtered.then((res)=>{
            return res.json()
        })
        .then((result)=>{
            let fetched=(result[0].ShopiPhone[0].Allmodels.sort((a,b)=>b.price - a.price));
            console.log(fetched)
            renderCards(fetched)
        })
    } else{
        let filtered=fetch("https://63c64ff64ebaa80285433dad.mockapi.io/apple");
        filtered.then((res)=>{
            return res.json()
        })
        .then((result)=>{
            let fetched=(result[0].ShopiPhone[0].Allmodels);
            console.log(fetched)
            renderCards(fetched)
        })
    }
})


// RENDER FUNCTION
function renderCards(data){
    iPhoneModels.innerHTML=""
    let cardlist=`
    ${data.map(item => getCard(item.title,item.image,item.price)).join("")}
    `
    iPhoneModels.innerHTML=cardlist
}

// CARD FUNCTION
function getCard(title,image,price){
    let card=`<div class="iphone-card"><h3>${title}</h3>
    <img src=${image} alt="">
    <div>
        <p>Rs. ${price}</p>
        <button>Add to Cart</button>
    </div>
    </div>`

    return card
}
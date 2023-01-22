let iPhoneModels = document.getElementById("iphone-models");
let iPhoneAccessories = document.getElementById("iphone-accessories");
let inputValue = document.getElementById("iphone-search-bar");
let id = JSON.parse(localStorage.getItem("id"));
let modeldata = [];
let accessoriesdata = [];

const url = `https://63c793e3e52516043f4040ed.mockapi.io/users/${id}`;

inputValue.addEventListener("input", () => {
    let value = modeldata.filter((item) => {
        return item.title.toLowerCase().includes(inputValue.value.toLowerCase())
    })
    let valueacc = accessoriesdata.filter((item) => {
        return item.title.toLowerCase().includes(inputValue.value.toLowerCase())
    })
    showData(iPhoneModels, value)
    showData(iPhoneAccessories, valueacc)
})



window.addEventListener("load", () => {
    // FETCH FOR DEFAULT
    fetch("https://63c64ff64ebaa80285433dad.mockapi.io/apple").then((res) => {
        return res.json()
    })
        .then((result) => {
            console.log(result[0]);
            modeldata = result[0].ShopiPhone[0].Allmodels;
            accessoriesdata = result[0].ShopiPhone[1].Accessories;
            let modelsData = (result[0].ShopiPhone[0].Allmodels);
            let accessoriesData = (result[0].ShopiPhone[1].Accessories);
            showData(iPhoneModels, modelsData)
            showData(iPhoneAccessories, accessoriesData)
            console.log(modelsData)
        })
})


// SORT BY PRICE
let sortPrice = document.getElementById("price-sort");
sortPrice.addEventListener("change", () => {
    value = sortPrice.value;
    console.log(value)
    if (value == "l2h") {
        let fetched = modeldata.sort((a, b) => a.price - b.price);
        let fetchedAcc = accessoriesdata.sort((a, b) => a.price - b.price);
        showData(iPhoneModels, fetched)
        showData(iPhoneAccessories, fetchedAcc)
    } else if (value == "h2l") {
        let fetched = modeldata.sort((a, b) => b.price - a.price);
        let fetchedAcc = accessoriesdata.sort((a, b) => b.price - a.price);
        showData(iPhoneModels, fetched)
        showData(iPhoneAccessories, fetchedAcc)
    } else {
        let filtered = fetch("https://63c64ff64ebaa80285433dad.mockapi.io/apple");
        filtered.then((res) => {
            return res.json()
        })
            .then((result) => {
                let fetched = (result[0].ShopiPhone[0].Allmodels);
                let fetchedAcc = (result[0].ShopiPhone[1].Accessories);
                console.log(fetched)
                showData(iPhoneModels, fetched)
                showData(iPhoneAccessories, fetchedAcc)
            })
    }
})








function showData(div, data) {
    div.innerHTML = ""
    data.forEach((element, index) => {
        let card = document.createElement("div");
        card.setAttribute("class", "iphone-card");
        let title = document.createElement("h3");
        title.innerText = element.title;
        let img = document.createElement("img");
        img.setAttribute("src", element.image);
        let innerDiv = document.createElement("div");
        let price = document.createElement("p");
        price.innerText = "Rs." + " " + element.price;
        let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click", () => {
            // let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
            let cartArray = [];
            fetch(url).then((res) => {
                return res.json()
            }).then((result) => {
                cartArray=result.cart;
                // console.log(cartArray);
                let isAlreadyinCart = false;
                for (let i = 0; i < cartArray.length; i++) {
                    if (cartArray[i].id === element.id) {
                        isAlreadyinCart = true;
                        break;
                    }
                }
                if (isAlreadyinCart==true) {
                    alert("Product Already in Cart");
                } else {
                    cartArray.push(element);
                    localStorage.setItem("cart", JSON.stringify(cartArray));
                    alert("Added To Cart");
                    
                    result.cart = cartArray;
                    update(result);
                }
                // console.log(cartArray);
            });
            
        })
        innerDiv.append(price, button);
        card.append(title, img, innerDiv)
        div.append(card)
    })
}

async function update(cartdata) {
    let res = await fetch((url), {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(cartdata)
    })
    let d = await res.json();
}
let latestCards=document.getElementById("latest-cards");

let latestCardsData=[
    {
        bgUrl:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1671578693545",
        title:"MACKBOOK PRO 14 AND 16",
        heading:"Mover.Maker.",
        brPart:"Boundary breaker",
        price:"From Rs.199900.00*",
        id:"1"
    },
    {
        bgUrl:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-mac-mini-202301?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1670448669900",
        title:"MAC MINI",
        heading:"More mustle.More hustle.",
        brPart:"",
        price:"From Rs.59900.00*",
        id:"2"
    },
    {
        bgUrl:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-202209?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1661890731783",
        title:"IPHONE 14",
        heading:"Big and bigger.",
        brPart:"",
        price:"From Rs.79900.00*",
        id:"3"
    },
    {
        bgUrl:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-pro-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661181419170",
        title:"IPHONE 14 PRO",
        heading:"Pro.Beyond.",
        brPart:"",
        price:"From Rs.129900.00*",
        id:"4"
    },
    {
        bgUrl:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s8-202209_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661792340440",
        title:"APPLE WATCH SERIES 8",
        heading:"A healthy leap ahead.",
        brPart:"",
        price:"From Rs. 45900.00*",
        id:"5"
    },
    {
        bgUrl:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-202210?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667423432053",
        title:"IPAD",
        heading:"Loveable.Drawable.",
        brPart:"Magical.",
        price:"From Rs.44900.00*",
        id:"6"
    },
    {
        bgUrl:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-pro-202210_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667506331714",
        title:"IPAD PRO",
        heading:"Supaercharged by M2.",
        brPart:"",
        price:"From Rs.81900.00*",
        id:"7"
    },
    {
        bgUrl:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202209_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661382550267",
        title:"APPLE WATCH ULTRA",
        heading:"Adventure awaits.",
        brPart:"",
        price:"From Rs.89900.00*",
        id:"8"
    }
]

latestCards.innerHTML=` ${latestCardsData.map(item => getCard(item.bgUrl,item.title,item.heading,item.brPart,item.price)).join("")}`


function getCard(bgUrl,title,heading,brPart,price){
    let card=`<div class="latest-card-top" style="background: url(${bgUrl});">
    <p>${title}</p>
    <h2>${heading}<br>${brPart}</h2>
    <p>${price}</p>
</div>`
return card
}
fetch("https://63c64ff64ebaa80285433dad.mockapi.io/apple").then((res)=>{
    return res.json()
})
.then((result)=>{
    console.log(result[0].ShopiPhone[0].Allmodels)
})
document.getElementById("LI").style.display="none";
let arr=[]
let but=document.querySelector("#signup");
but.addEventListener("click",(pre)=>{
    pre.preventDefault()
    let name=document.getElementById("name").value;
    let lname=document.getElementById("lname").value;
    let mail=document.getElementById("mail").value;
    let password=document.getElementById("password").value;
    let repass=document.getElementById("Repassword").value;
    if(name==""||mail==""||password==""||repass==""){
        alert("Please fill all the data !")
        return
    }
    if(password!==repass){
        alert("Passwords are not matching!")
        return
    }

    let userdata={
    "firstname": name,
    "lastname": lname,
    "emailid": mail,
    "password": password,
    "cart": []
}

    async function register(){
        let res=await fetch("https://63c793e3e52516043f4040ed.mockapi.io/users" ,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    }).then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    }).catch((err)=>{
        alert(err)
    })
}

alert("SignUp Successful!")
register(userdata)

document.getElementById("signIn").style.display="none";
document.getElementById("logIn").style.display="block";

document.getElementById("LI").style.display="block";
document.getElementById("SU").style.display="none";
})




document.getElementById("already").addEventListener("click",(pr)=>{
    pr.preventDefault()
document.getElementById("signIn").style.display="none";
document.getElementById("logIn").style.display="block";
document.getElementById("LI").style.display="block";
document.getElementById("SU").style.display="none";
})


let val=0
document.getElementById("logn").addEventListener("click",(pe)=>{
   let count=0;
pe.preventDefault();
    let Mail=document.getElementById("enteredmail").value
    let Pass=document.getElementById("enteredpassword").value
    function getId(all){
        all.forEach((elem,i)=>{
            arr.push(elem)
            if(elem.emailid==Mail && elem.password==Pass){
                // console.log(elem.id);
                val=elem.id;
                localStorage.setItem("id",JSON.stringify(val));
                localStorage.setItem("mel",Mail);
                count++;
            }
        })
        
    } 
    fetch("https://63c793e3e52516043f4040ed.mockapi.io/users")
.then((res)=>res.json())
.then((data)=>{
    // console.log(data);
    getId(data)
})
setTimeout(()=>{
    alert("Sign In successful!")
console.log(val)
window.location.assign("index.html")
},2000)

})


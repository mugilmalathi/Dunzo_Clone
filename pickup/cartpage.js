document.getElementById("wallets").addEventListener("click",()=>{
    document.getElementById("dispay").style.display="block"
    document.getElementById("div1").style.display="none"
    document.getElementById("div2").style.display="none"
    document.getElementById("wallets").style.backgroundColor="white"
    document.getElementById("offers").style.backgroundColor="#f3f3f5"
    document.getElementById("cards").style.backgroundColor="#f3f3f5"
    document.getElementById("upi").style.backgroundColor="#f3f3f5"
    document.getElementById("image").src="https://ik.imagekit.io/dunzo/tr:w-72,h-72,cm-pad_resize_payment_ico/icons/R4_Icons/payment/PayTM.png"
    document.getElementById("payname").textContent="Paytm"
    document.getElementById("linktext").textContent="Your Paytm account is not linked. Please Link your Account."
    document.getElementById("paybutton").textContent = "Link Account"
})
document.getElementById("offers").addEventListener("click",()=>{
    document.getElementById("div1").style.display="none"
    document.getElementById("div2").style.display="none"
    document.getElementById("dispay").style.display="block"
    document.getElementById("offers").style.backgroundColor="white"
    document.getElementById("wallets").style.backgroundColor="#f3f3f5"
    document.getElementById("cards").style.backgroundColor="#f3f3f5"
    document.getElementById("upi").style.backgroundColor="#f3f3f5"
    document.getElementById("image").src="https://ik.imagekit.io/dunzo/tr:w-72,h-72,cm-pad_resize_payment_ico/icons/R4_Icons/payment/Simpl.png"
    document.getElementById("payname").textContent="Simpl"
    document.getElementById("linktext").textContent="Your Simpl account is not linked. Please Link your Account."
    document.getElementById("paybutton").textContent = "Link Account"
})
document.getElementById("cards").addEventListener("click",()=>{
    document.getElementById("dispay").style.display="none"
    document.getElementById("div2").style.display="flex"
    document.getElementById("div2").innerHTML=null
    document.getElementById("cards").style.backgroundColor="white"
    document.getElementById("wallets").style.backgroundColor="#f3f3f5"
    document.getElementById("offers").style.backgroundColor="#f3f3f5"
    document.getElementById("upi").style.backgroundColor="#f3f3f5"
    let p1 = document.createElement("input")
    p1.placeholder="Card number"
    let p2 = document.createElement("input")
    p2.placeholder="Expiry date"
    let p3 = document.createElement("input")
    p3.placeholder="CVV"
    let p4 = document.createElement("input")
    p4.placeholder="Name"
    let paybutton = document.createElement("button")
    paybutton.textContent="Pay Now"
    paybutton.id="cardbutton"
    paybutton.style.display="block"
    document.getElementById("div2").append(p4,p1,p2,p3,paybutton)
    paybutton.addEventListener("click",()=>{
        alert("OTP sent to your registered mobile number")
        document.getElementById("div2").innerHTML=null
        let otp = document.createElement("input")
        otp.style.width="200px"
        otp.type="password"
        otp.placeholder="Enter 6 digit otp sent to your mobile number"
        let otpbutton = document.createElement("button")
        otpbutton.textContent="Confirm"
        otpbutton.id="otpbutton"
        otpbutton.addEventListener("click",()=>{
            window.location.href="./confirmation.html"
        })
        document.getElementById("div2").append(otp,otpbutton)
    })
})
document.getElementById("upi").addEventListener("click",()=>{
    document.getElementById("div2").style.display="none"
    document.getElementById("div1").style.display="block"
    document.getElementById("dispay").style.display="inline"
    document.getElementById("upi").style.backgroundColor="white"
    document.getElementById("offers").style.backgroundColor="#f3f3f5"
    document.getElementById("cards").style.backgroundColor="#f3f3f5"
    document.getElementById("wallets").style.backgroundColor="#f3f3f5"
    document.getElementById("image").src="https://ik.imagekit.io/dunzo/tr:w-72,h-72,cm-pad_resize_payment_ico/icons/R4_Icons/payment/UPI.png"
    document.getElementById("payname").textContent="Add New UPI ID"
    document.getElementById("linktext").textContent="* Enter UPI ID"
    document.getElementById("paybutton").textContent = "Verify & Pay"
})

document.getElementById("logo").addEventListener("click",()=>{
    window.location.href="../homepage/homepage.html"
})

let pobj = JSON.parse(localStorage.getItem("pickdetails"))
document.getElementById("pickup").textContent = pobj.hno+pobj.landmark+pobj.address+pobj.name+pobj.mobile

let dobj = JSON.parse(localStorage.getItem("dropdetails"))
document.getElementById("drop").textContent= dobj.hno2+dobj.landmark2+dobj.address2+dobj.name2+dobj.mobile2

let totalobj = JSON.parse(localStorage.getItem("total"))
document.getElementById("sp").textContent=`${totalobj.total}`
document.getElementById("tp").textContent=`${totalobj.total}`
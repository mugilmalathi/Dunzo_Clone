document.getElementById("pdiv").addEventListener("click",getlocation)
    function getlocation(){
        document.getElementById("div1").style.display="block"
        document.querySelector("body").style.backgroundColor="#d3d5db"
        document.getElementById("box1").style.backgroundColor="#d3d5db"
        document.getElementById("box2").style.backgroundColor="#d3d5db"
        document.getElementById("cont").style.backgroundColor="#d3d5db"
    }
    document.getElementById("closepickup").addEventListener("click",()=>{
        document.getElementById("div1").style.display="none"
        document.querySelector("body").style.backgroundColor=""
        document.getElementById("box1").style.backgroundColor=""
        document.getElementById("box2").style.backgroundColor=""
        document.getElementById("cont").style.backgroundColor=""
        document.getElementById("div2").innerText=null
        document.getElementById("div3").innerText=null
        document.getElementById("div5").innerText=null;
    })
    document.getElementById("ddiv").addEventListener("click",getdroplocation)
    function getdroplocation(){
        document.getElementById("div6").style.display="block"
        document.querySelector("body").style.backgroundColor="#d3d5db"
        document.getElementById("box1").style.backgroundColor="#d3d5db"
        document.getElementById("box2").style.backgroundColor="#d3d5db"
        document.getElementById("cont").style.backgroundColor="#d3d5db"
    }
    document.getElementById("closedrop").addEventListener("click",()=>{
        document.getElementById("div6").style.display="none"
        document.querySelector("body").style.backgroundColor=""
        document.getElementById("box1").style.backgroundColor=""
        document.getElementById("box2").style.backgroundColor=""
        document.getElementById("cont").style.backgroundColor=""
        document.getElementById("div7").innerText=null
        document.getElementById("div8").innerText=null
        document.getElementById("div9").innerText=null;
    })
    document.getElementById("place").addEventListener("input",()=>{
        debounce(getpickupresults,1500)
    })

    document.getElementById("dropplace").addEventListener("input",()=>{
        debounce(getdropresults,1500)
    })

   async function getpickupresults(){
        let place = document.getElementById("place").value
        try{
            let response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${place}&apiKey=f7279745c84f470988e75c339dbefaf4`)
            let data = await response.json()
            console.log(data)
            appendpickupresults(data.features)
        }catch(err){
            console.log(err)
        }
    }
        function appendpickupresults(results){
            document.getElementById("div2").innerHTML=null
            document.getElementById("div3").innerHTML=null
            document.getElementById("div5").innerHTML=null;
            results.map((elem)=>{
                let box = document.createElement("div")
                let p = document.createElement("p")
                p.textContent = elem.properties.formatted
                box.append(p)
                document.getElementById("div2").append(box)
                box.addEventListener("click",()=>{
                    if(elem.properties.city=="Bengaluru" || elem.properties.city=="Mumbai" || elem.properties.city=="Pune"||elem.properties.city=="New Delhi" || elem.properties.city=="Gurgaon" || elem.properties.city=="Hyderabad" || elem.properties.city=="Chennai"|| elem.properties.name=="Bangalore Urban"){
                        document.getElementById("div2").innerHTML=null
                        document.getElementById("div3").innerHTML=null
                        document.getElementById("div5").innerHTML=null;
                        let iframe = document.createElement("iframe")
                        iframe.className="maps"
                        iframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDt-iuxli-lln4vvQiv79TTE6cmYWxOiz0&q=${elem.properties.formatted}`
                        iframe.setAttribute("allowfullscreen",true)
                        document.getElementById("div2").append(iframe)
                        let div4 = document.createElement("div")
                        div4.className="div4"
                        let hno = document.createElement("input")
                        hno.placeholder = "Enter flat no"
                        let landmark = document.createElement("input")
                        landmark.placeholder = "Enter nearest landmark"
                        let name = document.createElement("input")
                        name.placeholder = "Enter person name"
                        let mobile = document.createElement("input")
                        mobile.placeholder = "Enter mobile number"
                        mobile.type="number"
                        let button = document.createElement("button")
                        button.className="continue"
                        button.textContent="Continue"
                        button.addEventListener("click",()=>{
                document.getElementById("pickup").textContent = hno.value+","+landmark.value+","+elem.properties.city+","+elem.properties.state+","+elem.properties.country
                document.getElementById("pickup").style.color="black"
                document.getElementById("pickupname").textContent = `${name.value} (${mobile.value})`
                document.getElementById("div1").style.display="none"
                document.querySelector("body").style.backgroundColor=""
                document.getElementById("box1").style.backgroundColor="white"
                document.getElementById("box2").style.backgroundColor="white"
                document.getElementById("cont").style.backgroundColor="white"
                let pickobj = {
                    hno:hno.value,
                    landmark:landmark.value,
                    address:elem.properties.formatted,
                    name:name.value,
                    mobile:mobile.value,
                }
                localStorage.setItem("pickdetails",JSON.stringify(pickobj))
            })
            div4.append(hno,landmark,name,mobile)
                document.getElementById("div5").append(button)
                document.getElementById("div3").append(div4)
                    }
                    else{
               document.getElementById("div2").innerHTML=null
               let image = document.createElement("img")
               image.className="image"
               image.src= "https://resources.dunzo.com/web-assets/prod/_next/static/images/not-serviceable-f04a7134ec39e556f27f61a7003cb718.png"
               let p = document.createElement("h2")
               p.textContent="Location is not serviceable"
               let para = document.createElement("p")
               para.textContent = "Dunzo services are not available at this location yet. Please update your location."
               document.getElementById("div2").append(image,p,para)
                    }
                })
            })
        }

        async function getdropresults(){
            let dropplace = document.getElementById("dropplace").value
            try{
                let response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${dropplace}&apiKey=f7279745c84f470988e75c339dbefaf4`)
                let data = await response.json()
                console.log(data)
                appenddropresults(data.features)
            }catch(err){
                console.log(err)
            }
        }
        function appenddropresults(results){
            document.getElementById("div7").innerHTML=null
            document.getElementById("div8").innerHTML=null
            document.getElementById("div9").innerHTML=null;
            results.map((elem)=>{
                let box = document.createElement("div")
                let p = document.createElement("p")
                p.textContent = elem.properties.formatted
                box.append(p)
                document.getElementById("div7").append(box)
                box.addEventListener("click",()=>{
                    if(elem.properties.city=="Bengaluru" || elem.properties.city=="Mumbai" || elem.properties.city=="Pune"||elem.properties.city=="New Delhi" || elem.properties.city=="Gurgaon" || elem.properties.city=="Hyderabad" || elem.properties.city=="Chennai"){
                        document.getElementById("div7").innerHTML=null
                        document.getElementById("div8").innerHTML=null
                        document.getElementById("div9").innerHTML=null;
                        let iframe2 = document.createElement("iframe")
                        iframe2.className="maps"
                        iframe2.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDt-iuxli-lln4vvQiv79TTE6cmYWxOiz0&q=${elem.properties.formatted}`
                        iframe2.setAttribute("allowfullscreen",true)
                        document.getElementById("div7").append(iframe2)
                        let div10 = document.createElement("div")
            div10.className="div4"
            let hno2 = document.createElement("input")
            hno2.placeholder = "Enter flat no"
            let landmark2 = document.createElement("input")
            landmark2.placeholder = "Enter nearest landmark"
            let name2 = document.createElement("input")
            name2.placeholder = "Enter person name"
            let mobile2 = document.createElement("input")
            mobile2.placeholder = "Enter mobile number"
            mobile2.type="number"
            let button2 = document.createElement("button")
            button2.className="continue"
            button2.textContent="Continue"
            button2.addEventListener("click",()=>{
                document.getElementById("drop").textContent = hno2.value+","+landmark2.value+","+elem.properties.city+","+elem.properties.state+","+elem.properties.country
                document.getElementById("drop").style.color="black"
                document.getElementById("dropname").textContent = `${name2.value} (${mobile2.value})`
                document.getElementById("div6").style.display="none"
                document.querySelector("body").style.backgroundColor=""
                document.getElementById("box1").style.backgroundColor="white"
                document.getElementById("box2").style.backgroundColor="white"
                document.getElementById("cont").style.backgroundColor="white"
                let dropobj = {
                    hno2:hno2.value,
                    landmark2:landmark2.value,
                    address2:elem.properties.formatted,
                    name2:name2.value,
                    mobile2:mobile2.value
                }
                localStorage.setItem("dropdetails",JSON.stringify(dropobj))
                let pay = document.createElement("button")
            pay.textContent="Pay Now"
            pay.id="paybutton"
            document.getElementById("pay").append(pay)
            pay.addEventListener("click",()=>{
                window.location.href="./cartpage.html"
            })
            document.getElementById("rules").textContent=null
            let amount = document.createElement("p")
            amount.textContent = `₹ ${Math.round(Math.random()*100)+200}`
            let totalobj = {
                total:amount.textContent,
            }
            localStorage.setItem("total",JSON.stringify(totalobj))
            let total = document.createElement("h3")
            total.textContent = amount.textContent
            document.getElementById("amount").append(amount)
            document.getElementById("total").append(total)
            document.getElementById("rules").style.display="none"
            document.getElementById("cart").style.display="block"
            })
            div10.append(hno2,landmark2,name2,mobile2)
            document.getElementById("div9").append(button2)
            document.getElementById("div8").append(div10)
                    }
                    else{
                        document.getElementById("div7").innerHTML=null
                        let image2 = document.createElement("img")
                        image2.className="image"
                        image2.src= "https://resources.dunzo.com/web-assets/prod/_next/static/images/not-serviceable-f04a7134ec39e556f27f61a7003cb718.png"
                        let p2 = document.createElement("h2")
                        p2.textContent="Location is not serviceable"
                        let para2 = document.createElement("p")
                        para2.textContent = "Dunzo services are not available at this location yet. Please update your location."
                        document.getElementById("div7").append(image2,p2,para2)
                             }
                })
            })
        }
    let id;
    function debounce(func,delay){
        if(id){
            clearTimeout(id)
        }
        id = setTimeout(()=>{
            func()
        },delay)
    }

    document.getElementById("logo").addEventListener("click",()=>{
        window.location.href="../homepage/homepage.html"
    })
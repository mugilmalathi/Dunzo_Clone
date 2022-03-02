
    let n=0;
    let sum=0;
  let fruitImages=document.querySelector("#fruitss");
  let vegetablesImages=document.querySelector("#vegetabless");
  
let co=document.querySelector("#co");
co.addEventListener("click",proceed)
function proceed(){
    window.location.href="../cart/cart.html";
    
}

let obj={};
let nb=document.querySelector("#nb");
nb.addEventListener("click",()=>{
    window.location.href="../homepage/homepage.html"
})

//   import {fruits} from "./fruitsAndVegetables.js"
let fru = async()=>{
    try{
        let res = await fetch('https://dunzobackendclone.herokuapp.com/fruits')
        let fruits = await res.json()
        


      

        fruits.forEach(el=>{
            
            let div=document.createElement("div");
            let button=document.createElement("button");
            let div2=document.createElement("div");
            let img=document.createElement("img");
            let fh=document.createElement("h4");
            img.src=el.image;
            let h4=document.createElement("h4")
            let rn=Number(el.price)
            h4.textContent=`₹${rn} for 1 kg`
            fh.textContent=el.title;
            button.textContent="+ ADD"
            div2.append(fh,h4,button)
            div.append(img,div2);
            fruitImages.append(div);
            button.addEventListener("click",cta)
            function cta(){
                n+=1;
                sum+=rn;
                fvCart.textContent=`${n} Item`
                co.textContent=`₹${sum} Checkout`
                localStorage.setItem("NOI",`${n}`)
        localStorage.setItem("SOI",`${sum}`)
                let rem=document.createElement("button")
                rem.textContent="Remove"
                rem.addEventListener("click",remo);
                function remo(){
                    localStorage.removeItem(`Item${n}`)
                 
                    li.remove()
                    n-=1;
                    sum-=rn;
                    localStorage.setItem("NOI",`${n}`)
        localStorage.setItem("SOI",`${sum}`)
                    fvCart.textContent=`${n} Item`
                co.textContent=`₹${sum} Checkout`
                if(sum==0){
            co.textContent=null;
        }
                  
                }
                obj={
                    img:el.image,
                    name:el.title,
                    price:rn
        
        
                }
              
              
              
              localStorage.setItem(`Item${n}`,JSON.stringify(obj))
             
                let li=document.createElement("li");
               
                li.textContent=`${el.title} || 1 kg || ₹${rn}||`;
                li.append(rem)
                ful.append(li)
               
            
            }
           
            
        })
        
           
        co.addEventListener("click",loco)
        function loco(){
                    console.log("f")
                }
        
    }
    catch(err){
        console.log(err)
    }
}

    
        const veg= async() =>{
            try{
                const res =await fetch('https://dunzobackendclone.herokuapp.com/vegetables')
                const veggies = await res.json();
                console.log(veggies);
                veggies.forEach(el=>{
                    // console.log(el)
                    let ful=document.querySelector("#ful")
                    let button=document.createElement("button");
                    let div2=document.createElement("div");
                    let div=document.createElement("div");
                    let img=document.createElement("img");
                    let fh=document.createElement("h4");
                    img.src=el.image;
                    let rn=Number(el.price);
                   
                    let h4=document.createElement("h4")
                    h4.textContent=`₹${rn} for 1 kg`
                    fh.textContent=el.title;
                   
                    button.textContent="+ ADD"
                    button.addEventListener("click",cta)
                    function cta(){
                        n+=1;
                        sum+=rn;
                        obj={
                            img:el.image,
                            name:el.title,
                            price:rn
                
                
                        }
                        
                      
                      
                      
                      localStorage.setItem(`Item${n}`,JSON.stringify(obj))
                      localStorage.setItem("NOI",`${n}`)
                localStorage.setItem("SOI",`${sum}`)
                        let li=document.createElement("li");
                        fvCart.textContent=`${localStorage.getItem("NOI")} Item`
                        co.textContent=`₹${localStorage.getItem("SOI")} Checkout`
                    let RO=JSON.parse(localStorage.getItem(`Item${n}`))
                
                        li.textContent=`${RO.name} || 1 kg || ₹${RO.price}||`;
                        let rem=document.createElement("button")
                        rem.textContent="Remove"
                        rem.addEventListener("click",remo);
                        function remo(){
                            li.remove()
                            localStorage.removeItem(`Item${n}`)
                
                            n-=1;
                            
                            sum-=rn;
                            localStorage.setItem("SOI",`${sum}`)
                            localStorage.setItem("NOI",`${n}`)
                            console.log(sum,n)
                            fvCart.textContent=`${n} Item`
                        co.textContent=`₹${sum} Checkout`
                        if(sum==0){
                    co.textContent=null;
                }
                
                        
                        }
                       
                        console.log(sum,n)
                        li.append(rem)
                        ful.append(li)
                        console.log(n)
                    
                    }
                    div2.append(fh,h4,button)
                   div.append(img,div2);
                   vegetablesImages.append(div)
                  
                    
                })
                
                
                
            }catch(err){
                console.log(err);

            }
        }
        let fvCart=document.querySelector("#item");
        veg()
        fru();
        
        



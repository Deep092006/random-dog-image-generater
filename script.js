let btn = document.querySelector("button");
let p = document.querySelector("p");
btn.addEventListener("click",async () => {
  let fact = await deep();
  p.innerText = fact;

})
let url = "https://catfact.ninja/fact";


async function deep() {
  

    let res = await axios(url);
    return res.data.fact;
    
 
  console.log("ddd");
}

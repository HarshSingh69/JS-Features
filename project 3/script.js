const throttleFunction=(func, delay)=>{
  let prev = 0; 
  return (...args) => {
    let now = new Date().getTime(); 
    if(now - prev> delay){ 
      prev = now;
      return func(...args);  
    }
  }
}
document.querySelector("#center")
.addEventListener("mousemove", throttleFunction((details)=>{
  var div = document.createElement("div");  //new div will create after every 1000ms.
  div.classList.add('imagediv');    //imagediv ki properties new div par lag jaygi.
  div.style.left = details.clientX + 'px';
  div.style.top = details.clientY + 'px';

  var img = document.createElement("img");
  img.setAttribute("src","https://images.unsplash.com/photo-1698613364360-46ee6cfb1b32?auto=format&fit=crop&q=80&w=1527&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

  div.appendChild(img);     //image is added in the imagediv

  document.body.appendChild(div);  //ab y screen pr show ho jayga or we can say body element par div element add ho jayga.

  gsap.to(img,{
    y:"0",
    ease: Power1,
    duration:0.5    
  });
  
  gsap.to(img,{
    y:"100%",
    delay:0.6,
    ease: Power2,
  });
  setTimeout(function(){
    div.remove();
  },2000)
}, 400));

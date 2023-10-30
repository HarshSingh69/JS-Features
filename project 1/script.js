// checking our mouse-cursore comes at the rectangel or not.
var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    //rectanglelocation contains rectangle ki location.
    var rectanglelocation = rect.getBoundingClientRect();   
    // insiderecval contains val which is inside the rectangle.
    var insiderectval  = details.clientX - rectanglelocation.left;  

    if(insiderectval < rectanglelocation.width/2){
        var redcolor = gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, insiderectval);      
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        })
    }else{
        var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width, 0, 255, insiderectval);      
        gsap.to(rect,{
            backgroundColor:`rgb(0, 0, ${bluecolor})`,
            ease: Power4,
        });  
    }
});
//adding a event which happens when I remove my cursor from the rectangle.
rect.addEventListener("mouseleave",function(){
    gsap.to(rect, {                    //is event m humko background color white m badalna h.
        backgroundColor:"white",
    })
})
// console.log(gsap.utils.mapRange(0,        250,      255,       0,          250));
//                               minInput   maxInput  minOutput  maxOutput   cursorevalue

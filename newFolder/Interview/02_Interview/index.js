const circleCoordinates = []

function logIfIntersectingCircle(){
    circle1 = circleCoordinates[0];
    circle2 = circleCoordinates[1];

    const x1 = circle1.x
    const x2 = circle2.x
    const y1 = circle1.y
    const y2 = circle2.y

    // if(x2>=x1 || x1+100<=x2){
    //     console.log("Intersecting");
    // }
    // else if(y1+100>=y2 || y2+100>=y1){
    //     console.log("Intersecting");
    // }

}
document.addEventListener('click',(e)=>{

    const totalCircle = document.querySelectorAll('.circle')
    console.log(totalCircle);
    if(totalCircle.length === 2){
        totalCircle.forEach((element) => {
            document.body.removeChild(element)
        }); 
    }

    
    const x = e.clientX
    const y = e.clientY
    console.log("x=",x,"y=",y);
    
    // const randomNumber = Math.floor(Math.random()*10)
    // console.log(randomNumber);
    
    const radius = "100px"
    const circle = document.createElement('div')
    circle.classList.add("circle")
    circle.style.top = y-50 +"px"
    circle.style.left = x- 50+"px"
    circle.style.width=radius
    circle.style.height=radius
    
    document.body.appendChild(circle)
    circleCoordinates.push({x,y})

    if(totalCircle.length === 2){
        logIfIntersectingCircle()
    }
})

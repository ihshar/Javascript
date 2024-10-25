console.log("hello jee");

const API_KEY="d1845658f92b31c64bd94f06f7188c9c";

async function fetchWeatherDetails(){
    // let latitude=15.3333;
    // let longitude=74.0833;

    try{
        let city="goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
        const data = await response.json();
        console.log("Weather data:->" , data);
    
        let newPara=document.createElement('p');
        newPara.textContent=`${data?.main?.temp.toFixed(2)} C`
    
        document.body.appendChild(newPara);
    }
    catch(e){
        // handle errors
    }

}

async function getCustomWeatherDetails(){
    let latitude=15.6333;
    let longitude=18.3333;

    let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    let data= await result.json();

    console.log(data);

}
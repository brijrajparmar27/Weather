const APIkey = '08AeeU3Qr3lBgB1I6b8t12PsMsHR0dNP';

//get location
const getCity = async (city)=>{
    
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const trail = `?apikey=${APIkey}&q=${city}`;

    const RAWresponse = await fetch(base+trail);
    if(RAWresponse.status !== 200)
    {
        return new Error("Failed to Fetch Location");
    }

    const response = await RAWresponse.json();

    return response[0];
}

//get weather conditions
const getWeather = async (location)=>{
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const trail = `${location}?apikey=${APIkey}`;

    const RAWresponse = await fetch(base+trail);
    if(RAWresponse.status !== 200)
    {
        return new Error("Failed to Fetch Weather");
    }

    const response = await RAWresponse.json();

    return response[0];
}


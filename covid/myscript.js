// fetch("https://corona.lmao.ninja/v2/countries/")

async function getcovidapi(){
    const json_data = await fetch("https://api.covid19api.com/summary");
    console.log(json_data);
    const js_data = await json_data.json();
    

    //extract  data from api's data 
    const country_name = js_data.Countries[76];
    const Active_case=country_name.NewConfirmed
    const TotalConfirmed =country_name.TotalConfirmed
    const Critical_case=country_name.NewConfirmed
    const TotalDeaths=country_name.TotalDeaths
    const Recoverd_case =country_name.TotalRecovered
    document.getElementById("country").innerHTML= country_name.Country;
    document.getElementById("active").innerHTML= Active_case;
    document.getElementById("cases").innerHTML= TotalConfirmed;
    document.getElementById("critical").innerHTML= Critical_case;
    document.getElementById("death").innerHTML= TotalDeaths;
    document.getElementById("recoverd").innerHTML= Recoverd_case;
    
    

        
}
getcovidapi();
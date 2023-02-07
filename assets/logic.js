let apiKey = "5a5902899790712028b65ee43ec4eb64";

$(document).ready(function() {
    $("#submit").click(function() {
        let location = $("#location").val();
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?" + 'q=' + location + '&units=metric&appid=' + apiKey;

            $.ajax({
                url: queryURL,
                dataType: "jsonp",
                method: "GET"
            })
            .then(function(response) {
                console.log(response);
                let result = outputData(response);
                $("#outputData").html(result);
                $("#outputData").val('');

            })
        
    })
})

function outputData(response) {
    return "<div><h2>Weather in " + response.name + " today" + "</h2>" + 
    "<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' width=100px" + "<br>" +
    "<h4> Weather: " + response.weather[0].main + "<br>" +
    "Description: " + response.weather[0].description + "<br>" +
    "Temperature: " + response.main.temp + "C <br>" +
    "Humidity: " + response.main.humidity + "% <br>" +
    "Wind Speed: " + response.wind.speed + " m/sec </h4></div>"; 


}
$(function(){
    $("button").one("click",function(){
        var r= $('<input type="button" id="forecast" value="forecast"/>');
        $("body").append(r);

        $("#forecast").click(function() {
            let location = $("#location").val();
            let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?" + 'q=' + location + 
            '&units=metric&appid=' + apiKey;
    
                $.ajax({
                    url: forecastURL,
                    dataType: "jsonp",
                    method: "GET",
                })
    
                .then(function(response) {
                    console.log(response);
                    let result = forecastData(response);
                    $("#forecastData").html(result);
                    $("#forecastData").val('');
                })
                
               
        })
    });

    function forecastData(response) {
        return "<div><h3>Weather forecast for " + response.list[6].dt_txt + "</h3>" + 
        "<img src='http://openweathermap.org/img/w/" + response.list[6].weather[0].icon + ".png' width=75px" + "<br>" +
        "<h4> Weather: " + response.list[6].weather[0].main + "<br>" +
        "Description: " + response.list[6].weather[0].description + "<br>" +
        "Temperature: " + response.list[6].main.temp + "C <br>" +
        "Humidity: " + response.list[6].main.humidity + "% <br>" +
        "Wind Speed: " + response.list[6].wind.speed + " m/sec </h4></div>" + "<br>" +

        "<div><h3>Weather forecast for " + response.list[14].dt_txt + "</h3>" + 
        "<img src='http://openweathermap.org/img/w/" + response.list[14].weather[0].icon + ".png' width=75px" + "<br>" +
        "<h4> Weather: " + response.list[14].weather[0].main + "<br>" +
        "Description: " + response.list[14].weather[0].description + "<br>" +
        "Temperature: " + response.list[14].main.temp + "C <br>" +
        "Humidity: " + response.list[14].main.humidity + "% <br>" +
        "Wind Speed: " + response.list[14].wind.speed + " m/sec </h4></div>" + "<br>" + 

        "<div><h3>Weather forecast for " + response.list[22].dt_txt + "</h3>" + 
        "<img src='http://openweathermap.org/img/w/" + response.list[22].weather[0].icon + ".png' width=75px" + "<br>" +
        "<h4> Weather: " + response.list[22].weather[0].main + "<br>" +
        "Description: " + response.list[22].weather[0].description + "<br>" +
        "Temperature: " + response.list[22].main.temp + "C <br>" +
        "Humidity: " + response.list[22].main.humidity + "% <br>" +
        "Wind Speed: " + response.list[22].wind.speed + " m/sec </h4></div>" + "<br>" + 

        "<div><h3>Weather forecast for " + response.list[30].dt_txt + "</h3>" + 
        "<img src='http://openweathermap.org/img/w/" + response.list[30].weather[0].icon + ".png' width=75px" + "<br>" +
        "<h4> Weather: " + response.list[30].weather[0].main + "<br>" +
        "Description: " + response.list[30].weather[0].description + "<br>" +
        "Temperature: " + response.list[30].main.temp + "C <br>" +
        "Humidity: " + response.list[30].main.humidity + "% <br>" +
        "Wind Speed: " + response.list[30].wind.speed + " m/sec </h4></div>" + "<br>" + 

        "<div><h3>Weather forecast for " + response.list[38].dt_txt + "</h3>" + 
        "<img src='http://openweathermap.org/img/w/" + response.list[38].weather[0].icon + ".png' width=75px" + "<br>" +
        "<h4> Weather: " + response.list[38].weather[0].main + "<br>" +
        "Description: " + response.list[38].weather[0].description + "<br>" +
        "Temperature: " + response.list[38].main.temp + "C <br>" +
        "Humidity: " + response.list[38].main.humidity + "% <br>" +
        "Wind Speed: " + response.list[38].wind.speed + " m/sec </h4></div>";

    }

});

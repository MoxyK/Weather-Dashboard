let apiKey = "5a5902899790712028b65ee43ec4eb64";

$(document).ready(function() {
    $("#submit").click(function() {
        let location = $("#location").val();
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?" + 'q=' + location + '&units=metric&appid=' + apiKey;

            $.ajax({
                url: queryURL,
                dataType: "jsonp",
                method: "GET",
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
    return "<div><h2>Weather in " + response.name + "</h2>" + 
    "<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' width=100px" + "<br>" +
    "<h4> Weather: " + response.weather[0].main + "<br>" +
    "Description: " + response.weather[0].description + "<br>" +
    "Temperature: " + response.main.temp + "C <br>" +
    "Humidity: " + response.main.humidity + "% <br>" +
    "Wind Speed: " + response.wind.speed + " m/sec </h4></div>"; 


}
$(function(){
    $('button').one('click',function(){
        var r= $('<input type="button" value="Forecast"/>');
        $("body").append(r);
    });

});
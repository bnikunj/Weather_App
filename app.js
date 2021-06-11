var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var date = document.querySelector('.date');
var temp = document.querySelector('.temp');
var temp1 = document.querySelector('.temp1');
var temp2 = document.querySelector('.temp2');
var temp3 = document.querySelector('.temp3');
var temp4 = document.querySelector('.temp4');
var desc = document.querySelector('.desc');
var desc1 = document.querySelector('.desc1');
var desc2 = document.querySelector('.desc2');
var desc3 = document.querySelector('.desc3');
var desc4 = document.querySelector('.desc4');
var humidity = document.querySelector('.humidity'); 
var humidity1 = document.querySelector('.humidity1'); 
var humidity2 = document.querySelector('.humidity2'); 
var humidity3 = document.querySelector('.humidity3'); 
var humidity4 = document.querySelector('.humidity4'); 
var wind = document.querySelector('.wind'); 
var wind1 = document.querySelector('.wind1');  
var wind2 = document.querySelector('.wind2');  
var wind3 = document.querySelector('.wind3');  
var wind4 = document.querySelector('.wind4');   
var date1= document.querySelector('.date1');
var date2= document.querySelector('.date2');
var date3= document.querySelector('.date3');
var date4= document.querySelector('.date4');
var button= document.querySelector('.submit');
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=&appid=17edac85e0890235a88c87f855d6bf89')
.then(response => response.json())
.then(data => {
  date.innerText = dateFunction(today);
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var countryValue = data['sys']['country'];
  var descValue = data['weather'][0]['description'];
  var windValue = data['wind']['speed'];
  var humidityValue = data['main']['humidity'];
  document.body.style.backgroundImage = "url('https://source.unsplash.com/weekly?"+nameValue+"')"; 


  main.innerHTML = nameValue+","+countryValue;
  desc.innerHTML = "Desc: "+descValue;
  wind.innerHTML = "wind Speed: "+Math.floor(windValue*3.6) + " km/h";
  temp.innerHTML = Math.floor(tempValue-273.15)+"°C";
  humidity.innerHTML = "humidity: " + humidityValue + "%";
  input.value ="";
}).catch(err => alert("Wrong city name!"));
});

function dateFunction (d) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let hr = d.getHours();
    let min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    let ampm = "am";
    if( hr > 12 ) {
        hr -= 12;
        ampm = "pm";
    }
    return `${hr}:${min} ${ampm} ${day}, ${date} ${month} ${year}`;
  }

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=17edac85e0890235a88c87f855d6bf89')
.then(response => response.json())
.then(data => {
    console.log(data);
    function forecast(date,temp,desc,humidity,speed){
        this.datetime = date;
        this.temp = temp;
        this.description = desc;
        this.hum = humidity;
        this.speed = speed;

}
for (var i = 0; i < data.list.length; i+=8) {
        var temporary = new forecast(
            data.list[i].dt_txt,
            data.list[i].main.temp,
            data.list[i].weather[0].description,
            data.list[i].main.humidity,
            data.list[i].wind.speed,)
            if(i==8){
            date1.innerHTML=temporary.datetime;
            temp1.innerHTML=Math.floor(temporary.temp-273.15)+"°C";
            desc1.innerHTML="Desc: "+temporary.description;
            humidity1.innerHTML= "humidity: " +temporary.hum+"%";
            wind1.innerHTML="wind Speed: "+Math.floor(temporary.speed*3.6) + " km/h";
            input.value ="";
            }
            if(i==16){
                date2.innerHTML=temporary.datetime;
                temp2.innerHTML=Math.floor(temporary.temp-273.15)+"°C";
                desc2.innerHTML="Desc: "+temporary.description;
                humidity2.innerHTML= "humidity: " +temporary.hum+"%";
                wind2.innerHTML="wind Speed: "+Math.floor(temporary.speed*3.6) + " km/h";
                input.value ="";
                //console.log(temporary); 

            }  
            if(i==24){
                date3.innerHTML=temporary.datetime;
                temp3.innerHTML=Math.floor(temporary.temp-273.15)+"°C";
                desc3.innerHTML="Desc: "+temporary.description;
                humidity3.innerHTML= "humidity: " +temporary.hum+"%";
                wind3.innerHTML="wind Speed: "+Math.floor(temporary.speed*3.6) + " km/h";
                input.value ="";
                //console.log(temporary); 

            }
            if(i==32){
                date4.innerHTML=temporary.datetime;
                temp4.innerHTML=Math.floor(temporary.temp-273.15)+"°C";
                desc4.innerHTML="Desc: "+temporary.description;
                humidity4.innerHTML= "humidity: " +temporary.hum+"%";
                wind4.innerHTML="wind Speed: "+Math.floor(temporary.speed*3.6) + " km/h";
                input.value ="";
                //console.log(temporary); 
            }
            
    }
    //console.log(temporary); 
})

})

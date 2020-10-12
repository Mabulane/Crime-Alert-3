const formCtAlert = document.querySelector('#create-alert');

formCtAlert.addEventListener('submit',(e) =>{
    e.preventDefault();
    const posteddate =new Date();
    
//var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    //x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
var longi,lati;
function showPosition(position) {
 lati = position.coords.latitude;
 longi=position.coords.longitude;
}
    
   db.collection('Alerts').add({
          name: formCtAlert['altName'].value,
          description: formCtAlert['disc'].value,
          location:formCtAlert['location'].value,
          //status:formCtAlert['location'].value,
          //reqMedAssistance:formCtAlert['location'].value,
          //geolocation:[longi,lati],
          dayPosted:posteddate
   }).then(() =>{
    formCtAlert.reset();
   });
});


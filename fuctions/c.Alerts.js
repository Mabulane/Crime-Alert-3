const formCtAlert = document.querySelector('#create-alert');

formCtAlert.addEventListener('submit',(e) =>{
    e.preventDefault();
    const posteddate =new Date();
   db.collection('Alerts').add({
          name: formCtAlert['altName'].value,
          description: formCtAlert['disc'].value,
          location:formCtAlert['location'].value,
          //status:formCtAlert['location'].value,
          //reqMedAssistance:formCtAlert['location'].value,
          //geolocation:formCtAlert['location'].value,
          dayPosted:posteddate
   }).then(() =>{
    formCtAlert.reset();
   });
});


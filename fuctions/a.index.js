const alertList =document.querySelector('.alert-List');
//const media =document.querySelector('img');
db.collection('Alerts').get().then(snapshot => {
    setUIAlerts(snapshot.docs);
    //console.log(snapshot.docs);
});

const setUIAlerts = (data) => {
    let html='';
    data.forEach(doc => {
        const alert=doc.data();
        var datepost =alert.dayPosted;
        const li=`
         <div class="a-card">
         <div class="a-info">
         <span class="a-date">${datepost.toDate("yyyy-mm-dd")}</span>
           <h3>${alert.name}</h3>
           <p>${alert.description}</p>
           <span class="location">${alert.location}</span>
         </div>
         <div class="a-stats"></div>
         <div class="a-media">
           <img src="crime.jpg" alt="">
         </div>
     </div> <br>
        `;
        html +=li;
    });
    alertList.innerHTML=html;
};


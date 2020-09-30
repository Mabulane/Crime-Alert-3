const UserProfile =document.querySelector('.user_p');
auth.onAuthStateChanged(user => {
  
    if(user){
        console.log(user);
      
         db.collection('Users').doc(user.uid).get().then(doc=>{

              const user_profile  = `<div class="userProfile">
              <div class="user_i">
                  <img src="1.jpg" alt="">
              </div>        
              <label class="title-label">Sign up cridentials</label><br>
              <label >Email </label><br>
              <label class="info">${user.email}</label><br>
              <label >Password</label> <br>
              <label class="info">${user.pass}</label><br> 
            <br>
            <label >Name</label><br>
            <label class="info">  ${doc.data().first_name}</label><br>  
            <label >Surname</label> <br>
            <label class="info">${doc.data().last_name}</label><br> 
            <label >Cell Province</label> <br>
            <label class="info">${doc.data().province}</label><br> 
            <label >Phone</label><br>
            <label class="info">${doc.data().contact}</label><br>
            <label >Gender</label><br>
            <label class="info">${doc.data().gender}</label><br>
            <label >Date registerd</label><br>
            <label class="info">${doc.data().dateRegistered}</label><br>
          </div>  
              `;
              
               UserProfile.innerHTML= user_profile;
         });
            
    }else{

    }
});
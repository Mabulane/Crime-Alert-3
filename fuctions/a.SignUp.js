const signUp = document.querySelector('#signup-form');


signUp.addEventListener('submit',(e) =>{
    e.preventDefault();
//get input variable 
    
    const registryDate =new Date();

    const email = signUp['user-email'].value;
    const pass= signUp['user-password'].value;

    auth.createUserWithEmailAndPassword(email,pass).then(cred=>{
       // console.log(cred.user);
        //document.location.href="index.html";
        return db.collection('Users').doc(cred.user.uid).set({
        
            first_name : signUp['first-name'].value,
            last_name :  signUp['last-name'].value,
            province :  signUp['Province'].value,
            contact :  signUp['phone-no'].value,
            gender :   signUp['gender-type'].value,
            dateRegistred : registryDate
        });
    }).then(()=>{
        signUp.reset();   
        window.location='index.html';
        //document.location.href="index.html";
    });
});






/*
https://www.google.com/maps/d/u/0/

*/
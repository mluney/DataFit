
    document.addEventListener("DOMContentLoaded", event => {

    //     const app = firebase.app();
    //     const db = firebase.firestore();

    //     // const workouts = db.collection('Arms').doc('Biceps');

    //     // Reference the document
    //     const myPost = db.collection('Arms').doc('Biceps');

    // // Listen to realtime changes 
    //     myPost.onSnapshot(doc => {

    //     const data = doc.data()
    //     document.write("data")
     

        // })


        const app = firebase.app();
        const db = firebase.database();
        
        

        // const workouts = db.collection('Arms').doc('Biceps');
        // Listen to realtime changes 
        // Reference the document
        const myPost = db.collection("post").doc("firstpost");
        
        myPost.onSnapshot(doc => {
            
          const data = doc.data();
          document.write(data.title + `<br>`)
              
    })
          
        

    

        // workouts.get()
        //     .then(doc => {

        //         const whatever = doc.whatever();
        //         document.write(data.Description + `<br>`)
        //     })

        // workouts.onSnapshot(doc => {
        //         const data = doc.data();
        //         document.write( data.Difficulty + `<br>`)
        //         document.write( data.Description + `<br>` )
        //     })
        
    });


function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`);
            console.log(user);
        })
        .catch(console.log)
}

function calorieCalculator(){
    
    
    const weight = 161;
    const height = 68;
    const age = 22;
    
    document.write("You should be eating roughly: " + (((66+(6.2*weight)+(12.7*height)-(6.76*age)))) + "calories per day.");
  
}

// function weightCalculator(){

// }

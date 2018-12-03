function genCardioExercises(){
    var exName = [];
    var k=0;
    var Exercises;
    var muscleOptions = genMuscles("Cardio");
        for(var z =0; z< muscleOptions.length; z++){
                db.collection("Workout").doc("Cardio").collection(muscleOptions[z]).get().then(function(querySnapshot) {    //call the database with the right location
                    querySnapshot.forEach(function(doc) {
                        // console.log(muscleOptions[z]);
                        exName.push(String(doc.id));
                        
                        localStorage.setItem("CardiosList",JSON.stringify(exName));
                        
                        console.log(exName);
                        
                    });
                });
            var newExercises=localStorage.getItem("CardiosList");
            console.log(newExercises);
            var CardioExercises = JSON.parse(newExercises);
            for(var i=0; i< CardioExercises.length; i++){
            console.log(CardioExercises[i]);
            }
        
     

        
        }
    return CardioExercises;
}

function promiseMe(){
    let myFirstPromise = new Promise((resolve, reject) => {
        // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
        // In this example, we use setTimeout(...) to simulate async code. 
        // In reality, you will probably be using something like XHR or an HTML5 API.
        setTimeout(function(){
          resolve("Success!"); // Yay! Everything went well!
        }, 250);
      });
      
      myFirstPromise.then((successMessage) => {
        // successMessage is whatever we passed in the resolve(...) function above.
        // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
        console.log("Yay! " + successMessage);
      });
}

function showDatabase() {
    // var app = firebase.app();
    var db = firebase.firestore();

// var workouts = db.collection("Workout").doc("Arms").collection("Biceps").doc("DumbbellCurls");
var workouts = db.collection("Workout").doc("Arms").collection("Biceps").doc("DumbbellCurls");
    
    workouts.onSnapshot(data=> {
        
      var data = data.data();
      document.write(data.Difficulty)
          
})
}//End of shoeDatabase

function getData(){
    var docRef = db.collection("cities").doc("LA");

docRef.get().then(function(doc) {
if (doc.exists) {
    console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch(function(error) {
    console.log("Error getting document:", error);
    });
}






function getAllDocs(){
db.collection("Workout").doc("Chest").collection("UpperChest").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
}
function theOldStuff(){
var docRef = db.collection("Workout").doc(parts[0]).collection(muscleOptions[0]).doc("CableCross");
            console.log(muscleOptions[z],parts[j]);
        docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }).catch(function(error) {
            console.log("Error getting document:", error);
            });
}

function getExercises2(){
var muscle = document.getElementById("testing1")[0].value;
var part = "unknown";

if (muscle === "Lats") part = "Back" ;
else if(muscle === "Biceps") part = "Arms";
else if(muscle === "Triceps") part = "Arms";
else if(muscle === "FrontDelt") part = "Shoulders";
else if(muscle === "Front") part = "Legs";
else if(muscle === "UpperChest") part = "Chest";


 
var db = firebase.firestore();

db.collection("Workout").doc(part).collection(muscle).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        document.write(doc.id, "   ");
    });
});
}//end of getExercises2
// var data= db.collection("Workout").doc(parts[j]).collection(muscleOptions[z]).get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         workouts=(doc.id,data);
//         document.write(workouts);
// var workouts = db.collection("Workout").doc("Arms").collection("Biceps").doc("DumbbellCurls");
        
//         workouts.onSnapshot(data=> {
            
//           var data = data.data();
//           document.write(data.Difficulty)
              
//     })
// function getData(){
//     var docRef = db.collection("cities").doc("LA");

// docRef.get().then(function(doc) {
// if (doc.exists) {
//     console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
//     }).catch(function(error) {
//     console.log("Error getting document:", error);
//     });
// }























// var docRef = db.collection("Workout").doc("Arms");

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         document.write("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });




// function weightCalculator(){
//     var weight = showDatabase(input1, input2, input3, avgWeight);
// }




// **********************Testing Code**********************************
// var docRef = db.collection("post").doc("firstpost");

//     docRef.get().then(function(doc) {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch(function(error) {
//         console.log("Error getting document:", error);
//     })

// document.addEventListener("DOMContentLoaded", event => {

//        document.write("Testing") 
    // var app = firebase.app();
 

//     var myPost = db.collection("post").doc("firstpost");
    
//         myPost.onSnapshot(doc => {
        
//           var data = doc.data();
//           document.write(data.testing)
          
//     })
// })  

//     function getMuscles(){
//         var sfRef = db.collection('Workout').doc('Arms');
//         sfRef.getCollections().then(collections => {
//         collections.forEach(collection => {
//             console.log('Found subcollection with id:', collection.id);
//   });
// });
//         // // getParts();
//         // var found=[];
//         // for(var i=0; i<Newparts.length; i++){
//         // db.collection("Workout").doc(Newparts[i]).get().then(function(querySnapshot) {    //call the database with the right location
//         //     querySnapshot.forEach(function(doc) {
//         //         console.log(doc.id);
//         //         found.push(Newparts[i],doc.id);
//         //         localStorage.setItem("muscles",found);
//         //         });
       
//         //     });
    
    
//         // }
//         // // console.log(localStorage.getItem("BodyParts"));

//         // muscles=localStorage.getItem("muscles");
//         // return muscles;
//     }
// function getLength(group){
//     if (group === "Arms") return 7;
//     if (group === "Back") return 4;
//     if (group === "Chest") return 4;
//     if (group === "Shoulders") return 5;
//     if (group === "Legs") return 5;
//     if (group === "Cardio") return 4;

// }
// function workoutOptions(i){    
//     var day=[[]];  
//     var section = genSection();
//     if(section.length<i) return "Rest Day";
//     else{
//         for(var i=0; i<section.length; i++){
//         var piece = section[i];
//         for(var j=0; j<piece.length; j++){
//             day.push([randomOne(piece[j])]);
//         }
//         }
//         return day;
//     }


// }
// function dailyPlan(){
//     getTime();
//     getDaysAWeek();
 
// }
function addNutrition(){
    calorieCalculator();
    db.collection("User").doc(name).set({
        KcalPerDat: kCal,
        Diet: ""
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
function genWorkouts(){
    getTime();
    var sections= genSection();
    var exName = [];
    var k=0;
    var workouts= [];
    var x;
    // document.write(sections);
    for(var i=0;i<sections.length; i++){
        var parts = sections[i];
        //  console.log(parts);
        
        for(var j=0; j<parts.length;j++){
            // console.log(parts[j]);
            genMuscles(parts[j]);
            
            for(var z =0; z< muscleOptions.length; z++){
                db.collection("Workout").doc(parts[j]).collection(muscleOptions[z]).get().then(function(querySnapshot) {    //call the database with the right location
                    querySnapshot.forEach(function(doc) {
                        
                        // currentMuscle=localStorage.getItem("currentMuscle");
                        
                        exName.push((String(doc.id)));
                        // console.log(exName);
                        // console.log("x= ",x);
                        
                        // workouts.push([muscleOptions[z],exName])
                        
                        // console.log(exName);
                        localStorage.setItem("ExerciseList",JSON.stringify(exName));
                        
                    });
                });
               
                
            }
        }
     }
    //  document.writeln(workouts);
    // console.log(workouts);
    workouts=localStorage.getItem("ExerciseList");
        workouts = JSON.parse(workouts);
        for(var i=0; i< workouts.length; i++){
            // console.log(workouts[i]);
        }
     return workouts;
}


//     console.log(AllExercises);
//     return AllExercises;
    
//    }
   


    // function getLength(group){
        
    //     var group;
    //     var collection = genMuscles(group);
    //     var exName = [];
    //     var totalLength=0;
        
    //     for(var z =0; z< collection.length; z++){

    //         db.collection("Workout").doc(group).collection(collection[z]).get().then(function(querySnapshot) {    //call the database with the right location
    //             querySnapshot.forEach(function(doc) {
                    
    //                 // currentMuscle=localStorage.getItem("currentMuscle");
    //                 // localStorage.setItem("exLength",0);
    //                 exName.push((String(doc.id, " => ", doc.data())));
    //                 console.log(exName);
    //                 localStorage.setItem("exLength",exName.length);
                    
    //             });
    //         });
            
           
    //     }
    //     totalLength = localStorage.getItem("exLength");
    //     // localStorage.clear("exLength");
    //     return totalLength;
        

    // }





//  <!-- window.location.href='WeightCalculator.html' + '#' + name; -->
//  <!DOCTYPE html>
//  <html>
//    <head>
//      <meta charset="utf-8">
//      <meta name="viewport" content="width=device-width, initial-scale=1">
//      <title>DataFit</title>
 
 
 
//  <script src="https://www.gstatic.com/firebasejs/5.5.7/firebase.js"></script>
//  <script>
//    // Initialize Firebase
//    var config = {
//      apiKey: "AIzaSyDZS-S_OCFRG23JAK0MWKBFYxN4VLVejj0",
//      authDomain: "datafitround2.firebaseapp.com",
//      databaseURL: "https://datafitround2.firebaseio.com",
//      projectId: "datafitround2",
//      storageBucket: "",
//      messagingSenderId: "1082921251720"
//    };
//    firebase.initializeApp(config);
//  </script>
//      <!-- update the version number as needed -->
//      <script defer src="/__/firebase/5.5.7/firebase-app.js"></script>
//      <!-- include only the Firebase features as you need -->
//      <script defer src="/__/firebase/5.5.7/firebase-auth.js"></script>
//      <script defer src="/__/firebase/5.5.7/firebase-database.js"></script>
//      <script defer src="/__/firebase/5.5.7/firebase-messaging.js"></script>
//      <script defer src="/__/firebase/5.5.7/firebase-storage.js"></script>
//      <script defer src="/__/firebase/5.5.7/firebase-firestore.js"></script>
//      <!-- initialize the SDK after all desired features are loaded -->
//      <script defer src="/__/firebase/init.js"></script>
    
     
     
   
//     <!-- <script src="app.js"> -->
//      <title>DataFit</title>
//        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
//        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
//        <link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
     
//        <link rel="stylesheet" type="text/css" href="Datafit.css">
//           <script src="app.js"></script>
//           <script src = "react.jsx"></script>
//      </head>
//      <body class= "Summary-bg">
 
//       <nav class="navbar navbar-default navbar-fixed-top">
//        <div class="container">
//          <div class="navbar-header" >
 
//            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
//              <span class="sr-only">Toggle navigation</span>
//              <span class="icon-bar"></span>
//              <span class="icon-bar"></span>
//              <span class="icon-bar"></span>
//              <span class="icon-bar"></span>
//              <span class="icon-bar"></span>
//            </button>
//            <a class="navbar-brand" href="#">DataFit</a>
//          </div>
//          <div id="navbar" class="collapse navbar-collapse">
//            <ul class="nav navbar-nav">
//              <li><a href="index.html">Home</a></li>
//              <li><a href="fitness.html">Fitness</a></li>
//              <li><a href="calories.html">Nutrition</a></li>
//              <li><a href="testing.html">Testing</a></li>
//              <li class="active"><a href="BasicInfo.html">Personal Info</a></li>
//            </ul>
//            <ul class="nav navbar-nav navbar-right">
             
//              <li><a href="#about">    
//                <button onclick="googleLogin()">
//                  Login with google
//                </button> <i class="fa fa-user"></i></a></li>
//            </ul>
//          </div>
//        </div>
//       </nav>
//      <script>

//         //  genArmExercises();
//         //  genLegExercises();
//         //  genShoulderExercises();
//         //  genBackExercises();
//         //  genChestExercises();
//         //  genBackExercises();
//         //  genCardioExercises();
//         //localStorage.clear("Height","Weight","Goal","Gender","Age");
//          addPlan();
        
         
//      </script>
//       <!-- <div class="container">
//             <div class="row justify-content-md-center">
//               <div class="col col-lg-2">
//               <h1> Name:</h1><h2  id = name></h2>
               
                
//                 <script> document.getElementById("name").innerHTML = getName()</script>
//               </div>
//               <div class="col-md-auto">
                
//               </div>
//               <div class="col col-lg-2">
//                 Goal: <p id=goal></p>
//                 <script>document.getElementById("goal").innerHTML = getGoal()</script>
//               </div>
//             </div>
//             <div class="row">
//             <div class="col col-lg-2">
//                     Weight: <p id=weight></p>
//                     <script>document.getElementById("weight").innerHTML = getWeight()</script>
//                     </div>
//                 </div>
//                 <div class="row">

            
            
//             <div class="col col-lg-2">
//                     Calories: <p id=calories></p>
//                     <script>document.getElementById("calories").innerHTML = calorieCalculator()</script>
//                     </div>
//                 </div>
                
//                 <div class="row">
//                         <div class="col col-lg-2">
//                                 <ol>
//                                   <li id= day>
//                                     <ul>
//                                       <li id=workout_0></li>
//                                       <li id=workout_1></li>
//                                       <li id=workout_2></li>
//                                       <li id=workout_3></li>
//                                       <li id=workout_4></li>
//                                       <li id=workout_5></li>
//                                       <li id=workout_6></li>
//                                     </ul>
//                                   </li>
//                                   <li id= day1></li>
//                                   <li id= day2></li>
//                                   <li id= day3></li>
//                                   <li id= day4></li>
//                                   <li id= day5></li>
                               
//                                 </ol>
//                                  <script>document.getElementById("day").innerHTML = prettyPrint(0)</script> -->
//                                 <!-- <script>  
//                                    var array = prettyPrint(0);
//                                    i=0;
//                                    getPrettyPrint(array,i);
//                                    </script>
                                
//                                 </div>
//                             </div> --> 
//                   <!-- <div class="row">
//                           <div class="col col-lg-2">
//                                     <p id= day1></p>
//                                   <script>document.getElementById("day1").innerHTML = prettyPrint(1)</script>
//                                   </div>
//                               </div>
//                   <div class="row">
//                           <div class="col col-lg-2">
//                                   <p id= day2></p>
//                                   <script>document.getElementById("day2").innerHTML = prettyPrint(2)</script>
//                                   </div>
//                               </div>
//                     <div class="row">
//                             <div class="col col-lg-2">
//                                     <p id= day3></p>
//                                     <script>document.getElementById("day3").innerHTML = prettyPrint(3)</script>
//                                     </div>
//                                 </div>
//                       <div class="row">
//                               <div class="col col-lg-2">
//                                       <p id= day4></p>
//                                       <script>document.getElementById("day4").innerHTML = prettyPrint(4)</script>
//                                       </div>
//                                   </div>
//                       <div class="row">
//                           <div class="col col-lg-2">
//                                   <p id= day5></p>
//                                   <script>document.getElementById("day5").innerHTML = schedule(5)</script>
//                                   </div>
//                               </div>
//                                -->
                          
//                                     <!-- <script>addPlan(); </script>  -->

              
                        
//         <div class="form-group">
//                 <button type="button" onclick="summary()"class="btn btn-default btn-lg"><i class=" fa fa-pencil-square-o"></i> Make A Plan!</button>
//         </div>
        
//         <div type="button" onclick="clearLocalStorage()" class="btn btn-default btn-lg">clearLocalStorage</div>
        
                   
                 
             
     
//      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.js"></script>
//      <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
//      <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase-app.js"></script>
//      <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase-firestore.js"></script>
     
    
    
 
 
 
  
  
 
 
 
    
   
//     <!-- </script> -->
//   </body>
//  </html>

// function getParts(){
//     var holder;
//     var partsRef = db.collection('Workout');
//         var allParts = partsRef.get()
//         .then(snapshot => {
//             snapshot.forEach(doc => {
//                 // console.log(doc.id);
//                 holder=(String(doc.id));
//                 // console.log(holder);
//                 parts.push(holder);
//                 // console.log(parts);
                
            
  
//         localStorage.setItem("parts",JSON.stringify(parts));
//             });
//         })
//         .catch(err => {
//             console.log('Error getting documents', err);
//         });
//         Newparts=localStorage.getItem("parts");
//         Newparts = JSON.parse(Newparts);
        
//         console.log(Newparts);
//      return Newparts;
    
// }
// function genExercises(BodyPart){
//     var exName = [];
//     var k=0;
//     var Exercises;
//     var muscleOptions = genMuscles(BodyPart);
//         for(var z =0; z< muscleOptions.length; z++){
//                 db.collection("Workout").doc(BodyPart).collection(muscleOptions[z]).get().then(function(querySnapshot) {    //call the database with the right location
//                     querySnapshot.forEach(function(doc) {
//                         // console.log(muscleOptions[z]);
//                         exName.push(String(doc.id));
//                         // localStorage.clear("ExerciseList");
//                         localStorage.setItem("ExerciseList",JSON.stringify(exName));
//                         Exercises=localStorage.getItem("ExerciseList");
//                         console.log(exName);
                        
//                     });
//                 });
//             var newExercises=localStorage.getItem("ExerciseList");
//             console.log(newExercises);
//             var WhoExercises = JSON.parse(newExercises);
//             for(var i=0; i< WhoExercises.length; i++){
//             console.log(WhoExercises[i]);
//             }
        
     

        
//         }
//     return WhoExercises;
// }
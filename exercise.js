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
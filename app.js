


// window.location.href='WeightCalculator.html' + '#' + name;

  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);
var db = firebase.firestore();
var experience;
var goal;
var weight;
var age;
var height;
var gender;
var reps;
var sets;
var lbs;
var time;
var daysAWeek;
var muscleOptions;
var name;
var basicInfo = [];
var goals;


function summary(){
    googleLogin();
    window.location.href='Summary.html' + '#' + name;
    getGoal();
    console.log(basicInfo);



    
}






    function getMultiple(db) {
        // [START get_multiple]
        name = "testing";
        var citiesRef = db.collection('Users');
        var query = citiesRef.where('name', '==', name).get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              const goals = (doc.id, '=>', doc.data().goal);
              console.log(goals);
            });
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });
        // [END get_multiple]
            
        
       
      }
      function getShit(goal){
          goals = goal;
      }



function getGoal(){
    
    
    getName();
    var docRef = db.collection("Users").doc(name);

    docRef.get().then(function(doc) {
    if (doc.exists) {
        
        goals=String(doc.data().goal);
        console.log(goal);
        getShit(goal);
        
        }
         else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
        console.log("Error getting document:", error);
        });
        return goals;
        
    }
     
    

function getName(){
    var urlData = window.location.hash.substring(1);
      
        name =urlData.split("#",1);
        
        return name;
}
function getWeight(){
    getBasicInfo();
    db.collection("Users").where("name","==",name).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data().weight);
        });
    });
}




//UserName will follow in the URL so I don't have to keep up with it.

function getBasicInfo(){
    gender = document.getElementById("info")[0].value;
    time = document.getElementById("info")[1].value;
    daysAWeek = document.getElementById("info")[2].value;
    weight = document.getElementById("info")[3].value;
    height = document.getElementById("info")[4].value;
    age = document.getElementById("info")[5].value;
    goal = document.getElementById("info")[7].value;
    experience = document.getElementById("info")[6].value;
    name = document.getElementById("info")[8].value;
    basicInfo.push([gender,weight,age,goal,name]);
    return basicInfo;
    // genWorkouts();
    }
// Get the basic info set up globaly before moving forward.




 function googleLogin() {
    // var provider = new firebase.auth.GoogleAuthProvider();

    // firebase.auth().signInWithPopup(provider)

    //     .then(result => {
    //         const user = result.user;
    //         document.write(`Hello ${user.displayName}`);
    //         console.log(user);
            getBasicInfo();
            db.collection("Users").doc(name).set({
                name: name,
                experience: experience,
                goal: goal,
                weight: weight,
                age: age,
                height: height,
                gender: gender,
                time: time,
                daysAWeek: daysAWeek


            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            calorieCalculator();

        
        // .catch(console.log)
 }//End of googleLogin







function calorieCalculator(){

    kCal = (Math.round(((+(66.2*weight)+(12.7*height)-(6.76*age)))));
   
    return("You should be eating roughly: " + kCal + " calories per day.\n");
    
    // document.write("Since you are interested in " + goal + " you need to eat roughly " + (kCal + goalCalories() ));
}//end of calorieCalculator

function goalCalories(){
    if (goal==="BodyBuilding") return (10);
}

  
    function genWorkoutNum(){
        var time = 0; //Input from user
        var numOfWorkouts = 0;
        if(time <= 30) numOfWorkouts = 4;
        else numOfWorkouts = 6;
    }//end of genWorkoutNum

    function genSection(){
        var section = [[]];
        var time = document.getElementById("info")[1].value;
        var daysAWeek = document.getElementById("info")[2].value;
        if(goal === "WeightLoss" || "Toning" && daysAWeek === '5') {
            
            section = [["Chest","Back","Cardio"],
                        ["Legss"],
                        ["Arms","Shoulders","Cardio"],
                        ["Cardio"],
                        ["Legs"]];
        }
        
        else if(goal === "Body Building" && daysAWeek === '5') {
            section = [["Chest","Back","Cardio"],
                        ["Legs"],
                        ["Arms","Shoulders","Cardio"],
                        ["Legs"],
                        ["Glamor","Cardio"]];
        }
        else if(goal === "Strength Training" && daysAWeek === '5'){
            section = [["Chest","Back"],
                        ["Legs"],
                        ["Arms","Shoulders"],
                        ["Legs"],
                        ["Helper"]];
        }
        else if(goal === "Strength Training" && daysAWeek === '3' ) {
                    section = [["Chest"],
                                ["Legs"],
                                ["Back"]];
                }
        else if(goal === "WeightLoss" || "Toning" || "Body Building" && daysAWeek === '3'){ 
            section = [["Chest","Back","Cardio"],
                        ["Legs"],
                        ["Arms","Shoulders","Cardio"],
                        ];
        };
        
        
        // for(var i = 0; i < section.length; i++) {
        //     var parts = section[i];
        //     for(var j = 0; j < parts.length; j++) {
        //         document.write(" Day " + i + "  =  " + parts[j]+"<br>");
        //     }
        // }
        // console.log(section);
        return section;
    } //End of genSection
   
   
   
   
   
   //This section will take the workouts needed and store all their fields and attributes into the workouts array. 
   //need to clean it up and put in a print page for the final workout plan.
   
   
   
    function genWorkouts(){
        
        var sections= genSection();
        var exName;
        var k=0;
        var workouts= [];
        // document.write(sections);
        for(var i=0;i<sections.length; i++){
            var parts = sections[i];
             console.log(parts);
            
            for(var j=0; j<parts.length;j++){
                console.log(parts[j]);
                muscleOptions = genMuscle(parts,j);
                // document.writeln(muscleOptions);
                // document.write(parts[0]);
                
                for(var z =0; z< muscleOptions.length; z++){
                    db.collection("Workout").doc(parts[j]).collection(muscleOptions[z]).get().then(function(querySnapshot) {    //call the database with the right location
                        querySnapshot.forEach(function(doc) {
                            
                            // console.log(doc.id, " => ", doc.data()); 
                            // doc.data() is never undefined for query doc snapshots
                            exName=(String(doc.id, " => ", doc.data()));
                            
                            console.log(exName);
                        //    workouts.push([exName]);   
                        //    console.log(workouts);
                                                                                    //get the document inside by its ID
                            // workouts=(doc.id, " => ", doc.data().Equipment);                                                      // get a specific field in the document you are looking at.
                            // document.writeln(workouts + "        ....................             ");
                            // console.log(workouts);
                        });
                    });
                   
                    
                }
            }
         }
        //  document.writeln(workouts);
        // console.log(workouts);
         return (workouts);
    }

    function genMuscle(parts,j){
        
        if(parts[j]==="Arms") muscleOptions = ["Biceps","Tricep","ForeArm"]
        else if (parts[j]==="Back") muscleOptions = ["Lats","Lower"]
        else if (parts[j]==="Shoulders") muscleOptions = ["FrontDelt","Back","Side"]
        else if (parts[j]==="Legs") muscleOptions = ["Front","Back","Butt"]
        else if (parts[j]==="Chest") muscleOptions = ["UpperChest","Lower"]
        else if (parts[j]==="Cardio") muscleOptions=["Low Impact"];
        // console.log(muscleOptions)
        return muscleOptions;
    }
  

    function getSetsandReps(){
 
        if(goal === "Strength Training") sets = 3, reps = 6;
        if(goal === "Bodybuilding") sets = 4, reps = 12;
        if(goal === "Toning") sets = 5, reps = 15;
        
        window.location.href='WeightCalculator.html' + '#' + sets+ '#' +reps;
    }

    function gainsbyVolume(){
        var urlData = window.location.hash.substring(1);
      
        var sets =urlData.split("#",1);
        var rep= urlData.split("#",2);
        var reps = rep[1];
        var iornReps=document.getElementById("gains")[0].value;
        var iornSets=document.getElementById("gains")[1].value;
        var iornlbs=document.getElementById("gains")[2].value;
        var totalVolume = (iornReps * iornSets * iornlbs);
        var suggestion = (Math.round(totalVolume/sets/reps));
        
        document.write("You should try doing " + sets +  " sets of " + reps + " reps with " + suggestion + " Lbs");


    }// End of gains by volume
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
    function addPlan(){
        genWorkouts();
        db.collection("User").doc(name).collection("Plan").set({
            Day1: "exercises.day1",
            Day2: "exercises.day2",
            Day3: "exercises.day3",
            Day4: "exercises.day4",
            Day5: "exercises.day5",
            Sets: sets,
            Reps: reps
           
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }



//*****************************************NOT IN USE***************************** */

    
    
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
function getExercises(){
var collection = document.getElementById("testing1")[0].value;
var test = document.getElementById("testing1")[1].value;
var collection1= document.getElementById("testing1")[2].value;

var db = firebase.firestore();

db.collection(collection).doc(test).collection(collection1).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        document.write(doc.id, "   ");
    });
});
}//end of getExercises
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

function clearLocalStorage(){
    return localStorage= null;
}

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
var muscleOptions=[];
var name;
var basicInfo = [];
var goals;
var newgoal;
var userInfo;
var kCal;
var currentMuscle;
var NewParts;
var muscles=[];
var parts=[];



function summary(){    
    getGoal();
    getWeight();
}

function getGoal(){
    
    
    getName();
    var docRef = db.collection("Users").doc(name);

    docRef.get().then(function(doc) {
    if (doc.exists) {
        
        goals=String(doc.data().goal);
        localStorage.setItem("goal",goals);
        }
         else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        }).catch(function(error) {
        console.log("Error getting document:", error);
        });
        newgoal = localStorage.getItem("goal");
        return newgoal;
        
    }
     
    

function getName(){
    var urlData = window.location.hash.substring(1);
      
        name =urlData.split("#",1);
        
        return name;
}
function getWeight(){
    getName();
    db.collection("Users").where("name","==",name).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            weight = String(doc.data().weight);
            localStorage.setItem("weight",weight);
        });
    });
    weight = localStorage.getItem("weight");
    console.log(weight);
    return weight;
}

function getHeight(){
    getName();
    db.collection("Users").where("name","==",name).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            height = String(doc.data().height);
            localStorage.setItem("height",height);
        });
    });
    height= localStorage.getItem("height");
    console.log(height);
    return height;
}

function getAge(){
    getName();
    db.collection("Users").where("name","==",name).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            age = String(doc.data().age);
            localStorage.setItem("age",age);
        });
    });
    age= localStorage.getItem("age");
    console.log(age);
    return age;
}

function getGender(){
    getName();
    db.collection("Users").where("name","==",name).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            gender = String(doc.data().gender);
            localStorage.setItem("gender",gender);
        });
    });
    gender= localStorage.getItem("gender");
    console.log(gender);
    return gender;
}
function getTime(){
    getName();
    db.collection("Users").where("name","==",name).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            time = String(doc.data().time);
            localStorage.setItem("time",time);
        });
    });
    time= localStorage.getItem("time");
    console.log(time);
    return time;
}
function getDaysAWeek(){
    getName();
    db.collection("Users").where("name","==",name).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            daysAWeek = String(doc.data().daysAWeek);
            localStorage.setItem("daysAWeek",daysAWeek);
        });
    });
    daysAWeek= localStorage.getItem("daysAWeek");
    console.log(daysAWeek);
    return daysAWeek;
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
    // basicInfo.push([gender,weight,age,goal,name]);
    // console.log(basicInfo);
    // return basicInfo;
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
                window.location.href='Summary.html' + '#' + name;
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            
            
            
        
        // .catch(console.log)
 }//End of googleLogin







function calorieCalculator(){
    getWeight();
    getHeight();
    getAge();
    getGender();
    getGoal();
    if (gender==="Male"){
        kCal = (Math.round((66+(6.23*weight)+(12.7*height)-(6.8*age))));
    }
    else if (gender==="Female"){
        kCal = (Math.round(((655+(4.35*weight)+(4.7*height)-(4.7*age)))));
    }
   
    return("You should be eating roughly: " + kCal + " calories per day.\n");
    
    // return("Since you are interested in " + goal + " you need to eat roughly " + (kCal + goalCalories() ));
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
        getTime();
        getDaysAWeek();
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
   
   function workoutOptions(){
       var sections = genSection();
       var workouts = genWorkouts();
    var section_1 = [[]];
    for(var i=0; i<sections.length;i++){
        var parts = sections[i];
        for(var j=0; j<parts.length;j++){
            var len=getLength(parts[j]);
            for(var k=0; k<len; k++){
                section_1.push([parts[j],workouts[0]]);
               workouts.shift();
            //    console.log(workouts);
            }
        }
        
        
    }
    console.log(section_1);
    return section_1;
    



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

    function getLength(group){
        var group;
        var collection = genMuscles(group);
        var exName = [];
        var totalLength =0;
        for(var z =0; z< collection.length; z++){

            db.collection("Workout").doc(group).collection(collection[z]).get().then(function(querySnapshot) {    //call the database with the right location
                querySnapshot.forEach(function(doc) {
                    
                    // currentMuscle=localStorage.getItem("currentMuscle");
                    
                    exName.push((String(doc.id, " => ", doc.data())));
                    console.log(exName);
                    localStorage.setItem("exLength",exName.length);
                    
                });
            });
            
           
        }
        totalLength = localStorage.getItem("exLength");
        return totalLength;
        

    }
    
    function genMuscles(parts){
         
        if(parts==="Arms") muscleOptions = ["Biceps","Tricep","ForeArm"]
        else if (parts==="Back") muscleOptions = ["Lats","Lower"]
        else if (parts==="Shoulders") muscleOptions = ["FrontDelt","Back","Side"]
        else if (parts==="Legs") muscleOptions = ["Front","Back","Butt"]
        else if (parts==="Chest") muscleOptions = ["UpperChest","Lower"]
        else if (parts==="Cardio") muscleOptions=["Low Impact"];
        // console.log(muscleOptions)
        return muscleOptions;
    }

  

    function getSetsandReps(){
 
        if(goal === "Strength Training") sets = 3, reps = 6;
        else if(goal === "Bodybuilding") sets = 4, reps = 12;
        else if(goal === "Toning") sets = 5, reps = 15;
        
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

    function getParts(){
        var holder;
        var partsRef = db.collection('Workout');
            var allParts = partsRef.get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    // console.log(doc.id);
                    holder=(String(doc.id));
                    // console.log(holder);
                    parts.push(holder);
                    // console.log(parts);
                    
                
      
            localStorage.setItem("parts",JSON.stringify(parts));
                });
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
            Newparts=localStorage.getItem("parts");
            Newparts = JSON.parse(Newparts);
            
            console.log(Newparts);
         return Newparts;
        
    }
  


    function getExercises(){
        var collection = document.getElementById("checkBoxes")[0].value;
        var test = document.getElementById("checkBoxes")[1].value;
        var collection1= document.getElementById("checkBoxes")[2].value;
        
        var db = firebase.firestore();
        
        db.collection(collection).doc(test).collection(collection1).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                localStorage.setItem("Description",(doc.id,doc.data()));
            });
        });
        return localStorage.getItem("Description");
        }//end of getExercises

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

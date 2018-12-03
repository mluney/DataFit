
// function clearLocalStorage(){
//     return localStorage.clear("Height","Weight","Goal","Gender","Age");
// }

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
var day1;
var day2;
var day3;
var day4;
var day5;



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
    // console.log(time);
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
    // console.log(daysAWeek);
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
    }
// Get the basic info set up globaly before moving forward.

function Login(){
    var name= document.getElementById("UserName")[0].value;
    window.location.href='Summary.html' + '#' + name;
}

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





 function newCalorieCalculator(){

   var weight = document.getElementById("testing")[0].value;
   var height = document.getElementById("testing")[1].value;
   var age = document.getElementById("testing")[2].value;
   var gender = document.getElementById("testing")[3].value;
   var goal = document.getElementById("testing")[4].value;
    
    if (gender==="Male"){
        kCal = (Math.round((66+(6.23*weight)+(12.7*height)-(6.8*age))));
    }
    else if (gender==="Female"){
        kCal = (Math.round(((655+(4.35*weight)+(4.7*height)-(4.7*age)))));
    }
    

    if(goal==="Maintain"){
        kCal;
    }
    else if(goal==="lose"){
       kCal= kCal-500;
    }
    else if(goal==="gain"){
        kCal= kCal+500;;
    }
    alert("You should be eating roughly: " + kCal + " calories per day.\n");
    
    
}//end of calorieCalculator

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
        var section;
        getTime();
        getDaysAWeek();
        var goal =getGoal();
        if(goal === "WeightLoss" || "Toning" && daysAWeek === '5') {
            
            section = [["Chest","Back","Cardio"],
                        ["Legs","Legs"],
                        ["Arms","Shoulders","Cardio"],
                        ["Cardio"],
                        ["Legs","Legs"]];
        }
        
        else if(goal === "Body Building" && daysAWeek === '5') {
            section = [["Chest","Back","Cardio"],
                        ["Legs","Legs"],
                        ["Arms","Shoulders","Cardio"],
                        ["Legs","Legs"],
                        ["Arms","Cardio"]];
        }
        else if(goal === "Strength Training" && daysAWeek === '5'){
            section = [["Chest","Back","Chest"],
                        ["Legs","Legs"],
                        ["Arms","Shoulders"],
                        ["Legs","Legs"],
                        ["Back","Chest","Back"]];
        }
        else if(goal === "Strength Training" && daysAWeek === '3' ) {
                    section = [["Chest","Chest","Chest"],
                                ["Legs","Legs"],
                                ["Back","Back","Back"]];
                }
        else if(goal === "WeightLoss" || "Toning" || "Body Building" && daysAWeek === '3'){ 
            section = [["Chest","Back","Cardio"],
                        ["Legs","Legs"],
                        ["Arms","Shoulders","Cardio"],
                        ];
        };
        
        
        
        return section;
    } //End of genSection
   
   
   
   
   
   //This section will take the workouts needed and store all their fields and attributes into the workouts array. 
   //need to clean it up and put in a print page for the final workout plan.
  
   function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}
   function rand(results){
       var result =[];
       result =  results;
       var answer=[];
       var bank =shuffle([0,1,2,3,4,5,6]);
       if(results===null)return "NoValue";
        if(result.length>=3){
            for(var i=0; i<3; i++){
                console.log(bank[0]);
                while(bank[0]> result.length-1)bank.shift();
                    
                    answer.push(result[bank[0]]);
                    bank.shift();
               }
            return answer;
        }
       else{
        for(var i=0; i<1; i++){
            while(bank[0] > result.length)bank.shift();
                
                answer.push(result[bank[0]]);
                bank.shift();
           }
        return answer;
       }
   }
   function randomOne(parts){
       var results = [];
       var daily = [];
    if(parts==="Arms") results = genArmExercises();
    else if (parts==="Back")  results= genBackExercises();
    else if (parts==="Shoulders")  results = genShoulderExercises();
    else if (parts==="Legs")  results = genLegExercises();
    else if (parts==="Chest")  results = genChestExercises();
    else if (parts==="Cardio")  results = genCardioExercises();
    
        daily.push(rand(results));
        // console.log("Daily: " + daily);
    return ( daily);

    
   }

   function prettyPrint(i){
       var array = schedule(i);
       var newArray=[];
       for (var j=0; j<array.length;j++){
           newArray.push(splitIt(array[j]));
       }
        
       console.log("this is a Pretty Print HERE: "+ newArray);
       return newArray;
   }


   function splitIt(array){
     
        var data = array;
        if(data===null)return ["Rest Day"];
        var dataPiece =data.split(",");
        
        return dataPiece;
}


    function schedule(i){
        var day =[];
        var section = genSection(); 
        console.log("Check this section:   ... "+ section);
        if(section[i]===undefined) return [null];
        // console.log("Section is = " + section[i]);
        if(section[i]===undefined&&section[i].length<i) return "Rest Day";
        
        else{
            
            var piece = section[i];
            console.log("CHECK OUT THE SECTION:" +piece);
            console.log("HOW LONG : "+ piece.length);
            for(var j=1; j<=piece.length; j++){
                day.push(String(randomOne(piece[j-1])));
                // genDescription(piece[j],day[j]);
                // console.log("Here is the section: "+ piece[j]);
            }
            // console.log(day);
            
            return day;
        }
        
    }

    // function genDescription(section,exercise){
    //     var Description= [];
    //     var section=section;
    //     var exercise = exercise;
    //         db.collection("Workout").doc(section).collection(exercise).get().then(function(querySnapshot) {    //call the database with the right location
    //             querySnapshot.forEach(function(doc) {
    //                 // console.log(muscleOptions[z]);
    //                 Description.push(String(doc.data().Description));
                    
    //                 localStorage.setItem("DescriptionList",JSON.stringify(Description));
    //                 console.log("Description: " + Description[0]);
    //                 // console.log(exName);
                    
    //             });
    //         });
    //     var newExercises=localStorage.getItem("CardiosList");
    //     // console.log(newExercises);
    //     var CardioExercises = JSON.parse(newExercises);
    //     for(var i=0; i< CardioExercises.length; i++){
    //     // console.log(CardioExercises[i]);
    //     }
    
    

    
    
    //     return CardioExercises;
    // }



    
    function genArmExercises(){
        var exName = [];
        var k=0;
        var Exercises;
        var muscleOptions = genMuscles("Arms");
            for(var z =0; z< muscleOptions.length; z++){
                    db.collection("Workout").doc("Arms").collection(muscleOptions[z]).get().then(function(querySnapshot) {    //call the database with the right location
                        querySnapshot.forEach(function(doc) {
                            // console.log(muscleOptions[z]);
                            exName.push(String(doc.id));
                            
                            localStorage.setItem("ArmsList",JSON.stringify(exName));
                            
                            // console.log(exName);
                            
                        });
                    });
                
                }
            var newExercises=localStorage.getItem("ArmsList");
                // console.log(newExercises);
                var ArmExercises = JSON.parse(newExercises);
            
        return ArmExercises;
    }
    function genLegExercises(){
        var exName = [];
        var k=0;
        var Exercises;
        var muscleOptions = genMuscles("Legs");
            for(var z =0; z< muscleOptions.length; z++){
                    db.collection("Workout").doc("Legs").collection(muscleOptions[z]).get().then(function(querySnapshot) {    //call the database with the right location
                        querySnapshot.forEach(function(doc) {
                            // console.log(muscleOptions[z]);
                            exName.push(String(doc.id));
                            
                            localStorage.setItem("LegsList",JSON.stringify(exName));
                            
                            // console.log(exName);
                            
                        });
                    });
               
                }
             var newExercises=localStorage.getItem("LegsList");
                // console.log(newExercises);
                var LegExercises = JSON.parse(newExercises);
            
        return LegExercises;
    }

    function genShoulderExercises(){
        var exName = [];
        var k=0;
        var Exercises;
        var muscleOptions = genMuscles("Shoulders");
            for(var z =0; z< muscleOptions.length; z++){
                    db.collection("Workout").doc("Shoulders").collection(muscleOptions[z]).get().then(function(querySnapshot) {    //call the database with the right location
                        querySnapshot.forEach(function(doc) {
                            // console.log(muscleOptions[z]);
                            exName.push(String(doc.id));
                            
                            localStorage.setItem("ShouldersList",JSON.stringify(exName));
                            
                            // console.log(exName);
                            
                        });
                    });
                
                }
            var newExercises=localStorage.getItem("ShouldersList");
                // console.log(newExercises);
                var ShoulderExercises = JSON.parse(newExercises);
           
        return ShoulderExercises;
    }
    function genBackExercises(){
        var exName = [];
        var k=0;
        var Exercises;
        var muscleOptions = genMuscles("Back");
            for(var z =0; z< muscleOptions.length; z++){
                    db.collection("Workout").doc("Back").collection(muscleOptions[z]).get().then(function(querySnapshot) {    //call the database with the right location
                        querySnapshot.forEach(function(doc) {
                            // console.log(muscleOptions[z]);
                            exName.push(String(doc.id));
                            
                            localStorage.setItem("BacksList",JSON.stringify(exName));
                            
                            // console.log(exName);
                            
                        });
                    });
                
                }
            var newExercises=localStorage.getItem("BacksList");
                // console.log(newExercises);
                var BackExercises = JSON.parse(newExercises);
                
        return BackExercises;
    }
    function genChestExercises(){
        var exName = [];
        var k=0;
        var Exercises;
        var muscleOptions = genMuscles("Chest");
        for(var z =0; z< muscleOptions.length; z++){
                    db.collection("Workout").doc("Chest").collection(muscleOptions[z]).get().then(function(querySnapshot) {    //call the database with the right location
                        querySnapshot.forEach(function(doc) {
                            console.log("PLEASE WORK: " +muscleOptions[z]);
                            exName.push(String(doc.id));
                            
                            localStorage.setItem("ChestsList",JSON.stringify(exName));
                            
                            // console.log(exName);
                            
                        });
                    });
                
                // console.log(newExercises);
               
                }
            var newExercises=localStorage.getItem("ChestsList");
            var ChestExercises = JSON.parse(newExercises);
            
            
        return ChestExercises;
    }

    function genCardioExercises(){
        var exName = [];
        var muscleOptions = genMuscles("Cardio");
            for(var z =0; z< muscleOptions.length; z++){
                    db.collection("Workout").doc("Cardio").collection(muscleOptions[z]).get().then(function(querySnapshot) {    //call the database with the right location
                        querySnapshot.forEach(function(doc) {
                            // console.log(muscleOptions[z]);
                            exName.push(String(doc.id));
                            
                            localStorage.setItem("CardiosList",JSON.stringify(exName));
                            
                            // console.log(exName);
                            
                        });
                    });
               
                }
             var newExercises=localStorage.getItem("CardiosList");
                // console.log(newExercises);
                var CardioExercises = JSON.parse(newExercises);
                
        return CardioExercises;
    }




    
    
    function genMuscles(parts){
         
        if(parts==="Arms") muscleOptions = ["Biceps","Tricep","Forarmes"]
        else if (parts==="Back") muscleOptions = ["Lats","Lower"]
        else if (parts==="Shoulders") muscleOptions = ["FrontDelt","Back","Side"]
        else if (parts==="Legs") muscleOptions = ["Front","Back","Butt"]
        else if (parts==="Chest") muscleOptions = ["UpperChest","Lower"]
        else if (parts==="Cardio") muscleOptions=["Low Impact"];
        // console.log(muscleOptions)
        return muscleOptions;
    }

  

    function getSetsandReps(){
        goal = getGoal();
        
        if(goal === "Strength Training") sets = 3, reps = 6;
        else if(goal === "Bodybuilding") sets = 4, reps = 12;
        else if(goal === "Toning" || goal==="WeightLoss") sets = 5, reps = 15;
        return [reps,sets];
    }
  
    function gainsbyVolume(){
        var UserName=getName();
        goal=getGoal();

        getSetsandReps();
       
        // var reps = rep[1];
        console.log(sets,reps);
        
        var iornReps=document.getElementById("gains")[0].value;
        var iornSets=document.getElementById("gains")[1].value;
        var iornlbs=document.getElementById("gains")[2].value;
        var totalVolume = (iornReps * iornSets * iornlbs);
        //console.log(totalVolume);
        var suggestion = (Math.round(totalVolume/sets/reps));
        //console.log(suggestion);
        
    alert("You should try doing " + sets +  " sets of " + reps + " reps with " + suggestion + " Lbs");
        // window.location.href='gainsByVolume.html'+'#'+UserName; 


    }// End of gains by volume


    //I fond this online (Stack overflow)
    function currentDate(){
        var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();

            if(dd<10) {
                dd = '0'+dd
            } 

            if(mm<10) {
                mm = '0'+mm
            } 

            today = mm + '-' + dd + '-' + yyyy;
            return(today);
    }

    function addPlan(day1,day2,day3,day4,day5){
        console.log("CHECKING");
        var date=currentDate();
        var reps = getSetsandReps()[0];
        var sets = getSetsandReps()[1];
        var name = getName();

            day1 = day1;
            console.log(day1);
            day2 = day2;
            day3 = day3;
            day4 = day4;
            day5 = day5;
            console.log("TESTING DAY 1 IN ADD PLAN: "+day1);
  
        
        console.log("TESTING: "+day1);
        
        var kCal=calorieCalculator(); 

        db.collection("Users").doc(name).collection("Plan").doc(date).set({
            Day1: day1,
            Day2: day2,
            Day3: day3,
            Day4: day4,
            Day5: day5,
            Sets: sets,
            Reps: reps,
            CaloriesPerDay: kCal
           
        })
        .then(function() {
            console.log("Sets and reps Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }



    //Update user profile
    function updateStuff(){

        db.collection("Users").doc("Mluney").collection("Plan").doc("12-02-2018").update({
            "Reps": +3
        })
            .then(function() {
                console.log("Sets and reps Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }

    function arrToUl(arr) {
        var ul = document.createElement('ul'), li;
        for (var i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            li.appendChild(arrToUl(arr[i]));
          } else {
            li = document.createElement('li');
            li.appendChild(document.createTextNode(arr[i]));
            ul.appendChild(li);
          }
        }
        return ul;
      }
      function gainz(){
          var UserName=getName();
        window.location.href="fitness.html"+'#'+UserName; 
      }
      function getGains(str){
          var str=str;
          var UserName=getName();
        
        return str;
      }
      function getNutrition(){
          var UserName=getName();
          window.location.href="calories.html"+'#'+UserName; 

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


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
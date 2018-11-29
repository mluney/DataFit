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
                        
                        localStorage.setItem("ArmList",JSON.stringify(exName));
                        Exercises=localStorage.getItem("ArmsList");
                        console.log(exName);
                        
                    });
                });
            var newExercises=localStorage.getItem("ArmsList");
            console.log(newExercises);
            var ArmExercises = JSON.parse(newExercises);
            for(var i=0; i< ArmExercises.length; i++){
            console.log(ArmExercises[i]);
            }
        
     

        
        }
    return ArmExercises;
}
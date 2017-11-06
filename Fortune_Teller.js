"use strict"

function beginGame (){
let house1
let location1
let kids1
let pets1
let job1
let hobby1
}


function rollDice1 (){
	
	let houses = [" You live in a house.",  " You live in an apartment,", "  You live in a shack.", " You live in a mansion."];
	let location = [" You reside in Milwaukee, WI.", " You reside in Miami, FL.", " You reside in Minneapolis, MN.", " You reside in Milan, Italy.", " You reside in Mecca, Saudi Arabia.", " You reside in Mauston, WI.", " You reside in Montgomery, AL.", " You reside in Medford, OR."," You reside in Midland, TX.", " You reside in Mexico City, Mexico."];
	let kids = [" You don't have any kids.", " You have one kid named Bramlet McNugget.", " You have three kids."," You have triplets.", " You have two sets of twins.", " You have two kids.", " You have eight kids.", " You have a goat named Billy."];
	let pets = [" You have one dog.", " You have one cat.", " You have eight horses.", " You have two dogs and forty fish.", " You have four birds.", " You have one dog and one cat."];
	let job = [" You're a developer.", " You're a teacher.", " You're a lawyer.", " You're a onesie designer.", " You're a bartender.", " You're an airport security officer.", " You're a model.", " You're an NFL commentator.", " You're a chef.", " You're a retirement home director.", " You're a consctruction worker.", " You're a nurse.", " You're an electrician.", " You're a plumber.", " You're a rock climber.", " You're a canoe builder.", " You're a playwright.", " You're a meteorologist.", " You're Lakshmi Singh's personal assistant.", " You're a stay at home parent."];
	let hobby =[ " In your free time you garden.", " In your free time you play Overwatch.", " In your free time you collect gnomes.", " In your free time you're a photographer.", " In your free time you play board games.", " In your free time you play the didgeridoo.", " In your free time you forage for mushrooms.", " In your free time you're a dungeon master.", " In your free time you home brew.", " In your free time you bake.", " In your free time you design costumes.", " In your free time you sculpt."];
 
    let house1= Math.floor((Math.random() * 4) + 1);
   		document.getElementById("house1").innerHTML = house1.toString() + houses[house1 - 1];
    	console.log (house1);
  
	let location1= Math.floor((Math.random() * 10) + 1);
   		document.getElementById("location1").innerHTML = location1.toString() + location[location1-1];
   		console.log(location1);
   
    let kids1= Math.floor((Math.random() * 8) + 1);
   		document.getElementById("kids1").innerHTML = kids1.toString() + kids[kids1-1];
   		console.log (kids1);

    let pets1= Math.floor((Math.random() * 6) + 1);
  		document.getElementById("pets1").innerHTML = pets1.toString() + pets[pets1 - 1];
    	console.log (pets1);

     let job1= Math.floor((Math.random() * 20) + 1);
   		document.getElementById("job1").innerHTML = job1.toString() +  job[job1-1];
  		console.log (job1);


    let hobby1= Math.floor((Math.random() * 12) + 1);
   		document.getElementById("hobby1").innerHTML = hobby1.toString() + hobby[hobby1 - 1];
   		console.log (hobby1);
   	
   	let rollCounter= 0;
   	return rollCounter +=1;
   		
   		return house1, location1, kids1, pets1, job1, hobby1;
		
}



	function checkForFours (house1, location1, kids1, pets1, job1, hobby1){

	if(house1 === 4){
		alert ("How four-tunate! Looks like you may help determine your fate.")
	}

	if(location1 === 4){
		alert ("How four-tunate! Looks like you may help determine your fate.")
	}

	if(kids1 === 4){
		alert ("How four-tunate! Looks like you may help determine your fate.")
	}

	if(pets1 === 4){
		alert ("How four-tunate! Looks like you may help determine your fate.")
	}

	if(job1 === 4){
		alert ("How four-tunate! Looks like you may help determine your fate.")
	}

	if(hobby1 === 4){
		alert ("How four-tunate! Looks like you may help determine your fate.")
	}


	}


	function keepFate(){
    document.getElementById("keep fate").innerHTML = "While it could certainly never compare to the ever-glamorous life of Madam Arden, it seems you've got a destiny determined for you.";

	}

beginGame ();



// Challenge n°1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).*/

// 1. Store Mark's and John's mass and height in variables
//
//var johnMass = 75;
//var johnHeight = 1.90;
//
//var markMass = 80;
//var markHeight = 2;
//
//// 2. Calculate both their BMIs
//
//var johnBmi = johnMass /(johnHeight*johnHeight);
//console.log(johnBmi);
//
//var markBmi = markMass /(markHeight*markHeight);
//console.log(markBmi);
//
//// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
//var markJohn = markBmi > johnBmi;
//
//// 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
//
//console.log("Is Mark's BMI higher than John's ? " + markJohn);


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

/* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

//////////

/*Déclaration des variables*/

/*

var johnTeamScore1 = 89;

var johnTeamScore2 = 120;

var johnTeamScore3 = 103;

var mikeTeamScore1 = 89;

var mikeTeamScore2 = 120; 

var mikeTeamScore3 = 103; 

//Average score team

var averageJohnTeam = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3)/3;

var averageMikeTeam = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3)/3;

if (averageJohnTeam > averageMikeTeam) {
    console.log('Team John is the winner with an  average score of:' + averageJohnTeam);
}
else if (averageJohnTeam === averageMikeTeam)
{
     console.log('There is a draw with an average for both of:' + averageMikeTeam);
}

else {
        console.log('Team Mike is the winner with an  average score of:' + averageMikeTeam);

}

// Add team

var maryTeamScore1 = 89;

var maryTeamScore2 = 120; 

var maryTeamScore3 = 103; 

var averageMaryTeam = (maryTeamScore1 + maryTeamScore2 + maryTeamScore3)/3; 

switch(true){
    case(averageJohnTeam > averageMaryTeam && averageJohnTeam > averageMikeTeam):
    console.log('Team John is the winner with an  average score of:' + averageJohnTeam);
    break;
    
    case(averageMaryTeam > averageJohnTeam && averageMaryTeam > averageMikeTeam):
    console.log('Team Mary is the winner with an  average score of:' + averageMaryTeam);
    break;
    
    case (averageMikeTeam > averageMaryTeam && averageMikeTeam > averageJohnTeam):
    console.log('Team Mike is the winner with an  average score of:' + averageJohnTeam);
    break;
    
    default:
        console.log('There is a draw with an average for all of:' + averageMikeTeam);
}

*/



/* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
    
// Solution 

var bill = [124, 48, 268];

function tipCalculation (bill){
    
    var i= 0
    var billWithTip = []; 
    while (i <= bill.length){
        
        if (bill.indexof[i] >= 50 && bill.indexof[i] < 200 ){
            billWithTip.push(bill.indexof[i]*0.15)
        }
        else if (bill.indexof[i] < 50 ){
            billWithTip.push(bill.indexof[i]*0.2)
        }
        
        else if (bill.indexof[i] > 200 ){
            billWithTip.push(bill.indexof[i]*0.1)
        };
        i++;
    }
}

console.log (bill);

console.log(tipCalculation(bill));
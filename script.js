let firstname = prompt("Welcome to GC mini golf! What is your name?");

var play = prompt(`Hi, ${firstname}! Would you like to play 3 or 6 holes?`);

let total = 0

if (play === "3") {

    for(let i=1; i <= 3; i++){
        total += Number(prompt(`How many putts for hole ${i}? (par: 3)`));
    }
    total -= 9;

    if (total === 0) {
    console.log(`Good game, ${firstname}. Your total par was: 0.`);
    } else if (total > 0) {
    console.log(`Nice try, ${firstname}... Your total par was: ${total}.`);
    } else if (total < 0) {
    console.log(`Great job, ${firstname}! Your total par was: ${total}.`);
}
}

if (play === "6") {
    
    for(let i=1; i <= 6; i++) {
        total += Number(prompt(`How many putts for hole ${i}? (par: 3)`));
    }
    total -= 18
 
     if (total === 0) {
     console.log(`Good game, ${firstname}. Your total par was: 0.`);
     } else if (total > 0) {
     console.log(`Nice try, ${firstname}... Your total par was: ${total}.`);
     } else if (total < 0) {
     console.log(`Great job, ${firstname}! Your total par was: ${total}.`);
 }
 }
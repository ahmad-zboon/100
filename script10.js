console.log("This is an Easter Egg")

alert('Hello\nHow are you?')

/* Nationality */

var nationality = prompt('What is your nationality?');

if (nationality === "Jordanian") { document.write('<img src="https://ar.vogue.me/image_provider/?w=750&h=&zc=1&q=80&cc=ffffff&src=https://en.vogue.me/wp-content/uploads/2019/05/9.jpg"width="100%">'); } else if (nationality !== "Jordanian") { document.write("Welcome two our World Wide Website"); }

/* Beverages */


var beverages = prompt("How do you like you beverages cold or hot?");

var beverages = beverages.toLowerCase();

while (beverages !== "cold" && beverages !== "hot") { beverages = prompt("Make sure to answer with eather Cold or Hot"); }

// while (beverages !== "cold" && beverages !== "hot") { drink = prompt("Make sure to answer with eather Cold or Hot"); }

/* Service Rating */

var serviceRating = function() {

    var food = prompt("How would you rate the value of our food? Rate from 1 (Poor Value) to 5 (Great Value)")

    if (food > 5) {
        food = 5
    }
    var starResults = "";

    for (var i = 0; i < food; i++) {
        starResults = starResults + ('<img src="https://image.shutterstock.com/image-vector/gold-star-elegant-260nw-238637683.jpg" width="50px">');
    }
    return starResults
}
document.write(serviceRating())
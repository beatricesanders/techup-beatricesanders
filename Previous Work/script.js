var age = 20
age = 65
console.log(age)

var username = "preshant"
var password = "techup"

var isMale = true
var isLoggedIn = true

var blog_posts = ["Today was a good day", "The sky is blue", 
"It's raining heavily now"]

console.log(age)

console.log(username)
console.log(password)
console.log(isMale)
console.log(isLoggedIn)
console.log(blog_posts)

if (isMale == true & isLoggedIn == true) {
    console.log("it's a boy!")
} if (isMale == false & isLoggedIn == true) {
    console.log("it's a girl!")
} else {
    console.log("please log in")
}

while (age < 70) {
    console.log("Your age is " + age );
    age = age + 1;
}

function sayHello() {

    var i = 1

    while (i <= 3) {
        alert("hello everyone! x" + i)
        i = i + 1
    }
   
}


function showInput() {
    // Get the value from the input field of ID #user-input
    // Store this value in a variable called user_input

    var user_input = document.getElementById("user-input").value;

    // Update the content for the HTML element with ID #header-age with 
    // whatever the user_input varible contains

    mood_output = document.getElementById("user-mood");

    mood_output.textContent = user_input;

    // check if user is sad 
    if (user_input == "sad") {
        mood_output.style.color = 'blue';
    } else {
        mood_output.style.color = 'black';
    }
}


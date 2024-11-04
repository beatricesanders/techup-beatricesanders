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

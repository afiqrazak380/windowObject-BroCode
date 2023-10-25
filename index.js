// Window object - interface used to talk to the web browser
//               - the Dom is a property of the window     


const myButton = document.querySelector("#myButton");

// console.dir(window)
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(window.outerHeight);
// console.log(window.outerWidth);

//scroll x, scroll Y
// console.log(window.scrollX)
// console.log(window.scrollY)

// Change href property
// console.log(window.location.href)
// window.location.href = "https://www.google.com"

// console.log(window.location.hostname) // host name
// console.log(window.location.pathname) // path name

// myButton.addEventListener("click", () => window.open()) // open new window
// myButton.addEventListener("click", () => window.open("https://www.google.com")) //direct to page
// myButton.addEventListener("click", () => window.close()) // close current window
// myButton.addEventListener("click", () => window.print()) // print current window

// window.alert("Wrong button!!!") // alert pop-up (ok)
// window.confirm("Click here to confirm the purchase:") (cancle/ok)

// window.prompt("Enter you age:") // prompt for user input
// let age = window.prompt("Enter you age:")

// if(age < 18){
//   window.alert("You are underage!");
//   window.close();
// }

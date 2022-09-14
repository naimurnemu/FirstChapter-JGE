// window.document.getElementById("")
/* console.log(window.innerHeight)
console.log(window.innerWidth)

function windowManagement(open) {
  let gmailWindow;
  if (open) { 
    gmailWindow =  window.open("https://www.google.com", "_blank", "width=500px, height=700px")
  } else {
    gmailWindow.close();
  }
} */


// window.screen
// console.log(screen.width); //--show exact width of screen
// console.log(screen.availWidth) //--available width of screen
// console.log(screen.height) //--height of screen
// console.log(screen.availHeight) //available height
// console.log(screen.colorDepth) //Masurement quality of screen and provide media. 
// console.log(screen.pixelDepth) //Masurement quality of screen and provide media. 


// window.location
// console.log(location.href) //--get Url of page
// console.log(location.hostname) //--get IP/Domain name
// console.log(location.protocol) //--check protocol https/http
// console.log(location.pathname) //--get pathname
// console.log(location.port) //-- Check port [80 is port of http, and 443 is port of https]
// console.log(location.assign("https://www.google.com")) // replace the window pathname

// window navigator and history 
// console.log(navigator.cookieEnabled); //--Cookies check
// console.log(navigator.javaEnabled) //-- check java ability
// console.log(navigator.appName); //--show app name netscape defaultly
// console.log(navigator.appCodeName) //--show mozila defalutly.
// console.log(navigator.product) //--show gecko defaultly. 
// console.log(navigator.appVersion) //--version of webpage. 
// console.log(navigator.userAgent) //--user agent show.
// console.log(navigator.platform) //--user device. 
// console.log(navigator.onLine) //--

// window.history
// history.back() //-- navigate to back
// history.forward() //--navigate to forword
// history.go() //--navigate params location of go()

// Local Storage
let info = {
  name: "naimur",
  email: "naimur@rahman56gmail.com",
  phone: "231423490"

}



localStorage.setItem("userInfo", JSON.stringify(info)); //-- Data need convert to string to store on local storage. 
localStorage.setItem("jwt", "sdfsadkfjksdfjksdhhhhhhfjksdfuweyfrweufhsdjkfjksdhfjksdhfkjhsdafh");
/* let remoteUserInfo = localStorage.getItem("userInfo"); // need perse data o use. 
remoteUserInfo = JSON.parse(remoteUserInfo); */
console.log(localStorage.getItem("userInfo")); 
console.log(localStorage.getItem("jwt")); 
localStorage.removeItem("userInfo"); // use for remove spacific item
console.log(localStorage.getItem("userInfo")); 

// localStorage.clear(); //use to crear all the data. 


sessionStorage.setItem("userInfo", JSON.stringify(info)); //-- Data need convert to string to store on sessionStorage. 
sessionStorage.setItem("jwt", "sdfsadkfjksdfjksdhhhhhhfjksdfuweyfrweufhsdjkfjksdhfjksdhfkjhsdafh");
/* let remoteUserInfo = sessionStorage.getItem("userInfo"); // need perse data o use. 
remoteUserInfo = JSON.parse(remoteUserInfo); */
console.log(sessionStorage.getItem("userInfo")); 
console.log(sessionStorage.getItem("jwt")); 
// sessionStorage.removeItem("userInfo"); // use for remove spacific item
console.log(sessionStorage.getItem("userInfo")); 

// localStorage.clear(); //use to crear all the data. 

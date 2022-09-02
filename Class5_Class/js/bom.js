// window.document.getElementById("")
console.log(window.innerHeight)
console.log(window.innerWidth)

function windowManagement(open) {
  let gmailWindow;
  if (open) { 
    gmailWindow =  window.open("https://www.google.com", "_blank", "width=500px, height=700px")
  } else {
    gmailWindow.close();
  }
}
// Replace

// String.replace(Kake khujob, Ki dara replace korbo)
let jomiRegistry = "Sona Mia kemon acho, Sona miar jomi."; //---String is imuteable String. 
// let revisedJomiRegistry = jomiRegistry.replace( /sona/i, "Lal"); //--- /string/i flag means Case Insensetive. Regex doesn't need string litaral.  

// let revisedJomiRegistry = jomiRegistry.replace( /Sona/g, "Lal"); //--- Nature of Replace is it only replace first match, g means golbal flag. we can changle all match by use this. 

let revisedJomiRegistry = jomiRegistry.replace( /sona/ig, "Lal"); //--- We use both flag together. 

// console.log(jomiRegistry);
console.log(revisedJomiRegistry);



// Turtle DB
let db;
let request = window.indexedDB.open("myDB");
request.onerror = function(event) {
  alert("Connection failed to open");
};
request.onsuccess = function(event) {
  db = event.target.result;
};

let transaction = db.transaction(["customers"]);
let objectStore = transaction.objectStore("customers");

let request = objectStore.get("John Smith");
request.onerror = function(event) {
  // Handle errors
};
request.onsuccess = function(event) {
  // Capture returned values
  alert("Returned document is " + request.result);
};


// Local Storage   same all for Session storage but only saved for that session

localStorage.setItem("key value", " pair comes here");

let name = localStorage.getItem("key value");

localStorage.clear(); // to clear local storage

localStorage.removeItem("key value");// removes a key value pair

localStorage.setItem("key value", JSON.stringify("array data comes here"));// to store arrays data
name = JSON.parse(localStorage.getItem('key value'));// to retrieve JSONIFIED DATA
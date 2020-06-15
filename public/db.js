const db;
const request = window.indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
    db.event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
}

request.onsuccess = event => {
    console.log(request.result)
}
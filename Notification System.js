console.log("The script is working perfectly");
console.log(Notification.permission)

function showNotification(){
    const notification = new Notification("This is the Notification Title Muhammad Mohib", {
        body: "Hi MUHAMMAD Mohib, how are you!"
    })
}

if (Notification.permission === 'granted'){
    showNotification();
} else if (Notification.permission !== "denied"){
    Notification.requestPermission().then(permission => {
        console.log(permission);
        if (permission === 'granted'){
        showNotification();
        }
    })
}
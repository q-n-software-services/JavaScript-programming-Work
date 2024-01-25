console.log('Ajax Tutorial Started');

let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log("You have clicked the fetch btn");
    const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'mohib.txt', true);
    xhr.open('POST', 'mohib.txt', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onprogress = function(){
        console.log("On Progress");
    }

    xhr.onload = function(){
        if (this.status === 200){
            console.log(this.responseText);
        } else{
            console.log("Some Error Occured");
        }
    }
    // let params = '{"name":"test", "salary:"123", "age":"23"}';
    xhr.send(params);
     
    
}
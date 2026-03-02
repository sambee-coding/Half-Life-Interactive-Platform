const message = "Coming Soon";
const motion = 70;

let ind = 0;

function typewrite(){
    if(ind < message.length){
        document.getElementById("typewrite").innerHTML += message.charAt(ind);
        ind++;
        setTimeout(typewrite, motion);
    }
}

typewrite();
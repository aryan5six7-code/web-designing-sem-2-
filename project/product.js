let time = 1500;
let interval;

function startTimer(){

    clearInterval(interval);

    interval = setInterval(() => {

        let min =
        Math.floor(time/60);

        let sec =
        time%60;

        document.getElementById("timer")
        .innerHTML =
        `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

        if(time<=0){
            clearInterval(interval);
            alert("Session Complete!");
        }

        time--;

    },1000);
}

function resetTimer(){

    clearInterval(interval);

    time=1500;

    document.getElementById("timer")
    .innerHTML="25:00";
}
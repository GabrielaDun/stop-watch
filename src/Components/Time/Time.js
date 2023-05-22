
const Time = duration => {
    let milliseconds = Math.floor((duration % 100) ),
        seconds = Math.floor((duration / 100) % 60),
        minutes = Math.floor((duration / (100 * 60)) % 60);
    
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    return minutes + ":" + seconds + "." + milliseconds;
}

export default Time;
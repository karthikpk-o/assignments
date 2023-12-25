let sec = 0
function print_sec()
{
    sec += 1;
    console.log("Timer: "+sec);
}

setInterval(print_sec, 1000);
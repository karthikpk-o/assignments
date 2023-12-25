let sec = 0
function print_sec()
{
    sec += 1;
    console.log("Timer: "+sec);
    setTimeout(print_sec, 1000)
}
print_sec();


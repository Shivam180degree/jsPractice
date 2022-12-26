
var time = 1;
function name() {
    setInterval(()=>{
        
        time = time + 1
        console.log("hello" + " " + time);
    }, 1000)
}
name()
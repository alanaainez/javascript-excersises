const MAX_RED_VALUE = 26;
const MAX_WHITE_VALUE = 69;

function getBall(maxValue) {
    return Math.ceil(Math.random()*maxValue)
}


function getPowerball() {
    var redBall = getBall(MAX_RED_VALUE)
    var whiteBalls = [];
    //for (let i = 0; i < 5; i++){
        //var whiteBall = getBall(MAX_WHITE_VALUE);
        //whiteBalls.push(whiteBall)
    
    //}
    while (whiteBalls.length < 5) {
        var whiteBall = getBall(MAX_WHITE_VALUE)
        if (!whiteBalls.includes(whiteBall)) {
            whiteBalls.push(whiteBall)
        } else {
            console.log(whiteBall)
        }
    }

document.getElementById("redball").innerHTML = "Your redball: " + redBall;
document.getElementById("whiteball-1").innerHTML = "Your whiteballs: " + whiteBalls;

}
 
  
  
  
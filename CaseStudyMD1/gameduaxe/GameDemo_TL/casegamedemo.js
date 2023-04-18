let myCanvas = document.getElementById("myCanvas");
let context = myCanvas.getContext("2d");
nhanvat = {
    x: 100, y: 500
}
setInterval(start,100);
function start(){
    context.clearRect(0,0,300,600);
    context.fillStyle = "red"
    context.fillRect(nhanvat.x,nhanvat.y,25 ,25);
    vaCham()
}
function vaCham() {
if (nhanvat.x <= 0 || nhanvat.x + 25 >= 300){
    console.log("Game Over")
}
}
document.addEventListener("keydown", key => {
    switch(key.keyCode){
        case 37:
            if(nhanvat.x > 0)
            nhanvat.x -= 20;
            break;
        case 38:
            nhanvat.y -= 20;
            break;
        case 39:
            if(nhanvat.x + 25 < 300)
            nhanvat.x += 20;
            break;
        case 40:
            nhanvat.y += 20;
            break;
    }
} );
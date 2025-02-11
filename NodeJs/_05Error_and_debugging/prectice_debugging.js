function claculateArea(width, heigth){
    return width*heigth;
}

let width=10, heigth=5;
if(claculateArea(width,heigth) > 100){
    console.log("the area is large.");
}
else{
    console.log("the area is small");
}

if(width + heigth > 100){
    console.log("area is greater than or equal to 100")
}

module.exports = claculateArea;

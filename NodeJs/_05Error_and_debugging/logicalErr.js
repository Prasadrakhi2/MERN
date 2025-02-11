const logicalError = () =>{
    console.log('runtime error call');
    let x = 5;
    if(x=10){
        console.log(x);
    }else{
        console.log('x is not 10');
    }
}

module.exports = logicalError;
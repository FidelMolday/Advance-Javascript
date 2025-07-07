//functions passed as an argument to be executed later.
function greet (name,callback){
    console.log('Hello,${name}');
    callback();
}
function bye(){
    console.log("Goodbye");
}
greet("Fidel",bye);
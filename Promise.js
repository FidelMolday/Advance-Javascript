const promise = new Promise((resolve,reject)=>
{
    const success = true;

    if(success){
        resolve("Task succeeded");
    }else{
        reject("Task failed");
    }
});
promise
.then(result =>console.log(result))
.catch(error => console.log(error));
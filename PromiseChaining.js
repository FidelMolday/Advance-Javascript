 function fetchData (){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Data fetched"),1000);
    });
 }
 fetchData()
   .then(data =>{
    console.log(data);
    return "Processing data";
   })
   .then(process =>{
      console.log(process);
   });
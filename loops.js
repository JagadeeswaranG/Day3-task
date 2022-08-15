//For the given JSON iterate over all for loops

var cardata =[
    {
        "Car":"Maruti",
        "Model":"Celerio",
        "kmpl":25,
        "Fuel":"petrol"
    },
    {
        "Car":"TATA",
        "Model":"Tiago",
        "kmpl":21,
        "Fuel":"petrol"  
    }
]



//For in
for(var i in cardata){
    var res1 = cardata[i]; 
    console.log(res1);
    console.log(res1.Model);
}

//For of
for(var key of cardata){
    console.log(key.Model);
    console.log(key.Fuel,key.kmpl);
}

//For loop
for(var i=0; i<cardata.length; i++){
    var res = cardata[i];
    console.log(res.Model);
    console.log(res.kmpl);
}
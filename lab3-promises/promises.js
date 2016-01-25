'use strict';

var promise = new Promise(function(resolve, reject) {

function add2(num){
    return num
   
    .then(function(){
     return num+1;
})

.then(function(){
    return num+1;
})

.then(function(){
    console.log(num);
});
    
}

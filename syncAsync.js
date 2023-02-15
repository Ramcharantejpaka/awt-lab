// Synchronus

console.log('Sync...');
console.log('IT-A');
calculate();
console.log('III');
function calculate(){
    let sum = 0;
    for(let i = 0; i< 10000000; i++){
        sum +=i;
    }
    console.log(sum)
}
// Sync...
// IT-A
// 49999995000000
// III

// Asynchronus

console.log('Async...');
setTimeout(() => {
    console.log('IT-A');
}, 2000);
console.log('III');

// Async...
// III
// IT-A


//  Sync -- Async

console.log('Sync -- Async');
console.log('IT-A');
setTimeout(() => {
    calculate();
},3000);
console.log('III');
function calculate(){
    let sum = 0;
    for(let i = 0; i< 10000000; i++){
        sum +=i;
    }
    console.log(sum)
}
// Sync -- Async
// IT-A
// III
// 49999995000000
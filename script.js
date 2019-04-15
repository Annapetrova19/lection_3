const age = 25;
let i=0;

// while (i<1000) {
//     if (i % age === 0) {
//         console.log(i);
//     }
//     i++;
// }

// do {
//      if (i % age === 0) {
//         console.log(i);
//      }
//   i++;
// }
// while (i<1000);

// for (let i = 0; i < 1000; i +=2) {
//     if (i % age === 0) {
//                 console.log(i);
    
// }
// };





// const sideA = 5;
// const h = 4;

// const otherSideA = 50;
// const otherH = 44;


// // let s = (sideA*h)/2;
// console.log(square (otherSideA, otherH));
// console.log(square (sideA, h));
// console.log(square (otherSideA, otherH));

// function square (a, h){
//    return (a*h)/2;
// }




// function sumPeriod(from, to) {
//   let sum = 0;
//   for (let i = from; i < to; i++){
//      sum += i;

//      console.log(i);
//   }
//   console.log(sum);
// }

// sumPeriod(2,5);






const list = ['хліб','молоко', 'сир' ];
 const list2 = ['хліб','молоко', 'сир' ];


 function createlist (array){
     for (let i=0; i < array.length; i++) {
         console.log (`${i}. ${array[i].toUpperCase()}`);

     }

 }
 createlist(list);
 createlist(list2);
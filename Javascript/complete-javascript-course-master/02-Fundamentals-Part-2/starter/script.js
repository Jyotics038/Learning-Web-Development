'use strict';
// let hasDriversLicense=false;
// const passTest=true;

// if(passTest) hasDriversLicense=true;
// if(hasDriversLicense) console.log("I can drive:D");

//coding challenge 1
// const calcAverage=(a,b,c) => (a+b+c)/3;
// const avgDolphins=calcAverage(44,23,71);
// const avgKoalas=calcAverage(65,54,49);
// function checkWinner(avgDolphins,avgKoalas){
//     if(avgDolphins>=2*avgKoalas){
//         console.log("dolphins win");
//     }
//     else if(avgKoalas>=2*avgDolphins){
//         console.log("Koalas win");
//     }
//     else{
//         console.log("No wons");
//     }
// }
// checkWinner(576,111);

//coding challenge 3
// const marks={
//    name:'Marks',
//    mass:78,
//    height:1.69,
//    calcBmi:function(){
//        this.bmi=this.mass/this.height==2;
//        return this.bmi;
//    }
// };
// const john={
//     name:'John',
//     mass:92,
//     height:1.92,
//     calcBmi:function(){
//         this.bmi=this.mass/this.height==2;
//         return this.bmi;
//     }
// };
// marks.calcBmi();
// john.calcBmi();

// console.log(marks.bmi,john.bmi);

// if(marks.bmi>john.bmi){
//     console.log(`${mark.fullName}'s BMI (${marks.bmi})
//     is higher than ${john.fullName}'s BMI (${john.bmi})
//     `)
// }else if(john.bmi>marks.bmi){
//     console.log(`${mark.fullName}'s BMI (${marks.bmi})
//     is lower than ${john.fullName}'s BMI (${john.bmi})
//     `)
// }else{
//     console.log("Equal bmi");
// }

//coding challenge 4
const calcTip=function(bill){
    return bill>=50&&bill<=300?bill*0.15:bill*0.2;
}
const bills=[ 22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
const tips=[];
const totals=[];
for(let i=0;i<bills.length;i++){
    const tip=calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}
console.log(bills,tips,totals);
const calcAverage=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
       sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
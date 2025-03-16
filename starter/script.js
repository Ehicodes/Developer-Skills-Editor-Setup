// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//PROBLEM
// WE WORK FOR A COMPANY BUILDING A SMART HOME THERMOMETER. OUR MOST RECENT TASK IS THIS: 'GIVER AN ARRAY OF TEMPERATURES OF ONE DAY, CALCULATE THE TEMPERATURE ALTITUDE. KEEP IN MIND THAT SOMETIMES THERE MIGHT BE A SENSOR ERROR'

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1) understanding the problem
//-what is temp attitude? answer: difference between the highest and lowest temp
//-how to compute the max and min temperatures?
//-what is a sensor error ? and what to do when it occurs?

//2) breaking up into sub-problems
// -how to ignore errors?
//find max value in temp array
//find min value in temp array
//subtract min from max (amplitude) and then return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
  }
  console.log(max);
};

calcTempAmplitude(temperatures);
//before we start the loop, the max will be the first element of the array, max = 3;
// max = 3
// max = 7

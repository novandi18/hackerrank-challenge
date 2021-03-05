'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getSecondLargest(nums) {
    // Complete the function
    let x = nums[0];
    let y = -1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > x) {
            y = x;
            x = nums[i];
        }
        
        if(nums[i] > y && nums[i] < x) {
            y = nums[i];
        }
    }
    
    return y;
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
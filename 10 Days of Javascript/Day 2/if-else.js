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

function getGrade(score) {
    let grade;
    let n = parseInt(score);
    
    // Write your code here
    if(n < 30) {
        grade = 'A';
    } 
    
    if(n < 25) {
        grade = 'B';
    }
    
    if(n < 20) {
        grade = 'C';
    }
    
    if(n < 15) {
        grade = 'D';
    }
    
    if(n < 10) {
        grade = 'E';
    }
    
    if(n < 5) {
        grade = 'F';
    }
    
    return grade;
    
}

function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}

let bs = 10000;
let hra, da, pf;

if (bs <= 10000) {
    da = bs * 0.25;
    hra = bs * 0.30;
    pf = bs * 0.09;
} 
else if (bs <= 20000) {
    da = bs * 0.15;
    hra = bs * 0.20;
    pf = bs * 0.04;
} 
else if (bs <= 30000) {
    da = bs * 0.15;
    hra = bs * 0.20;
    pf = bs * 0.04;
} 
else {
    da = bs * 0.10;
    hra = bs * 0.15;
    pf = bs * 0.02;   
}

let net = bs + hra + da - pf;
console.log("Net Salary = " + net);

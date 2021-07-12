const {SLR,PolynomialRegression}=require('ml-regression');
var inputs=[10,20,30,40,60,80];
var outputs=[20,230,230,340,45,90];

let regression=new SLR(inputs,outputs);
  console.log(regression);

regression.toString(3)=='f(x)=-0.275*x+50.6';

const x=[10,20,230,30,40,650,760,70,50];
const y=[9.0,2.0,7.0,2.3,7.90,282.02,20.32,2.22,102.32];

const degree=5;
const regressions=new PolynomialRegression(x,y,degree);

console.log(regressions.predict(80));
console.log(regressions.coefficients);
console.log(regressions.toString(3));
console.log(regressions.toLaTex());

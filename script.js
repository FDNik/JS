let a;
let b;
let sum;
let x;
a="a";
b="b";
while (isNaN(a)==true)  {
  a=prompt ("введите операнд №1");
  a=+a;
  }
while (isNaN(b)==true)  {
  b=prompt ("введите операнд №2");
  b=+b;
}
let sum1=(calcS(a, b));
alert (a+x+b+"="+sum1);



function calcS(a, b) {
let c1=true;
do {
let c=prompt ("введите действие: + - * /");
switch (c)  {
  case '+':
  sum=a+b;
  c1=false;
  x=c;
  break;
  case '-':
  sum=a-b;
  c1=false;
  x=c;
  break;
  case '/':
  sum=a/b;
  c1=false;
  x=c;
  break;
  case '*':
  sum=a*b;
  c1=false;
  x=c;
  break;}
}while (c1==true);
return sum;}

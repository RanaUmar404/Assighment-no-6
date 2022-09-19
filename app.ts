1. Write a ts program to print all natural numbers from 1 to n. - using while loop
 let i=1;              //Given input
while(1<=20){
    console.log(i);
    i++;
}


2. Write a ts program to print all natural numbers reverse from n to 1. - using while loop
let a=50;              //Given input
while(a>=1){
    console.log(a);
    a--;
}


3.  Write a ts program to print all alphabets from a to z. - while loop
for(var a=97;a<=122;a++)           //Given input
console.log(String.fromCharCode(a));


4. Write a ts program to print all even numbers between 1 to 100. - using while loop
let r=2;                       //Given input
while(r<=100){
    console.log(r);
    r=r+2;   
}


5. Write a ts program to print all odd number between 1 to 100.
let q=1;                       //Given input
while(q<=100){
    console.log(q);
    q=q+2;
}


6. Write a ts program to find sum of all natural numbers between 1 to n.
var sum=0;
var num:string|null=prompt("Enter Your Number");
var n:number=Number(num);
for(var index=1;index<=n;index++){
sum=sum+index
console.log(sum);
}


7. Write a ts program to find sum of all even numbers between 1 to n.
var sum=0;
var num:string|null=prompt("Enter Your Even Number");
var n:number=Number(num);
for(var index=2;index<=n;index=index+2){
sum=sum+index
console.log(sum);
}


8. Write a ts program to find sum of all odd numbers between 1 to n.
var sum=0;
var num:string|null=prompt("Enter Your Odd Number");
var n:number=Number(num);
for(var index=1;index<=n;index=index+2){
sum=sum+index
console.log(sum);
}


9. Write a ts program to print multiplication table of any number.
var mul=1;
var num1:string|null=prompt('Enter a Number')
var n=Number(num1)
for(var i=1;i<=10;i++){   
    var result=i*n
    console.log(n +'*' +i +'=' +result);
}


10. Write a ts program to count number of digits in a number.
var c: number = 0;
var num2: string | null = prompt("Enter your Number")
var n: number = Number(num2);
while (n >= 10) {
    n = n / 10;
    c = c + 1;
    n = Math.floor(n)
    console.log("Number of digits are:" + c);
}


11. Write a ts program to find first and last digit of a number.
var num: string | null = prompt("Enter your Number")
var n: number = Number(num)
console.log("last digit:" + n % 10);
while (n >= 10) {
    n = n / 10
    n=Math.floor(n)
console.log("first digit:" + n);
 }


12. Write a ts program to swap first and last digits of a number.
function first_digit(n: number): number {
    while (n >= 10)
        n /= 10;
    return Math.floor(n);
}
function last_digit(n: number): number {
    return Math.floor(n % 10);
}
var num: number = 8976;                     //Given input
console.log(first_digit(num));
console.log(last_digit(num));
var swap: number = last_digit(num);
last_digit(num) == first_digit(num);
first_digit(num) == swap;


13. Write a ts program to find sum of first and last digit of a number
var s:number=0;
var num: string | null = prompt("Enter your Number")
var n: number = Number(num)
var last_digit = n % 10
console.log("last digit:" + last_digit);
while (n >= 10) {
    n = n / 10
    s=s+last_digit;
    console.log("first digit:" + n);
    n=Math.floor(n)
}
var sum = last_digit + n
console.log("sum:" + sum);


14. Write a ts program to calculate product of digits of a number.
function product(n:number):number{
    var pro:number=1;
    while(n!=0){
        pro=pro*(n%10);
        n=Math.floor(n/10);
    }
    return pro;
}
var n:number=456;                 //Given input
console.log(n);


15. Write a ts program to enter a number and print its reverse.
var num:number=1234;                 //Given input
var riv:number=0;
var last_digit;
while(num!=0){
    last_digit=num%10;
    riv=riv*10+last_digit;
    num=Math.floor(num/10);
}
console.log("reverse of number is:"+riv);


16. Write a ts program to find frequency of each digit in a given integer.
  function freq(n:number,d:number):number{
    var a:number=0;
    while(n>0){
        if(n%10==d){
            a++;
        }
        n=n/10;
    }
    return a;
  }  
var n:number=1884                   //Given input
var d:number=8
console.log("frequency:"+freq(n,d));


17. Write a ts program to check whether a number is Prime number or not.
const num: number = 23;                //Given input
var prime: boolean = true;
if (num === 1) {
    console.log("1 is neither prime nor composite");
} else if (num > 1) {
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log("${num} is prime number");
    } else {
        console.log("${num} is nor prime number");
    }
}
else {
    console.log("Required number in not prime number");
}


18. Write a ts program to calculate sum of digits of a number.
function sun(n:number):number{
    var s:number=0;
    while(n!=0){
        s=s+n%10;
        n=n/10;
        n=Math.floor(n)
    }
    return s;
}
var num:number=123;                   //Given input
console.log(sun(num));



19. Write a ts program to print all ASCII character with their values.
for(var a=0;a<=127;a++)           //Given input
console.log(String.fromCharCode(a));

20. Write a ts program to find power of a number using for loop.
function pow(base:number,exponent:number):number{
    for(var a=1;a<exponent;a++){
        base=base*exponent
    }return base
    }
var given_base:number=4;
var given_exponent:number=4;
console.log("power:"+pow(given_base,given_exponent));


21. Write a ts program to find all factors of a number.
var fac:number=40;                 //Given input
for (let index = 0; index < fac; index++) {
    if(fac%index==0){
        console.log("factor:"+fac);   
    }
}


22. Write a ts program to calculate factorial of a number.
var find_factorial:number=5;
var factorial:number=1;
for (let index = 1; index <= find_factorial; ++index) {
    factorial*=index;
    console.log("Factorial:"+factorial);
}


23. Write a ts program to check whether a number is palindrome or not.
var num:string|null=prompt("Enter number");
var n1:number=Number(num);
var riv:number=0;
do{
    var number:number=n1%10;
    var riv:number=(riv*10)+number;
    n1=n1/10
}while(n1!=0)
if(n1==riv){
    console.log(num,"Palindrom no.");
}else{
    console.log(num,"Not Palindrom");
}


// Celsius to Fahrenheit 	° F = 9/5 ( ° C) + 32
// Fahrenheit to Celsius 	° C = 5/9 (° F - 32)
// Celsius to Kelvin 	      K = ° C + 273
// Fahrenheit to Kelvin 	  K = 5/9 (° F - 32) + 273 

function cAndfConverter(num , string){
    if (string === 'Fahrenheit'){
        let cel = (num - 32) * 5/9 ;
        let kel = 5/9 * (num - 32) + 273 ;
        let fah = num + '°F';
        return fah + ' ' + cel + '°C' + ' ' + kel + ' K' ;
    }
    else if (string === 'Celsius'){
        let fah = num * 9/5 + 32 ;
        let kel = num + 273 ;
        let cel = num + '°C' ;
        return cel  + ' ' + fah + '°F' + ' ' + kel + ' K';
    }
    else {
        return "Inter input correctly"
    }
}
let result = cAndfConverter(10, 'Celsius');
console.log(result);


// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
function numta(){
    for (let i=1; i<=10; i++){
        num = 13 * i ;
        console.log(`13 x ${i} = ${num}`);
    }
}
numta();

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
function lowercase(name){
    return name.toLowerCase();
}
console.log(lowercase('Shahin Alam'))

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
function fullNmae(first , second){
    return first + ' ' + second ;
}
console.log(fullNmae("Shahin", "Alam"))

// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  
function square(num){
    return num * num;
}
console.log(square(10));

// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
        /* 
        const pizza = {
            toppings: ['cheese', 'sauce', 'pepperoni'],
            crust: 'deep dish',
            serves: 2
        }
        এবং pepperoni প্রিন্ট করবা।
        */
        const pizza = {
            toppings: ['cheese', 'sauce', 'pepperoni'],
            crust: 'deep dish',
            serves: 2
        }
        console.log(pizza.toppings[2])

// ৬) Function for Celsius to fahrenheit conversion. and another function for Fahrenheit to celsius conversion. (search the math formula for conversion)
function fToc(x){
    return (x - 32) * 5/9;
}
console.log(fToc(10))


function cTof(y){
    return y * 9/5 + 32 ;
}
console.log(cTof(10))

// ৭) Function for Simple interest calculation. (I = Pnr)
function interest(p, n, r){
    return (p*n*r)/100 ;
}
console.log(interest(5000,2,20));

let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Officiis, nostrum,";
let newText = text.split(" , ".join("."));
console.log("Измененная строка:", newText);

// Заменить все запятые на точки


let randomNumber = Math.floor(Math.random() * 500); 
console.log("Случайное число до 500:", randomNumber);

// генерация рандомных чисел до 500

let arr = [0, 123, -3, 43, 22, -16, 12, 99, 100];
let max1 = Math.max(...arr); 
console.log("Наибольшее число в массиве:", max1);

let arr1 = [10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2];

// достать наибольшее число с массива, сохранить в max      
let min = Math.round(Math.min(...arr1));
console.log("Наименьшее число после округления:", min);


let max = Math.ceil(Math.max(...arr));
console.log("Наибольшее число после округления вверх:", max);


let result = max % min;
console.log("Результат деления с остатком:", result);

// Достать наименьшее число с массива, округлить логически и сохранить в min  
// достать наибольшее число с массива, округлить вверх и сохранить в max
// поделить с остатком max на min, показать результат

let num1 = 10.4568313123132;


let numStr = num1.toFixed(3);
console.log("Строка с тремя знаками после точки:", numStr);

let length = numStr.length;
console.log("Длина строки:", length);

let numInt = Math.floor(Number(numStr));
console.log("Целое число без дробной части:", numInt);

// 1. num1 переводим в string, оставляем только три цифры после точки: '10.456'
// 2. показать длину полученной строки 
// 3. полученную строку переводим в тип number оставляя лишь целое число (убрать все цифры после точки)
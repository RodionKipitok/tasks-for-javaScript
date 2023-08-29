//  Цикол for

// for(let i = 10 ; i >= 0; i-=2){
// 	console.log(i);


// }


// for (let i = 0 ; i <= 10 ; i += 1){

// 	console.log(i)
// }

// console.log("cool")


// for (let i = 0 ; i <= 100 ; i += 10){

// 	console.log(i)
// }



// for (let i = 100; i >= 0 ;i -= 10){

// 	console.log(i);
// }

// console.log('cool');


// Генерация псевдо случайного числа 


// const minSalary = 500;
// const maxSalary = 5000;

// const  salary = Math.random(Math.round()*(maxSalary - minSalary)+minSalary,);

// console.log(`Случайное число : ${salary}`)



// Массивы

// const clients = ['Mango','Ajax','Poly','Jon'];

// for (let i = 0; i < clients.length; i += 1){

// 	console.log(clients[i]);
// }


// Цикил for of 

// const clients = ['Mango','Ajax','Poly','Dick'];

// for (const client of clients){

// 	console.log(client);

// }


// const string = 'javascript';
 
// for (const character of string){

// 	console.log(character);
// }


// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const friends = ["Mango", "Ajax", "Poly"];

// for (const friend of friends){

// 	console.log(friends);
// }


// const numbers = [1,2,3,4,5,6];

// for (const number of numbers){

// 	console.log(numbers)
// }


// Посчитать общую сумму покупок в корзине 

// С начала прописать алгоритм решения 

// const cart = [12,38,24,26,31,45];
// let total = 0 ;
// // Видем массив значит надо перебрать 

// // 1.Перебрать массив через фор 

// for( let i = 0; i < cart.length ; i += 1){

// 	console.log(cart[i]);

//  total = total + cart[i];	
// }

// // 2. Сделать переменую тотал 


// // 3. Каждый элемент прибавить к тотал 

// console.log('tota :',total)



// function getExtremeElements(array) {
// 	// Change code below this line
 
// 	return [array[0],array[array.length-1]];
	
// 	// Change code above this line
//  }



//  console.log(getExtremeElements([1, 2, 3, 4, 5]));


// const user = "Mango";

// console.log(user.split(''));


// function splitMessage(message, delimiter) {
// 	let words;
// 	// Change code below this line
// 	words = message.split(delimiter);
// 	// Change code above this line
// 	return words;
//  }



//  console.log(splitMessage("Mango hurries to the train", " "));


//  console.log(splitMessage("Mango", ""));

//  console.log(splitMessage("best_for_week", "_"))

// function calculateEngravingPrice(message,pricePreWord){

// return message.split(' ').length * pricePreWord
  

// }


// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// // const message = "JavaScript это интересно";

// // console.log(message.split(" "))

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);


// function  calculateTotal(number){

// let sum = 0;

// for(let i = 0;i <= number; i +=1){
	
// 	sum += i
// }

// return sum;
	
// }


// console.log(calculateTotal(7))


// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строкеНапиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке




// function findLongestWord(string) {
// 	// Change code below this line
// 	const words = string.split(' ');
// 	let longest = words[0];
// 	 for (let i = 1; i <= words.length -1; i += 1){
// 		if (words[i].length > longest.length) {
// 		  longest = words[i];
// 		}
// 	  }
// 	return longest;
// 	// Change code above this line
//  }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


function createArrayOfNumbers(min, max,) {
	const numbers = [];
	// Change code below this line
  for(let i = min; i <= max; i += 1 ){

	numbers.push(i);
  }
	// Change code above this line
	return numbers;
 }

//  Попросите вести пользователя  3 имени и фамилии,например ,студентов
// И ввыдите данные методом консоль.лог 
// виде абзаца  та нумеровоного списка 

// const names = [];

// while(names.length < 3){

// const name = prompt("Add nemes");
// names.push(name);
// }

//  console.log(names);

//  for (let i = 0 ; i < names.length; i += 1){

// 	console.log(`${i+1} : ${names}`);
// }


// function filterArray(numbers, value) {
//    // Change code below this line
//  const arrayBiggerNumber = [];

//   for (let i = 0 ; i < numbers.length; i +=1){
//     if( i > value){
//       arrayBiggerNumber.push(i);
//     }
//   }

// return arrayBiggerNumber;
//   // Change code above this line
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log();

// let arr = [1, 2, 3, 4, 5];
// let number = 3;
// let newArr = []

// for(let i = 0 ; i < arr.length ; i += 1){

// 	if( i < number){

// 		newArr.push(i)
// 		console.log(newArr);
// 	}
// }



// function filterArray(numbers, value) {
//    // Change code below this line
//  const newArr = [];

//   for( let i = 0 ; i < numbers.length; i +=1){
//      if(numbers[i] > value){

//        newArr.push(numbers[i])
//      }
    
//   }

// return newArr;
//   // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20)  );
// console.log(filterArray([12, 24, 8, 41, 76], 20)  );
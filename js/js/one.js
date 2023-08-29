// function checkFruit(fruit) {
// 	const fruits = ["apple", "plum", "pear", "orange"];

// //   const hasFruit = fruits.includes(fruit);
// // 	return hasFruit; // Change this line

//    return fruits.includes(fruit);

//  }

//  console.log(checkFruit('apple'));


// function getCommonElements(array1, array2) {
// 	// Change code below this line
// 	const common=[];
// 	for (const item of array1) {
// 	  if (array2.includes(item)) {
// 		 common. push (item)
// 	  }
// 	}
// 	return common   
 
//   // Change code above this line
//  }


//  console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
//  console.log(getCommonElements([1, 2, 3], [2, 4]));


// function calculateTotalPrice(order) {
// 	let total = 0;
// 	// Change code below this line
 
// 	for (const value of order) {
// 	  total += value;
// 	}
 
// 	// Change code above this line
// 	return total;
//  }


//  console.log(calculateTotalPrice([412, 371, 94, 63, 176]) );




// function filterArray(numbers, value) {
// 	// Change code below this line
// 	const filteredNumbers = [];
 
// 	for (let i = 0; i < numbers.length; i += 1) {
// 	  const number = numbers[i];
 
// 	  if (number > value) {
// 		 filteredNumbers.push(number);
// 	  }
// 	}
 
// 	return filteredNumbers;
// 	// Change code above this line
//  }
 



//  function filterArray(numbers,value){

// 	const filteredNumbers =[];

// 	for (const number of numbers){


// 		if (number > value) {

//  		 filteredNumbers.push(number);
// 		 }

// 	}

// 	return filteredNumbers;
//  }

//   console.log(filterArray([12, 24, 8, 41, 76], 20));


// function getEvenNumbers(start, end) {
//    // Change code below this line
//  const ArrEvenNumbers = [];
//  for (let i = start; i <= end ; i +=1){
//    if([i] % 2 === 0){
//      ArrEvenNumbers.push(i)
//    }
   
//  }

//    return ArrEvenNumbers; // Change code above this line
//   }

//   console.log(getEvenNumbers(3, 11) );

//   console.log(getEvenNumbers(6, 12));


//   Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// Объявлена переменная start со значением 6
// Объявлена переменная end со значением 27
// Объявлена переменная number без инициализации
// Итоговое значение переменной number равно 10
// В цикле for используется break для выхода до завершения всех итераций цикла


// function includes(array, value) {
// 	// Change code below this line
// 	 let FieldChecked = true;

//   for(let i = 0 ; i < array.length ; i += 1){
// 	 if( i === value){
 
//      return FieldChecked;

// 	 }
	 
//   }
// 	// Change code above this line
//  }





// function includes(array, value) {
// 	// Change code below this line
 
	
// 	 for (const number of array){
// 		if(number === value){
// 		  return true
// 		}
// 		return false
// 	 }
  
// 	// Change code above this line
//  }




// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));


// Объект 

// const book = {

// title: "The Last Kingdom",
// author: "Bernard Cornwell",
// genres: ["hestorical","adventure"],
// isPublic: true,
// rating: 8.38,

// };

// const BookTitle = book.title;


// console.log(BookTitle);
// console.log(book.author);



// const playList = {
	
// 	NameList : 'The Last King',
// 	title : 'Bernard Cornwell',
// 	rating : 8.37,

// };
 


// Обращения к свойству объекта имяОбъкта.ИмяСвоиства

// console.log(playList.title); // 'Bernard Cornewell'
// console.log(playList.author); // undefined 


// // Присвоение нового значения своиству объекта

// playList.rating = 9;

// console.log(playList.rating);


// // Добавление свойств

// playList.listeningCount = 10;

// console.log(playList.listeningCount);

// playList.translations = ['ua','ru'];

// console.log(playList.translations);



// Короткие свойства shorthand properties


// User

// const name = 'Radion ';
// const age = 27 ;

// const user = {

// 	name : name,
// 	age : age,

// };


// console.log(`${user.name}:${user.age}`);



// Распыление ...

// const temps = [12,34,5,16,17.19];

// console.log(Math.max(1,2,3,13,45,67,13));

// console.log(Math.max(...temps));



// Сшивание массивов в один с concat() и spread



// const lastWeekTemps = [1,2,3];
// const currentTemps = [4,5,6];
// const nextWeekTemps = [7,8,9];

// const xx = lastWeekTemps.concat(currentTemps,nextWeekTemps);

// console.log(xx);

// const allTemps =[...lastWeekTemps,...currentTemps,...nextWeekTemps];
// console.log(allTemps);

// Распыления объекта 

// Object.protatype.assign и spread 

// const a = {x : 1, y : 2, z : 5};
// const b = {x : 0, z : 3};

// // const c = Object.assign({}, a,b,);

// // console.log(c);

// const c = {
// 	...a,
//    name : 'Mango',
// 	...b,
// 	g : 12
// };

// console.log(c);


// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	rating: 8.38,
//  };


//  console.log(book.title,book.author,book.rating);


//  Деструктуризация 


//  const playList = {
// 	name : 'Мой супер плейлист',
// 	rating: 5,
// 	tracks: ['treck-1','treck-2','treck-3'],
// 	trackCount: 3,
//  };

//  const {rating,tracks,name,trackCount,author = 'Radion'} = playList;
 

// console.log(author);



// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	imgurl: 'home@gmail.com',
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// 	owner: {
// 	  name: "Henry",
// 	  phone: "982-126-1588",
// 	  email: "henry.carter@aptmail.com",
// 	},
//  };
 
// //  Change code below this line

//  const ownerName = apartment.owner.name;
//  const ownerPhone = apartment.owner.phone;
//  const ownerEmail = apartment.owner.email;
//  const numberOfTags = apartment.tags.length;
//  const firstTag = apartment.tags[0];
//  const lastTag = apartment.tags[2];

//  console.log(numberOfTags);

//  console.log(apartment['price']);
//  console.log(apartment['imgUrl']);
//  console.log(apartment['imgurl']);


//  apartment.price = 5000;

// // console.log(apartment.price);

//  apartment.rating = 4.7;

// //  console.log(apartment.rating);

//  apartment.tags.push("trusted");

// //  console.log(apartment.tags);

//  apartment.area = 60;
//  apartment.rooms = 3;
//  apartment.location = { country:"Jamaica",city:"Kingston"};

// //  console.log(apartment.location);


// // Старая запис 

// const name = "Генри Сибола";
// const age = 25;

// // const user = {name:name,age:age,};


// // Новый способ записи 

// const user = {name,age,};





// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);

// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }

// console.log(keys);

// console.log(values);


// function countProps(object) {
// 	let propCount = 0;
// 	// Change code below this line
//   for(const key in object){
// 	 if(object.hasOwnProperty(key)){
// 		propCount = Object.keys(object).length;

// 	 };
//   };
// 	// Change code above this line
// 	return propCount;
	
//  };


//  console.log( countProps({ name: 'Mango', age: 2 }));
//  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))
//  console.log({})


const apartment = {
	descr: "Spacious apartment in the city center",
	rating: 4,
	price: 2153,
 };
 const values = [];
 // Change code below this line
 const keys = apartment;

 
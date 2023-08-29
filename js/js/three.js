// Операция spread (распыленя)

// Array.prototype.concat() аналогично через spread

// const numbers = [1000,...[1,2,3],...[4,5,6],1500,];

// console.log(numbers);

// const highTemperatures = {
// 	yesterday: 28,
// 	today: 26,
// 	tomorrow: 33,
//  };

// Change code below this line

//  const {yesterday,today,tomorrow} = highTemperatures;
//  // Change code above this line
//  const meanTemperature = (yesterday + today + tomorrow) / 3;

//  console.log(meanTemperature);

// Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// const {yesterday:highYesterday,today:highToday,tomorrow:highTomorrow,icon:highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);
// console.log(highIcon);

// const books = [
// 	{
// 	  title: "The Last Kingdom",
// 	  author: "Bernard Cornwell",
// 	  rating: 8.38,
// 	},
// 	{
// 	  title: "Beside Still Waters",
// 	  author: "Robert Sheckley",
// 	  rating: 8.51,
// 	},
//  ];

//  for (const book of books) {
// 	console.log(book.title);
// 	console.log(book.author);
// 	console.log(book.rating);
//  }

// for (const { title, author, rating } of books) {
// 	console.log(title);
// 	console.log(author);
// 	console.log(rating);
//  }

//  const colors = [
// 	{ hex: "#f44336", rgb: "244,67,54" },
// 	{ hex: "#2196f3", rgb: "33,150,243" },
// 	{ hex: "#4caf50", rgb: "76,175,80" },
// 	{ hex: "#ffeb3b", rgb: "255,235,59" },
//  ];

//  const hexColors = [];
//  const rgbColors = [];
//  // Change code below this line

// //  for (const color of colors) {
// // 	const {hex,rgb} = color
// // 	hexColors.push(color.hex);
// // 	rgbColors.push(color.rgb);

// //  }

// for(const {hex,rgb } of colors){
// 	hexColors.push(hex)
// 	rgbColors.push(rgb)
// }

//  console.log(hexColors)
//  console.log(rgbColors)

// const user = {
// 	name: "Jacques Gluke",
// 	tag: "jgluke",
// 	stats: {
// 	  followers: 5603,
// 	  views: 4827,
// 	  likes: 1308,
// 	},
//  };

// const {name, tag, stats: {followers,views: userViews, like: userLikes = 0}} = user;

// console.log(name);
// console.log(followers);

// const forecast = {
// 	today: {
// 	  low: 28,
// 	  high: 32,
// 	  icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// 	},
// 	tomorrow: {
// 	  low: 27,
// 	  high: 31,
// 	},
//  };
// Change code below this line

//  const highToday = forecast.today.high;
//  const lowToday = forecast.today.low;
//  const todayIcon = forecast.today.icon;

//  const highTomorrow = forecast.tomorrow.high;
//  const lowTomorrow = forecast.tomorrow.low;
//  const tomorrowIcon = forecast.tomorrow.icon;

// const { today:{low:lowToday = 28,high : highToday = 32, icon : todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;

// console.log()

// const {tomorrow:{low:lowTomorrow = 27,high: highTomorrow = 31,icon : tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;

// const { today:{low:lowToday = 28,high : highToday = 32, icon : todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },tomorrow:{low:lowTomorrow = 27,high: highTomorrow = 31,icon : tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;

// const {low:lowToday=28,high:highToday=32,icon:todayIcon ='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',tomorrow:{low:lowTomorrow = 27,high:highTomorrow = 31, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }} = forecast

// console.log(lowTomorrow);
// console.log(highToday);

// console.log(todayIcon);

// const { low:lowToday = 28,high : highToday = 32, icon : todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = forecast;

// const{low:lowTomorrow = 27,high: highTomorrow = 31,icon : tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = forecast;

// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// Объявлена функция calculateMeanTemperature(forecast)
// В теле функции используется деструктуризация объекта
// В теле функции объявлена переменная todayHigh с помощью деструктуризации
// В теле функции объявлена переменная todayLow с помощью деструктуризации
// В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
// В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
// Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5
// Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37

// function calculateMeanTemperature(forecast) {

// 	const {
// 	  today: { low:todayLow, high:todayHigh},
// 	  tomorrow: { low:tomorrowLow, high:tomorrowHigh}
// 	} = forecast;
// 	  // Change code above this line
// 	  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// 	}

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// Паттерн Объекта настроик

// const showProfileInfo = function(userProfile){

//   const {name,tag,location,avatar,

// 	stats:{followers, views, likes}

// } = userProfile;

// console.log(`Name user:${name}, User tag:${tag}`)

// }

// const profile = {
// 	name: "Gluke",
// 	tag: "Kik",
// 	location: "Ocho Rios",
// 	avatar: "https://s3.amazonaws.com",
// 	stats:{

//      followers:5603,
// 	  views:4827,
// 	  likes:1308,

// 	}
// };

// showProfileInfo(profile);

// function makeTask(data) {
// 	const completed = false;
// 	const category = "General";
// 	const priority = "Normal";
// 	// Change code below this line

// 	// Change code above this line
// 	return { ...{ category, priority, completed }, ...data };
//  }

//  console.log(makeTask({ category: "Finance", text: "Take interest" }));

// function add(...args){

//  let total = 0;

//   for(const arg of args){

// 	total+= arg;
//   }

//   return total;

// }

// console.log(add(50,15, 27));

// function addOverNum(one, ...args) {
// 	let total = 0;

// 	console.log(one);
// 	console.log(args)
// 	for (const arg of args) {
// 	  if (arg > one) {
// 			total += arg;
// 	  }
// 	}
// 	return total;
//  }
// //  console.log(addOverNum(50, 15, 27))
//  console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))

// function findMatches(elements,...args) {
// 	const matches = []; // Don't change this line

// 	for(const element of elements){
// 		for(const arg of args){
// 			if(element === arg){
// 				matches.push(element)
// 			}
// 		}
// 	}

// 	// Change code above this line
// 	return matches
//  }

//  console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
//  console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));


// let user = {

//   nane:"John",
//   age: 30,

//   sayHi: function(){
//     alert(this.nane);
//   },

// };

// user.sayHi()

// let user = {name:"John"};
// let admin = {name:"Admin"};

// function sayHi(){

//   alert(this.name);
// };


// // используем одну и ту же функцию в двух объектах

// user.f = sayHi;
// admin.f = sayHi;


// // эти вызовы имеют  разное значение this
// // "this" внутри функции - это объект "перед точкой"

// admin.f()


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions(){
//   return this.potions;
// },
// addPotion(potionName){
 
//   this.potions.push(potionName);

// },

// removePotion(potionName) {
//   const { potions} = this;
//   for (let i = 0; i < potions.length; i += 1 ){
    
//     if(potionName === potions[i]){
      
//       potions.splice(i,1);
//     }
//   }

// },


  
// };


// console.log(atTheOldToad.getPotions());


// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'))
// console.log(atTheOldToad.getPotions());








// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion){
//     const {name:nameNewPotion,price} = newPotion;
//     const { potions } = atTheOldToad;
  
//    for (const potion of potions){
    
//     if(potion.name === nameNewPotion){

//       return `Error! Potion ${nameNewPotion} is already in your inventory!`;

//     }
//     }

//     this.potions.push(newPotion);

//    },

//   removePotion(potionName){
  
//     const {potions} = this;
   


//     for (let i = 0; i < potions.length; i += 1 ){
        
//      console.log(potions[i].name)

//     if(potionName === potions[i].name){

//       console.log(i)
//       potions.splice(i,1);
//     }
     
//   } 
    

// },
// updatePotionName(oldName, newName) {
//   const {potions} = this;
  
//   for( const iterator of potions){

//     if(iterator.name === oldName){
//       iterator.name = newName;
//       console.log(potions)
//       return;
//     }
//   }

// },
// };


// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'))

// const fnA = function(message,callback){

//   console.log(message);
//   console.log(callback);
//   callback()
// };

// const fnB = function () {

//   console.log("Это лог при вызове fnB");
// };

// fnA('qwew',fnB);

// const doMath = function (a,b, callback){

//    const result = callback(a,b);

//    console.log(result);

// };

// const add = function (x,y){

//   return x + y ;

// };

// const sub = function (x,y){
//   return x - y ;

// }

// doMath(2,3,add)
// doMath(5,2,sub);

// const buttonRef = document.querySelector('.js-button');

// console.dir(buttonRef)


// const callback = function(){

//   console.log('Через 2 секунді внутри колбека в таймауте');

// };

// console.log('В коде перед таймаутом');

// setTimeout(callback,2000 );

// console.log('В коде после таймаута');




// Стрелочные функции



// С параметрами 

// const add = (a,d) => {

//   return a + d ;
// };


// console.log(add(2,4))


// С одним параметром 

// const logMessage = message => {
//   console.log(message);


// }

// console.log(logMessage('Hello'))


// // Если параметров нет 


// const greet = () => {

//   console.log('Привет');

// };

// greet()
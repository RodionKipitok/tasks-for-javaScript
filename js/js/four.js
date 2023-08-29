
// const numbers = [5,10,15,20,25];

// numbers.forEach(function(number,index,array){

// 	console.log('number',number)
// })

// numbers.forEach(function(){})


// const numbers = [5,10,15,20,25];

// const filteredNumbers = numbers.filter(number =>{

// 	console.log(number);

// 	return number < 15;
// });

// const filteredNumbers = numbers.filter(number => number < 10 || number > 20 );

// console.log(filteredNumbers);


// const players = [

// 	{id: 'player-1',name:'Mango',timePlayer:310,points:54, online:false},
// 	{id: 'player-2',name:'Poly',timePlayer:470,points:92, online:true},
// 	{id: 'player-3',name:'Kiwi',timePlayer:230,points:48, online:true},
// 	{id: 'player-4',name:'Ajax',timePlayer:150,points:71, online:false},
// 	{id: 'player-5',name:'Chelsy',timePlayer:280,points:48, online:true}
// ];

// const onlinePlayer = players.filter(player => player.online);
// // console.table(onlinePlayer);

// const offlinePlaers = players.filter( player => !player.online);

// // console.table(offlinePlaers);


// const hardcorePlayers = players.filter( player => player.timePlayer > 250);
// // console.table(hardcorePlayers);

// const point = players.filter(player => player.points < 50);

// console.table(point);


// const numbers = [5,10,15,20,25];

// const total = numbers.reduce((acc,number) => {
	
// 	return acc + number;
// },0);

// console.log(total);


// function deliverPizza(pizzaName) {
// 	return `Delivering ${pizzaName} pizza.`;
	
//  };
 
//  function makePizza(pizzaName) {
// 	return `Pizza ${pizzaName} is being prepared, please wait...`;
	
	
//  };
 
//  // Chande code below this line
//  function makeMessage(pizzaName,callback) {
// 	return callback(pizzaName);
//  };


//  console.log(makeMessage('Royal Grand', makePizza));

//  console.log(makeMessage('Ultracheese', deliverPizza));


// const user  = {
// 	name: 'Alex',
// 	birthData : 1993,
// 	getAge: function(){
// 		return 2022 - this.birthData;
// 	},
// };

// console.log(user.getAge());



// function sum(a,b,logger){
// 	const result = a + b ;
// 	logger(`${a}+${b}=${result}`);
// 	return result;
// }


// function logger(arg){
// 	console.log(arg);
// };

// sum(5,6,logger);

// const pizzaPalace = {
// 	pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
// 	order(pizzaName,onSuccess,onError) {
// 		if()
// 	},
//  };
//  // Change code above this line
 
//  // Callback for onSuccess
//  function makePizza(pizzaName) {
// 	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//  }
 
//  // Callback for onError
//  function onOrderError(error) {
// 	return `Error! There is no pizza with a name ${error} in the assortment.`;
//  }
 
//  // Method calls with callbacks

// console.log( pizzaPalace.order('Smoked', makePizza, onOrderError));


//  pizzaPalace.order('Four meats', makePizza, onOrderError);
//  pizzaPalace.order('Big Mike', makePizza, onOrderError);
//  pizzaPalace.order('Vienna', makePizza, onOrderError);




// const fnA = function (messege,callback){

// 	console.log(messege)

// 	console.log(callback);
// 	callback(100)
// }


// const fnB = function(number) {

// 	console.log('Это лог вызова FnB',number)
// }


// fnA('Hi',fnB);
// fnA('Hi',fnB);


// const doMath = function (a,d,callback){

// 	const result = callback(a,d);

// 	console.log(result);
// };




// const add = function(x,y){

// 	return x+y ;

// };

// doMath(4,5,add);


// function makePizza(pizzaName, callback) {
// 	console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// 	callback(pizzaName);
//  }
 
//  makePizza("Royal Grand", function deliverPizza(pizzaName) {
// 	console.log(`Delivering pizza ${pizzaName}.`);
//  });
//  // Change code below this line
 
//  makePizza("Ultracheese",function eatPizza(pizzaName){

// 	console.log(`Eating pizza ${pizzaName}`)
//  } );



//  const pizzaPalace = {
// 	pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
// 	order(pizzaName,onSuccess,onError) {
// 	},
//  };
//  // Change code above this line


 
//  // Callback for onSuccess
//  function makePizza(pizzaName) {
// 	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//  }
 
//  // Callback for onError
//  function onOrderError(error) {
// 	return `Error! ${error}`;
//  }
 
//  // Method calls with callbacks
//  pizzaPalace.order('Smoked', makePizza, onOrderError);
//  pizzaPalace.order('Four meats', makePizza, onOrderError);
//  pizzaPalace.order('Big Mike', makePizza, onOrderError);
//  pizzaPalace.order('Vienna', makePizza, onOrderError);


//  const pizzas = ['Ultracheese', 'Smoked', 'Four meats']

//  pizzas.forEach(function(pizza){
// 	console.log(pizza)
//  })


// const numbers = [1,2,9,5,4,8,10];

// const descSortedNumbers = [...numbers].sort((a,b) => b-a);

// console.log(descSortedNumbers);

// const ascSortedNumbers = [...numbers].sort((a,b) => a- b);

// console.log(ascSortedNumbers);




// const players = [

// 	{id: 'player-1',name:'Mango', online:true,rank:800},
// 	{id: 'player-2',name:'Poly', online:false,rank:600},
// 	{id: 'player-3',name:'Kiwi', online:true,rank:100},
// 	{id: 'player-4',name:'Ajax', online:true,rank:400},
// 	// {id: 'player-5',name:'Chelsy',online:true,rank:500}
// ];


// const onlineAndSorted = players
//     .filter(player => player.online)
//     .sort((playerA,playerB) => playerA.rank - playerB.rank);

// 	 console.table(onlineAndSorted)

const players = [

	{id: 'player-1',name:'Mango',timePlayer:310,points:54, online:false},
	{id: 'player-2',name:'Poly',timePlayer:470,points:92, online:true},
	{id: 'player-3',name:'Kiwi',timePlayer:230,points:48, online:true},
	{id: 'player-4',name:'Ajax',timePlayer:150,points:71, online:false},
	{id: 'player-5',name:'Chelsy',timePlayer:80,points:48, online:true}
];


const updedPlayers =players.map(player =>({...player,points:player.points + player.points * 0.1}));

console.table(updedPlayers);


// const sortByBestPlayers = [...players].sort((prevPlayer,nextPlayer) => {
// 	return nextPlayer.timePlayer - prevPlayer.timePlayer;
// });


// console.table(sortByBestPlayers)



//  function processCall(recipient) {
// 	// Имитируем доступность абонента случайным числом
// 	const isRecipientAvailable = Math.random() > 0.5;
 
// 	if (!isRecipientAvailable) {
// 	  console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
// 	  // Логика активации автоответчика
// 	} else {
// 	  console.log(`Соединяем с ${recipient}, ожидайте...`);
// 	  // Логика принятия звонка
// 	}
//  }
 
const numbers = [1,2,3,5,7];


// было 

// const greaterThenTwo = numbers.filter(function(num){
// 	return num > 2
// })

// стало 
// const greaterThenTwo = numbers.filter(num => num > 2);


// console.log(greaterThenTwo);

// было

// const multByTwo = numbers.map(function(num){
// 	return num * 3;
// });

// стало 

// const multByTwo =  numbers.map(num => num * 3);

// console.log(multByTwo)


// было
// const sorded = multByTwo.sort(function(a,b){

//   return a- b

// });

// стало 

// const sorded = multByTwo.sort((a,b) => a-b);

// console.log(sorded);


// цепочка 

// было 

// const res = numbers

//    .filter(function(num){
// 		return num > 2
// 	 })
//    .map(function(num){
// 			return num * 3;
// 	})
// 	.sort(function(a,b){

// 		   return a- b
		
// 	 });	




// стало 


const res = numbers

    .filter(num => num > 2)
	 .map(num => num * 3)
	 .sort((a,b) => a - b)

	 console.log(res)





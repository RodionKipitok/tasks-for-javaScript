// const pizzaPalace = {
// 	pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
// 	order(pizzaName,onSuccess,onError) {

// 		if(this.pizzas.includes(pizzaName)){
// 			return onSuccess(pizzaName);
// 		 }
	
// 		 return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)

//  }

// }
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
//  console.log( pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log( pizzaPalace.order('Smoked', makePizza, onOrderError));

// console.log( pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError))
// console.log( pizzaPalace.order('Big Mike', makePizza, onOrderError))
 

//  console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// console.log(pizzaPalace.pizzas)

 
// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;
// 	// Change code below this line
 
// 	orderedItems.forEach(order => {
// 		totalPrice+= order;
// 	});
 
// 	// Change code above this line
// 	return totalPrice;
//  }


//  console.log(calculateTotalPrice([12, 85, 37, 4]));
//  console.log(calculateTotalPrice([164, 48, 291]));
//  console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//  console.log(calculateTotalPrice([8,15,23,6,13,17,24,23,14,10,16,12,6,9,13,24,7,15]));



//  function filterArray(numbers, value) {
// 	const filteredNumbers = [];
	
// 	numbers.forEach(number =>{if (number > value) {
//       filteredNumbers.push(number);
//     }})
 
// 	// Change code above this line
// 	return filteredNumbers;
//  }

//  console.log(filterArray([1, 2, 3, 4, 5], 3));
//  console.log(filterArray([1, 2, 3, 4, 5], 4));

//  console.log(filterArray([1, 2, 3, 4, 5], 5));
//  console.log(filterArray([12, 24, 8, 41, 76], 38));

//  console.log(filterArray([12, 24, 8, 41, 76], 20))

//  console.log([12, 24, 8, 41, 76])



//  function getCommonElements(firstArray, secondArray) {
// 	const commonElements = [];
// 	// Change code below this line
 
  
// firstArray.forEach(element => {
//  if(secondArray.includes(element)){
// 	commonElements.push(element);
//  }
// });
	 
 
// 	return commonElements;
// 	// Change code above this line
//  }
 

//  console.log(getCommonElements([1, 2, 3], [2, 4]));


//  const calculateTotalPrice = (quantity,pricePreItem) => quantity * pricePreItem;

//  console.log(calculateTotalPrice(5,100));

//  console.log(calculateTotalPrice(5,300));

//  console.log(calculateTotalPrice(6,100));


// const calculateTotalPrice = orderedItems => {

// 	let totalPrice = 0;


// 	orderedItems.forEach(item => {

// 		totalPrice += item;
		
// 	});

// 	return totalPrice;
// };


// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([164, 48, 291]))

// const changeEven = (numbers,value) =>{

// 	numbers.forEach(number => {

// 		if(number % 2 === 0){
// 			 return  number+= value;
// 		}
		
// 	});

	
// };


// function changeEven(numbers,value){
// 	const newArry = [];

// 	numbers.forEach(element => {
		
// 			if(element % 2 === 0){

// 			newArry.push(element = element +value)
// 			}
		
		
// 	});

// 	return newArry;
// }




// function changeEven(numbers, value) {
// 	// Change code below this line
//    const newArry = []

// 	for (let i = 0; i < numbers.length; i += 1) {
// 	  if (numbers[i] % 2 === 0) {
// 		return numbers[i]= numbers[i] + value;
// 	  }
// 	}
// 	// Change code above this line
//  }

// const changeEven = (numbers,value) =>{

	

// 	numbers.forEach(element => {
// 		if (element % 2 === 0){

// 		numbers.push(element = element + value)
// 		}
		
		
// 	});

// 	return numbers;
// }





// console.log(changeEven([1, 2, 3, 4, 5], 10))


// const pureMultiply = (array, value) => {
// 	const newArray = [];
 
// 	array.forEach(element => {
// 	  newArray.push(element * value);
// 	});
 
// 	return newArray;
//  };

//  const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// console.log(numbers);

// console.log(doubledNumbers);



// function changeEven(numbers, value) {

// 	const newArray = [];
// 	numbers.forEach(element => {
// 	  if (element % 2 === 0) {
// 		 newArray.push(element + value)
// 	  }else{

// 		newArray.push(element)
// 	  }
 
// 	});
// 	return newArray
//  }
 
//  console.log(changeEven([1, 2, 3, 4, 5], 10))
//  console.log(changeEven([17, 24, 68, 31, 42], 100))


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(elment => elment.length);

// console.log(planetsLengths)


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
// 	{
// 	  title: "The Dream of a Ridiculous Man",
// 	  author: "Fyodor Dostoevsky",
// 	  rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//  ];
//  // Change code below this line
 
//  const titles = books.map(book => book.title);

//  console.log(titles);

// const books = [
// 	{
// 	  title: "The Last Kingdom",
// 	  author: "Bernard Cornwell",
// 	  genres: ["adventure", "history"],
// 	},
// 	{
// 	  title: "Beside Still Waters",
// 	  author: "Robert Sheckley",
// 	  genres: ["fiction"],
// 	},
// 	{
// 	  title: "Redder Than Blood",
// 	  author: "Tanith Lee",
// 	  genres: ["horror", "mysticism"],
// 	},
//  ];

//  const allGenres = books.flatMap(book => book.genres);
//  const uniqueGenres = allGenres.filter((genre,index,array) => array.indexOf(genre) === index);


// console.log(allGenres)
// console.log(uniqueGenres)







// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];


// const best = students.filter(student => student.score >= HIGH_SCORE);

// console.log(best);

// const worst = students.filter(student => student.score < LOW_SCORE);

// console.log(worst)



//  // Change code below this line
 
//  const genres = books.flatMap(book => book.genres);

//  console.log(genres);


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
 

// console.log(evenNumbers);
// console.log(oddNumbers);



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
// 	{
// 	  title: "The Dream of a Ridiculous Man",
// 	  author: "Fyodor Dostoevsky",
// 	  rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//  ];



// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => {
// 	if (book.author === AUTHOR) {
// 	  return book.title
// 	}
//  });

// console.log(topRatedBooks)
// console.log(booksByAuthor);


const user = [
	{
	  name: "Moore Hensley",
	  email: "moorehensley@indexia.com",
	  eyeColor: "blue",
	  friends: ["Sharron Pace"],
	  isActive: false,
	  balance: 2811,
	  gender: "male",
	  age:37
	},
	{
	  name: "Sharlene Bush",
	  email: "sharlenebush@tubesys.com",
	  eyeColor: "blue",
	  friends: ["Briana Decker", "Sharron Pace"],
	  isActive: true,
	  balance: 3821,
	  gender: "female",
	  age:34
	},
	{
	  name: "Ross Vazquez",
	  email: "rossvazquez@xinware.com",
	  eyeColor: "green",
	  friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
	  isActive: false,
	  balance: 3793,
	  gender: "male",
	  age:24
	},
	{
	  name: "Elma Head",
	  email: "elmahead@omatom.com",
	  eyeColor: "green",
	  friends: ["Goldie Gentry", "Aisha Tran"],
	  isActive: true,
	  balance: 2278,
	  gender: "female",
	  age:21
	},
	{
	  name: "Carey Barr",
	  email: "careybarr@nurali.com",
	  eyeColor: "blue",
	  friends: ["Jordan Sampson", "Eddie Strong"],
	  isActive: true,
	  balance: 3951,
	  gender: "male",
	  age:27
	},
	{
	  name: "Blackburn Dotson",
	  email: "blackburndotson@furnigeer.com",
	  eyeColor: "brown",
	  friends: ["Jacklyn Lucas", "Linda Chapman"],
	  isActive: false,
	  balance: 1498,
	  gender: "male",
	  age:38
	},
	{
	  name: "Sheree Anthony",
	  email: "shereeanthony@kog.com",
	  eyeColor: "brown",
	  friends: ["Goldie Gentry", "Briana Decker"],
	  isActive: true,
	  balance: 2764,
	  gender: "female",
	  age:39
	}
 ];


		



 const getTotalBalanceByGender = (users, gender) => {
		 
	 let filterGenr = users.filter(user => user.gender === gender).reduce((acc,user) => {return acc + user.balance} , 0)

	 return filterGenr;
	  
  };




  console.log(getTotalBalanceByGender(user,"male"))

//  const a = [...user].reduce((acc,user) => { return acc + user.balance},0).filter(({gender}) => gender = gender);

//  console.log(a)


//  const getTotalBalanceByGender = (users, gender) => {
	
//  return [...users].sort()
   
//  };


//  const getSortedFriends = users => {
//    return [...users].flatMap(frend => frend.friends).sort((a,b) => a.localeCompare(b)).filter((friends,index,array) => array.indexOf(friends) === index)
//  };

// console.table(getSortedFriends(user))

//  const sortByDescendingFriendCount = users => {

// 	// return [...user].sort((a,b) => a.friends.length - b.friends.length).flatMap(user => user.name)

//   return [...users].sort((user1, user2) => user1.friends.length  - user2.friends.length).map(user => user.name)

//  };

// console.table(sortByDescendingFriendCount(user))

//  const sortByAscendingBalance = users => {
   
// 	return  users.sort((firstStudent, secondStudent) => firstStudent.balance - secondStudent.balance)
  
//  };

// console.table(sortByAscendingBalance(user))

//  const pepole = user.reduce((allfrends,frend) => {allfrends.push(...frend.friends)


// 	 return allfrends
// },[])

// console.log(pepole)

//  const tweets = [
// 	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
// 	{ id: "001", likes: 2, tags: ["html", "css"] },
// 	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// 	{ id: "003", likes: 8, tags: ["css", "react"] },
// 	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//  ];


//  const tags = tweets.reduce((allTags, tweet) => {
// 	allTags.push(...tweet.tags);
 
// 	return allTags;
//  }, []);
 
//  console.log(tags.length);


//  const calculateTotalBalance = users => users.reduce((total,user) =>  {
// 	 return    total + user.balance},0);

//  console.log(calculateTotalBalance(user))

// const isEveryUserActive = users => users.every( user => user.isActive);

// console.log(isEveryUserActive(user))

// const getActiveUser = (users) => users.filter(user => user.isActive);

// console.log(getActiveUser(user))



//  const getFriends = (users) => {

// 	const allFriends = users.flatMap(user => user.friends)
//    const uniqueFriends = allFriends.filter((friends,index,array) => array.indexOf(friends) === index);

// 	console.log(allFriends.length)

// 	// console.log(uniqueFriends);

// 	// return uniqueFriends

// 	return allFriends.length

//  }

//  console.log(getFriends(user))

//  const getUsersWithFriend = (users,friendName) => users.filter(user => user.friends.includes(friendName)
//  );


//  console.log(getUsersWithFriend(user,"Briana Decker"))

//  const getUsersWithEyeColor = (users, color) => users.filter( user => user.eyeColor === color)

//  const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);



// console.log(getUsersWithAge(user,20,30))
// console.log(getUsersWithAge(user,30,40))
// console.log(getUsersWithAge(user,80,100))


//  console.log(getUsersWithEyeColor(user,"blue"))
//  console.log(getUsersWithEyeColor(user,"green"))
//  console.log(getUsersWithEyeColor(user,"brown"))
//  console.log(getUsersWithEyeColor(user,"black"))
 
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every( element => element % 2 === 0);

// console.log(eachElementInFirstIsEven);

// const eachElementInFirstIsOdd = firstArray.every( element => element % 2 !== 0);

// console.log(eachElementInFirstIsOdd)

// const eachElementInSecondIsEven = secondArray;
// const eachElementInSecondIsOdd = secondArray;

// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;



// const players = {
// 	mango: 1270,
// 	poly: 468,
// 	ajax: 710,
// 	kiwi: 244
//  };
//  const playtimes = Object.values(players); // [1270, 468, 710, 244]
//  // Change code below this line
 
//  const totalPlayTime = playtimes.reduce((sum,current) =>{return sum + current},0);
 
//  // Change code above this line
//  const averagePlayTime = totalPlayTime / playtimes.length;


// console.log(totalPlayTime)

// console.log(averagePlayTime);


// const students = [
// 	{ name: "Mango", score: 83 },
// 	{ name: "Poly", score: 59 },
// 	{ name: "Ajax", score: 37 },
// 	{ name: "Kiwi", score: 94 },
// 	{ name: "Houston", score: 64 },
//  ];
 
//  // Название аккумулятора может быть произвольным, это просто параметр функции
//  const totalScore = students.reduce((total, student) => {
// 	return total + student.score;
//  }, 0);
 
//  const averageScore = totalScore / students.length;

// //  console.log(totalScore)

// //  console.log(averagePlayTime)


// const players = [
// 	{ name: "Mango", playtime: 1270, gamesPlayed: 4 },
// 	{ name: "Poly", playtime: 469, gamesPlayed: 2 },
// 	{ name: "Ajax", playtime: 690, gamesPlayed: 3 },
// 	{ name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//  ];
//  // Change code below this line
 
//  const totalAveragePlaytimePerGame = players.reduce((total,player) => {

// 	return  total + player.playtime / player.gamesPlayed;
//  },0)


//  console.log(totalAveragePlaytimePerGame)



 // Есть массив с картинками pictures.

const pictures = ['png', 'jpeg', 'txt', 'jpg', 'raw'];

//Напиши функцию которая создаст новый массив в котором будут только те файлы которые находятся во втором массиве format

const format = ['raw', 'jpeg'];

// должны получить массив ['jpeg', 'raw'];


// const creationArray = (firstArray,secondArray) => {

// 	const commonElements = [];

// 	firstArray.forEach(element => {
// 	  if (secondArray.includes(element)) {
// 		 commonElements.push(element);
// 	  }
// 	});
 
// 	// Change code above this line
// 	return commonElements;
// }

// console.log(creationArray(pictures,format));


// const creationArray = (firstArray,secondArray) => {

// 	const newArray = [];

// 	firstArray.forEach( item =>{
// 		if(secondArray.includes(item)){
//         newArray.push(item)
// 		}
// 	})

// 	return newArray;
// }

// console.log(creationArray(pictures,format));

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line


// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

// console.log(authorsInAlphabetOrder)

// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

// console.log(authorsInReversedOrder);





// const ascendingReleaseDates = [...releaseDates].sort();

// console.log(ascendingReleaseDates)

// const alphabeticalAuthors = [...authors].sort();

// console.log(alphabeticalAuthors)


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
// 	{
// 	  title: "The Dream of a Ridiculous Man",
// 	  author: "Fyodor Dostoevsky",
// 	  rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//  ];
//  // Change code below this line
 

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
// 	{
// 	  title: "The Dream of a Ridiculous Man",
// 	  author: "Fyodor Dostoevsky",
// 	  rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{
// 	  title: "The Dreams in the Witch House",
// 	  author: "Howard Lovecraft",
// 	  rating: 8.67,
// 	},
//  ];
//  const MIN_BOOK_RATING = 8;
//  // Change code below this line
 
//  const names = [...books].sort((a,b) => a.author.localeCompare(b.author)).filter(value => value.rating > MIN_BOOK_RATING).map(author => author.author)
 
//  console.table(names);

//  [...books].sort((a,b) => a.name.localeCompare(b.name))

//  ;

//  const aseRating =[...books].sort((a,d) => {
// 	return a.rating - d.rating;
//  })

// console.log(aseRating)

//  const sortedByAuthorName = [...books].sort((a,d) =>{
 
// 	const result = a.author[0] > d.author[0];

// 	if(result){
// 		return 1
// 	}

// 	if(!result){

// 		return -1
// 	}


//  })

 

//  console.log(sortedByAuthorName)
 
//  const sortedByReversedAuthorName = books;
 
//  const sortedByAscendingRating = books;
 
//  const sortedByDescentingRating = books;


//  const students = [
// 	{ name: "Mango", score: 83 },
// 	{ name: "Poly", score: 59 },
// 	{ name: "Ajax", score: 37 },
// 	{ name: "Kiwi", score: 94 },
//  ];
 
//  const inAscendingScoreOrder = [...students].sort(
// 	(firstStudent, secondStudent) => firstStudent.score - secondStudent.score
//  );
 
//  console.log(inAscendingScoreOrder);


//  const inDescendingScoreOrder = [...students].sort(
// 	(firstStudent, secondStudent) => secondStudent.score - firstStudent.score
//  );

//  console.log(inDescendingScoreOrder);
 
//  const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
// 	firstStudent.name.localeCompare(secondStudent.name)
//  );

//  console.log(inAlphabeticalOrder);

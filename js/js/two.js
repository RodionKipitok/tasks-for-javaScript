// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
//  };
//  const values = [];
//  // Change code below this line
//  const keys = Object.keys(apartment);
//  for(const key of keys ){
// 	values.push(apartment[key])
//  }

//  console.log(values);
 

// function countProps(object) {
// 	// Change code below this line
// 	let propCount = 0;
// 	const keys = Object.keys(object);
	
// 	for(const key of keys){
// 		if (object.hasOwnProperty(key)) {
// 		 propCount += 1;
// 	  }

// 	}
 
// 	return propCount;
// 	// Change code above this line
//  }

//   console.log( countProps({ name: 'Mango', age: 2 }));
//  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))
//  console.log({})
 

// function countProps(object){

// 	let propCount = 0;
  
//   const keys = Object.keys(object);
//   return keys.length;
//   return propCount;

// }

// console.log(countProps({}));


// function countTotalSalary(salaries){
// 	let totalSalary = 0;
// 	const ObjectValues = Object.values(salaries);

// 	for(const salary of ObjectValues){
// 		totalSalary += salary;
// 	};

//    return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// console.log(countTotalSalary({}));



// Массив Объектов


// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },

//  ];

//  const productName = "Grip";
 

// console.table(products);






//  function getProductPrice(productName) {
// 	// Change code below this line

//  for (const product of products){

// 	if(product.name === productName){

// 		return product.price
// 	}
//  }
	

//   return null;  

// };
// 	// Change code above this line
 

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice('Engine'));

// console.log(getProductPrice('Droid'));

// console.log(getProductPrice('Kiwi'));
// console.log( getProductPrice("Scanner"));

// console.log(getProductPrice("Radar"));


// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },

//  ];







// function calculateTotalPrice(propName){

// let totalproduct = 0;

// for(const product of products){

// 	if(product.name === propName){

// 		totalproduct = product.price * product.quantity;
// 	}
	
// };

// return totalproduct;

// };


// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Droid"));









//  const propName = 'name';

// const arrayValues = []

//  for(const product of products){

// 	if(product.hasOwnProperty(propName)){

// 		arrayValues.push(product[propName])
// 	}

		
	

//  }

//  console.log(arrayValues);


//  function getAllPropValues(propName) {
// 	// Change code below this line
//  const ArrayValues = [];
// 	for(const product of products){
// 	  if(product.hasOwnProperty(propName)){
		
// 		ArrayValues.push(product[propName]);

// 	  };
// 	};
 
// 	return ArrayValues;

// 	// Change code above this line
//  }

 


// console.log(getAllPropValues('quantity') );
// console.log(getAllPropValues("name"));




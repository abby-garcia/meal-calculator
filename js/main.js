// Diner Object that reps single diner














var Diner = function(name) {
	this.name = name;
    this.dishes = [];
}; 

// Dishes Objects 
Diner.prototype.addDish = function(name, cost){
	var dish = [name,cost];
	this.dishes.push(dish);
}

// Total up the cost of all of the diners' meals
Diner.prototype.totalDishCost = function(){
	var total = 0;

	for (var i = 0; i < this.dishes.length; i++) {
		total += this.dishes[i][1];
	};
	return total;

}

// Add a fixed tax percentage to the total bill
var Check = function(){
	this.diners =[]; // this will be a list of diners / will have an array of diner objects
	this.tax = 0.08;
	this.tip = 0.20;
}

// I DONT GET THIS PART

Check.prototype.addDiner = function(personObject){ // still confused by this
	this.diners.push(personObject); // how does it get the diner object? what does the diner object look like?
}




// Getting check total
Check.prototype.total = function(){ 
	var total = 0;

	for (var i = 0; i < this.diners.length; i++) {
		total += this.diners[i].totalDishCost(); //Methods need ();
	};
	total = total+(total * this.tax);
	total = total+(total * this.tip);

	return total; // we are returning ALL the diners. 

}


//SPLITTING THE TAB

Check.prototype.split = function(){
	//they need to split their own food, look at the array of diner! loop over diner
	var baseCost = 0;


	for (var i = 0; i < this.diners.length; i++) {
		baseCost += this.diners[i].totalDishCost(); //Methods need ();
	};

	var totalWithTip = baseCost * this.tip;
	var tipShare = totalWithTip / this.diners.length;

	for (var i = 0; i < this.diners.length; i++) {
		var dinerCost = (this.diners[i].totalDishCost() + (this.diners[i].totalDishCost() * this.tax)) + tipShare;
		console.log(this.diners[i].name + ': $' + dinerCost.toFixed(2));

	};
	
	var total = baseCost + (baseCost * this.tax) + (baseCost * this.tip)


	console.log('Total: $' + total.toFixed(2));


}




var check1 = new Check();

var abby = new Diner("Abby");
abby.addDish('burger', 5);

check1.addDiner(abby);

var tj = new Diner("TJ");
tj.addDish('pizza', 17);
check1.addDiner(tj);


console.log(check1.split());


var check2 = new Check();


//




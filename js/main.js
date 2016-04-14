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


Check.prototype.addDiner = function(diner){
	this.diners.push(diner);
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


	//




}





var check = new Check();
var abby = new Diner("Abby");
abby.addDish('burger', 5);
check.addDiner(abby);
var tj = new Diner("TJ");
abby.addDish('pizza', 17);
check.addDiner(tj);
console.log(check.diners);
console.log(check.total());

//




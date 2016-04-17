$( document ).ready(function() {
    console.log( "ready!" );

    var check1 = new Check();

    var diner1 = new Diner("diner1");
    var diner2 = new Diner("diner2");


    var menu = {
    	chicken: 10, 
    	pizza: 5, 
    	tiramisu: 3, 
    	tuscan: 10, 
    	steak:24, 
    	wine:8
    };


//if someone click on button, call function that totals everything
	$('.total').click(function(){
		
		var item1 = $('#diner1Item').val();
		var price1 = menu[item1]; //[] have access to keys


		var item2 = $('#diner2Item').val();
		var price2 = menu[item2]; //[] have access to keys

		

		diner1.addDish(item1, price1);

		diner2.addDish(item2, price2);


		check1.addDiner(diner1);
		check1.addDiner(diner2);


		var total = check1.total();

		$('.show_total').text("$"+total);

		// reset total back to zero

		check1.split();



		// Check.total();
		// $('.show_total).html();
	})







}); // belongs to document get ready


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
	// start out at 0

	for (var i = 0; i < this.diners.length; i++) {
		total += this.diners[i].totalDishCost(); //Methods need ();
		// loop through each diner adding their cost 
		// example, both eat chicken parm, both pay 10
		// total is 20
	};
	
	tip = total * this.tip;
	// just get the tip, not the total + the tip
	// if total is 20 than tip will be 4 (assuming 0.08 tax rate)
	total = total+(total * this.tax);
	// now add the total + total * tax
	// ex: 21.60
	total = total + tip;
	// now add the tip that was calculated before tax to the new total w/ tax
	// ex: 21.60 + 4 = 25.60
	

	return total.toFixed(2); // we are returning ALL the diners. 

}


//SPLITTING THE TAB

Check.prototype.split = function(){
	//they need to split their own food, look at the array of diner! loop over diner
	var baseCost = 0;
	// start at 0


	for (var i = 0; i < this.diners.length; i++) {
		baseCost += this.diners[i].totalDishCost(); //Methods need ();
		// loop through each diner adding their cost
		// example, both eat chicken parm, both pay 10
		// total is 20
	};

	var totalWithTip = baseCost * this.tip;
	// name of variable is confusing, this is not the total w/ tip
	// but just the tip, Ex: 20 * 0.20 = 4
	var tipShare = totalWithTip / this.diners.length;
	// dividing the tip by the number of diners
	// Ex. 4 / 2 = 2.00 for each diner to pay tip

	for (var i = 0; i < this.diners.length; i++) {
		var dinerCost = (this.diners[i].totalDishCost() + (this.diners[i].totalDishCost() * this.tax)) + tipShare;
		console.log(this.diners[i].name + ': $' + dinerCost.toFixed(2));
		// getting the diners total dish cost and adding in that amount * tax, then adding in tip
		// Ex. 10.00 + (10.00*0.08 = 10.80) + 2 = 12.80

	};
	
	var total = baseCost + (baseCost * this.tax) + (baseCost * this.tip)
	// total of both diners before tax and tip + that same total * tax + that same total * tip
	// Ex. 20 + (20*0.08) + (20*0.20) = 25.60


	console.log('Total: $' + total.toFixed(2));


}





//




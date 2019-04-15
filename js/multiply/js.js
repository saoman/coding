const a = [1,2,3,4,5]

a.__proto__.multiply = function(){ 
	this.push(
		...this.map(
			(item) => item * item
		)
		)}
a.multiply();
console.log(a);
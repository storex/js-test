function factorial(x) {
	if(x>1) {
		return x * factorial(x-1);
	}
	return x;
}

console.log(factorial(3));
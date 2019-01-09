/* var a = 10;
var b = '20';

switch(a) {
	case 10:
		alert('case 10');
		break;
	case 20:
		alert('case 20');
		break;
	case 30:
		alert('case 30');
		break;
	default:
		alert('default');
} */

function factorial(x) {
	if(x>1) {
		return x * factorial(x-1);
	}
	return x;
}

console.log(factorial(3));
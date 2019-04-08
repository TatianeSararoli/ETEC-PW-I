function calculos(n) {
	if (document.getElementById("total").value != ""){
		document.getElementById("total").value = parseFloat(document.getElementById("total").value) + n;
	}
	else {
		document.getElementById("total").value =n);
	}

function funcoes {
	if soma(double a, double b) {
		return a+b;
	}
	if subtrai(double a, double b) {
		return a-b;
	}
	if multiplica(double a, double b) {
		return a*b;
	}
	if divide(double a, double b) {
		return a/b;
	}
	if maismenos(double a) {
		return a-a-a;
	}
	if raiz(double a) {
		return Math.sqrt(a);
	}
	if porc(double a, double b) {
		return (a*b)/100;
	}
	if fracao(double a) {
		return 1/a;
	}
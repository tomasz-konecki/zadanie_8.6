var a = prompt('Podaj wartość a:'),
	b = prompt('Podaj wartość b:'),
	result = '',
	x = document.getElementById('equation');

var value = (a * a) + (2 * a * b) - (b * b);

if (value > 0) {result = 'dodatni';}
	else if (value < 0) {result = 'ujemny';}
		else {result = 'równy zero';}

x.innerHTML = result;
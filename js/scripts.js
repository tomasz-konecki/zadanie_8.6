var a = prompt('Podaj wartość a:'),
    b = prompt('Podaj wartość b:');

var value = (a * a) + (2 * a * b) - (b * b);

if (value > 0) {
    console.log('Wynik dodatni.');
} else if (value < 0) {
<<<<<<< HEAD
    console.log('Wynik ujemny.');   
=======
    console.log('Wynik ujemny.');	
>>>>>>> fe8490edb5ae77aa28283c6725dc5bcbafef5ec7
} else {
    console.log('Wynik równy zero.');
}

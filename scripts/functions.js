// ================================================================

function add(x, y) {
  return x + y;
}

const added = add(6, 9);

alert(added);

console.log(added);

const daysOfTheWeek = 3;

switch(daysOfTheWeek) {
  case 1:
    case 2:
      alert('today is a day');
      break;
      default:
        alert('there is no such a day');

}

// ===========================================================

const hi = function(type) {
  if(type === 'boss') {
    return function(name) {
      alert('Hi boss ' + name + '!');
    }
  }
  else
  return function(name) {
    alert('Hi ' + name + '!');
  }
}

const returnedFunction = hi('a');
returnedFunction('Mruczku');

// ==============================================================

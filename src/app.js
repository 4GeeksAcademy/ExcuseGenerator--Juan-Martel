import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const excuseFunction = () => {
    const subject = ['A dog', 'A random kid', 'A policeman', 'My mom', 'The boss'];
    const action = ['pooped in', 'stole', 'shot at', 'took away', 'destroyed'];
    const target = ['my jacket', 'my car', 'my window', 'my food', 'my laptop'];
    const when = [ 'while I was flying.', 'after dancing.', 'when I stopped.', 'drinking mate.'];

    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
    const excuse = `${getRandomElement(subject)} ${getRandomElement(action)} ${getRandomElement(target)} ${getRandomElement(when)}`;
      
    document.getElementById('excuse').innerText = excuse;

  };

excuseFunction()

};
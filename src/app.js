import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const excuseFunction = () => {
    const subject = ['a dog', 'a random kid', 'a policeman', 'my mom', 'the boss'];
    const action = ['pooped in', 'stole', 'shot at', 'took away', 'destroyed'];
    const target = ['my jacket', 'my car', 'my window', 'my food', 'my laptop'];
    const when = [ 'while I was flying.', 'after dancing.', 'when I stopped.', 'drinking mate.'];

    const randomSubject = subject[Math.floor(Math.random() * subject.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomTarget = target[Math.floor(Math.random() * target.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    const excuse = `I wanted to go but ${randomSubject} ${randomAction} ${randomTarget} ${randomWhen}`;
    document.getElementById('excuse').innerText = excuse;

  };

excuseFunction()

};
const Character = document.querySelector('.Character');
let rotation = 0;

function rotateCharacter() {
    rotation += 5;
    Character.style.transform = `rotateY(${rotation}deg)`;
    requestAnimationFrame(rotateCharacter);
}

rotateCharacter();
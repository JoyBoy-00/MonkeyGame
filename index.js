const button = document.getElementById('target-btn');
const scoreElement = document.getElementById('score');
const h1 = document.querySelector('h1');
const hiddenImage = document.getElementById('hidden-img');
let score = 0;

const SECRET_CODE = "ADS23865hhg897AS";
const SHIFT = 3; 
let count = 0;

document.addEventListener('click', () => {
    count++;
    if(count === 250)
        alert('Tired? Remember, the console is your best friend 😉');
})

function encryptCode(code) {
    return code.split('').map(char => {
        if (/[0-9]/.test(char)) {
            return ((parseInt(char) + SHIFT) % 10).toString();
        }
        return char;
    }).join('');
}

function decryptCode(encrypted) {
    return encrypted.split('').map(char => {
        if (/[0-9]/.test(char)) {
            return ((parseInt(char) - SHIFT + 10) % 10).toString();
        }
        return char;
    }).join('');
}

function checkWin() {
    if (score >= 1000) {
        showWinScreen();
    }
}

function showWinScreen() {
    h1.textContent = 'Congrats! You found the encrypted code!';
    const encryptedCode = encryptCode(SECRET_CODE);
    document.getElementById('encrypted-code').textContent = encryptedCode;
    document.querySelector('.code-display').style.display = 'block';
    button.style.display = 'none';
    
    console.log('To decrypt the code, call: decryptCode("' + encryptedCode + '")');
}


function secretWin() {
    score += 1000;
    scoreElement.textContent = score;
    showWinScreen();
}

button.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
    checkWin();
});

button.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    const sizeOffset = Math.floor(Math.random() * 10) + 10;
    
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    button.style.height =  sizeOffset + '5px';
    button.style.width = sizeOffset + '5px';
});

button.addEventListener('click', () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    const sizeOffset = Math.floor(Math.random() * 10) + 10;
    
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    button.style.height =  sizeOffset + '5px';
    button.style.width = sizeOffset + '5px';
});

console.groupCollapsed("If only there was a secret to win this game...")
console.info("Try calling secretWin() in the console 😉");

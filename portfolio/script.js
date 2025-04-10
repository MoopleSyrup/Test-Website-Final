const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nums = '0123456789';

// Correctly combine the characters into one string
const alphabet = katakana + latin + nums;

const fontsize = 14;
const columns = Math.floor(canvas.width / fontsize);

const rainDrops = new Array(columns).fill(1);

const draw = () => {
    // More transparent background for better fading effect
    context.fillStyle = 'rgba(7, 22, 17, 0.15)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0E4732';
    
    context.font = `${fontsize}px monospace`;

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontsize, rainDrops[i] * fontsize);

        if (rainDrops[i] * fontsize > canvas.height && Math.random() > 0.92) {
            rainDrops[i] = 1;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 40);

// Adjust canvas size when window resizes
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    rainDrops.length = Math.floor(canvas.width / fontsize);
    rainDrops.fill(1);
});



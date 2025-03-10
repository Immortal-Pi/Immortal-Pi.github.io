const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const customWords = ['Amruth Pai','Immortal Pi', 'Pai'];
const customWords2 = ['Data Scientist','UT Dallas', 'Texas'];

// const alphabet = katakana + latin + nums;
const allCharacters = [...katakana.repeat(3), ...latin.repeat(3), ...nums.repeat(3), ...customWords, ...customWords2];
const fontSize = 16;
const columns = canvas.width/fontSize;
const rainDrops = Array.from({ length: columns }).fill(canvas.height);

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}
const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    // for(let i = 0; i < rainDrops.length; i++)
    // {
    //     const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    //     context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

    //     if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
    //         rainDrops[i] = 0;
    //     }
    //     rainDrops[i]++;
    // }
    for (let i = 0; i < rainDrops.length; i++) {
        // Randomly pick a character or word from allCharacters
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        const text = allCharacters[randomIndex];

        // Render the character/word
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Reset drop to top after it goes off-screen or with a small random chance
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }

        // Move the drop down
        rainDrops[i]++;
    }
};
setInterval(draw, 60);

// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

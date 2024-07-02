const button = document.getElementById('button');
const paragraph = document.getElementById('paragraph');

button.addEventListener('click', () => {
    paragraph.textContent = 'You clicked the button!';
});
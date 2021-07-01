//https://www.youtube.com/watch?v=cNjIUSDnb9k
const button = document.querySelector('button')
/**
 * toggle is only called on button click
 * toggle === () => {}
 * toggle(param) === ()=>
 */
function toggle() {
    button.classList.toggle('altColor')
}

button.addEventListener('click', toggle)
// OR anonymous function
button.addEventListener('click', () => {
    button.classList.toggle('altColor')
})
/**
 * toggle is called immediately. Not callback
 */
/*
button.addEventListener('click', toggle());
button.addEventListener('click', toggle(param));
*/


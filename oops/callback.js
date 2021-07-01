//https://www.youtube.com/watch?v=cNjIUSDnb9k
/*
const button = document.querySelector('button')
*/
/**
 * toggle is only called on button click
 * toggle === () => {}
 * toggle(param) === (param)=>{}
 */
    /*
    function toggle() {
        button.classList.toggle('altColor')
    }

    button.addEventListener('click', toggle)
    // OR anonymous function
    button.addEventListener('click', () => {
        button.classList.toggle('altColor')
    })
    */
    /**
     * toggle is called immediately. Not callback
     */
    /*
    button.addEventListener('click', toggle());
    button.addEventListener('click', toggle(param));
    */

const firstAction = () => {
    console.log('I am first');
    setTimeout(secondAction, 2000);

}
const secondAction = () => {
    console.log('I am second');
}

setTimeout(firstAction, 5000);



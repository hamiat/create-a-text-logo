/* querySelectorAll returns a nodelist (has only a few methods) whilst an array (has a lot more (useful) methods like map, filter, etc). For this exercise we can use forEach as it's both a nodelist and array method*/

const inputs = document.querySelectorAll('.controls input')
const inputField = document.querySelector('#writing')
const btn = document.querySelector('button')
const inputText = document.querySelector('.text-written')

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    //or nothing for elements that dont have sizing dataset

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}

function handleTextInput(e){
    e.preventDefault();
    inputText.innerHTML = inputField.value;
    
    
}



inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
btn.addEventListener('click', handleTextInput)

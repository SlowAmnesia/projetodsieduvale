document.addEventListener('DOMContentLoaded', program);

function program(){
    const textarea = document.querySelector('#text');
    const maxlength = 400;
    const counter = document.querySelector('.counter');
    const button = document.querySelector('#submit');

    textarea.addEventListener('input', () => {
        textarea.style.height = '5rem';
        if (textarea.value.length == 0){
            button.disabled = true;
        } else{
            button.disabled = false;
        }
        if (textarea.value.length > 200){
            textarea.value = textarea.value.substring(0, maxlength);
        }
        if (textarea.scrollHeight > 80){
            textarea.style.height = textarea.scrollHeight + 'px';
        }
        counter.innerHTML = maxlength - textarea.value.length;
    });
}
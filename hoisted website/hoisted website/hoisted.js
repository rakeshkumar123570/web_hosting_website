const check = document.querySelector('.check');
const ul = document.querySelector('ul')
check.addEventListener('click',()=>{
    ul.classList.toggle("check_active");
});
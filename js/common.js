const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', ()=>{
    searchInputEl.focus(); //search 클래스 클릭하면 input요소도 focus되게 해준다!!
});

searchInputEl.addEventListener('focus',()=>{
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur',()=>{
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
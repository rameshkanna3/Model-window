'use strict';


const model=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnclose=document.querySelector('.close-modal');
const btnopen =document.querySelectorAll('.show-modal');


const openmodel=function(){
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closemodel=function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (let i=0;i<btnopen.length;i++){
    btnopen[i].addEventListener('click',openmodel);
}
btnclose.addEventListener('click',closemodel);
overlay.addEventListener('click',closemodel);

document.addEventListener('keydown',function(e){
    if (e.key==='Escape' && !model.classList.contains('hidden')){
            closemodel();
    }

})
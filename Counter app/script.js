const minusBtn= document.querySelector('.decrement')
const plusBtn= document.querySelector('.increment')
const count=document.querySelector('.count')
const changeBy= document.querySelector('.changeBy')
const resetbtn= document.querySelector('.resetBtn')

minusBtn.addEventListener('click',()=>{
    const countValue= parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText= countValue - changeByValue;
    
})

plusBtn.addEventListener('click',()=>{
    const countValue= parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText= countValue + changeByValue;
})

resetbtn.addEventListener('click',()=>{
    count.innerText=0;
})
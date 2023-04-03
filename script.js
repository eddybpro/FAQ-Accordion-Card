const btns = document.querySelectorAll('.btn'),
questions = document.querySelectorAll('.sub-title');
let flag = true;


btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(flag){
            btn.style.transform = 'rotate(180deg)';
            btn .previousElementSibling.firstElementChild.style .color = 'hsl(238, 29%, 16%)';
            btn.previousElementSibling.lastElementChild.style.display = 'block';
            flag = false;
        }else{
            btn.style.transform = 'rotate(0deg)';
            btn .previousElementSibling.firstElementChild.style .color = 'hsl(240, 6%, 50%)';
            btn.previousElementSibling.lastElementChild.style.display = 'none';
            flag = true;
        }
    })
})


questions.forEach(q=>{
    q.addEventListener('click',()=>{
        if(flag){
            q.parentElement.nextElementSibling.style.transform = 'rotate(180deg)';
            q.style.color = 'hsl(238, 29%, 16%)';
            q.nextElementSibling.style.display = 'block';
            flag = false;
        }else{
            q.parentElement.nextElementSibling.style.transform = 'rotate(0deg)';
            q.style.color='hsl(240, 6%, 50%)';
            q.nextElementSibling.style.display = 'none';
            flag = true;
        }
        

    })
})

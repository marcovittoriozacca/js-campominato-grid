const gridHtml = document.querySelector('.inner-grid');
const btnPlay = document.getElementById('btnPlay');

btnPlay.addEventListener('click', function(){
    
    for(let i = 1; i <= 100; i++){
    
        let box = document.createElement('div');
        
        box.classList.add('box');
        box.innerText = i;
    
        box.addEventListener('click', function(){
            this.classList.toggle('active')
            console.log(i)
        })
        
    
        gridHtml.append(box);
    }
})


const gridHtml = document.querySelector('.inner-grid');
const btnPlay = document.getElementById('btnPlay');

const difficulty = document.getElementById('difficultySelection');

//al click del bottone viene creata la griglia in base alla difficoltà
btnPlay.addEventListener('click', function(){
    gridHtml.innerHTML='';

    //x conterrà il numero di caselle
    //choice conterrà la difficoltà scelta dall'utente 

    let choice = difficulty.value;

    let x;

    switch(choice){
        case 'easy':
            x = 49;
            break;

        case 'normal':
            x = 81;
            break;

        case 'hard':
            x = 100;
            break;

    }

    //creiamo il numero di caselle in base alla scelta dell'utente
    
    for(let i = 1; i <= x; i++){
        
        //creiamo l'elemento div
        let box = document.createElement('div');
        
        //al div aggiungiamo la classe box che servirà a dare l'aspetto alla casella
        box.classList.add('box');

        //aggiungiamo il numero di "colonne" in base alla difficolta, così da creare la griglia in modo opportuno

        switch(choice){
            case 'easy':
                box.classList.add('boxEasy');
                break;
                
            case 'normal':
                box.classList.add('boxNormal');
                break;
    
            case 'hard':
                box.classList.add('boxHard');
                break;
        }

        //all'interno del div stamperemo il valore dell'iterazione, quindi da 1 a 100
        box.innerHTML = `<span>${i}</span>`;
        
        //ogni casella avrà un evento al click che aggiungerà e toggliera tramite TOGGLE la classe active a ogni specifica casella grazie al this.
        box.addEventListener('click', function(){
            this.classList.toggle('active')

            //stampa il valore della casella cliccata in console
            console.log(i)
        })
        //aggiungiamo il div con tutte le classi da noi aggiunte alla griglia nell'html
        gridHtml.append(box);
    }
})


window.onload = function (e) {
   
    let buttons = document.querySelectorAll('.button-box__button');
    let timmerInner = document.querySelector('.timer__content');

   

    buttons[0].addEventListener('click', (e)=>{
      
        let setTimeoutStart = setTimeout(timer, 1000);

        function timer () {
            let date = new Date();
            let seconds = date.getSeconds();
            timmerInner.innerHTML = seconds;  
            setTimeoutStart = setTimeout(timer, 1000);
        }  
        timer(); 

        
        buttons[1].addEventListener('click', () => {   
            clearInterval(setTimeoutStart);       
            timmerInner.innerHTML = "Счетчик остановлен";
             
        } );

    }); 

 

};

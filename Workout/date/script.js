
window.onload = function () {


    
    const dateBox = document.querySelector('.date');
    let year, month, dateMonth, days, hours, minutes, seconds;

    function timer() {
        const date = new Date();
        year = date.getFullYear();
        month = date.getMonth();
        dateMonth = date.getDate();
        days = date.getDay();
        hours = date.getHours();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        switch (month) {
            case 0 : month = 'январь';
            break;
            case 1 : month = 'феварль';
            break;
            case 2 : month = 'март';
            break;
            case 3 : month = 'апрель';
            break;
            case 4 : month = 'май';
            break;
            case 5 : month = 'июнь';
            break;
            case 6 : month = 'июль';
            break;
            case 7 : month = 'август';
            break;
            default: month = 'Неверно указан месяц';
        }
        switch (days) {
            case 1 : days = 'понедельник';
            break;
            case 2 : days = 'вторник';
            break;
            case 3 : days = 'среда';
            break;
            case 4 : days = 'четверг';
            break;
            case 5 : days = 'пятница';
            break;
            case 6 : days = 'суббота';
            break;
            case 0 : days = 'воскресенье';
            break;
            default: days = 'Неверно указан день';
        }
      

        dateBox.innerHTML = `Сейчас ${year} год ${dateMonth} число ${month} месяц ${days}, время ${hours}ч ${minutes}м ${seconds}с`;
        console.log(`${seconds}с`);
        setTimeout(timer, 1000);
    }
    timer();
};



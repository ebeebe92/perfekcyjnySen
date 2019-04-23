//sprawdzamy ile uzytkownik spal godzin w kazda noc przez tydzien
const getSleepHours = day => {
    switch(day){
        case 'Monday':
            return 1;
        case 'Tuesday':
            return 2;
        case 'Wednesday':
            return 3;
        case 'Thursday':
            return 1;
        case 'Friday':
            return 2;
        case 'Saturday':
            return 10;
        case 'Sunday':
            return 10;
    }
};

//obliczamy ile uzytkownik spal przez caly tydzien
const getActualSleepHours = () =>{
    return getSleepHours('Monday') +
        getSleepHours('Tuesday') +
        getSleepHours('Wednesday') +
        getSleepHours('Thursday') +
        getSleepHours('Friday') +
        getSleepHours('Saturday') +
        getSleepHours('Sunday');
}

//obliczamy idealny czas snu na kazdy dzien, który użytkownik preferuje, mnożąc ten czas przez 7, ponieważ musimy liczyć wszystkie dni
const getIdealSleepHours = () =>{
    let idealHours = 8;
    return idealHours*7;
}

//obliczamy debet snu
const calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    //pokaż wynik użytkownikowi, porównując rzeczywiste godziny snu i idealne
    if(actualSleepHours === idealSleepHours){
        console.log('You have got ' + actualSleepHours + ' hours of sleep this week, it is a perfect amount.');
    }
    if(actualSleepHours > idealSleepHours){
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week.');
    }
    if(actualSleepHours< idealSleepHours){
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
    }
}

//start programu
calculateSleepDebt();


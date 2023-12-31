let getHour = document.querySelector('.workHour p').innerHTML

let splitHour = getHour.split(' ').slice(3).join(' ')

let getHourP = document.querySelector('.workHour p')
getHourP.innerHTML = splitHour;

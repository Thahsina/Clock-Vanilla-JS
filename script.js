const hourEl= document.querySelector('.hour')
const minutesEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const toggleMode = document.querySelector('.toggle')
// const html = document.querySelector('html')


// toggleMode.addEventListener('click', function(e){
//     if(html.classList.contains('dark')){
//         html.classList.remove('dark')
//         e.target.innerHTML = 'Dark Mode'
//     }else{
//         html.classList.add('dark')
//         e.target.innerHTML = 'Light Mode'
//     }
// })

toggleMode.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

const days = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan', 'Feb','Mar','Apr','May','Jun', 'July','Aug','Sept','Oct','Nov','Dec'];


function setTime() {
    const time = new Date();
    // this is js built in function which returns thr current date,time,day,minutes,seconds in form of a object. from this object we can retrive data we want.
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13? hours% 12 : hours;
    const minutes = time.getMinutes() * 6
    const minute = time.getMinutes() 

    const seconds = time.getSeconds() * 6
    const ampm = hours >= 12 ? 'PM' : 'AM'


    hourEl.style.transform = `translate(-50%, -100%) rotate(${(hours*30) + (minutes/12)}deg)`
    minutesEl.style.transform = `translate(-50%, -100%) rotate(${(minutes)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${(seconds)}deg)`

    timeEl.innerHTML= `${hoursForClock}:${minute < 10 ? `0${minute}`:minute} ${ampm}`
    dateEl.innerHTML = `${days[day]},${months[month]} <span class='circle'>${date}</span>`
}

// const scale =  (num, in_min, in_max, out_min, out_max) => {
//     return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }


setTime()

setInterval(setTime,1000)
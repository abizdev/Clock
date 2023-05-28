const arrowS = document.querySelector('.arrS')
const arrowM = document.querySelector('.arrM')
const arrowH = document.querySelector('.arrH')
const dotS = document.querySelector('.dotS')
const dotM = document.querySelector('.dotM')
const dotH = document.querySelector('.dotH')
const circleS = document.querySelector('.SS')
const circleM = document.querySelector('.MM')
const circleH = document.querySelector('.HH')
const numS = document.querySelector('.numS')
const numM = document.querySelector('.numM')
const numH = document.querySelector('.numH')

function clock() {
  const time = new Date()
  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  let hours = time.getHours()
  
  arrowS.style.transform = `rotate(${seconds * 6}deg)`
  arrowM.style.transform = `rotate(${minutes * 6}deg)`
  arrowH.style.transform = `rotate(${hours * 30 + (minutes / 2)}deg)`
  
  dotS.style.transform = `rotate(${seconds * 6}deg)`
  circleS.style.strokeDashoffset = 440 - 440 * seconds / 60
  numS.textContent = seconds < 10 ? `0${seconds}` : seconds
  
  dotM.style.transform = `rotate(${minutes * 6}deg)`
  circleM.style.strokeDashoffset = 440 - 440 * minutes / 60
  numM.textContent = minutes < 10 ? `0${minutes}` : minutes
  
  if (hours > 12) { hours = hours - 12 }
  
  dotH.style.transform = `rotate(${hours * 30}deg)`
  circleH.style.strokeDashoffset = 440 - 440 * hours / 12
  numH.textContent = hours < 10 ? `0${hours}` : hours
  
  setTimeout(clock, 1000);
}
clock()

// tabs
const links = document.querySelectorAll('.tabpanel__links a')
const items = document.querySelectorAll('.tabpanel__item')

links.forEach(function(link, linkKey) {
  link.addEventListener('click', function() {
    links.forEach(function(link, linkKey) {
      links[linkKey].classList.remove('active')
      items[linkKey].classList.remove('active')
    })
    links[linkKey].classList.add('active')
    items[linkKey].classList.add('active')
  })
})
const header=document.createElement('header')
const box=document.createElement('div')
const gif=document.createElement('img')
const answer=document.createElement('div')
gif.setAttribute('onmouseup','showAnswer()')
answer.classList.add('answer')
gif.setAttribute('src',"img/Magical ball.gif")
gif.width=280;
gif.setAttribute('alt',"None")
box.classList.add('box')
const headerText='Ask a question, ball has all answers you need. Shake it'
header.textContent=headerText
document.body.prepend(header)
header.after(box)
box.appendChild(gif)
box.after(answer)
function showAnswer() {
    const arrayAnswer=['Yes','Possibly','Definitely', 'Of course', 'Probably','No','Absolutely not','Never', 'No way', 'May be']
    const phrase=arrayAnswer[Math.floor(Math.random()*10)]
    answer.textContent=phrase
    return phrase
}

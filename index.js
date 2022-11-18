var questions = [
    {
        title: 'Which is the correct syntax to select and alter this HTML element? <p id="sample">sampletext<p>',
        choices:[
            'document.getElement("p").innerhtml = "TextHere"',
            'document.getElementByType("p") = "TextHere"',
            'document.getElementById("sample") = "TextHere"',
            'None of the above'
        ],
        answer: 'document.getElementById("sample") = "TextHere"'
    },
    {
        title: 'Which is the correct syntax for referring to an external script named "index.js"?',
        choices: [
            '<script src="index.js">',
            '<link href="index.js"',
            '<SRC="index.js">',
            'None of the above'
        ],  
        answer: '<script src="index.js">'
    },
    {
        title: 'Which is the correct syntax for comments in Javascript?',
        choices: [
            '/*This*/',
            '<!--This-->',
            '//This',
            'None of the above'
        ],
        answer: '//This',
    },
    {
        title: 'which of the following is the correct pronounciation of GIF?',
        choices:[
            'GIF',
            'GIF',
            'GIF',
            'None of the above'
        ],
        answer: 'None of the above'
    },
];
var highscores = []
var i = 0;
var time = 60;
    setInterval(()=>{
        if (time > 0 && i < questions.length)
        time --
        document.querySelector('#time').innerHTML =
        `<h4>${time}<h4>`
    })

var score = 0;
{
    document.querySelector("#score").innerHTML = `<h4>${score}</h4>`
}

// button to begin the game.
document.querySelector('#begin').onclick = ()=>{
    QuizStart();
}

function QuizStart(){
    if(i < questions.length)
    document.querySelector('#question').innerHTML =
    `{
        <h3>${questions[i].title}</h3>
        <button class='answer'>${questions[i].choices[0]}</button>
        <button class='answer'>${questions[i].choices[1]}</button>
        <button class='answer'>${questions[i].choices[2]}</button>
        <button class='answer'>${questions[i].choices[3]}</button>
        // ('#begin').setAttribute('style', 'visibility:hidden')
    }`

function endGame(){
    document.querySelector('#status').innerHTML =
    `<h4>Game Over</h4>`
    document.querySelector('#question').innerHTML = ''
    // document.querySelector('#highscores').setAttribute('style','visibility:hidden')
    // document.querySelector('#time').setAttribute('style','visibility:hidden');}

document.querySelector('#names').addEventListener('submit', function(event){
    event.preventDefault()
    var username = document.querySelector('#name').value;
    var recentscores = JSON.parse(localStorage.getItem('scores'))
    if(recentscores){
        highscores = recentscores
    }
})
localStorage.setItem('scores', JSON.stringify(highscores))
var allscores = document.querySelector('#topscores')
for(var i = 0; i < highscores.length; i++){
    var userscore = document.createElement('div')
    userscore.innerText = highscores[i].name
    allscores.appendChild(userscore)
}
document.querySelector('#question').onclick = function(event){
    event.preventDefault()
        console.log(i)
        if(event.target.innerText === question[i].answer){
            document.querySelector('status').innerHTML = `<h4>Correct!<h4>`
            {
            score +=100;
            }
        }else if(event.target.innerText != question[i].answer){
            document.querySelector('#status').innerHTML =
            `<h4>Incorrect!<h4>`
            score -=100;
        }
 document.querySelector('score').innerText = `<h3>${score}</h3>`
 i++
 if(i < question.length){QuizStart}   
 else{ endGame()}
}}}
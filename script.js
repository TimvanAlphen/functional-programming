//console.log("Hello world!");


//The survey data is loaded from an .js file.
const surveyAnswers = data

//Variables with the surveyAnwsers and collumnname of "schoenmaat"
let kolomNaam = "vooropleiding"
let lijstAntwoorden = getAnswersForQuestion(surveyAnswers, kolomNaam)

//console.log van de lijst met antwoorden.
console.log("Survey answers are:",lijstAntwoorden)


//Function that saves an array with the answersForQuestions and pushes them to the variable "lijstAntwoorden".
function getAnswersForQuestion(answers, question){
	let answersForQuestion = []
  for (answer of answers){
  	answersForQuestion.push(answer[question])
 }
	return answersForQuestion
}


//The filter function only returns 'MBO' Bron: https://www.youtube.com/watch?v=BMUiFMZr7vk&ab_channel=FunFunFunction
let niveau = lijstAntwoorden.filter(function(lijstAntwoorden) {
	return lijstAntwoorden === 'HAVO'
})

//Map adds an eomji "=)" after MBO.
let emoji = niveau.map(function(niveau){
	return niveau + ' =)'
})

console.log("Niveau is:" ,niveau)

console.log(emoji)


/*
let dogs = [] 
for (let i = 0; i < animals.length; i++) {
	if (animals[i].species === 'dog')
		dogs.push(animals[i])
}


*/
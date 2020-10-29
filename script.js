
//The survey data is loaded from an .js file.
const surveyAnswers = data

//Variables with the surveyAnwsers and columnname of "oogKleur"
let kolomNaam = "oogKleur"
let lijstAntwoorden = getAnswersForQuestion(surveyAnswers, kolomNaam)


console.log("Niveau is:" ,niveau)

console.log(emoji)


//Function that saves an array with the answersForQuestions and pushes them to the variable "lijstAntwoorden".
function getAnswersForQuestion(answers, question){
	let answersForQuestion = []
  for (answer of answers){
  	answersForQuestion.push(answer[question])
 }
	return answersForQuestion
}


//The filter function only returns 'HAVO' Bron: https://www.youtube.com/watch?v=BMUiFMZr7vk&ab_channel=FunFunFunction
let niveau = lijstAntwoorden.filter(function(lijstAntwoorden) {
	return lijstAntwoorden === 'HAVO'
})

//Map adds an eomji "=)" after HAVO.
let emoji = niveau.map(function(niveau){
	return niveau + ' =)'
})



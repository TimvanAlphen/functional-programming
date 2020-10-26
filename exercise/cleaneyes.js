//console.log("Hello world!");


//The survey data is loaded from an .js file.
const surveyAnswers = data

//Variables with the surveyAnwsers and columnname of "schoenmaat"
let kolomNaam = "oogKleur"
let lijstAntwoorden = getAnswersForQuestion(surveyAnswers, kolomNaam)


//Function that saves an array with the answersForQuestions and pushes them to the variable "lijstAntwoorden".
//Thanks to lecture from Laurens.
function getAnswersForQuestion(answers, question){
	let answersForQuestion = []
  for (answer of answers){
  	answersForQuestion.push(answer[question])
 }
	return answersForQuestion
}

//A .map that changes the variable "lijstAntwoorden" to upper case.
let upperCased = lijstAntwoorden.map(lijstAntwoorden => lijstAntwoorden.toUpperCase());
//A .filter that removes the strigs in the variable "upperCased" that aren't 7 symbols long.
let correctHexValues = upperCased.filter(upperCased => upperCased.length == 7)



	console.log("Uppercased dataset:" ,upperCased)
	console.log("Only 7 symblos:" ,correctHexValues)
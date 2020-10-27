console.log("Hello World!")

//The survey data is loaded from an .js file.
const surveyAnswers = data

//Variables with the surveyAnwsers and columnname of "oogKleur"
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

//console.log(lijstAntwoorden)

function myFunction(p1, p2) {
	let myFunction = []

	for (let i = 0; i < lijstAntwoorden.length; i++) {
		myFunction.push(answer[question])

		 if (p2[p1].includes("#")) {
        console.log(myFunction);
 
     }
	}
}


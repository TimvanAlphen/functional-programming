console.log("Hello World!")

//The survey data is loaded from an .js file.
const surveyAnswers = data

//Variables with the surveyAnwsers and columnname of "oogKleur"
let kolomNaam = "oogKleur"
let lijstAntwoorden = getAnswersForQuestion(surveyAnswers, kolomNaam)


//Function that saves an array with the answersForQuestions and pushes them to the variable "lijstAntwoorden".
//Thanks to lecture by Laurens.
function getAnswersForQuestion(answers, question){
	let answersForQuestion = []
  for (const answer of answers){
  	answersForQuestion.push(answer[question])
 }
	return answersForQuestion
}

//console.log(lijstAntwoorden)


//A .map that changes the variable "lijstAntwoorden" to upper case.

//A .filter that removes the strigs in the variable "upperCased" that aren't 7 symbols long.

//Written with help from Gijs Laarman
// Loop through answers and make all items uppercase.
function filterEyeColors(listOfEyeColors) {
	// Transform every eye color to uppercase.
	let upperCased = listOfEyeColors.map(color => color.toUpperCase())

	// Filter out all invalid Hex codes.
	let correctHexValues = upperCased.filter(color => {
		if (color.startsWith('#') && color.length === 7) {
			return color
		}
	})

	return correctHexValues
}



console.log('correctHexValues: ', filterEyeColors(lijstAntwoorden))


	//console.log("Uppercased dataset:" ,upperCased)
	//console.log("Only 7 symblos:" ,correctHexValues)


console.log('for loop: ', filterEyeColorsForLoop(lijstAntwoorden))

//Written with help from Gijs Laarman
function filterEyeColorsForLoop(listOfEyeColors) {
// Create an array for my filtered data.
	let filteredData = []

	for (const color of listOfEyeColors) { 
		// Check if the hex code is valid.
		if (color.startsWith('#') && color.length === 7) {
			// Change hex to uppercase
			const hexColor = color.toUpperCase()

			// Add color to filtered list
			filteredData.push(hexColor)
		}
     }

    return filteredData
}


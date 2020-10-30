console.log("Hello world")
//Code taken from lecture by Laurens
const endpoint = 'https://opendata.rdw.nl/resource/t5pc-eb34.json'
const selectedColumn = 'areaid'

getData(endpoint)
  .then(result => {
     return result.json()
  })
.then(RDWData => {
	console.log("all data: ", RDWData)
	console.log("one datum,", RDWData[0])
    const areaIdArray = filterData(RDWData, selectedColumn)
	const usageArray = filterData(RDWData, 'usageid')
	const uniqueUsageValues = listUnique(usageArray)
	const uniqueAreaValues = listUnique(areaIdArray)
	const emptyStringsInAreas = countValuesInArray(areaIdArray, "")
	console.log("unique Usage Values", uniqueUsageValues)
	console.log(usageArray, areaIdArray)
	console.log("unique Area Values", uniqueAreaValues)
	console.log("empty strings in area", emptyStringsInAreas)

})

function getData(url){
	return fetch(url)
}


//returns all values for for a certain key in an array of data.
function filterData(dataArray, key) {
	return dataArray.map(item => item[key])
}

//Returns all unique values in an array
function listUnique(dataArray){
	let uniqueArray = []
	dataArray.map(item => {
		if (uniqueArray.indexOf(item) == -1)
		{
			uniqueArray.push(item)
		}
	})
	return uniqueArray

}

//Compares two arrrays and returns the values that are present in array1 but not array2.
function compareArray(array1, array2){
	return valuesOnlyPresentInArray1
}

//Returns the number of times a value is present in an array
function countValuesInArray(valueArray, specificValue){
 let count = 0
 valueArray.forEach(item => {
 	if (item == specificValue) {
 		count += 1
 	}
 })
 return count
}
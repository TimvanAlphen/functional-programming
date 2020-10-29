console.log("Hello world")
//Code taken from lecture by Laurens
const endpoint = 'https://opendata.rdw.nl/resource/t5pc-eb34.json'
const selectedColumn = 'areaid'

getData(endpoint)
  .then(RDWData => {
  	console.log("all data: ", RDWData)
  	console.log("one datum,", RDWData[0])
	const areaIdArray = filterData(RDWData, selectedColumn)
	const usageArray = filterData(RDWData, 'usageid')
	console.log(usageArray)
})

function getData(url){
	return fetch(url)
	const response  fetch(url)
	const data  response.json()
	return data
}


//returns all values for for a certain key in an array of data.
function filterData(dataArray, key) {
	return dataArray.map(item => item[key])
}
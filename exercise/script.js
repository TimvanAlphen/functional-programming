console.log("Hello world")

const endpoint = 'https://opendata.rdw.nl/resource/t5pc-eb34.json'
const selectedColumn = 'areaid'

getData(endpoint)
  .then(data => {
  	console.log("all data: ", data)
  	console.log("one datum,", data[0])
	const areaIdArray = filterData(data, selectedColumn)
	const usageArray = filterData(data, 'usageid')
	console.log(usageArray)
})

async function getData(url){
	const response = await fetch(url)
	const data = await response.json()
	return data
}



function filterData(dataArray, column) {
	return dataArray.map(item => item[column])
}
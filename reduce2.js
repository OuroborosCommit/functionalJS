var fs = require('fs');

var output = fs.readFileSync('data.txt','utf-8')
.trim()
.split('\n')
.map(line => line.split('\t'))
.reduce((costumer, line) => {
costumer[line[0]] = costumer[line[0]] || []
costumer[line[0]].push({
	name:line[1],
	price:line[2],
	quantity:line[3]
})
return costumer

},{} )

console.log('output:',JSON.stringify(output,null,2));
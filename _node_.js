var fs =require('fs')

fs.readFileSync('_arrayAlter.js',function(err,data){
	if(err)return console.error(err);
	console.log(data.toString());
});

console.log("Program ended");

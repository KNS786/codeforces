var data=process.argv.slice(2);
console.log(data);

function sayHello(names){
	names.forEach((name)=>{
		  process.send(`Greeting ${name}`);
	},this);
}
sayHello(data);

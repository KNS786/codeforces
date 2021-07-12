function callbacks(){
	return new Promise((resolve,reject)=>{
		 reject("hello");
	});
}
function pointes(){
   return new Promise((resolve,reject)=>{
	   resolve('super');
   });
}
function intailizedataBase(){
   var obj={};
   obj.name="navani";
   obj.age=19;
   obj.year=128293;
   obj.city=()=>"ernakulam";
}
function clearDataBase(){
	return{};
}





module.exports={
	callbacks,
	pointes,
	clearDataBase,
	intailizedataBase
};




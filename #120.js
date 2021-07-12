process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString+=data;
	let [k,arr]=inputString.split('\n')
	k=k.split(' ')[1]
	arr=arr.split(' ').filter(el=>el!=='');
      var obj={};
      arr.forEach(function(el,ind,arr){
          if(el==k){
              obj[el]=obj[el]?obj[el]+1:1;
          }
      })
   let res;
   res=Object.keys(obj);
   res=res.length?res.join(' '):-1;
   
   console.log(res);
   
	
});

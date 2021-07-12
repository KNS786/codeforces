process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    
inputString+=data;
inputString=inputString.split('\n').filter(el=>el!=='');
  var [len,...arr]=inputString;
    let cal;
    let i=1;
    let big,small,big_length,small_length,search,res=false;
    while(i<arr.length){
        var [s1,s2]=arr.slice(i-1,i+1);
          if(s1.length>=s2.length){
               big=s1;
               small=s2;
          }else{
              big=s2;
             small=s1;
          }
            
            for(let i=0;i<big.length;i++)
            {
                if(big.indexOf(small[i])>=0){
                    
                  res=true;
				 // obj[small[i]]=true;
                }
            }
            
             res=res?'YES':'NO';
             console.log(res)
            res=false;
         
        i=i+2;
        
    }
    
    
   
  
});



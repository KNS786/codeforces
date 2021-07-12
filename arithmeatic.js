process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputString="";
var currentLine=0;
process.stdin.on('data',function(data){
    inputString+=data;
});
process.stdin.on('end',function(){
   inputString=inputString.split('\n');
   main();
})
function readline(){
    return inputString[currentLine++];
}
function main (){
    var t=parseInt(readline());
    while(t--){
        
        var s=readline()
        //console.log(s);
        var max;
        for(let i=0;i<s.length;++i){
            
            if(s[i]=='+'){
                //console.log(i);
               let a=(s.substr(0,i));
               let b=(s.substr(i,s.length));
              console.log(" "+a);
              console.log(b);
              
              let sum=Number(a)+Number(b);
        
              
               let c="";
             max=Math.max(a.length,b.length);
          for(let i=0;i<max;i++)c+="-";
          console.log(c);
          console.log(" "+""+sum);
          
            console.log("\n");
            
                
            }
            else if(s[i]=='-'){
             let a=s.substring(0,i);
             let b=s.substring(i,s.length);
             let sum=Number(a)+Number(b);
        
            let ss=''    
        
              
              let s_len=a.length>b.length?a.length:b.length;
              for(let i=0;i<s_len;i++)ss+='-';
              
              console.log(" "+a);
              console.log(b);
              console.log(ss)
              console.log(" "+sum);
                console.log('\n');  
                  
            }else if(s[i]=='*'){
              
                 let ms="";
                 for(let i=0;i<max;i++)ms+=" ";
                 let a=s.substring(0,i);
                 let b=s.substring(i,s.length);
                   t_a=ms+""+a;
                   t_b=ms+""+b;
                  console.log(t_a);
                  console.log(t_b);
                  
                      
                      // console.log(t_a.length);
                      // console.log(t_b.length);
                       
                        let diff=Math.abs(t_a.length-t_b.length);
                       
                    /* t_b[t_b.length-2]=b;
                    
                       console.log(t_b);*/
                       let j=0;
                    
                       
                           
                        
                   
                 
                  /* console.log(a.length);
                   console.log(b.length);*/
                   
                 //console.log(a[a.length-1])
                
                 let mx=t_a.length>t_b.length?"a is Greater":"b is Greater";
                 if(mx==="b is Greater"){
                     
                     let found=false;
                     let i=a.length-1;
                        let j=1;
                        
                      
                     
                     
                      }else{
                     //b is greter
                     
                 }
                  
                  
                   
                   
            }
            
            
            
            
        }
        
        
        
        
    }
  
}
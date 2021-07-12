function daa(str){
	var res=[],ress=[];
	   str=str.split(''),
	   notfound=false;
	   let pointer="";
       let i=0;
	 while(i<str.length&&!notfound){
	    if(str[i]==')'){
			let m=i-1,//total array stack values -
			     found=false;
				 
			 while(m&&!found){
				   m--;
				   let postfix="";
				   
				 if(str[m].codePointAt(0)>96&&str[m].codePointAt(0)<123){
				    pointer+=res.pop();
				 }else if(str[m]==='+'){
                       postfix+=res.pop();
				 }
                 else if(str[m]==='-'){
                     postfix+=res.pop();
				 }else if(str[m]==='*'){
                     postfix+=res.pop();
				 }else if(str[m]==='/'){
                     postfix+=res.pop();
				 }else if(str[m]==='^'){
                     postfix+=res.pop();
				 }else if(str[m]==='('){
                     found=true;
					pointer=pointer+postfix;
					ress.push(pointer);
				 }
			 }
			 
		}else{
			res.push(str[i]);
		}
		++i;
	}
	console.log(ress);
	
}
daa("(a+(b*c))")       			 








function daa(str){
	var res=[],ress=[];
	   str=str.split(''),
	   notfound=false;
	  // console.log(str);
	   
	   let pointer="";
       let i=0;
	 while(i<str.length&&!notfound){
	    if(str[i]==')'){
			let m=i-2,//total array stack values -
			     found=false;
			     //console.log(m);
			     
				 
			 while(m&&!found){
				   m--;
				 
				   
				   let postfix="";
				   
				 if(str[m].codePointAt(0)>=96&&str[m].codePointAt(0)<123){
				     console.log(str[m]);
				     
				    pointer+=res.pop();
				  //  console.log(pointer);
				    
				 }else if(str[m]==='+'){
                       postfix+=res.pop();
				 }
                 else if(str[m]==='-'){
                     postfix+=res.pop();
				 }else if(str[m]==='*'){
                     postfix+=res.pop();
				 }else if(str[m]==='/'){
                     postfix+=res.pop();
				 }else if(str[m]==='^'){
                     postfix+=res.pop();
				 }else if(str[m]==='('){
                     found=true;
					pointer=pointer+postfix;
					console.log(pointer);
					
					ress.push(pointer);
				 }
			 }
			 
		}else{
			res.push(str[i]);
		//	console.log(res);
			
		}
		++i;
	}
	console.log(ress);
	
}
daa("(a+(b*c))")       			 



function data(str){
  var str=str.split('');
  var stack=[];
  var res=[];
  var pointer="";
  var str_pointer="";
      let i=str.length-1;
      let j=0;
        while(i){
           
            if(str[i]=='('){
                 let found=false;
                    j=stack.length;
                    while(j && !found){
                         
                          if(stack[j]==')'){
                              found=true;
                              pointer=pointer+str_pointer;
                              
                          }
                          else if(str[j].codePointAt(0)>96 &&stack[j].codePointAt(0)<123){
                              pointer+=stack.pop()
                              console.log(pointer);
                              
                          }
                           else if(stack[j]=='+')str_pointer+=stack.pop();
                           else if(stack[j]=='-')str_pointer+=stack.pop();
                           else if(stack[j]=='*')str_pointer+=stack.pop();
                           else if(stack[j]=='/')str_pointer+=stack.pop();
                           else if(stack[j]=='^')str_pointer+=stack.pop();
                        
                        j--;  
                    }
                    found=false;
                    
                      
            }
            stack.push(str[i]);
            
           --i;
            
        }
        console.log(pointer);
        console.log(stack);
        
    
}
data("(a+(b*c))")





stringMan("(a+(b*c))");
function stringMan(str){
    
    var stack=str.split('');
    var res=[];
    var postfix_str="",
       pointer_str="";
       
    let i=stack.length-1;
    while(i>=0){
        
        if(str[i]=='('){
            
             let j=res.length-1;
             while(j>=0){
                  
                  let cal=res.pop();
                   
                   if(cal.codePointAt(0)>96 && cal.codePointAt(0)<123){
                       pointer_str+=cal;
                   }
                   else if(cal=='+')postfix_str+=cal;
                   else if(cal=='-')postfix_str+=cal;
                   else if(cal=='*')postfix_str+=cal;
                   else if(cal=='^')postfix_str+=cal;
                   else if(cal=='/')postfix_str+=cal;
                   
                 
                 
                 
                 j--
             }
         
             
            
            
            
        }
        else{
            res.push(str[i]);
            
        }
        
        
        
        i--
        
    }
  
  
   pointer_str=pointer_str.split('');
    let pop=pointer_str.pop();
   pointer_str.unshift(pop);
   pointer_str=pointer_str.join('')+postfix_str;
   console.log(pointer_str);
   
 
}




function StringMan(str){
    var stack=str.split('');
    var pointer_str="";
    var postfix_str="";
    console.log(stack);
    var res=[];
      let i=0;
      while(i<stack.length){
          
          
          
          if(stack[i]==')'){
              let j=res.length-1;
            while(j){
                
                let top=res.pop();
               
                
                if(top.codePointAt(0)>96&&top.codePointAt(0)<123){
                    pointer_str+=top;
                    
                }
                else if(top=='+')postfix_str+=top;
                else if(top=='-')postfix_str+=top;
                else if(top=='*')postfix_str+=top;
                else if(top=='/')postfix_str+=top;
                else if(top=='^')postfix_str+=top;
                
                
                
                
                
              --j;
            }
            pointer_str=pointer_str+postfix_str;
            
          }else{
          
          
          res.push(str[i]);
          }
          
          ++i;
          
          
      }
      
      
      console.log(pointer_str);
      
      
      
      
}
StringMan("((a+b)*(z+x))");
StringMan("((a+t)*((b+(a+c))^(c+d)))");


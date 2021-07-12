function isPrime(){
    var t=readline();
    while(t--){
        var[start,end]=readline().split(' ');
        for(let i=start;i<=end;i++){
            let count=0;
              for(let m=1;m<=i;m++){
                  if(i%m==0)
                    count++;
              }
              if(count==2)
               print(i);
               
        }
        print('\n');
    }
    
}
isPrime();



	
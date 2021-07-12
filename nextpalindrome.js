let t=parseInt(readline());
while(t--){
    var n=parseInt(readline());
    var total=1;
    for(let i=n;i>1;i--)
     total*=i;
    print(total);
}



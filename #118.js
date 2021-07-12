process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";;
process.stdin.on('data',function(data){
    inputString+=data;
    var [t,arr]=inputString.split('\n').filter(el=>el!==''&&el!=='\n'&&el!==' ');
       t=t.split(' ')[1];
       t=parseInt(t);
       arr=arr.split(' ').filter(el=>el!==' ').map(el=>parseInt(el));
  
    //console.log(arr)
    

    var res=arr.filter(el=>el!==t);
    res=res.length?res.join(' '):"empty";
    console.log(res)
    
});


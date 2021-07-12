function decimal(){

  var dec=[];
  for(let i=0;i<255;i++)
	   dec.push(i);
   return dec;
      
}
function hex(){
    var hex=[];
	var dec=decimal();
	for(let i=0;i<dec.length;i++)
		hex.push(String.fromCodePoint(`${dec[i]}`));
	return hex;
}

function binary(){
	var bin=[];
     var dec=decimal();
     for(let m=0;m<dec.length;m++)
        bin.push(dec[m].toString(2));
	return bin;
}

module.exports={
	dec:decimal,
	hex:hex,
	bin:binary
};


	 
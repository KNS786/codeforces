const zlib=require('zlib');

const payload=Buffer.from("this is some data");

for(let i=0;i<30000;++i){
	zlib.deflate(payload,(err,buffer)=>{});
}

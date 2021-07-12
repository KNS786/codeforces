const Cryptr=require('cryptr');

const lock=(obj,password)=>{
  const cryptr=new Cryptr(password);
  const newObj={};


  for(const i Object.keys(obj)){
 newObj[i]=cryptr.encrypt(obj[i]);
}
return new Proxy(newObj,{
     set(target,key,value){
   return (target[key]=cryptr.encrypt(value));

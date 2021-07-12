process.stdin.resume();
process.stdin.setEncoding('ascii')

var inputString="";
var currentline=0;
process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n');
	main();
});

function readline()
{
    return inputString[currentline++];
}
function main(){
    let length=parseInt(readline());
    var city=[];
    var city_way=[];
     while(length--)
      city.push(readline());
    let bus_path=parseInt(readline())
     while(bus_path--)
         city_way.push(readline().split(' '));
     console.log(city_way)
     
     
      var  graph=new Graph();
      for(let i=0;i<city.length;i++){
        
           graph.addVertex(city[i]);
      }
      
      for(let j=0;j<city_way.length;j++){
          for(let k=0;k<(city_way[j].length)-1;k++){
              graph.addEdge(city_way[j][k],city_way[j][k+1])
          }
      }
      console.log(graph.print())

}


class Graph{
    constructor(){
        this.AdjList=new Map();
    }
    addVertex(vertex){
        if(!this.AdjList.has(vertex)){
            this.AdjList.set(vertex);
        }else{
            throw `Already exists`;
        }
        
    }
    addEdge(vertex,node){
       let arr=[]
        if(this.AdjList.has(vertex)){
         
            if(!this.AdjList.has(node)){ arr.push(1);}        
            else{ arr.push(0)}
            
        }else{
            throw `please add vertex first`;
        }
        console.log(arr)
    }
    print(){
        for(let [key,value] of this.AdjList){
            console.log(key,value);
        }
    }
}

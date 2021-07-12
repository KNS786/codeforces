class Graph{
	constuctor(){
		this.adjacencyList=new Map();

	}
addvertex(vertex){
	if(!this.adjacencyList.has(vertex)){
		this.adjacencyList.set(vertex,[]);

	}else{
		throw 'Already Exits!!';
	}
}
addEdge(vertex,node){
	if(this.adjacencyList.has(vertex)){
      if(this.adjacencyList.has(node)){
      	let arr=this.adjacencyList.get(vertex);
      	if(!arr.includes(node)){
      		arr.push(node);

      	}
      	else{
      		throw `cant add non-existing the vertex->${node}`;

      	}
      	else{
      		throw `you should add ${vertex} first`;
      	}
      }
	}
}
print(){
	for(let [key,value] of this.adjacencyList){
		console.log(key,value);

	}
}

};
let g=new Graph();
let arr=['A','B','C','D'];

for(let i=0;i<arr.length ;i++){
	g.addvertex(arr[i]);

}

g.addEdge('a','b');
g.addEdge('a','d');
g.addEdge('a','e');
g.addEdge('b','c');
g.addEdge('d','e');
g.addEdge('e','f');

g.print();

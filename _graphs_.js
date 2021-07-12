class Graph{
	  constructor()
	  {
		  this.AdjList=new Map();
	  }
 addVertex(vertex)
 {
	 if(!this.AdjList[vertex])
	 {
		 this.AdjList.set(vertex);
	 }
	 else{
		 thorw "Already Exist";
	 }
 }
 addEdge(vertex,node)
 {
	 if(this.AdjList.has(vertex))
	 {
		 if(this.AdjList.has(vertex))
		 {
			 let arr=this.AdjList.get(vertex);
			 if(!arr.includes(node))
			 {
				arr.push(node);
			 }
		 }
		 else{
			 throw `cat exiosting vertex values`;
		 }
	 }
	 else{
		 throw `add vertex ${vertex}`;
	 }
 }
 print()
 {
	 for(let [key,value] of this.AdjList)
	 {
		 console.log(key,value)
	 }
 }
}
var g=new Graph();
let arr=["a","b","c","d","e"];
g.addVertex("A","B");
g.addVertex("A","D");
g.addvertex("A","E");
g.print();
console.log(g);

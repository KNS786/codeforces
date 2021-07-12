"use strict";

function Node(value)
{
	this.value=value;
	this.left=null;
	this.right=null;
}


function Trees(node_values,edges)
{
	 var map=new Map();
	 /*this is Two Node_values and edges to run the values*/
	 let root=map.set(edges[0][0],node_values[0]);
	   for(let i=0;i<node_value;i++)
	   {
		   for(let j=1;j<edges.length;i++)
		   {
			   let[key,value]=root;
			   if(root[key]===edges[i][j])
			   {
				   /*join the Tree values*/
				   map.set(edges[i][j],node_values[j]);
			   }
			 map.set(edges[i][j],node_values[j]);
		   }
	   }
	   return -1;
}   




function Node(node_value,edges)
{
	this.node_value=node_value;
	this.edges=edges;
	this.next=null;
}

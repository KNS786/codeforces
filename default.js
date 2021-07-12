import React,{Component} from 'react';
import './App.js';

class App extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			title:'React simple CRUD Application',
			act:0,
			index:'',
			datas:[]
		}
	}
	componentDidMount()
	{
		this.refs.name.focus();
	}
	fSubmit=(e)=>{
		e.preventDefault();
		console.log("try");
		
		let datas=this.state.datas;
		let name=this.refs.name.value;
		let address=this.refs.address.value;
	  
	  let data={
		  name,
	  address
	  }
	  datas.push(data);
	  this.setState({
	  datas:datas
	  });
	  
	  this.refs.myForm.reset();
	  this.refs.name.focus();
	}
	
render()
{
	let datas=this.state.datas;
	return(
	  <div className="App">
	    <h1>{this.state.title}</h1>
		<form ref="myForm" className="myForm">
		   <input type="text" placeholder="Name" ref="name" className="formField"/>
		   <input type="text" placeholder="address" ref="address" className="formField"/>
		   <button onclick={this.fSubmit}className="myButton">submit</button>
		 </form>
		   <pre>
		   {
			   datas.map((data,i)=>{
			   <li key={i} className="myList">
				   {i+1},{data.name},{data.address}
			   <button onclick={()=>this.fRemove(i)} className="myButton">remove</button>
			   <button onclick={()=>this.fSubmit(i)} className="myButton">edit</button>
			   
				   </li>
			   });
		   }
import React, { Component } from 'react';
import logo from './logo.svg';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import './bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
		<Header title="Welcome Screen"></Header>
		<Body/>
      </div>
    );
  }
}


class Body extends Component{
	constructor(props){
		super(props);
		this.state={list:[{id:1,item:'php'},
                           {id:9,item:'c'}
		]
		               
		               
		           }
		               
	}
	render(){
		  var x=this.state.list.map(function(post){return <li data-key={post.id} className="list-group-item">{post.item}</li>});
		return(
	<section>
       <div className="container">
         
          <div className="row">
           <div className="col-md-6">
             <h1>Content</h1>
             <ul className="list-group">
          
            {x}
             </ul>
            
          

           </div>

           <div className="col-md-6 col2">
          <Form1 />
           </div>
          </div>
         
         
       </div>

	</section>
		);
	}
}

class Form1 extends Component{
    constructor(props){
		super(props);
		this.state={user:'',
          fields:{},

          err:{},
          output:''
	};
		this.onDo=this.onDo.bind(this);
		this.process=this.process.bind(this);
		console.log(this.state);
	}
       process(e){
           e.preventDefault();
           var error={};
       	      var fields=this.state.fields;
           
          if((fields["name"]=="")||(typeof fields["name"]=="undefined")){
          	 error["name"]="name required";
          }	 

          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields["email"])){
          	error["email"]="valid email required";
          }

           if((fields["email"]=="")||(typeof fields["email"]=="undefined")){
          	 error["email"]="email required";
          }
           if((fields["password"]=="")||(typeof fields["password"]=="undefined")){
          	 error["password"]="passord required";
          }
             this.setState({err:error});

       }

	onDo(e){

		
             var f=e.target.name;
             var v=e.target.value;
             var fields=this.state.fields;
             fields[f]=v;
			this.setState({fields});
			var op=JSON.stringify(fields);
			this.setState({output:op})
	}
	render(){
		
		return(
		<div className="well">
		<form onSubmit={this.process.bind(this)} className="form">
		<h3 className="text-warning">Signup Form</h3>
		<div className="form-group">
             <label>name </label>
		<input type="text" name="name" value={this.state.fields['name']}  className="form-control" onChange={this.onDo.bind(this)} />
		<span>{this.state.err['name']}</span>
		</div>

		<div className="form-group">
             <label>email </label> 
		<input type="text" name="email" value={this.state.fields['email']} className="form-control" onChange={this.onDo.bind(this)} />
		<span>{this.state.err['email']}</span>
		</div>
	

	<div className="form-group">
             <label>password</label>
		<input type="password" name="password" value={this.state.fields['password']} className="form-control" onChange={this.onDo.bind(this)} />
		<span>{this.state.err['password']}</span>
		</div>
	
	
		

		<div className="form-group">
            
		<input className="btn btn-primary" type="submit" />
		
		</div>
		
		</form>
		<div> {this.state.output}</div>
		</div>
		);
	}
}



export default App;

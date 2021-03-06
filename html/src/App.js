import './App.css';
import axios from 'axios';
import React, { Component } from "react";

class App extends Component {

  constructor() {
    super()

    this.state = {
      items:[],
      id:'',
      pat:'',
      game:'',
      desc:''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    axios.get('http://test.gth.intern.com/api/items')
    .then(res => {
      this.setState({
        items: res.data.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    if(this.state.id !== ''){
      return this.updateItem();
  }

  const item = {
    pat: this.state.pat,
    game: this.state.game,
    desc: this.state.desc
  };

  axios.post('http://test.gth.intern.com/api/items/', item)
    .then(res => {
      console.log(res.data)
      window.location.reload();
  });

  this.setState({id:'', pat:'', game:'', desc:''})
  }

  handleUpdate = (id = null , pat = null , game = null ,  desc = null) => {
    this.setState({id, pat, game, desc})
  }

  updateItem(){
    var item = { pat:this.state.pat, game:this.state.game, desc:this.state.desc}
    axios.put('http://test.gth.intern.com/api/items/' + this.state.id, item)
      .then((res) => {
        console.log('Item removed deleted!')
        window.location.reload();
      }).catch((error) => {
        console.log(error)
      })

  this.setState({
    id:'',
    pat:'',
    game:'',
    desc:''
  })
}

removeItem(itemId){
  axios.delete('http://test.gth.intern.com/api/items/' + itemId)
    .then((res) => {
      console.log('Item remove deleted!')
      window.location.reload();
    }).catch((error) => {
      console.log(error)
    })
  
}

render(){
return (
    <div className="App">
      <div className="jumbotron">
      
      <h1>My page : Update Patch Game </h1>


      </div>

      <nav>
        <span>Add your information about patch game:</span>
      </nav>
  
  
    <form onSubmit={this.handleSubmit}>

    <div className="form-group">
    <label>Patch:</label>
    <input 
      type="text" 
      name="pat" 
      value={this.state.pat}
      onChange={this.handleChange}
      />
    </div>

    <div className="form-group">
    <label>Game:</label>
    <input 
      type="text" 
      name="game" 
      value={this.state.game}
      onChange={this.handleChange}
      />
    </div>
   
    <div className="form-group">
    <label>Description:</label>
    <textarea 
      type="text" 
      name="desc" 
      value={this.state.desc}
      onChange={this.handleChange}
      >
      </textarea>
    </div>
    

    <div className="button button1">
      <button className="Submit"
      >Submit</button>
    </div>

    </form>

    <br></br>



  <nav>
    <span>Update Patch game:</span>
  </nav>

  <br></br>

  <table>
    <tr>
      <th width="25%">Patch version</th>
      <th width="25%">Game</th>
      <th width="25%">Description</th>
      <th width="25%">Edit</th>
      <th width="25%">Delete</th>
    </tr>

{
  this.state.items.map((item) => {
    return (
      <tr>
        <td>{item.pat}</td>
        <td>{item.game}</td>
        <td>{item.desc}</td>

        <td><button
          className="edit"
          onClick={() => this.handleUpdate(item.id,item.pat,item.game,item.desc)}
          >
            Edit
          </button>
          </td>

        <td><button
          className="delete"
          onClick={() => this.removeItem(item.id)}
          >
            Delete            
          </button>
        </td>
        </tr>
    )
        })
}
      
    </table>
    </div>
    );
    }
    }
export default App;
  
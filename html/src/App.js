import './App.css';
import axios from 'axios';
import React, { Component } from "react";
import NoonList from './Noon-listing.component';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemLocation = this.onChangeItemLocation.bind(this);
    this.onChangeItemReview = this.onChangeItemReview.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      location: '',
      review:''
    }
  }

  onChangeItemName(e) {
    this.setState({name: e.target.value})
  }

  onChangeItemLocation(e) {
    this.setState({location: e.target.value})
  }

  onChangeItemReview(e) {
    this.setState({review: e.target.value})
  }
}

function App() {
  return (
    <div className="App">
      <nav>
      <span>My page : Update Patch Game </span>
      </nav>
      <div>
  
  
    <form>
    <label for="fname">Patch:</label>
    <input type="text" id="fname" name="firstname" placeholder="Enter your patch version .."></input>

    <label for="lname">Game:</label>
    <input type="text" id="lname" name="lastname" placeholder="Enter your game .."></input>
   
  
    <label for="lname">Description:</label>
    <input type="text" id="lname" name="lastname" placeholder="Enter your description .."></input>

    <button class="button button1">Submit</button>
    </form>

   
    <div class="footer">
  <p></p>

   <h2>Patch Game :</h2>
  <p1>Information for all patch game , you can find detail about patch game that you want! </p1>  
</div>


  <body>
  <table id="customers">
  <tr>
    <th>Patch version</th>
    <th>Game</th>
    <th>Description</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>


<tbody>
<tr>
    <td>1.5</td>
    <td>Genshin Impact</td>
    <td>banner Zhongli rerun and new banner Eula</td>
        <td><button type="button" class="btn btn-warning active">edit</button></td>
        <td><button type="button" class="btn btn-danger active">delete</button></td>
</tr>
</tbody>
</table>
</body>
</div>

   </div>
   

  );
}

export default App;

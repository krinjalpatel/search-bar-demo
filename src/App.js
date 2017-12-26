import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import AppBar from 'material-ui/AppBar';
import Word from './words.json';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           <input />
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    // width: 500,
    // height: 450,
    width: 400,
    height: 250,
    overflowY: 'auto',
  },
};

class App extends Component {  
  constructor(props){
      super(props);
      this.state ={
        term : '',list : Word,
        search : ''
      };
    }
   
  updatedData(event){
    this.setState({search: event.target.value})
  }
render() {
  let filterList = this.state.list.filter((item) => {
        return item.word.indexOf(this.state.search) !== -1; 
      }
    );
  var flower = filterList.map(function(item){
    if(item.ratio === -1){
      return null;
    } 
    return (
        <GridList
          key={item.id}
          cellHeight={180}
          style={styles.gridList}
        >      
          <GridTile
            title={item.word}
            subtitle={item.meaning}
          >
          <img src={"http://appsculture.com/vocab/images/"+ item.id +".png"} alt=""/>
          </GridTile>
        </GridList>
    );
  });
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Search App"
          />
          <div className='searchBar'>
            <TextField floatingLabelText="Search Dictionary" name="search" value = {this.state.search}
              onChange={this.updatedData.bind(this)}
            />
          </div>
          <div style={styles.root}>{flower}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

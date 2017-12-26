import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import AppBar from 'material-ui/AppBar';
import Word from './words.json';
import './App.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
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
  var filterData = filterList.map(function(item){
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
          <div style={styles.root}>{filterData}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

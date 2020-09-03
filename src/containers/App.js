import React, { Component } from 'react';
// import CardList from './CardList';
import CardList from '../components/CardList';
import { robots } from '../robots';
// import { robots } from './robots';
// import SearchBox from './SearchBox';
import SearchBox from '../components/SearchBox';
// import Scroll from './Scroll';
import Scroll from '../components/Scroll';


// const App =()=>
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }
    componentDidMount(){
    //   console.log('check')  ;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
       return response.json();
    })
    .then(users =>{
        this.setState({robots:users})
    });
    // this.setState({robots:robots});
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
        // console.log(event.target.value);
       
    }
    render() {
        const filterRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length=== 0){
            return <h1 className='tc '>Loading....</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='tc'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filterRobots} />
                    </Scroll> 
                </div>
            );
        }
    }
}

export default App;

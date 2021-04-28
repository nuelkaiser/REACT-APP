import React,{ Component } from 'react'
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css'
class App extends Component {
    constructor() {
        super()
        this.state ={
            machine: [],
            Searchfield: '',
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => { return(res.json() ) } )
        .then(user => this.setState( { machine: user } ) )
    }

    onSearchChange = (event) => {
        this.setState( {Searchfield: event.target.value} )   
    }

    render() {
        const { machine, Searchfield } = this.state;
        const roboFilter = machine.filter(machine => {
            return(machine.name.toLowerCase().includes(Searchfield.toLowerCase()))
        })
       
        if ( !machine.length ) {
            return (
                <h1 className ='tc'> Loading </h1>
            )
        }else {
            return (
                <div className ='tc'>
                     <h1 className='f1 '>Robo Friends</h1>
                     <SearchBox SearchChange ={this.onSearchChange} />
                     
                     <Scroll>
                       <ErrorBoundry>
                        <Cardlist Robot={ roboFilter }/>
                       </ErrorBoundry>
                     </Scroll>
                </div>
            )
        }

    };

}
 
export default App;
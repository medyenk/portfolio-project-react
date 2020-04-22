import React, { Component } from 'react'

class Project extends Component {
    
    constructor(props){
        super(props)
        this.state={
           projects:[],
           isLoaded:false
        };
    }
    // async componentDidMount(){
    //     const response = await fetch('https://api.github.com/users/igork172/repos');
    //     const data = await response.json();
    //     this.setState({ projects: data});
    //     console.log(this.state.projects)
    // }
    componentDidMount() {
        fetch("https://api.github.com/users/igork172/repos")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                projects: result,
                isLoaded: true
              });
            }
          )
        };
          

    render() {

        if(this.state.isLoaded===true){
            console.log(this.state.projects)
        return (
            <div>
               
              {this.state.projects.map(item => (
                   <React.Fragment key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <a href={item.clone_url} target="_blank">Link to github</a>
              </React.Fragment>
            
          ))}  
          
            </div>
        )
        }
        else{
            return null;
        }
    }
}

export default Project

//<h1>Projects</h1>
//<h1>{this.state.projects[0].id}</h1>
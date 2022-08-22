import { Component } from "react";

class User extends Component{
    constructor(){
        super();
        this.state= {fname: "no name", lname:"" , email:"", password:""} 
    }
    // printName=()=>{
    //     console.log("sara");
    //     this.setState({fname: "sara"})
    // }
    getName=e=>{
        e.preventDefault();
        this.setState({fname: e.target.value})
        // console.log({fname});
    }
    getName1=e=>{
        e.preventDefault();
        this.setState({lname: e.target.value})
        // console.log({fname});
    }
    getName2=e=>{
        e.preventDefault();
        this.setState({email: e.target.value})
        // console.log({fname});
    }
    getName3=e=>{
        e.preventDefault();
        this.setState({password: e.target.value})
        // console.log({fname});
    }
    printinfo=()=>{
        

    }
    render(){
        return(
            <div>
                <h1>{this.state.fname}</h1>
                <h1>{this.state.lname}</h1>
                <h1>{this.state.email}</h1>
                <h1>{this.state.password}</h1>
                <form>
                <input type="text" placeholder="name" onChange={this.getName}/>
                <input type="text" placeholder="lname" onChange={this.getName1}/>
                <input type="text" placeholder="email" onChange={this.getName2}/>
                <input type="text" placeholder="password" onChange={this.getName3}/>
                <button on onClick={this.printinfo}>click to print</button>
                {/* <span>{text}</span> */}
                {/* <button onClick={this.printName}>printname</button> */}

                </form>
            </div>
        )
    }

}
export default User;
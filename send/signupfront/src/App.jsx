import React,{Component}from "react";
import "bootstrap/dist/css/bootstrap.min.css"
class App extends Component{
    constructor(){
        super()
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state={
            fullName:"",
            username:"",
            email:"",
            password:""
        }
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUserName(event){
        this.setState({
            username:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="form-div">
                        <form action="">
                            <input type="text" 
                            placeholder="Full Name"
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            
                            />

                            <input type="text" 
                            placeholder="Username"
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group'
                            />
                            <input type="text" 
                            placeholder="E-mail"
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />
                            <input type="password" 
                            placeholder="Password"
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />
                            <input type="submit" className="btn btn-danger btn-block" value='submit'/>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
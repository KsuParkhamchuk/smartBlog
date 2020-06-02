import React from 'react'
import './registration.css'
import {UserModel} from './models'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import TextField from '@material-ui/core/TextField';



class Registaration extends React.Component<UserModel.Props,UserModel.State> {
    constructor(props:any){
        super(props);
        this.state = {
            newUser: {
                userName: '',
                userLogin: '',
                userPassword: ''
            },
            passwordConfirmation: '',
            sessionToken: '',
            errors: []
        }
    }

    fieldChange = (e:any,fieldName:string) => {
        this.setState({
            newUser: {
                 ...this.state.newUser, 
                 [fieldName]: e.target.value} 
        })
    }

    userPasswordConfirmationOnChange = (e:any) => {
        this.setState({
            passwordConfirmation:e.target.value
        })
    }

    comparePasswords = () => {
        return (this.state.newUser.userPassword == this.state.passwordConfirmation);
    }

    userSignUp = (e:any) => {
        this.setState({errors: []});
        const {newUser, passwordConfirmation, errors} = this.state;
        if(this.comparePasswords()){
            console.log("good passwords");
              fetch("http://192.168.0.16:8090/api/v1/public/signUp",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(res => {
                this.props.saveUser(res)
            })
            
        }else{
            this.setState({
               errors: [...errors, "password and password confirmation don't match"]
            })
        }
    }


    render(){
        return (
            <div className="registrationForm d-flex justify-content-center mt-5">
                <form id="formRegistration" action="">
                    <div className="formRegistration__content">
                    <h2 className="text-center mb-4">Registration</h2>
                    <TextField  id="standard-basic"
                                label="Name" 
                                className="formRegistartion__input mb-3 w-100" 
                                onChange={(e) => this.fieldChange(e,'userName')} value={this.state.newUser.userName} 
                                type="text"/>
                    <br/>
                    <TextField id="standard-basic" 
                                label="Login" className="formRegistartion__input mb-3 w-100" 
                                onChange={(e) => this.fieldChange(e,'userLogin')} 
                                value={this.state.newUser.userLogin} 
                                type="text"/>
                    <br/>
                    <TextField id="standard-basic" 
                                label="Password" 
                                className="formRegistartion__input mb-3 w-100" 
                                onChange={(e) => this.fieldChange(e,'userPassword')} 
                                value={this.state.newUser.userPassword} 
                                type="password"/>
                    <br/>
                   <TextField id="standard-basic" 
                                label="Confirm password" 
                                className="formRegistartion__input mb-3 w-100"  
                                onChange={this.userPasswordConfirmationOnChange} 
                                value={this.state.passwordConfirmation} 
                                type="password"/>
                    <br/>
                    <div className="text-danger">{this.state.errors.map((item,i) =>
                        <div className="row">
                            <p>{item}</p>
                        </div>
                    )}</div>
                    <div className="formRegistration__button--wrapper">
                        <button className="blogBtn w-100 my-3" onClick={this.userSignUp} type="button">Sign up</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch:any) => ({
    saveUser: actions.saveUser
  })
  
  export default connect(null, mapDispatchToProps)(Registaration);
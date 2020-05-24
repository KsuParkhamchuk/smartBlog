import React from 'react'
import './registration.css'
import {UserModel} from '../models'


class Registaration extends React.Component<UserModel.Props,UserModel.State> {
    constructor(props:any){
        super(props);
        this.state = {
            newUser: {
                name: '',
                login: '',
                password: ''
            },
            passwordConfirmation: '',
            sessionToken: '',
            errors: []
        }
    }

    userNameOnChange = (e:any) => {
        this.setState({newUser: { ...this.state.newUser, name: e.target.value} })
    }
   
    userLoginOnChange = (e:any) => {
        this.setState({newUser: { ...this.state.newUser, login: e.target.value} })
    }

    userPasswordOnChange = (e:any) => {
        this.setState({newUser: { ...this.state.newUser, password: e.target.value} })
    }

    userPasswordConfirmationOnChange = (e:any) => {
        this.setState({passwordConfirmation:e.target.value})
    }

    comparePasswords = () => {
        return (this.state.newUser.password == this.state.passwordConfirmation);
    }

    userSignUp = (e:any) => {
        this.setState({errors: []});
        const {newUser, passwordConfirmation, errors} = this.state;
        if(this.comparePasswords()){
            console.log("good passwords");
            fetch("http://jsonplaceholder.typicode.com/users",{
                method: "POST",
                body: JSON.stringify(newUser)
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
                    <h2 className="text-center mb-4">Registration</h2>
                    <label className="formRegistartion__label" >Имя:</label>
                    <input className="formRegistartion__input" onChange={this.userNameOnChange} value={this.state.newUser.name} type="text"/>
                    <br/>
                    <label className="formRegistartion__label" >Логин:</label>
                    <input className="formRegistartion__input" onChange={this.userLoginOnChange} value={this.state.newUser.login} type="text"/>
                    <br/>
                    <label className="formRegistartion__label" >Пароль:</label>
                    <input className="formRegistartion__input" onChange={this.userPasswordOnChange} value={this.state.newUser.password} type="password"/>
                    <br/>
                    <label className="formRegistartion__label" >Подтвердите пароль:</label>
                   <input className="formRegistartion__input"  onChange={this.userPasswordConfirmationOnChange} value={this.state.passwordConfirmation} type="password"/>
                    <br/>
                    <div className="text-danger">{this.state.errors.map((item,i) =>
                        <div className="row">
                            <p>{item}</p>
                        </div>
                    )}</div>
                    <div className="formRegistration__button--wrapper">
                        <button className="formRegistartion__submit" onClick={this.userSignUp} type="button">Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Registaration
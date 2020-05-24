export namespace UserModel {
    export interface State {
        newUser:{
            name: string,
            login: string,
            password: string,
        }
        passwordConfirmation: string,
        sessionToken: string,
        errors: Array<String>
    }

    export interface Props {
        
    }
}



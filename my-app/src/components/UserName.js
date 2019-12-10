import React from "react";
import { Button, Form, Input, Container } from "semantic-ui-react";



class UserName extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            login:''
        }
    }
    changeHandler = event => {
        this.setState({ login: event.target.value})
        console.log(event.target.value)
    }

    submitHander = event => {
        event.preventDefault()
        this.props.lookUpUser(this.state.login)
        this.setState({login: ''})
    }

    render(){
        return (
            <Form onSubmit={this.submitHander}>
                <Input 
                    focus
                    type='text'
                    name='login'
                    value={this.state.login}
                    onChange={this.changeHandler}
                    style={{marginTop:'5%', marginBottom:'3%', width:"100%"}}
                />
                <Button type='submit' color='teal' style={{width:'100%'}}>Find User</Button>
            </Form>
        );
    }
}

export default UserName;

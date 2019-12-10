import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

class UserName extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            login:''
        }
    }

    changeHandler = event => {
        this.setState({ login: event.target.value})
        console.log(`${this.state.login}`)
    }

    submitHander = event => {
        event.preventDefault()
        // this.props.lookUpUser(this.state.login)
        this.setState({ login: event.target.value})
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

// function UserName(props) {
//   console.log(props);

//  function changeHandler(event) {
//       props.setState({login: event.target.value})
//       console.log(data.login)
//   }

//   function submitHander (event){
//       event.preventDefault()
//   }

//   return (
//     <Form onSubmit={submitHander}>
//       <Input
//         focus
//         type="text"
//         name="login"
//         value={data.login}
//         onChange={changeHandler}
//         style={{ marginTop: "5%", marginBottom: "3%", width: "100%" }}
//       />
//       <Button type="submit" color="teal" style={{ width: "100%" }}>
//         Find User
//       </Button>
//     </Form>
//   );
// }

// export default UserName;

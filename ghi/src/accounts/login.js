import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                email: "",
                password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {
                email: this.state.email,
                password: this.state.password,
            }

        const url = "http://localhost:8000/token/"
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            },
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            this.setState({
                    email: "",
                    password: "",
                },
            )
        }
    }

    render() {

        return (
            <div>
                <div>
                    <div>
                        <h1>Login</h1>
                        <form onSubmit={this.handleSubmit} id="login-form">
                            <div>
                                <input onChange={this.handleChange} value={this.state.email} placeholder="Email" required type="text" name="email"/>
                                <label htmlFor="Email">Email</label>
                            </div>
                            <div>
                                <input onChange={this.handleChange} value={this.state.password} placeholder="Password" required type="text" name="password"/>
                                <label htmlFor="Password">Password</label>
                            </div>
                            <button>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;

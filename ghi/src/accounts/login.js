import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                username: "",
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
            info: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                },
            profile: {
                bio: "",
                signature: "",
                city: "",
                state: "",
                },
            }

        const url = "http://localhost:8000/api/accounts/"
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
                info: {
                    username: "",
                    email: "",
                    password: "",
                    },
                profile: {
                    bio: "",
                    signature: "",
                    city: "",
                    state: "",
                    },
            })
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

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
        const data = {...this.state}

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
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="p-4 mt-4">
                        <h1 className="header-title">Login</h1>
                        <form onSubmit={this.handleSubmit} id="login-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} value={this.state.email} placeholder="Email" required type="text" name="email" className="form-control"/>
                                <label htmlFor="Email">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} value={this.state.password} placeholder="Password" required type="text" name="password" className="form-control"/>
                                <label htmlFor="Password">Password</label>
                            </div>
                            <button className="btn btn-secondary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;

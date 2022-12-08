import React from "react";

class SignupForm extends React.Component {
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
                    username: "",
                    email: "",
                    password: "",
            })
        }
    }

    render() {

        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="p-4 mt-4">
                        <h1 className="header-title">Sign up for an account!</h1>
                        <form onSubmit={this.handleSubmit} id="create-account-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} value={this.state.username} placeholder="Username" required type="text" name="username" className="form-control"/>
                                <label htmlFor="Username">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} value={this.state.email} placeholder="Email" required type="text" name="email" className="form-control"/>
                                <label htmlFor="Email">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} value={this.state.password} placeholder="Password" required type="text" name="password" className="form-control"/>
                                <label htmlFor="Password">Password</label>
                            </div>
                            <button className="btn btn-secondary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;

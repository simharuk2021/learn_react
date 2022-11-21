import React, { Component } from "react";
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Button, Card, Form } from "react-bootstrap";

class Github extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            isLoading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        this.getGitHubData(this.state.searchTerm);
    }
    handleChange(e) {
        this.setState({ searchTerm: e.target.value});
    }
    componentDidMount() {
        // this.getGitHubData('greg');
    }
    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                this.setState({
                    isLoading: false,
                    data: res.data.items
                })
                console.log(res.data.items);
            });
    }
    render() {
        const listUsers = this.state.data.map((user) =>
            <Card key={user.id}>
                <a href={user.html_url}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </a>
                <Card.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                    <h4>url:{user.url}</h4>
                </Card.Body>

            </Card>);
        return (
            <div>
                <Form class = "jumbotron" inline onSubmit={this.handleSubmit}>
                    <Form.Group controlID="formInlineName">
                        <Form.Control
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange}
                            />
                    </Form.Group>
                    {' '}
                    <Button type = 'submit'>Search</Button>
                </Form>
                <h3>Github Users Results</h3>
                {this.state.isLoading &&
                    <ReactLoading type="spinningBubbles" color="#444" />
                }
                {listUsers}
            </div>
        );
    }
}

export default Github;
import React, { Component } from 'react';
import axios from 'axios';

import { getJwt } from './helpers/jwt';


export default class AuthenticatedComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
            user: undefined
        }
    }

    componentDidMount() {
        const jwt = getJwt();
        if(!jwt) {
            this.props.history.push('/sign-in')
        }

        axios.get('http://localhost:5000/login', { headers: { Authorization: `Bearer ${jwt}` } })
        .then(res => res.setState({
            user: res.data
        })).catch(err => {
            this.props.history.push('/sign-in')
        });
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}
import React, {useState,useEffect} from "react";
import {ContentList} from './contentStyles';
import { HeaderWrapped } from "./header";

export default class Content extends React.Component {
    state = {
        loading: true,
        service: null
    };

    async componentDidMount() {
        const url = "https://604048b4f34cf600173c7cda.mockapi.io/api/v1/list-artisan";
        const response = await fetch(url);
        const data = await response.json();
     //   this.setState({service: data.services[0], loading: false});
        console.log(data);
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.service? (
                    <div>
                    <HeaderWrapped> <h2>Home</h2></HeaderWrapped>
                <div> Loading data ... </div>
                </div>) : (
                    <div>
                        <div>{this.state.services.name}</div> 
                        <div>{this.state.services.image}</div> 
                        <div>{this.state.service.description}</div> 
                        </div>)}
            </div>
        )
    }
}

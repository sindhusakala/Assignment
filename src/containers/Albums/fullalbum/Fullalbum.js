import React from 'react';
import { Component } from 'react';
import axios from 'axios';
class Fullalbum extends Component {
    state = {
        loadedalbum: null,
        albumId: null,
        albumphoto:null
    }
    componentDidMount() {
        console.log(this.props);

        this.fullalbum();  

    }
    componentDidUpdate() {
        this.fullalbum();
    }
        fullalbum = () => {
            if (this.props.match.params.id) {
                if (!this.state.loadedalbum || (this.state.loadedalbum && this.state.loadedalbum.id !== +this.props.match.params.id)) {
                    axios.get('/albums/' + this.props.match.params.id)
                        .then(response => {
                            console.log(response);
                            this.setState({
                                loadedalbum: response.data,
                                albumId: response.data.id

                            });
                            //console.log(response.data.id)
                            axios.get('/photos/' + response.data.id)
                                .then(response => {
                                    console.log(response.data.url)
                                    this.setState({ albumphoto: response.data.url })
                                })
                        });
                }
        }

    }
    render() {
        
        let album = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            album = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedalbum) {
            album = (
                <div className="Fullalbum">
                    <h1>{this.state.loadedalbum.title}</h1>
                    <img src={this.state.albumphoto} alt="loading..." width='500' height='600' />
                   
                </div>

            );
        }
        return (
            <div>
                <h1>fullalbum</h1>
                {album}
                </div>
                )
                 
                }
                }
export default Fullalbum;
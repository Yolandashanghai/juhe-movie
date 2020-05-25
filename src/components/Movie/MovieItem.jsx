import React, { Component } from 'react'
import '../../css/movie_item.scss';

export default class MovieItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className='box'>
                <img className='img' src={this.props.movieItem.pic_url} />
                <h3>{this.props.movieItem.movieName}</h3>
            </div>
        )
    }
}

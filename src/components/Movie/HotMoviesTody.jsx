import React, { Component } from 'react'
import { Spin, Alert} from 'antd';
import fetchJsonp from 'fetch-jsonp'
import MovieItem from './MovieItem.jsx'
export default class HotMoviesTody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityid: props.match.params.cityid,
            isLoading: true,
            movieList: []
        }
    }
    UNSAFE_componentWillMount() {
        this.fetchJsonp();
    }
    fetchJsonp(){
        // fetch的第一个then函数 res拿到的是一个Response对象,第二个then才能拿到真正的后台返回
        fetchJsonp('http://v.juhe.cn/movie/movies.today?key=5a1478ed47c479d698321669263373dd&cityid=' + this.state.cityid)
            .then(res => {
                this.setState({ isLoading: false })
                return res.json()
            })
            .then(data => {
                this.setState({
                    movieList: data.result
                })
            })
            .catch(err => {
                console.log(222, err)
            })
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(66666,nextProps)
        this.setState({
            cityid: nextProps.match.params.cityid,
            isLoading: true
        },function(){this.fetchJsonp();})
        
    }
    render() {
        return <div>
            {this.renderList()}
            <h1>{this.props.match.params.type}--{this.props.match.params.page}</h1>
                HotMoviesTody

            </div>

    }
    renderList = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>
        } else {
            return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{
                this.state.movieList.map(item => {
                    return <MovieItem movieItem={item} key={item.movieId} />
                })}
            </div>
        }
    }
}

import React, { Component } from 'react';
import axios from 'axios';


class NewsComponent extends Component{

    state = {
        news : []
    }

    async componentDidMount(){

        axios.get('https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=APPKEY')
        .then(response => {
          this.setState({ news:  [...response.data.articles, ...this.state.news]});
        })
        .catch(error => {
          console.log(error);
        });

    }

    render(){
        
        const { news } = this.state;
          
        return(
            <div>
                <br />
                {news.slice(0, 3).map(news => <div>{news.title}<hr /></div>)}
                <p></p>
                
            </div>
        )}
}


export default NewsComponent;
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from '../news-item/NewsItem'
import './NewsContainer.css'
const dotenv = require('dotenv');
dotenv.config()

function NewsContainer({ category }) {
    const apiKey = process.env.API_KEY;
    let art = [];
    const pageSize = 9;
    let data;
    const [state, setState] = useState({ articles: [], page: 1, totalResults: 0 })
    const fetchArticles = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?pageSize=${pageSize}&page=${state.page}&category=${category}&sortBy=publishedAt&language=en&apiKey=${apiKey}`)
        data = await response.json();
        art = data.articles;
        setState({ ...state, articles: state.articles.concat(art), page: state.page + 1, totalResults: data.totalResults })
        console.log(state.articles)
    }
    useEffect(() => {
        fetchArticles();
    }, [])
    return (
        <InfiniteScroll
            dataLength={state.articles.length} //This is important field to render the next data
            next={fetchArticles}
            hasMore={state.totalResults > (state.page * pageSize)}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
        // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
        >
            <div className="container">
              {state.articles.map((article) => {
                return <NewsItem article={article} />
              })}
            </div>
        </InfiniteScroll>

    )
}

export default NewsContainer


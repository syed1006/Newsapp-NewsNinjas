import React from 'react';
import './NewsItem.css'

function NewsItem({article}){
  return (
    <div className="item">
        {article.source ? <h5 className="source">{article.source.name?article.source.name:"unknown"}</h5>:<h5 className="source">unknown</h5>}
        <div className="image">
            <img src={(article.urlToImage)?article.urlToImage:'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'} alt="news to show" />
        </div>
        <section className="text">
            <h2 className="title">{article.title.slice(0,100) + '...'}</h2>
            <p className='description'>{article.content}</p>
            <p className='published'>{article.publishedAt}</p>
        </section>
        <section className="btns">
            <a href={article.url} className="more" target='_blank'>read more</a>
        </section>
    </div>
  )
}

export default NewsItem

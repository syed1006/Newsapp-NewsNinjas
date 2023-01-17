import React from 'react';
import './NewsItem.css'

function NewsItem({article}){
  return (
    <div className="item">
        {article.source ? <h5 className="source">{article.source.name?article.source.name:"unknown"}</h5>:<h5 className="source">unknown</h5>}
        <div className="image">
            <img src={article.urlToImage} alt="news to show" />
        </div>
        <section className="text">
            <h2 className="title">{article.title}</h2>
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

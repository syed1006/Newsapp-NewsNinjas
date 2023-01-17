import React from 'react'
import NewsItem from '../news-item/NewsItem'
import './NewsContainer.css'

function NewsContainer() {
  let articles = [
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Manish Singh",
      "title": "Indian edtech giant Byju’s changes sales strategy in key revamp",
      "description": "Indian edtech giant Byju’s is moving away from a business practice that attracted criticism over the years.",
      "url": "https://techcrunch.com/2023/01/15/indian-edtech-giant-byjus-changes-sales-strategy-in-key-revamp/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/GettyImages-1132893022.jpg?resize=1200,800",
      "publishedAt": "2023-01-16T06:17:20Z",
      "content": "Byjus has made a key change in its sales strategy, moving away from a business practice that attracted the edtech giant criticism over the years.\r\nThe Bengaluru-headquartered startup, Indias most val… [+2522 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Jagmeet Singh",
      "title": "Google-backed ShareChat cuts 20% workforce to 'sustain through headwinds'",
      "description": "ShareChat, the Indian social media startup backed by Google, Twitter, Tiger Global and Temasek, has laid off 20% of its workforce.",
      "url": "https://techcrunch.com/2023/01/15/sharechat-layoffs/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/02/GettyImages-1224020570.jpg?resize=1200,800",
      "publishedAt": "2023-01-16T05:32:13Z",
      "content": "ShareChat, the Indian social media startup backed by Twitter, Google, Tiger Global and Temasek, has laid off 20% of its workforce or over 400 employees just a month after eliminating more than 100 ro… [+2589 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Zack Whittaker",
      "title": "ODIN Intelligence website is defaced as hackers claim breach",
      "description": "Hackers claim to have breached the company, which provides technology, tools, and data to law enforcement.",
      "url": "https://techcrunch.com/2023/01/15/odin-intelligence-website-defaced-sweepwizard/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/01/odin-intelligence-website-defaced.jpg?resize=1200,784",
      "publishedAt": "2023-01-15T21:20:06Z",
      "content": "The website for ODIN Intelligence, a company that provides technology and tools for law enforcement and police departments, was defaced on Sunday.\r\nThe apparent hack comes days after Wired reported t… [+2290 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Zack Whittaker",
      "title": "Norton LifeLock says thousands of customer accounts breached",
      "description": "The cybersecurity company said the credential stuffing attack may have allowed intruders access to customer-saved passwords.",
      "url": "https://techcrunch.com/2023/01/15/norton-lifelock-password-manager-data/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/01/norton-lifelock.jpg?resize=1200,774",
      "publishedAt": "2023-01-15T19:21:52Z",
      "content": "Thousands of Norton LifeLock customers had their accounts compromised in recent weeks, potentially allowing criminal hackers access to customer password managers, the company revealed in a recent dat… [+1988 chars]"
    }
  ]
  return (
    <div className='container'>
      {articles.map((article) => {
        return <NewsItem article={article} />
      })}
    </div>
  )
}

export default NewsContainer


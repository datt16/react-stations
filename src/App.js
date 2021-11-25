// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [imgUrl, setImgUrl] = React.useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const getImgUrl = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(result => setImgUrl(result.message))
  }

  return (
    <div>
      <header className="header">
        <h1 className="header-title">Dog アプリ</h1>
      </header>
      <main>
        <div className="wrapper">
          <div className="grid-item contents__description">
            <p>犬の画像を表示するサイトです。</p>
          </div>
          <div className="grid-item contents__image">
            <img src={imgUrl} alt="犬の画像" />
            <div className="img-action">
              <button className="btn" onClick={() => getImgUrl()}>
                更新
              </button>
            </div>
          </div>
        </div>
        <hr></hr>
      </main>
    </div>
  )
}

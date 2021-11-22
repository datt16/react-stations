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
    console.log(imgUrl)
  }

  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <p>犬の画像を表示するサイトです。</p>
      <p>{imgUrl}</p>
      <img src={imgUrl} alt="犬の画像" />
      <br />
      <button onClick={() => getImgUrl()}>更新</button>
    </div>
  )
}

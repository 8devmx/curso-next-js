import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Clients.module.css'

const clients = {
  logos: [
    { image: 'google.jpg', altText: 'Logo', width: '116', height: '38' },
    { image: 'nike.jpg', altText: 'Logo', width: '86', height: '30' },
    { image: 'samsung.jpg', altText: 'Logo', width: '113', height: '17' },
    { image: 'apple.jpg', altText: 'Logo', width: '38', height: '46' },
    { image: 'intercom.jpg', altText: 'Logo', width: '117', height: '30' },
    { image: 'adidas.jpg', altText: 'Logo', width: '64', height: '43' }
  ]
}
const Clients = () => {
  return (
    <div className={styles.clients}>
      {
        clients.logos.map((logo, index) => {
          return (
            <Image key={index} src={`/images/${logo.image}`} alt={logo.altText} width={logo.width} height={logo.height} />
          )
        })
      }
    </div>
  )
}

export default Clients

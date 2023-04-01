import Image from 'next/image'
import styles from '@/styles/Testimonials.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const clients = [
  {
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
    author_image: 'author_1.jpg',
    author: 'Gemma Nolen',
    ranking: '★',
    ranking_repeat: 5,
    company: 'Google'
  },
  {
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
    author_image: 'author_2.jpg',
    author: 'Gemma Nolen',
    ranking: '★',
    ranking_repeat: 5,
    company: 'Google'
  },
  {
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
    author_image: 'author_3.jpg',
    author: 'Gemma Nolen',
    ranking: '★',
    ranking_repeat: 3,
    company: 'Google'
  },
  {
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
    author_image: 'author_1.jpg',
    author: 'Gemma Nolen',
    ranking: '★',
    ranking_repeat: 5,
    company: 'Google'
  },
  {
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
    author_image: 'author_2.jpg',
    author: 'Gemma Nolen',
    ranking: '★',
    ranking_repeat: 5,
    company: 'Google'
  },
  {
    text: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
    author_image: 'author_3.jpg',
    author: 'Gemma Nolen',
    ranking: '★',
    ranking_repeat: 3,
    company: 'Google'
  }
]

const settings = {
  autoplay: true,
  infinite: true,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Testimonials = () => {
  return (
    <>
      <h2 className={styles.testimonials__title}>Clients</h2>
      <div>
        <Slider {...settings}>
          {
            clients.map((client, index) => {
              return (
                <div key={index} className={styles.testimonial}>
                  <h3>{client.text}</h3>
                  <div className={styles.author}>
                    <Image src={`/images/${client.author_image}`} alt='Author Image' width='50' height='50' />
                    <p>
                      {client.ranking.repeat(client.ranking_repeat)}<br />
                      {client.author}, <br />
                      {client.company}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </>
  )
}

export default Testimonials

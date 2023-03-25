import Image from 'next/image'
import styles from '@/styles/Services.module.css'

const services = [
  { image: 'product_design.jpg', width: '125', height: '125', alt: 'Product Design', title: 'Product Design', description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com' },
  { image: 'art_direction.jpg', width: '127', height: '127', alt: 'Art Direction', title: 'Art Direction', description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com' },
  { image: 'visual_design.jpg', width: '127', height: '127', alt: 'Visual Design', title: 'Visual Design', description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com' }
]

const Services = ({ addToCart, cart }) => {
  return (
    <>
      <div className={styles.services}>
        {
          services.map((service) => {
            return (
              <div key={service.title} className={styles.service} onClick={() => addToCart(service.title)}>
                {(cart.includes(service.title)) && (
                  <div className={styles.selected} />
                )}
                <Image src={`/images/${service.image}`} width={service.width} height={service.height} alt={service.alt} />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Services

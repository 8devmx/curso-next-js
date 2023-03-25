import styles from '@/styles/Work.module.css'
import Image from 'next/image'

const works = [
  { image: 'project_1.jpg', width: '330', height: '330', alt: 'Project 1', title: 'Project title', categories: 'UI, Art drection' },
  { image: 'project_2.jpg', width: '330', height: '330', alt: 'Project 2', title: 'Project title', categories: 'UI, Art drection' },
  { image: 'project_3.jpg', width: '330', height: '330', alt: 'Project 3', title: 'Project title', categories: 'UI, Art drection' },
  { image: 'project_4.jpg', width: '330', height: '330', alt: 'Project 4', title: 'Project title', categories: 'UI, Art drection' },
  { image: 'project_5.jpg', width: '330', height: '330', alt: 'Project 5', title: 'Project title', categories: 'UI, Art drection' },
  { image: 'project_6.jpg', width: '330', height: '330', alt: 'Project 6', title: 'Project title', categories: 'UI, Art drection' }
]
const Work = () => {
  return (
    <div>
      <h2 className={styles.workTitle}>Latest Work</h2>
      <div className={styles.works}>
        {
          works.map((work, index) => {
            return (
              <div className={styles.work} key={index}>
                <Image src={`/images/${work.image}`} width={work.width} height={work.height} alt={work.alt} />
                <h3>{work.title}</h3>
                <p>{work.categories}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Work

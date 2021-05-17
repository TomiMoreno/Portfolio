import styles from '../styles/components/Technologies.module.css'

export default function Technologies({technologies =[]}) {
  const tech = {
    'nextjs': {
      src: 'nextjs.svg',
      name: 'Next.js'
  },
  'css': {
    src: 'css.svg',
    name: 'CSS3'
  },
  'html':{
    src: 'html.svg',
    name: 'HTML5'
  },
  'react':{
    src: 'react.png',
    name: 'React.js'
  }
  }
  return (
    <div className={styles.container}>
      {technologies.map(tec => tech[tec] && <img src={tech[tec].src} className={styles.techLogo} alt={tech[tec].name}/>)}
    </div>
  )
}


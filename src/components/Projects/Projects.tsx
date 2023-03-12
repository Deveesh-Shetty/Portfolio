import { Icon } from "@iconify/react"
import Image from "next/image"
import ChromaticoMobile from "../../assets/projects/ChromaticoMobile.svg"
import styles from "./Projects.module.css"

function Projects() {
  return (
    <section className={styles.container}>
      <div className={styles.projects}>
        <div className={styles.content}>
          <div className={styles.content_heading}>
            <h2>Chromatico</h2>
            <h3>A Color Generator </h3>
          </div>
          <div className={styles.content_paragraph}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              dolor iusto atque architecto odio, optio nihil ipsa at aut
              delectus dolorum saepe. Sequi at expedita praesentium ullam
              voluptatem velit, fugit ab! Similique odit necessitatibus velit
              culpa, nulla neque tempore qui voluptate temporibus obcaecati
              earum sint itaque! Exercitationem odit iste ad?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate quo dicta eaque, labore placeat odio deleniti, suscipit
              tenetur itaque assumenda tempore. Vitae, ipsa? Doloribus!
            </p>
          </div>
          <div className={styles.content_navigations}>
            <div>
              <div>
                <Icon icon="ph:code" />
                <p>Source Code</p>
              </div>
              <button>Blog</button>
            </div>
            <button>Go Live</button>
          </div>
        </div>
        <div className={styles.image_container}>
          <a href="https://chromatico.vercel.app" target="_blank">
            <Image src={ChromaticoMobile} alt="Chromatico Mobile" />
          </a>
        </div>
      </div>
      <div className={styles.scroll_text}></div>
    </section>
  )
}

export default Projects

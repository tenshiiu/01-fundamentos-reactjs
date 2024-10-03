import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Siderbar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <>
    <Header />

<div className={styles.wrapper}>
          <Sidebar />
      <main>
        <Post 
          author="Raul Vinícius" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem numquam, voluptatem eius recusandae cupiditate veniam ipsum ipsa magnam architecto temporibus unde, commodi necessitatibus. Quo quas ad libero dicta molestiae."
        />

        <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae dolores eaque voluptate id, vero maiores excepturi saepe dolorem, sint recusandae! Accusamus voluptatum minima corrupti maiores delectus rerum distinctio odit."
        />

      </main>
    </div>
    </>
  )
}
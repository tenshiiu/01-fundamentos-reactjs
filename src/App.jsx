import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./styles.css";

export function App() {
  return (
    <>
    <Header />

      <Post 
      author="Raul Vinícius" 
      content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem numquam, voluptatem eius recusandae cupiditate veniam ipsum ipsa magnam architecto temporibus unde, commodi necessitatibus. Quo quas ad libero dicta molestiae."
      />

      <Post 
      author="Diego Fernandes" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae dolores eaque voluptate id, vero maiores excepturi saepe dolorem, sint recusandae! Accusamus voluptatum minima corrupti maiores delectus rerum distinctio odit."
      />
    </>
  )
}
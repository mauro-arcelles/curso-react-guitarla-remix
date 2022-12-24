import {getGuitarras} from '~/models/guitarras.server'
import {getPosts} from '~/models/posts.server'
import {useLoaderData} from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras";
import ListadoPosts from "~/components/listado-posts";
import styleGuitarras from '~/styles/guitarras.css'
import stylePosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
import {getCurso} from "~/models/curso.server";
import Curso from "~/components/curso";

export function meta() {

}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styleGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylePosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {
  const {guitarras, posts, curso} = useLoaderData()
  console.log(curso)
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras}/>
      </main>

      <Curso curso={curso.attributes}/>

      <section className="contenedor">
        <ListadoPosts posts={posts}/>
      </section>
    </>
  );
}

export default Index;
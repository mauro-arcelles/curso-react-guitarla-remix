import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';
import {useOutletContext} from "@remix-run/react";

export function meta(){
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'GuitarLA es una tienda de guitarras y accesorios para guitarristas'
  }
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros add">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros"/>

        <div>
          <p>Fusce convallis mi finibus, ultrices nunc quis, aliquam urna. Ut aliquam erat eget aliquam varius. Pellentesque et ligula non lacus cursus commodo sit amet a dolor. Maecenas quis nibh metus. Curabitur eu euismod velit, id vehicula mi. Pellentesque rutrum varius lacus, et finibus nulla dictum in. Integer tincidunt turpis velit, eget rhoncus velit pellentesque non. Sed suscipit dapibus massa et posuere.</p>
          <p>Fusce convallis mi finibus, ultrices nunc quis, aliquam urna. Ut aliquam erat eget aliquam varius. Pellentesque et ligula non lacus cursus commodo sit amet a dolor. Maecenas quis nibh metus. Curabitur eueuismod velit, id vehicula mi. Pellentesque rutrum varius lacus, et finibus nulla dictum in. Integer
            tincidunt turpis velit, eget rhoncus velit pellentesque non. Sed suscipit dapibus massa et posuere.</p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
import {useLoaderData} from '@remix-run/react'
import {getGuitarras} from '~/models/guitarras.server';
import ListadoGuitarras from "~/components/listado-guitarras";

export function meta() {
  return {
    title: 'GuitarLA - Guitarras de Guitarras',
    description: 'GuitarLA - Nuestra colección de guitarras'
  }
}

export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Guitarras() {
  const guitarras = useLoaderData()

  return (
    <ListadoGuitarras guitarras={guitarras}/>
  );
}

export default Guitarras;
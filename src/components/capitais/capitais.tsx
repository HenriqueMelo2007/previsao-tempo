import { ListaCapitais } from "./listacapitais";

export function Capitais() {
  return (
    <div className="capitais">
      <h2 className="subtitle">Capitais</h2>
      <div className="listaCapitais">
        <ListaCapitais/>
        <ListaCapitais/>
      </div>
    </div>
  )
}
import './pesquisar.css'

type propsPesquisar = {
  setNomeCidade: (value: string | ((prevState: string) => string)) => void;
  buscandoNaAPI: () => Promise<void>;
}

type enter = React.KeyboardEvent<HTMLInputElement>

export function Pesquisar({setNomeCidade, buscandoNaAPI}: propsPesquisar) {

  function buscar (event: enter) {
    if (event.key == "Enter") {
      buscandoNaAPI()
    }
  }

  return (
    <div className="pesquisar">
      <input onKeyDown={buscar} onChange={value => setNomeCidade(value.target.value)} className="barraPesquisa" placeholder="Insira aqui o nome da cidade" type="text" />
    </div>
  )
}
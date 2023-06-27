import './pesquisar.css'

type propsPesquisar = {
  nomeCidade: string;
  setNomeCidade: (value: string | ((prevState: string) => string)) => void;
}

export function Pesquisar({nomeCidade, setNomeCidade}: propsPesquisar) {

  return (
    <div className="pesquisar">
      <input onChange={value => setNomeCidade(value.target.value)} className="barraPesquisa" placeholder="Insira aqui o nome da cidade" type="text" />
    </div>
  )
}
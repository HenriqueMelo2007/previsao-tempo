type propsResultadoPrevisao = {
  nomeCidadeEscolhida: string,
  pais: string,
  temperatura: string, 
  sensacao: string, 
  tempMin: string, 
  tempMax: string, 
  descricao: string, 
  umidade: string, 
  velocidadeVento: string,
}

export function ResultadoPrevisao({nomeCidadeEscolhida, pais, temperatura, sensacao, tempMin, tempMax, descricao, umidade, velocidadeVento}:propsResultadoPrevisao) {

  return (
      <div className="resultado">
        <p>{nomeCidadeEscolhida}, {pais}</p>
        <h2 className="tempEClima">{temperatura}°C</h2>

        <div className="infoAdicionais">
          <p>Sensação: <span>{sensacao}°C</span></p>
          <p>Min: <span>{tempMin}°C</span></p>
          <p>Máx: <span>{tempMax}°C</span></p>
        </div>

        <p className="description">Descrição: <span>{descricao}</span></p>

        <p className="umidade">Umidade: <span>{umidade}%</span></p>
        <p className="velocidadeVento">Velocidade do vento: <span>{velocidadeVento}Km/h</span></p>

      </div>
  )
}
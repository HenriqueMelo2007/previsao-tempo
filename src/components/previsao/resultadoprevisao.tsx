export function ResultadoPrevisao() {
  return (
      <div className="resultado">
        <p>Cidade escolhida, Brasil</p>
        <h2 className="tempEClima">20°C Chuvoso</h2>

        <div className="infoAdicionais">
          <p>Sensação: <span>22°C</span></p>
          <p>Min: <span>23°C</span></p>
          <p>Máx: <span>25°C</span></p>
        </div>

        <p className="description">Descrição: <span>Chuvoso</span></p>

      </div>
  )
}
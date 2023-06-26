import { ProximoDia } from "./proximosdias";

export function ResultadoPrevisao() {
  return (
      <div className="resultado">
        <p>Cidade escolhida, EX - Brasil</p>
        <h2>20°C Chuvoso</h2>

        <div className="infoAdicionais">
          <p>Min: 17°C</p>
          <p>Máx: 25°C</p>
          <p>Sensação: <span>22°C</span></p>
        </div>

        <div className="proximosDias">
          <ProximoDia/>
          <ProximoDia/>
          <ProximoDia/>
          <ProximoDia/>
          <ProximoDia/>
        </div>

      </div>
  )
}
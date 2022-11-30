import { InfoCard } from "./style"


export const CardItem = ({img, nome, ator, apelido, status}) => {
  return (
    <InfoCard>
      <div className="image">
        <img src={img} alt="" />
      </div>
        <div className="info">
          <h2>{nome}</h2>
          <hr />
          <ul>
            <li>Ator:{ator}</li>
            <li>Apelido:{apelido}</li>
            <li>Status:{status}</li>
          </ul>
        </div>
      
    </InfoCard>
  )
}

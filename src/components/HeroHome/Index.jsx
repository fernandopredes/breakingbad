import { HeroSection } from "./style"
import breaking from "../../assets/card-bb.jpg"
import saul from "../../assets/card-saul.jpg"
import { Link } from "react-router-dom"


export const HeroHome = () => {
  return (
    <HeroSection>
        <div className="container">
            <h1>"Não estou em perigo. Eu sou o perigo!"</h1>
            <p>Atenção: Contém Spoiler</p>

            <div className="card">
                <Link to="/breaking-bad">
                    <img src={breaking} alt="imagem série" />
                </Link>

                <Link to="/better-call-soul">
                    <img src={saul} alt="imagem série" />
                </Link>
            </div>
        </div>
        
    </HeroSection>
  )
}

import { HeroSectionPage } from "./style"


export const HeroPage = ({nameSerie, titulo}) => {
  return (
    <HeroSectionPage serie={nameSerie}>
        <div className="container">
            <h1>{titulo}</h1>
        </div>
    </HeroSectionPage>
 
  )
}


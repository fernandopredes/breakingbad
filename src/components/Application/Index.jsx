import axios from "axios"
import { useEffect, useState } from "react"
import { CardItem } from "../CardItem/Index"
import { ButtonMore, ContentCard, Loader } from "./style"
import imageLoader from '../../assets/loader.png'


export const Application = ({serie}) => {
    
    const [itens, setItens] = useState([])
    const [total, setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [show, setShow] = useState(4)

    useEffect(() => {
          axios.get(`https://www.breakingbadapi.com/api/characters?category=${serie}&limit=${show}&offset=0`)
          .then(response => {
            setItens(response.data)
            setIsLoading(false)

            setTotal(response.data.length)
          })

    }, [show])

    

    
      function mostrarMais() {
        setIsLoading(true)
        setShow(show+4)
        
      }
    
    
    
    return (
       <>
       
        {isLoading &&(
            <Loader>
            <img src={imageLoader} alt="carregando" />
            </Loader>
        )
        }
        
        <div className="container">
            <ContentCard>

                {
                    itens.map((item)=> (
                        <CardItem
                        key={item.char_id} 
                        img={item.img}
                        nome={item.name}
                        ator={item.portrayed}
                        apelido={item.nickname}
                        status={item.status}/>
                        )
                    )
                }
            </ContentCard>
            
            <ButtonMore onClick={mostrarMais} disabled={total !== show ? true : false}>Mostrar mais</ButtonMore>

        </div>
        </>
    )
  }
  
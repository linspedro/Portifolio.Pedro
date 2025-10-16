import Titulo from "./Titulo";
import Paragrafo from "./Paragrafos";
import Skils from "./skils";


function Sobre(){
    return(
        <section id="Sobre" className="sobre">
            <Titulo texto={'Sobre mim'}/>
            <Paragrafo texto={'Me chamo Pedro Herique Santana Campos Lins, tenho 16 anos estou cursando ensino tecnico,  no futuro pretendo me forma  em ciência da computação e mais pra frente engenharia de software'}/>
            <Skils/>
           
            
        </section>
    )
}
export default Sobre
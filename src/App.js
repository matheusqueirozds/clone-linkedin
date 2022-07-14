import React from "react";
import sino from "./img/sino.svg";
import logoEmpresa from "./img/logoEmpresa.png";
import "./App.css";
import Container from "./components/Container/Container";
import Informacoes from "./components/Informacoes/Informacoes";
import Botoes from "./components/Botoes/Botoes";

function App() {
    return (
        <div className="app-bg">
            <div className="secao">
                <Informacoes
                    foto="https://media-exp1.licdn.com/dms/image/C4E03AQGNUrOu4_FRxg/profile-displayphoto-shrink_400_400/0/1652967944863?e=1663200000&v=beta&t=C4CMpC1s83FWVGMBmDnAIlwY6dxAmi9e8ilrfVHoqW4"
                    sino={sino}
                    nome="Matheus Queiroz"
                    titulo="Desenvolvedor Frontend | HTML | CSS | JavaScript"
                    tags="Fala sobre #frontend, #tecnologia, #programacao e #desenvolvimentoweb"
                    localizacao="Salvador, Bahia, Brasil"
                    logoEmpresa={logoEmpresa}
                    empresa="Labenu"
                    contato="Informações de contato"
                    seguidores="9.999 seguidores"
                    conexoes="+ de 500 conexões"
                />

                <Botoes texto1="Enviar mensagem" texto2="Mais" />
            </div>

            <div className="secao">
                <h2>Experiência</h2>
                <Container
                    imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHN68osUoFKGA/company-logo_100_100/0/1625764040369?e=1665619200&v=beta&t=VFkjftD3tPoCRSGcCfCI8aXEDVGb0I9bIh3h-XmYTVo"
                    nome="Labenu"
                    descricao="Cursos de programação Web Full Stack, focados em empregabilidade. Online, ao vivo e opções de integral e noturno."
                />

                <Container
                    imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFVKOiX8a8_eg/company-logo_200_200/0/1655319222653?e=1665619200&v=beta&t=Htgyx625Nqw-6NH3zN-ksQIxA42rJmbvCF4AiQofYKU"
                    nome="CI&T"
                    descricao="Somos especialistas digitais, entregando impacto de negócios por meio de serviços de estratégia, design e engenharia."
                />
            </div>
        </div>
    );
}

export default App;

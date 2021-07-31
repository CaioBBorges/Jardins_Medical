import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import bge2 from "../images/bge2.png"
import ola1 from "../images/ola1.svg"
import inovador from "../images/inovador.svg"
import bg4 from "../images/bg4.png"
import Header from "../components/header"
import bg3 from "../images/bg3.png"
import auditorio from "../images/auditorio.png"
import footer from "../images/footer.png"


const estrutura = () => (
  <div class="">
    <section
      class="bg-cover bg-local bg-no-repeat	bg-clip-border h-screen"
      style={{
        backgroundImage: `url(${inovador})`,
        resize: `both`,
        overflow: `hidden`,
      }}
    >
      <title>JARDINS</title>
      <link rel="icon" href="..\images\favicon.ico" />
      <Header />
      <div class="pb-98">
        <h1
        class="text-center w-full p-56"
          style={{
            fontSize: `36px`,
            lineHeight: `171.2%`,
            textAlign: `center`,
            letterSpacing: `0.63em`,
            color: `#FFFFFF`,
            textShadow: `0px 4px 12px rgba(0, 0, 0, 0.25), 0px 4px 16px rgba(0, 0, 0, 0.8), 4px 9px 46px rgba(0, 0, 0, 0.8)`,
          }}
        >
          ESTRUTURA PERFEITA PARA VOCÊ FOCAR NO QUE REALMENTE IMPORTA:
          <br />
          SEU PACIENTE.
        </h1>
      </div>
    </section>
    <section
      class="bg-cover bg-local bg-no-repeat	bg-clip-border h-screen place-content-center"
      style={{
        backgroundImage: `url(${bge2})`,
        resize: `both`,
        overflow: `hidden`,
      }}
    >
      <div
        style={{
          margin: `20rem`,
          width: `1244px`,
          height: `243px`,
          left: `123px`,
          background: ` rgba(255, 255, 255, 0.02)`,
          backdropFilter: `blur(3px)`,
          borderRadius: `59px`,
        }}
      >
        <p
          class="text-center p-12"
          style={{
            fontSize: `18px`,
            lineHeight: `171.2%`,
            textAlign: `center`,
            letterSpacing: `0.63em`,
            color: `#FFFFFF`,
            textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 7px rgba(0, 0, 0, 0.8), 4px 9px 34px rgba(0, 0, 0, 0.8)`,
          }}
        >
          EM QUASE EM SEUS 5700,00m² DE ÁREA O JARDINS MEDICAL OFERECE UMA
          ESTRUTURA COMPLETA PARA SUA ROTINA COM TODOS OS ASPECTOS FACILITIES ,
          VOCÊ TEM TUDO O QUE PRECISA PARA COMPOR UMA SEDE MÉDICA CLASSE (AA) EM
          SERVIÇO E ATENDIMENTO.
        </p>
      </div>
    </section>
    <section
      class="bg-cover bg-center bg-local bg-no-repeat h-screen"
      style={{
        backgroundImage: `url(${bg3})`,
      }}
    > 
      
      <div class="grid grid-cols-4 justify-between px-16 place-items-center pt-20"> 
      { /* PRIMEIRO COMPONENTE  */ }
        <div>
          <StaticImage
              src="../images/lobby_e.svg"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />   
          <div
            style={{
              width: `307px`,
              height: `250px`,
              left: `61px`,
              top: `3349px`, 
              background: `rgba(255, 255, 255, 0.1)`,
              backdropFilter: `blur(20px)`,
            }}
            >
              <h1 class="  pt-5 text-center text-lg font-bold text-white font-mono">LOBBY</h1>
              <p class="pt-5 px-5 font-thin text-white text-sm leading-relaxed tracking-widest font-mono ">LOBBY PERFEITO PARA RECEBER TODO O CORPO MÉDICO E OS PACIENTES, IDEAL PARA INFORMAR, GUIAR E ORIENTAR AS PESSOAS PROCURANDO POR CONSULTÓRIOS.</p>
          </div>          
        </div>

        { /* SEGUNDA COMPONENTE  */ }
        <div >
          <StaticImage
              src="../images/salas_cirurgia.svg"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />   
          <div
            style={{
              width: `307px`,
              height: `250px`,
              left: `61px`,
              top: `3349px`, 
              background: `rgba(255, 255, 255, 0.1)`,
              backdropFilter: `blur(20px)`,
            }}
            >
              <h1 class=" px-5 pt-5 text-lg text-center font-bold text-white font-mono">SALAS PARA CENTROS <br /> CIRUGICOS </h1>
              <p class="pt-5 px-5 font-thin text-white text-sm leading-relaxed tracking-widest font-mono ">O JARDINS MEDICAL, OFERECE UMA ESTRUTURA IDEAL PARA CENTROS CENTROS CIRURGICOS E SALA DE OPERAÇÕES.</p>
          </div>          
        </div>
        { /* TERCEIRO COMPONENTE  */ }
        <div>
          <StaticImage
              src="../images/rooftop_e.svg"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />   
          <div
            style={{
              width: `307px`,
              height: `250px`,
              left: `61px`,
              top: `3349px`, 
              background: `rgba(255, 255, 255, 0.1)`,
              backdropFilter: `blur(20px)`,
            }}
            >
              <h1 class=" pt-5 text-center text-lg font-bold text-white font-mono">ROOFTOP</h1>
              <p class="pt-5 px-5 font-thin text-white text-sm leading-relaxed tracking-widest font-mono ">UM AMBIENTE CONFORTÁVEL E ACONCHEGANTE, IDEAL PARA OFERECER MOMENTOS DE TRANQUILIDADE A TODOS OS PACIENTES E TERCEIROS.</p>
          </div>          
        </div>
        { /* QUARTO COMPONENTE  */ }
        <div>
          <StaticImage
              src="../images/auditorio_e.svg"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />   
          <div
            style={{
              width: `307px`,
              height: `250px`,
              left: `61px`,
              top: `3349px`, 
              background: `rgba(255, 255, 255, 0.1)`,
              backdropFilter: `blur(20px)`,
            }}
            >
              <h1 class=" pt-5 text-center text-lg font-bold text-white font-mono">AUDITÓRIO</h1>
              <p class="pt-5 px-5 font-thin text-white text-sm leading-relaxed tracking-widest font-mono ">UM LOCAL PARA INCENTIVAR PALESTRAS E REUNIÕES DE PESQUISA E ATUAÇÕES DOS PROFISSIONAIS DA ÁREA DA SAÚDE.</p>
          </div>          
        </div>
      </div>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat w-full h-5/6  justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${bg4})`,
      }}
    >
      <h1
        class="text-white font-mono text-9xl text-center font-thin	pt-80 w-full"
        style={{
          textAlign: `center`,
          letterSpacing: `0.63em`,
          color: `#`,
          textShadow: `8px 13px 17px rgba(0, 0, 0, 0.55)`,
        }}
      >
        A MELHOR <br /> EXPERIÊNCIA
      </h1>
      <div class=" ml-64">
        <button class="bg-green-dark ml-96 rounded-full h-20 text-white w-1/3 text-center font-mono p-3 mt-20 mb-80">
          SAIBA MAIS
        </button>
      </div>
    </section>
    <section
      class="bg-cover bg-center bg-no-repeat h-screen justify-center bg-clip-border"
      style={{
        backgroundImage: `url(${auditorio})`,
      }}
    >
      <h1
        class="text-white px-12 font-mono font-thin pt-24  w-full"
        style={{
          fontSize: `36px`,
          lineHeight: `171.2%`,
          textAlign: `center`,
          letterSpacing: `0.54em`,
          color: `#FFFFFF`,
          textShadow: `4px 9px 17px rgba(0, 0, 0, 0.35)`,
        }}
      >
        100% ADEQUADO AS EXIGÊNCIAS DOS ORGÃOS REGULADORES
      </h1>
      <div class="bg-green-dark grid grid-cols-2 text-white grid-rows-3 w-100 h-3/4 ml-80 p-10 rounded-3xl">
      { /* PRIMEIRO COMPONENTE  */ }
        <div>
          <h1 class="text-xl">Circulações Externas e Internas</h1>
          <ul>
            <li>Acessos</li>
            <li>Estacionamentos</li>
            <li>Circulações horizontais</li>
            <li>Circulações verticais</li>
          </ul>
        </div>
        { /* SEGUNDO COMPONENTE  */ }
        <div>
          <h1 class="text-xl">Instalações Prediais Ordinárias e Especiais.</h1>
          <ul>
            <li>Instalações hidro-sanitárias</li>
            <li>instalações elétricas e eletrônicas</li>
            <li>Instalações fluído-mecânicas</li>
            <li>Instalações de climatização</li>
          </ul>
        </div>
        { /* TERCEIRO COMPONENTE  */ }
        <div>
          <h1 class="text-xl">Condições Ambientais de Conforto.</h1>
          <ul>
            <li>Conforto higrotérmico</li>
            <li>Conforto acústico</li>
            <li>Conforto luminoso a partir de fonte natural</li>
          </ul>
        </div>
        { /* QUARTO COMPONENTE  */ }
        <div>
          <h1 class="text-xl"> Condições de Segurança Contra Incêndio.  </h1>
          <ul>
            <li>Critérios de projeto</li>
            <li>Normatização referente a segurança contra incêndio</li>
          </ul>
        </div>
        { /* QUINTO COMPONENTE  */ }
        <div>
          <h1 class="text-xl">Controle de Infecção Hospitalar</h1>
          <ul>
            <li>Conceituação Básica</li>
            <li>Critérios de Projeto</li>

          </ul>
        </div>
        { /* SEXTO COMPONENTE  */ }
        <div class="grid grid-cols-3 place-items-center">
          <div class="">
            <StaticImage
              src="../images/anvisa_e.png"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />
          </div>
          <div class=" ">
            <StaticImage
              src="../images/logo-abnt_e.png"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />
          </div>
          <div class=" ">
            <StaticImage
              src="../images/ans_e.png"
              quality={100}
              placeholder="blurred"
              layout="fixed"
            />
          </div>
        </div>

      </div>
    </section>
    <footer
      class="bg-cover py-5 grid grid-cols-5 h-28 justify-between place-items-center"
      style={{
        backgroundImage: `url(${footer})`,
      }}
    >
      <a href="#">
        <div class="">
          <StaticImage
            src="../images/face.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
      <a href="#">
        <div>
          <StaticImage
            src="../images/tt.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
      <a href="#">
        <div>
          <StaticImage
            src="../images/insta.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
      <a href="#">
        <div>
          <StaticImage
            src="../images/linkedin.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
      <a href="#">
        <div>
          <StaticImage
            src="../images/youtube.svg"
            quality={100}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </a>
    </footer>  
  </div>
)

export default estrutura

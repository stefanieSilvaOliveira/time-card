import React from "react";
import { ContainerBottom,H1,UL} from"../styles";
import ImageCalendar from "../assets/image-calendar.png";

function Menu(){
    return(
        <ContainerBottom>
        
        <img src={ImageCalendar} alt=""></img>

        <H1>
        Ponto Eletrônico
        </H1>

        <UL>
        <li><a href="#inicio">Inicio</a></li>
         <li><a href="#meu-ponto">Meu ponto</a></li>
         <li><a href="#espelhos-de-ponto">Espelhos de ponto</a></li>
         <li><a href="#escalas-de-trabalho">Escalas de trabalho</a></li>
         <li><a href="#calendario">Calendário</a></li>
         <li><a href="#documentos">Documentos</a></li>
         <li><a href="#configuracoes">Configurações</a></li>
        </UL>
        </ContainerBottom>
    )
}

export default Menu;
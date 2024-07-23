import React from "react";
import { Container, Logo, Input,Button,P,Image} from "../styles";
import AppsIcon from '@mui/icons-material/Apps';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UpdateIcon from '@mui/icons-material/Update';
import ImageUser from "../assets/image-user.png";
import ImageLogo from "../assets/image-logo.png";

function Header() {
    return (
        <Container>
        <Logo><img src={ImageLogo} alt=""></img></Logo>
             
       <div className="icons-eletro">
        <AppsIcon/>
        <p>Ponto Eletrônico</p>
        </div>      
   
     <div>
      <Input type="text" placeholder="Text"/>
    </div>
            
    <div className="icons-div">
    <UpdateIcon  style={{ marginRight: '15px' }} color="action"/>
    <SmsIcon style={{ marginRight: '10px' }}  color="action"/>
    <NotificationsIcon style={{ marginRight: '5px' }}  color= "action"/>
    </div>
          
    <Button>Entrar</Button>
           
    <P>Bem-vindo</P>
           
    <Image>
    <img className="image-icons" src={ImageUser} alt="User"/>
    </Image>  
    </Container>
    );
}

export default Header;
import styled from 'styled-components';

export const Container = styled.div`
         display: flex;
         justify-content: space-between;
         align-items: center;
         height: 80px;
         margin-bottom: 10px;
         padding: 0 20px;

         
         .icons-eletro{
            display: flex;
            margin-left: 10px;
            border: none;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            height: 30px;
            width: 140px;
            align-items: center;
            cursor: pointer;
            transition: transform 0.1s;

            &:active {
            transform: scale(0.95);
            }
          
            p{
                font-size: 13px;
                text-align: center;
                margin-left: 5px;
                font-weight: 400;
                
            }
         }
`

export const Logo = styled.div`
      img{
        height: 50px;
        width: 100px;
      }

`
export const Input = styled.input`
     height: 30px;
     width: 260px;
     margin-left: 400px;
     border-radius: 5px;
     border: solid 1px  #2d82b5;
     padding: 0 15px;
     outline: none;

     &::placeholder {
    color: #CFCFCF; 
  }    
`
export const Button = styled.button`
       height: 30px;
       width: 75px;
       background: linear-gradient(45deg, #2E3192, #1BFFFF);
       border-radius: 20px;
       border: none;
       font-size: 12px;
       color: #fff;
       cursor: pointer;
       transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
       outline: none;

    &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background: linear-gradient(45deg, #1BFFFF, #2E3192);
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`
export const P = styled.p`
     font-size: 15px;
     font-weight: bolder;
     color: #2d82b5;
     cursor: pointer;    
`
export const Image = styled.image`
         img{
            margin-right: 30px;
            height: 35px;
            width: 35px;
         }
`
export const ContainerBottom = styled.div`
          height: 40px;
          display: flex;
          margin-top: -20px;
          background: linear-gradient(45deg, #2E3192, #1BFFFF);

          img{
            margin-left: 50px;
            cursor: pointer;
          }
`
export const H1 = styled.h1`
         font-size: 14px;
         color: #FFF; 
         display: flex;   
         text-align: center;
         margin-top: 12px;
         margin-left: 20px;   
         cursor: pointer;            
`
export const UL = styled.ul`
        display: flex;
        list-style-type: none;
        
       
       li{
        margin: 10px 20px 30px 20px;
        padding-left: 10px;
        
       }

       a{
         text-decoration: none;
         color: #FFF;
         font-size: 15px;
         font-weight: 400;
      
         cursor: pointer;
         transition: all 0.3s ease;

      &:hover {
      background-color: #2d82b5;
      height: 200px;
      width: 100px;
      padding: 5px 10px;
      border: solid 1px  #FFF;
      border-radius: 5px;
      color: white; /* Ajustar a cor do texto */
      cursor: pointer;
      transform: scale(1.05);/* aumenta de forma rapida o item ao passar o cursor */
    }
    }
`




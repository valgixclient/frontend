import { styled } from 'styled-components'

export const PageStyle = styled.div`
position: absolute;
left: 100px;
top: 10px;
margin: 5px;
background-color: var(--page-color);
border-radius: 8px;
height: 95%;
width: 90%;
overflow: auto;
-webkit-animation: slide-in-blurred-top 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
animation: slide-in-blurred-top 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

@-webkit-keyframes slide-in-blurred-top {
    0% {
        -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
                transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
        -webkit-filter: blur(100px);
                filter: blur(100px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0) scaleY(1) scaleX(1);
                transform: translateY(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
        -webkit-filter: blur(0);
                filter: blur(0);
        opacity: 1;
    }
    }
@keyframes slide-in-blurred-top {
    0% {
        -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
                transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
        -webkit-filter: blur(100px);
                filter: blur(100px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0) scaleY(1) scaleX(1);
                transform: translateY(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
        -webkit-filter: blur(0);
                filter: blur(0);
        opacity: 1;
    }
}
              
`
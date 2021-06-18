import React from 'react'
import styled from 'styled-components';

const SidebarOption = ({Icon,title, addChannelOption}) => {

    const addChannel= () =>{

    }

    const selectChannel = () => {
        
    }

    return (
        <SidebarOptionContainer
            onClick = {addChannelOption ? addChannel : selectChannel }
        >
            {Icon && <Icon fontS />}
            {Icon ? 
                <h3>{title}</h3> : 
                <SidebarOptionChannel >
                    <span>#</span> {title}
                </SidebarOptionChannel>
            }
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left:2px;
    font-size:12px;
    :hover{
        opacity:0.8;
    }
    > .MuiSvgIcon-root{
        padding: 10px;
        font-size: small;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    } 

    

`;


const SidebarOptionChannel = styled.div`

`;
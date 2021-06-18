import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { db } from '../firebase';
import { enterRoom } from '../redux/reducer/appSlice';

const SidebarOption = ({Icon,title, addChannelOption, id}) => {
    const dispatch = useDispatch()

    const addChannel= () =>{
        const channelName=prompt("Please enter new channel name");
        if(channelName){
            db.collection('rooms').add({
                name:channelName,
            })
        }

    }

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom({
                roomId:id
            }))
        }
        
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


const SidebarOptionChannel = styled.h3`
    padding:10px 0;
    font-weight: 300;
`;
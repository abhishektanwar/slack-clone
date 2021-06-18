import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import InsertCommentIcon from "@material-ui/icons/InsertComment"; 
import InboxIcon from "@material-ui/icons/Inbox"; 
import DraftsIcon from "@material-ui/icons/Drafts"; 
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"; 
import FileCopyIcon from "@material-ui/icons/FileCopy"; 
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"; 
import AppsIcon from "@material-ui/icons/Apps"; 
import ExpandLEssIcons from "@material-ui/icons/ExpandLess";
import ExpandMoreIcons from "@material-ui/icons/ExpandMore"; 
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from './SidebarOption'
import {useCollection} from "react-firebase-hooks/firestore"
import { db } from '../firebase';

const Sidebar = () => {
    const [channels] = useCollection(db.collection('rooms'));
    return (
        <SidebarContainer>
            <SidebarHeader >
                <SidebarInfo>
                    <h2>header heading </h2>
                    <h3>
                        <FiberManualRecordIcon />
                        User name here
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLEssIcons} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcons} title="Channels" />
            <hr /> 
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
            {channels?.docs.map(doc=>(
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    margin-top: 60px;

    > hr {
        margin: 10px 0;
        border: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 12px;
    /* justify-content: space-between; */

    > .MuiSvgIcon-root{
        padding: 8px;
        color:#49274b;
        background-color: white;
        border-radius: 50%;
        font-size: 16px ;
    }

`;


const SidebarInfo = styled.div`
    flex: 1;
    > h2{
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3{
        display: flex;
        text-align: center;
        font-size:13px;
    }
    
    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 2px;
        margin-right: 2px;
        color: green;
    }


`;

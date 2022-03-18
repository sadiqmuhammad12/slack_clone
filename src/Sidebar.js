
import  CreateIcon  from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import AppsIcon from '@material-ui/icons/Apps';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';
import BookmarkBorderIcon  from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {React,useState,useEffect} from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { useStateValue } from './StateProvider';

import db from './firebse';
const Sidebar = () => {
  const [channels,setChannels] = useState([]);
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => 
    setChannels(
        snapshot.docs.map((doc) => ({
        id : doc.id,
        name : doc.data().name,
      })
      ))
    
    );
  
  }, [])
  // useEffect(() => {
  //   database
  //   .collection('people')
  //   .onSnapshot((snapshot) =>
  //   setPeople(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, [])
 
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <div className="sidebar_info">
                <h2>Sadiq Programmer</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {/* Rafeh Qazi */}
                    {user?.displayName}
                </h3>
            </div>
            <CreateIcon />
        </div>
        <SidebarOption  Icon={InsertCommentIcon} title='Threads'/>
        <SidebarOption  Icon={InboxIcon} title='Mentions & Reactions'/>
        <SidebarOption  Icon={DraftsIcon} title='Saved items'/>
        <SidebarOption  Icon={BookmarkBorderIcon} title='channel Browser'/>
    
        <SidebarOption  Icon={PeopleAltIcon} title='People & user groups'/>
        <SidebarOption  Icon={AppsIcon} title='Apps'/>
        <SidebarOption  Icon={FileCopyIcon} title='File browser'/>
        <SidebarOption  Icon={ExpandLessIcon} title='Show Less'/>
        <hr />
        <SidebarOption  Icon={ExpandMoreIcon} title='Channel'/>
        <hr />
        <SidebarOption  Icon={AddIcon} title='Add channel' addChannelOption/>
        
        {channels.map(channel=> (
          <SidebarOption title = {channel.name}   id = {channel.id} />
        ))}
    </div>
  )
}

export default Sidebar
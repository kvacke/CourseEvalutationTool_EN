import { faCalendarAlt, faClock, faQuestionCircle, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faBook, faInbox, faTachometerAlt, faTv, faUserFriends, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    sidebar:{
        position: 'fixed',
        top:'0px',
        left:'0px',
        minHeight:'100%',
        width:'85px',
        backgroundColor:'#f0f0f0',
        fontFamily:'Lato',
        fontSize:'14px',
        userSelect:'none',
        color:'#575757'
    },


    icon:{
        fontSize:'25px'
    },
    sidebarItem:{
        backgroundColor:props => props ? 'white' : 'transparent',
        display:'flex',
        flexDirection:'column',
        height:'60px',
        alignItems:'center',
        justifyContent:'center',
        transition:'0.1s',
        '&:hover':{
            backgroundColor: props => props ? 'white' : 'lightgrey'
        },
        cursor:'pointer'
    },


    logo:{
        fontSize:'27px',
        //color:'rgb(153,0,0)'
        color:'grey'
    },
    logoContainer:{
        marginBottom:'25px',
        fontSize:'12px',
        marginTop:'15px',
    }
})


const Logo = () =>
{
    const classes = useStyles();
    return(
        <div className={classes.logoContainer}><FontAwesomeIcon className={classes.logo} icon={faCircle}/><div>Något Universitet</div></div>
    )
}

const SidebarItem = ({icon, title, isSelected}) => {
    const classes = useStyles(isSelected)
    return(
        <div className={classes.sidebarItem}><FontAwesomeIcon className={classes.icon} icon={icon}/><div>{title}</div></div>
    )
}

const Sidebar = () => {
    const classes = useStyles()

    return(
        <div className={classes.sidebar}>
            <Logo/>
            <SidebarItem icon={faUserCircle} title="Account"/>
            <SidebarItem icon={faTachometerAlt} title="Dashboard"/>
            <SidebarItem isSelected={true} icon={faBook} title="Courses"/>
            <SidebarItem icon={faUserFriends} title="Groups"/>

            <SidebarItem icon={faCalendarAlt} title="Calendar"/>
            <SidebarItem icon={faInbox} title="Inbox"/>
            <SidebarItem icon={faClock} title="History"/>
            <SidebarItem icon={faTv} title="Studio"/>
            <SidebarItem icon={faQuestionCircle} title="Help"/>

        </div>
    )
}

export default Sidebar;
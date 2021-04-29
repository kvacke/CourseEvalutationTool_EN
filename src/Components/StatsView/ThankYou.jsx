import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    thankYou:{
        display: props => props ? 'flex' : 'none',
        margin:'0 auto',
        background: "linear-gradient(145deg, rgba(255,255,255,0.3) 0%, transparent 45%) rgb(32, 106, 176);",
        color:'white',
        width:500,
        flexDirection:'column',
        position:'relative',
        padding:15,
        boxSizing:'border-box',
        borderRadius:10,
        marginTop:20,
        

    },
    title:{
        fontSize: 22,
        fontWeight:'bold'
    },
    text:{
        marginTop:10
    },
    x:{
        fontSize:20,
        cursor:'pointer',
        position:'absolute',
        right:10,
        top:10,
        "&:hover":{
            color:'#F0F0F0'
        }
    },
    heart:{
        fontSize: 15,
    }
})

const ThankYou = () => {
    const [visible,setVisible] = React.useState(true)
    const classes = useStyles(visible)
        
    const handleClick = () =>
    {
        setVisible(false)
    }
        
    return(
        <div className={classes.thankYou}>
            <div  onClick={handleClick} className={classes.x}><FontAwesomeIcon  icon={faTimes}/></div>
            <div className={classes.title}>Thank you for your contribution.</div>
            <div className={classes.text}>For each submitted course evaluation, we get a clearer picture of how the students experience the department's courses.
                Without them, it will be much harder to know how the courses can be done better.
                Thank you for contributing to the department's quality of education.</div>
        </div>
    )
}

export default ThankYou;


{/* <div className={classes.title}>Tack för ditt bidrag!</div>
            <div className={classes.thankyou}>
                
                <br/>
                <br/>
                Här uppdateras kontinuerligt svaren från den här kursens pågående kursvärdering.<br/>
                I varje diagram nedan kan du se hur kursens deltagare har svarat hittills.
                Kom gärna tillbaka när kursvärderingen är avslutad för att se det slutgiltiga resultatet.
                </div> */}
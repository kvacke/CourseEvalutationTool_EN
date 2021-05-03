import React from 'react'
import {createUseStyles} from 'react-jss'
import {Paper} from '@material-ui/core'


const useStyles = createUseStyles({
    textStatItem:{
        display:'flex',
        flexDirection:'column',
        alignSelf:'left',
        marginTop:20,
        
    },
    textCard:{
        width: 500,
        fontStyle: 'italic',
        textAlign:'left',
        marginBottom:20,
    },
    chosen:{
        fontStyle:'italic',
        marginBottom: 10,
    }

})

const data2= [
    "'A well planned course. I always had something challenging to do without it taking more than full time. Kudos!'"
    , "'I really liked the structure of the assignments on this course. Having to find the solution completely by myself was an amazing way for me to learn and prepares me for real life assignments.'",
    "'The guest lectures were really great!'"
]

const data = [
    "'Unfortunately, the feedback on the labs was not up to standard.'",
    "'I feel like the two first labs on the course are outdated and perhaps not relevant anymore.'",
]

const TextCard = ({text}) =>
{
    const classes = useStyles()
    return(
        <div className={classes.textCard}>
            {text}
        </div>
    )
}

const getTextCards = (_title) =>{
    var arr = []
    if(_title=== "The course can be improved in the following ways:")
    {
        {data.forEach(item => {
            arr.push(<TextCard text={item}/>)
        })}
    }
    else{
        {data2.forEach(item => {
            arr.push(<TextCard text={item}/>)
        })}
    }
    return arr;
}



const TextStatItem = ({title}) =>{
    const classes = useStyles()

    return(
        <div className={classes.textStatItem}>
            <div className={classes.chosen}>(selected answers)</div>
            
            {getTextCards(title)}
        </div>
    )
}

export default TextStatItem;
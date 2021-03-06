import React, { useEffect } from 'react';
import {createUseStyles} from 'react-jss';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Context from './../Context'

const useStyles = createUseStyles({
    sendPage:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
    },
    question:{
        fontSize: '28px',
        fontWeight: 300,
        marginBottom:'20px',
    },
    statusIndicator:{
        display:'flex',
        flexDirection: 'column',
        marginTop:30,
        marginBottom:40,
        alignItems:'center',
        minHeight:100,
    },
    statusTitle:{
        boxSizing:'border-box',
        borderRadius:'10px',
        fontSize:'20px',
        fontWeight: 500,
        color: props => props ? '#469c71' : '#ff9933'

    },
    description:{
        textAlign:'left',
        width:"60%"
        
    },
    remaining:{
        marginTop:10,
        textAlign:'left'
    }
})



const StatusIndicator = ({remaining}) =>{
    const [done, setDone] = React.useState(false)
    
    const classes = useStyles(done);


    useEffect(()=>{
        let sum = 0;
        remaining.forEach((category)=>{
            sum += category.count
        })
        setDone(sum<1)
    },[remaining])


    return (
        <div className={classes.statusIndicator}>
            <div className={classes.statusTitle}>
                <FontAwesomeIcon icon={done ? faCheck : faExclamationTriangle}/>{done ? ' All items are answered' : ' Answers missing:'}
            </div>
            <div className={classes.remaining}>
                <table>
                    <tbody>
                    {!done && remaining.map((item,index)=>{
                    return <tr key={index}><td>{item.category}: </td><td>{item.count === 0 ? 'Done' : item.count + ' incomplete'}</td></tr>
                })}
                    </tbody>
                </table>

                
            </div>
        </div>
    )
}

const SendPage = ({formData}) => {
    const [done, setDone] = React.useState(false)
    const [remaining, setRemaining] = React.useState([])
    const classes = useStyles()

    const isArrayAndallAreFalse = (value) =>
    {
        var allFalse = false;
    }

    const getRemaining = (arr) =>
    { 
        setDone(false);
        var sum = 0;
        var result = [
            {category:arr[0][0].category, count:0},
            {category:arr[1][0].category, count:0},
            {category:arr[2][0].category, count:0},
            {category:arr[3][0].category, count:0}]

        arr.forEach((category,categoryIndex)=>
            category.forEach((item)=>{
                if(!item.disabled)
                {
                    if(item.value === undefined || item.value === "")
                    {
                        result[categoryIndex].count += 1
                        sum += 1;
                    }
                    else if(Array.isArray(item.value))
                    {
                        if(item.value.every(w => w.selected === false))
                        {
                            result[categoryIndex].count += 1
                            sum += 1;
                        }
                    }
                }

               
            })
        )
        if(sum < 1)
        {
            setDone(true);
        }

        return result;
    }

    

    React.useEffect(()=>{
        setRemaining(getRemaining(formData))
    },[formData])

    return(
        <div className={classes.sendPage}>
            <div className={classes.question}>
                Ready to submit?
            </div>
            <div className={classes.description}>
                Once you have submitted the form, you will be taken to the results view where you can see the other course participants' answers.
                Keep in mind that you will not be able to make changes to your course valuation after you submit.
            </div>
            <StatusIndicator remaining={remaining}/>
            <Context.Consumer>
                {value =>
                <Button onClick={value.handleViewToggle} variant="contained" color="default">{done ? 'Submit and view results' : 'Abstain remaining and submit'}</Button>
                }
            </Context.Consumer>
            
            
        </div>
    )
}

export default SendPage;
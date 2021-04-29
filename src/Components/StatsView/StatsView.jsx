import React from 'react'
import {createUseStyles} from 'react-jss'
import GenericStatItem from './GenericStatItem'
import ThankYou from './ThankYou'

const useStyles = createUseStyles({
    statsView:{
    },
    title:{
        fontSize:28,
        marginTop:40,
        marginBottom:10,
        fontWeight:300,
    },
    subTitle:{
        marginTop:20,

        marginBottom:20,
        width:600,
        margin:'0 auto'
    },
    bottomInfo:{
        marginTop:50,
        width:600,
        margin:'0 auto',
        fontStyle:'italic',
        textAlign:'left'

    }
})



const StatsView = ({formData}) => {
    const classes = useStyles();
    var count = 0;

    return(
        <div className={classes.statsView}>
                <ThankYou/>

                <div className={classes.title}>
                    Results
                </div>

                <div className={classes.subTitle}>
                Here, the answers from this course's ongoing course evaluation are continuously updated.
                In each diagram below, you can see how the course participants have responded so far, with your answers marked in blue.
                You can come back when the course evaluation is completed to see the final result.
                </div>
                {formData[0].map((item)=>{
                    count++;
                    
                    return  <GenericStatItem count={count} title={item.title} key={item.id} id={item.id} value={item.value} type={item.inputType} options={item.options}/>
                })}
                {formData[1].map((item)=>{
                    count++;
                    
                        return <GenericStatItem count={count} title={item.title} key={item.id} id={item.id} value={item.value} type={item.inputType} options={item.options}/>
                    })}
                {formData[2].map((item)=>{
                    count++;
                        return <GenericStatItem count={count} title={item.title} key={item.id} id={item.id} value={item.value} type={item.inputType} options={item.options}/>
                    })}
                {formData[3].map((item)=>{
                    count++
                        return <GenericStatItem count={count} title={item.title} key={item.id} id={item.id} value={item.value} type={item.inputType} options={item.options}/>
                    })}
            <div className={classes.bottomInfo}>
                 
            You have now reached the end of the tool.<br/> When you're done exploring
                we ask you to evaluate this tool with the survey "AttrakDiff" by  <a href="https://esurvey.uid.com/survey/#5a3ad5a4-4760-4796-91b5-4231a60bbbaf">clicking here.</a>
                  {" "}(Switch from German to English in the top right corner after clicking the link!)
                </div>
        </div>
    )
}

export default StatsView;

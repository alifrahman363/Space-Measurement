import React from 'react'
import classes from './FirstRow.module.css' ;

export const FirstRow = () => {
    return (
            <div className= {classes.rowOne}>
            <div className={classes.c1}>
                <h4>Space classification*</h4>
                <input type="text" name="" id="" />
            </div>

            <div className={classes.c2}>
                <h4>Space*</h4>
                <input type="text" name="" id="" />
            </div>

            <div className={classes.c3}>
                <h4>Space type</h4>
                <input type="text" name="" id="" />
            </div>
        </div>
     )
}

export default FirstRow ;
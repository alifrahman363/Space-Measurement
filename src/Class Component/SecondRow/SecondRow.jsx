import React from 'react' ;
import classes from './SecondRow.module.css' ;

export const SecondRow = () => {
    return (
        <div className={classes.rowTwo} >
            <div className={classes.rowTwoA}>
                <div className={classes.c4}>
                    <h4>Area</h4>
                    <input  type="text" placeholder="Cpr:0184678768_p1:Nafisa Apartment/teams" name=""
                        id="" />
                </div>
                <div className={classes.c5}>
                    <h4>Sprint</h4>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className={classes.rowTwoB}>
                <div className={classes.c6}>
                    <h4>State*</h4>
                    <input type="text" placeholder="To do" name="" id="" />
                </div>

                <div className={classes.c7}>
                    <h4>Reason*</h4>
                    <input type="text" placeholder="New York" name="" id="" />
                </div>

                <div className={classes.c8}>
                    <h4>Assign to</h4>
                    <input type="text" name="" id="" />
                </div>
            </div>
        </div>
    )
}

export default SecondRow ;
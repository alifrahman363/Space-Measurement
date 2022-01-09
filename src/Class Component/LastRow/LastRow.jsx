import React from 'react'
import classes from './LastRow.module.css' ;


export const LastRow = () => {
    return (

        <div className={classes.clickEvent}>
            <div className={classes.buttons}>
                <a id="b1" className={classes.curB1} href='_newPage'>Details</a>
                <a id="b2" className={classes.curB2} href='_newPage'>COGS</a>
                <a id="b3" className={classes.measureMent} href='_newPage'>Measurement</a>
                <a id="b4" className={classes.curB4} href='_newPage'>Links</a>
                <a id="b5" className={classes.curB5} href='_newPage'>Attachment</a>
                <a id="b6" className={classes.curB6} href='_newPage'>History</a>
            </div>
 
            <div className={classes.mod}>
                <div className={classes.mod1}>
                    <p className={classes.bb1} > Side</p>
                    <p>Celling 1</p>
                    <p>Celling 2</p>
                    <p>null</p>
                </div>

                <div className={classes.mod2}>
                    <p className={classes.bb2} > Length</p>
                    <p>10</p>
                    <p>10</p>
                    <p>null</p>
                </div>

                <div className={classes.mod3}>
                    <p className={classes.bb3}>Width</p>
                    <p>10</p>
                    <p>2</p>
                    <p>null</p>
                </div>

                <div className={classes.mod4}>
                    <p className={classes.bb4}>Height</p>
                    <p>Null</p>
                    <p>Null 2</p>
                    <p>null</p>
                </div>
                <div className={classes.mod5}>
                    <p className={classes.bb5}> Total</p>
                    <p> 100</p>
                    <p> 20</p>
                    <p> null</p>
                </div>
         
                <div className={classes.mod6}>
                    <p className={classes.bb6}> Shape</p>
                    <p>Null 2</p>
                    <p>null</p>
                    <p>Null 2</p>
                </div>
          
                <div className={classes.mod7}>
                    <p className={classes.bb7}>Angle</p>
                    <p>Null</p>
                    <p>Null</p>
                    <p>null</p>
                </div>

                <div className={classes.rowFive}>
                    <p className={classes.new}> Total design area</p>
                    <table className={classes.new2}>
                        <tr>
                            <td>584</td>
                        </tr>
                    </table>
                </div>

                <div className={classes.rowSix} >
                
                    <div className={classes.r6a} >
                        <p>Area Total: &nbsp;  
                        <input type="text" placeholder="10" name="" id="" />
                        <input type="text" placeholder="12" name="" id="" />
                         <a>=</a>
                        <input type="text" placeholder="120" name="" id="" /> </p>
                    </div>

                    <div className={classes.r6b} >
                        <p>Volume Total: &nbsp;  
                        <input type="text" placeholder="10" name="" id="" />
                        <input type="text" placeholder="12" name="" id="" />
                        <input type="text" placeholder="7" name="" id="" />
                         <a>=</a>
                        <input type="text" placeholder="840" name="" id="" /> </p>
                    </div>
                </div>
            </div>

            <button className={classes.btn} >Submit</button>
            <div id="blankBox">
                <h2>  <br></br> Hey there delilah </h2>
            </div>

        </div>

    )
}

export default LastRow ;
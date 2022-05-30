import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useState } from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Paper, Typography } from '@material-ui/core'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// DESCRIBE TO USER WHERE THEY ARE & WHAT THEY CAN DO
export default function Guide() {

    // ==================================================
    //          MAKE A SAFE SPACE FOR  S T A T E  TO LIVE
    // PROPERTY KEY, FUNCTION TO CHANGE KEY'S VALUE = DEFAULT VALUE
    const [value, setValue] = useState(true)
    // ==================================================


    // ==================================================

    // T O   D O 
    // CONDITIONAL RENDERING 
    //         : BASED ON URL
    //           GRAB CONTENTS OF URL
    // IF URL HAS BLOG:ID > BLOGPOST GUIDE
    // IF URL HAS ABOUT > ABOUTME GUIDE


    function whereTest2() {
        return (
            <Paper>
            <Typography align='center'>CHECK OUT ALL ABOUT ME, ONE DAY</Typography>
            </Paper>
        )
    }
    function whereTest() {
        return (
            <Paper>
            <Typography align='center'>hi there - guide here!</Typography>
            </Paper>
        )
    }


    return (
        <>
          { value ? whereTest() : whereTest2 }
        </>
    )
        

    
    }
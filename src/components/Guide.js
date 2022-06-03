import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useState } from 'react'
import { useEffect } from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
import { useParams } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Paper, Typography } from '@material-ui/core'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// DESCRIBE TO USER  W H E R E  THEY ARE &  W H A T  THEY CAN DO
export default function Guide() {

    // ==================================================
    //          MAKE A SAFE SPACE FOR  S T A T E  TO LIVE
    // PROPERTY KEY, FUNCTION TO CHANGE KEY'S VALUE = DEFAULT VALUE
    const [value, setValue] = useState(false)
    // ==================================================
    // GRAB SOME URL PARAMS TO USE LATER - ADVANCED DESTRUCTURING
    const { blogId } = useParams();
    // ==================================================
    // PRETEND THIS WILL SHOW ME SOMETHING SOMEWHERE
    useEffect(() => {
        console.log("Hey, buddy. Nice to see you.")
        console.log(blogId)
        
    })
    // ==================================================

// ------------------------------------------------------------RENDER CASES
const whereTest = () => {
    return (
        <Paper>
            <Typography align='center'>hi there - guide here! ლ(´ڡ`ლ)<br />TRUE CASE</Typography>
            </Paper>
        )
    }
    const whereTest2 = () => {
        return (
            <Paper>
            <Typography align='center'>｡◕‿‿◕｡CHECK OUT ALL ABOUT ME, ONE DAY<br />FALSE CASE</Typography>
            </Paper>
        )
    }
    // ------------------------------------------------------------

    console.log(blogId)
    return (
        <>
          { !!blogId ? whereTest() : whereTest2() }
        </>
    )
        

    
    }
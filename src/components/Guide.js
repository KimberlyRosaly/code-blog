import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useState } from 'react'
import { useEffect } from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// DESCRIBE TO USER WHERE THEY ARE & WHAT THEY CAN DO
export default function Guide() {

    // ==================================================
    //          MAKE A SAFE SPACE FOR  S T A T E  TO LIVE
    // PROPERTY KEY, FUNCTION TO CHANGE KEY'S VALUE = DEFAULT VALUE
    const [value, setValue] = useState(false)
    // ==================================================
    //  AFTER 1ST RENDER & AFTER S T A T E   U P D A T E S
    useEffect(() => {console.log("Hey, buddy. Nice to see you.")})
    // ==================================================


    // CONDITIONAL RENDERING : BASED ON URL
    return (
        <div>hi there - guide here!</div>
    )
}
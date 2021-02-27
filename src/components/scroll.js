import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import { FaArrowCircleUp } from 'react-icons/fa'

const useStyle = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '10vh',
        backgroundColor: 'hsl(186, 100%, 94%)',
        color: 'black',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: '#397BA6',
            backgroundColor: '#DCDCDC'
        },
        right: '5%',

    }
}))

const Scroll = ({ showBelow }) => {

    const classes = useStyle();
    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        }
        else {
            if (show) setShow(false)
        }
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }
    return (
        <div>
            { show &&
                <IconButton onClick={handleClick} className={classes.toTop} aria-label='to top'>
                    <FaArrowCircleUp />
                </IconButton>
            }
        </div >
    )
}

export default Scroll

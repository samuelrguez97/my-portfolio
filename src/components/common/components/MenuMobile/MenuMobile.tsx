import React, { useEffect, useRef } from 'react'

import { Grid } from '@material-ui/core'

import useStyles from './MenuMobile.styles'

const MenuMobile = (props: any) => {
    const classes = useStyles()

    const {
        isOpen,
        menuHamburgerRef,
        setShowMenuMobile
    } = props

    const menuRef = useRef(null) as any

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && menuHamburgerRef.current && !menuHamburgerRef.current.contains(event.target)) {
            setShowMenuMobile(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [menuRef])

    return (
        <Grid
            ref={menuRef}
            container
            className={`${classes.menuContainer} ${isOpen ? classes.slideIn : classes.slideOut}`}
        >

        </Grid>
    )
}

export default MenuMobile
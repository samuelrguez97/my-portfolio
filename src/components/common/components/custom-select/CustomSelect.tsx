import React, { useState, useEffect } from 'react'

import { Grid, Typography } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'

import useStyles from './CustomSelect.styles'

const CustomSelect = (props: any) => {
    const classes = useStyles()

    const {
        placeholder,
        setValue,
        values
    } = props

    const [showValues, setShowValues] = useState(false)
    const [currentValue, setCurrentValue] = useState('')

    const selectValue = (index) => {
        setCurrentValue(values[index])
        setValue(values[index])
        setShowValues(false)
    }

    return (
        <Grid container className={classes.container} alignItems='center' onClick={() => setShowValues(!showValues)}>
            <Grid item md={11} sm={11} xs={11}>
                <Typography className={classes.value}>{currentValue ? currentValue : placeholder}</Typography>
            </Grid>
            <Grid item md={1} sm={1} xs={1}>
                <ArrowDropDown style={{ color: '#5656ef', cursor: 'pointer' }} fontSize='large' onClick={() => setShowValues(!showValues)} />
            </Grid>
            {
                showValues &&
                <Grid className={classes.valuesContainer}>
                    <Grid item className={classes.containerMargin}>
                        <Grid container>
                            {
                                values && values.map((value, index) => (
                                    <Grid item className={classes.valueItem} onClick={() => selectValue(index)}>
                                        {value}
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Grid>
    )

}

export default CustomSelect
import React, { useState } from 'react'
import { withRouter } from 'react-router'

import { Grid, MenuItem } from '@material-ui/core'
import CustomSelect from '../common/components/custom-select/CustomSelect'

import useStyles from './Technologies.styles'

const Technologies = (props: any) => {
    const classes = useStyles()

    const values = [
        'Java',
        'Angular',
        'React',
        'SQL',
        'SpringBoot'
    ]

    const [currentValue, setCurrentValue] = useState()

    return (
        <Grid container justify='center'>
            <Grid item md={8} sm={10} xs={11}>
                <Grid container className={classes.infoCard}>
                    <Grid item container spacing={8}>
                        <Grid item md={12} className={classes.title}>
                            Tecnologías
                        </Grid>
                        <Grid item md={12} className={classes.selector}>
                            <Grid container spacing={2}>
                                <Grid item md={8} className={classes.label}>
                                    Selecciona la tecnología en la que desees ver mis habilidades
                                </Grid>
                                <Grid item md={8} xs={12}>
                                    <CustomSelect
                                        values={values}
                                        placeholder={'Selecciona ...'}
                                        setValue={(value) => setCurrentValue(value)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} className={classes.technologyInfoContainer}>
                            {currentValue}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withRouter(Technologies)
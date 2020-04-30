import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import { Grid, MenuItem } from '@material-ui/core'
import CustomSelect from '../common/components/custom-select/CustomSelect'

import useStyles from './Technologies.styles'
import HabilityMeasure from '../common/components/hability-measure/HabilityMeasure'

const Technologies = (props: any) => {
    const classes = useStyles()

    const values = [
        'Java',
        'Angular',
        'React',
        'SQL',
        'SpringBoot'
    ]

    const habilities = [
        {
            technolgy: 'Java',
            experience: '4',
            knowledge: '3'
        },
        {
            technolgy: 'Angular',
            experience: '3',
            knowledge: '3'
        },
        {
            technolgy: 'React',
            experience: '4',
            knowledge: '4'
        },
        {
            technolgy: 'SQL',
            experience: '4',
            knowledge: '4'
        },
        {
            technolgy: 'SpringBoot',
            experience: '4',
            knowledge: '3'
        }
    ] as any

    const [currentValue, setCurrentValue] = useState('' as any)

    return (
        <Grid container justify='center'>
            <Grid item md={8} sm={10} xs={11}>
                <Grid container className={classes.infoCard}>
                    <Grid item container spacing={8}>
                        <Grid item md={12} className={classes.title}>
                            Tecnologías
                        </Grid>
                        <Grid item md={12}>
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
                            {
                                habilities.map((item, index) => (
                                    currentValue && (item.technolgy === currentValue) &&
                                    <Grid container spacing={4}>
                                        <Grid item container spacing={1}>
                                            <Grid item md={8} className={classes.label}>
                                                Experiencia
                                            </Grid>
                                            <Grid item md={8} xs={12}>
                                                <HabilityMeasure range={item.experience} />
                                            </Grid>
                                        </Grid>
                                        <Grid item container spacing={1}>
                                            <Grid item md={8} className={classes.label}>
                                                Conocimiento
                                            </Grid>
                                            <Grid item md={8} xs={12}>
                                                <HabilityMeasure range={item.knowledge} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withRouter(Technologies)
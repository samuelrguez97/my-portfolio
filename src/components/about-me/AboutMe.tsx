import * as React from "react";

import { Grid } from "@material-ui/core";

import useStyles from "./AboutMe.styles";

const AboutMe = (props: any) => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item md={8} sm={10} xs={11}>
        <Grid container className={classes.infoCard}>
          <Grid item container spacing={4}>
            <Grid item md={12} className={classes.title}>
              Sobre mí
            </Grid>
            <Grid item container>
              <Grid
                item
                lg={6}
                className={classes.textBlock}
                justify="flex-start"
              >
                Poseo más de 1 año de experiencia en el sector de desarrollo de
                software web, mis ambiciones incluyen trabajar en equipo con
                grandes proyecciones a futuro y muchas ganas de seguir
                aprendiendo.
              </Grid>
              <Grid
                item
                lg={6}
                className={classes.imgBlock}
                justify="flex-end"
              ></Grid>
              <Grid
                item
                lg={6}
                className={classes.imgBlock}
                justify="flex-start"
              ></Grid>
              <Grid
                item
                lg={6}
                className={classes.textBlock}
                justify="flex-end"
              >
                Amplio conocimiento en tecnologías punteras en la parte frontal
                con frameworks de JS como React y su implementación con API REST
                y APIs externas. Desarrollo de APIs e implementación de
                servicios y microservicios con la tecnología del framework de
                Java Spring Boot.
              </Grid>
              <Grid
                item
                lg={6}
                className={classes.textBlock}
                justify="flex-start"
              >
                Por otra parte he realizado desarrollos de procesos batch con
                Spring Batch. Uso y conocimiento del servidor Jenkis para el
                despliegue y generado de entregables tanto frontales como del
                back end.
              </Grid>
              <Grid
                item
                lg={6}
                className={classes.imgBlock}
                justify="flex-end"
              ></Grid>
              <Grid
                item
                lg={6}
                className={classes.imgBlock}
                justify="flex-start"
              ></Grid>
              <Grid
                item
                lg={6}
                className={classes.textBlock}
                justify="flex-end"
              >
                He trabajado en equipo en proyectos con metodología ágil SCRUM y
                con ayuda de herramientas de administración de tareas como Jira
                y herramientas para el control de versiones como GIT he
                desempeñado el trabajo de forma limpia, ordenada y veloz.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMe;

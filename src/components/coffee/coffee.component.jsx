import { Grid } from "@mui/material"
import coffee from "../../assets/coffee.png"

export const Coffee = ({views}) =>
{
    return(
        <Grid container style={{ height: "20%", justifyContent: "center"}}>
            <Grid item md={5} style={{ backgroundColor: "#D9CFCC", backgroundImage:`url(${coffee})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
                <div>{views}</div>
            </Grid>
        </Grid>
    )
}
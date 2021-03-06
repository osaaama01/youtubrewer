import { Grid } from "@mui/material";
import { Circle } from "../Circle";

import "./rewardsbar.styles.scss";

const RewardsBar = () => (
    <Grid style={{marginLeft:'4px'}} container spacing={0} >
      <Grid className='second_column' item sm={4} md={3.3}>
        <Grid container alignItems='center' direction='row'>
          <Grid item sm={4} md={4} style={{ zIndex: 1 }}>
            <Circle
              backgroundColor={"#F8D957"}
              size={84}
              showText={true}
              borderColor={"#FFFFFF"}
              topText={"03"}
              bottomText={"days"}
              borderWeight={1.5}
            ></Circle>
          </Grid>

          <Grid item sm={4} md={8}>
            <div
              className='reward_background_div'
              style={{ marginRight: "-3px" }}
            ></div>
          </Grid>
        </Grid>
      </Grid>

      <Grid className='second_column' item sm={4} md={3.3}>
        <Grid container alignItems='center' direction='row'>
          <Grid item sm={4} md={4} style={{ zIndex: 1 }}>
            <Circle
              backgroundColor={"#F8D957"}
              size={84}
              showText={true}
              borderColor={"#FFFFFF"}
              topText={"07"}
              bottomText={"days"}
              borderWeight={1.5}
            ></Circle>
          </Grid>

          <Grid item sm={4} md={8}>
            <div
              className='reward_background_div'
              style={{ marginRight: "-3px" }}
            ></div>
          </Grid>
        </Grid>
      </Grid>

      <Grid className='second_column' item sm={4} md={3.3}>
        <Grid container alignItems='center' direction='row'>
          <Grid item sm={4} md={4} style={{ zIndex: 1 }}>
            <Circle
              backgroundColor={"#F8D957"}
              size={84}
              showText={true}
              borderColor={"#FFFFFF"}
              topText={"15"}
              bottomText={"days"}
              borderWeight={1.5}
            ></Circle>
          </Grid>

          <Grid item sm={4} md={8}>
            <div
              className='reward_background_div'
              style={{ marginRight: "-3px" }}
            ></div>
          </Grid>
        </Grid>
      </Grid>

      <Grid className='second_column' item sm={4} md={2.1}>
        <Grid container alignItems='center' direction='row'>
          <Grid item sm={4} md={4} style={{ zIndex: 1, marginLeft: "-3px" }}>
            <Circle
              backgroundColor={"#F8D957"}
              size={84}
              showText={true}
              borderColor={"#FFFFFF"}
              topText={"01"}
              bottomText={"month"}
              borderWeight={1.5}
            ></Circle>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
);

export default RewardsBar;

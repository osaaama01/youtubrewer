import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import banner from "../../assets/banner.PNG";
import RewardsBar from "../../components/rewardbar/rewardbar.component";
import "./home.styles.scss";
import { Battery } from "../../components/battery/battery.component";
import { Coffee } from "../../components/coffee/coffee.component";
import CustomButtom from "../../components/custom-button/custom-button.component";
import SettingsBar from "../../components/settings-bar/settings-bar.component";
import Video from "../../components/video/video.component";
import axios from "axios";

function generateEmbedId(url) {
  const trimmedUrl = url.split("=");
  return trimmedUrl[trimmedUrl.length - 1];
}

function getSum(obj) {
  let sum = 0;

  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
}

function getSession(obj) {
  console.log(obj);
  const session = axios
    .post(
      "https://us-central1-youtubrewer.cloudfunctions.net/api/startSession",
      obj
    )
    .then((res) => {
      // console.log(res.data.sessionid);
      return res.data.sessionid;
    });
  return session;
}

function pingSession(obj) {
  const session = axios
    .post("https://us-central1-youtubrewer.cloudfunctions.net/api/ping", obj)
    .then((res) => {
      return res.data;
    });
  return session;
}

const Home = ({ videos, flipShowHome }) => {
  const [click, setClicks] = useState("-");
  const [url, setUrl] = useState("");
  const [payload, setPayload] = useState();
  const sessionPayload = videos;
  const [sessionId, setSessionId] = useState("");
  const [ping, setPing] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-youtubrewer.cloudfunctions.net/api/getVideo/${sessionId}`
      )
      .then((res) => {
        setPayload(res.data);
      })
      .catch((e) => {
        if (e.response.status === 404 || e.response.status === 403) {
          //session expired
          getSession(sessionPayload[videoIndex]).then((id) => {
            setSessionId(id);
          });
          console.log(sessionId);
          console.log("403");
        } else if (
          e.response.status === 400 ||
          e.response.status === 402 ||
          e.response.status === 408
        ) {
          setTimeout(() => {
            console.log("402");
            setSessionId("");
          }, 60000);
        }
      });
  }, [sessionId]);

  useEffect(() => {
    if (payload !== undefined) {
      const url = generateEmbedId(payload.video_url);
      console.log("Url:", url);
      const viewCount = getSum(payload.views);
      setUrl(url);
      setClicks(viewCount);
    }
  }, [payload]);

  useEffect(() => {
    setTimeout(() => {
      if (payload) {
        pingSession({
          my_session_id: payload.session_id,
          watching_session_id: payload.session_playing_mine,
        }).then((res) => {
          console.log(res);
        });
      }
      setPing(!ping);
      console.log(sessionPayload);
      console.log("pinging...");
      setVideoIndex(
        videoIndex === sessionPayload.length - 1 ? 0 : videoIndex + 1
      );
      setSessionId("");
    }, 60000);
  }, [ping]);

  return (
    <div className='container'>
      <Grid container spacing={2}>
        <Grid
          className='banner_column'
          item
          sm={4}
          md={4}
          lg={4}
          display={{ xs: "none", sm: "block", md: "block", lg: "block" }}
        >
          {" "}
          {/* 33.33% width on desktop and 50% width on mobile */}
          <div className='banner_row'>
            <img className='banner_image' src={banner} alt='banner.png' />
          </div>
          <div className='banner_row'>
            <img className='banner_image' src={banner} alt='banner.png' />
          </div>
          <div className='last_banner'>
            <img className='banner_image' src={banner} alt='banner.png' />
          </div>
        </Grid>
        <Grid className='second_column' item xs={12} sm={4} md={4} lg={4}>
          {" "}
          {/* 50% width on desktop and 66.66% width on mobile */}
          <div style={{ backgroundColor: "#BAB0B0", borderRadius: "12px" }}>
            <Battery buttonText={"Please set the video to brew"} />
            <Video url={url} />
          </div>
          <Coffee views={click} />
          <SettingsBar flipShowHome={flipShowHome}></SettingsBar>
          <RewardsBar />
          <Grid className='app_buttons' container>
            <Grid
              item
              sm={4}
              md={6}
              display={{ xs: "none", md: "block" }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CustomButtom
                top_text={"Download on the"}
                bottom_text={"App Store"}
                imageName={"apple"}
                width={24}
                height={24}
              ></CustomButtom>
            </Grid>
            <Grid
              item
              sm={4}
              md={6}
              display={{ xs: "none", md: "block" }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CustomButtom
                top_text={"GET IT ON"}
                bottom_text={"Google Play"}
                imageName={"google"}
                width={24}
                height={24}
              ></CustomButtom>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className='banner_column'
          item
          sm={4}
          md={4}
          lg={4}
          display={{ xs: "none", sm: "block", md: "block", lg: "block" }}
        >
          <div className='banner_row'>
            <img className='banner_image' src={banner} alt='banner.png' />
          </div>
          <div className='banner_row'>
            <img className='banner_image' src={banner} alt='banner.png' />
          </div>
          <div className='last_banner'>
            <img className='banner_image' src={banner} alt='banner.png' />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;

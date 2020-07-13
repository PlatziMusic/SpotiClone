import React from "react";
import Card from "../components/Card";
import "../assets/styles/components/Home.scss";

const Home = () => {
  return (
    <section className="test">
      <Card
        image="https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/2751408.jpg"
        title="Little Dark Age"
        info="MGMT"
      />
      <Card
        image="https://img.discogs.com/wX_80sp-2w2qVHes5EFQz8pibh8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6986924-1512064694-1608.jpeg.jpg"
        title="Oracular Spectacular"
        info="MGMT"
      />
      <Card
        image="https://img.discogs.com/GnNBX6ZtpJpa_7YaRTkTxcOrcCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2842940-1303578541.jpeg.jpg"
        title="Conratulations"
        info="MGMT"
      />
      <Card
        image="https://img.discogs.com/OoYfYphg5TOE0CwOsayPmaRtLCM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2344530-1487755502-5862.jpeg.jpg"
        title="Tourist History"
        info="Two door cinema club"
      />
      <Card
        image="https://s.mxmcdn.net/images-storage/albums/8/5/6/9/4/2/32249658_350_350.jpg"
        title="Beacon"
        info="Two door cinema club"
      />
      <Card
        image="https://lh3.googleusercontent.com/proxy/D1zOztVabS5Bjn6J0USBpH1Rrs24VYqM73gQzp94wC4-e4TfblGy1xYo4BNnIl7aZOk5m6O9LOp_sSWB5mkIo75kAFa_0S4kFyb0mtqaEFBzSJJAlIsC8bt1KK2CVOas4b-4S2EpTkIB9SzT0wuXqw"
        title="Vampire weekend"
        info="Vampire weekend"
      />
    </section>
  );
};

export default Home;

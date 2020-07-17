import React from "react";
import "../assets/styles/components/Playlist.scss";

import PlaylistHead from "../components/PlaylistHead";
import Song from "../components/Song";

// import { Link } from "react-router-dom";
// import "../components/Icons";

const Playlist = () => {
  return (
    <>
      <PlaylistHead
        caratula="https://i.scdn.co/image/ab67616d00001e0201e2ebfbf4f8147621c8a866"
        type="ÁLBUM"
        nameArtist="Vampire Weekend"
        imageArtist="https://i.scdn.co/image/5390ca6bd240b2a15b71868d1d105c3d6a7a7b17"
        linkArtist="Vampire Weekend"
        duration="• 2008 • 34 min 18 seg"
      />
      <section className="songs">
        <Song
          nameSong="Mansard Roof"
          nameArtist="Vampire Weekend"
          duration="2:07"
        />
        <Song
          nameSong="Oxford Comma"
          nameArtist="Vampire Weekend"
          duration="3:15"
        />
        <Song nameSong="A-punk" nameArtist="Vampire Weekend" duration="2:17" />
        <Song
          nameSong="Cape Cod Kwassa Kwassa"
          nameArtist="Vampire Weekend"
          duration="3:34"
        />
        <Song nameSong="M79" nameArtist="Vampire Weekend" duration="4:15" />
        <Song nameSong="Campus" nameArtist="Vampire Weekend" duration="2:56" />
        <Song nameSong="Bryn" nameArtist="Vampire Weekend" duration="2:13" />
        <Song
          nameSong="One (Blake´s Got A New Face)"
          nameArtist="Vampire Weekend"
          duration="3:13"
        />
        <Song
          nameSong="I Stand Corrected"
          nameArtist="Vampire Weekend"
          duration="2:39"
        />
        <Song nameSong="Walcott" nameArtist="Vampire Weekend" duration="3:41" />
        <Song
          nameSong="The Kids Don´t Stand A Chance"
          nameArtist="Vampire Weekend"
          duration="4:03"
        />
      </section>
    </>
  );
};

export default Playlist;

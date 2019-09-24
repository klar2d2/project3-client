import axios from "axios";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {GET_ONE_ARTIST_POST, GET_FRONTPAGE_POSTS} from "../../const"
import { IPost } from "../../react-app-env";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      flexWrap: "wrap",
      gridColGap: "2px",
      gridRowGap: "2px",
      justifyContent: "space-around",
      overflow: "hidden",
    },
  }),
);

// interface IBrowseProps {
//   artworks: IPost[];
//   refreshArtworks();
// }
const getOneArtwork = (userId, postId) => {
  console.log('click', userId, postId)
  return
}

const Browse = (props) => {
  const classes = useStyles();
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get(GET_FRONTPAGE_POSTS)
    .then((response) => {
        setArtworks(response.data.message);
    })
    .catch((err) => {
      console.log("Err while grabbing artworks", err);
    });
  }, []);

  return (
    <div className={classes.root} id="browseContainer">
      <GridList cellHeight={400} cols={3}>
      {props.artworks.map((work) => (
            <GridListTile key={work.id} cols={1} className="tile">
              <Link to={{
                pathname: `art/${work.artistId}/${work.id}`,
                state: {
                  artistId: work.artistId,
                  artId: work.id
                }
              }}>
                <img className='img-tile' src={work.media_url} alt={work.id} />
                </Link>

            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

export default Browse;

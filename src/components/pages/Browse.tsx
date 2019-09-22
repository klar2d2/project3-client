import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import React from "react";
import {GET_ONE_ARTIST_POST} from '../../const'

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

interface IBrowseProps {
  artworks: any[];
  refreshArtworks();
}

const getOneArtwork = (userId, postId) => {
  console.log('click')
  return <Redirect to={GET_ONE_ARTIST_POST(userId, postId)} />
}

const Browse = (props: IBrowseProps) => {
  const classes = useStyles();
  console.log(props.artworks)
  return (
    <div className={classes.root} id="browseContainer">
      <GridList cellHeight={160} cols={3}>
      {props.artworks.map((work, i) => (
            <GridListTile key={work.id} cols={1} className="tile">
              <img src={work.media_url} alt={work.id} onClick={(e) => {getOneArtwork(work.userId, work.id)}} />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

export default Browse;

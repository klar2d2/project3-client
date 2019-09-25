import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";
import {SERVER} from '../../const'
import axios from 'axios'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#F9F9F9",
      display: "flex",
      flexWrap: "wrap",
      gridColGap: "2px",
      gridRowGap: "2px",
      justifyContent: "space-around",
      overflow: "hidden",
    },
  }),
);




const Favorites = (props) => {
  const [artworks, setFavorites] = useState([]);
  let tiles;
  const classes = useStyles();
  if (props.savedPics) {
       tiles = props.savedPics.map((favorite: string, i: number) => {
        return (<GridListTile key={i} cols={1} className="tile">
          <img src={favorite} alt="Tattoo" />
        </GridListTile>);
      });
    }

  useEffect(() => {
    console.log(props.user)
    axios.get(SERVER + `/v1/users/${props.user}/favoriteWorks`)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
      console.log("Err while grabbing artworks", err);
    });
  }, []);


  return (
      <div className={classes.root} id="browseContainer">
        <GridList cellHeight={200} cols={2}>
        {tiles}
        </GridList>
      </div>
  );
};

export default Favorites;

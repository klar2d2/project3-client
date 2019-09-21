import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

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
  let tiles;
  const classes = useStyles();
  if (props.savedPics) {
       tiles = props.savedPics.map((favorite: string, i: number) => {
        return (<GridListTile key={i} cols={1} className="tile">
          <img src={favorite} alt="Tattoo" />
        </GridListTile>);
      });
    }

  return (
      <div className={classes.root} id="browseContainer">
        <GridList cellHeight={200} cols={2}>
        {tiles}
        </GridList>
      </div>
  );
};

export default Favorites;

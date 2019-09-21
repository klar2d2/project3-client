import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

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

const Browse = (props: IBrowseProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="browseContainer">
      <GridList cellHeight={160} cols={3}>
      {props.artworks.map((work, i) => (
            <GridListTile key={i} cols={1} className="tile">
              <img src={work} alt={work} />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

export default Browse;

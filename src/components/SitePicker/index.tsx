import React, { useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";

import { faGithub, faHackerNews, faReddit, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addSiteFilter, submitGoogleSearch } from "../../util";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  main: {
    color: theme.palette.primary.contrastText,
    display: "flex",
  },
  active: {
    color: "#6eacea",
  },
  icon: {
    fontSize: 14
  }
}));

const SITES = [
  {
    name: "stackoverflow",
    domain: "stackoverflow.com",
    icon: <FontAwesomeIcon icon={faStackOverflow} />,
  },
  {
    name: "github",
    domain: "github.com",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: "hackernews",
    domain: "news.ycombinator.com",
    icon: <FontAwesomeIcon icon={faHackerNews} />,
  },
  {
    name: "reddit",
    domain: "reddit.com",
    icon: <FontAwesomeIcon icon={faReddit} />,
  },
];

const SitePicker = () => {
  const classes = useStyles();
  const [activeSite, setActiveSite] = useState(null);

  const handleSiteClick = (site: any) => {
    setActiveSite(site.name);

    // add to search field
    addSiteFilter(site.domain);

    // add util to make it call form submit
    submitGoogleSearch()
  };

  return (
    <div className={classes.main}>
      {SITES.map((site) => {
        const isActive = site.name === activeSite;

        return <IconButton className={clsx({ [classes.active]: isActive }, classes.icon)} onClick={() => handleSiteClick(site)}>{site.icon}</IconButton>
      })}
    </div>
  );
};

export default SitePicker;

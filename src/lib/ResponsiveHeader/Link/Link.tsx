import react, { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {},
  link: {
    marginLeft: '1rem',
    padding: 10,
    '@media (max-width: 480px)': {
      display: 'none',
    },
  },
  mobileLinks: {
    '@media (min-width: 480px)': {
      display: 'none',
    },
    '@media (max-width: 480px)': {},
  },
});

const Links = ({ to, Component, text, open }) => {
  const classes = useStyles({});

  return (
    <div>
      {Component ? (
        <Component className={classes.link} to={to}>
          {text}
        </Component>
      ) : (
        <a className={classes.link} href={to}>
          {text}
        </a>
      )}
      <div>
        {open === false && (
          <>
            {Component ? (
              <Component className={classes.mobileLinks} to={to}>
                {text}
              </Component>
            ) : (
              <a className={classes.mobileLinks} href={to}>
                {text}
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Links;

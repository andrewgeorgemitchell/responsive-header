import { createUseStyles } from 'react-jss';
import { useState } from 'react';

const useStyles = createUseStyles({
  root: {
    '-webkit-tap-highlight-color': 'transparent',
    width: 60,
    height: 60,
    background: '#fff',
    outlineOffset: 2,
    border: 'none',
    position: 'relative',
    '& #menu_checkbox': {
      display: 'none',
    },
    '& label': {
      position: 'absolute',
      top: '50%',
      right: 0,
      left: 0,
      display: 'block',
      width: 60,
      height: 60,
      margin: '-30px auto 0 auto',
      cursor: 'pointer',
    },
    '& label:before': {
      content: '"',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#f44336',
      transition: '1.2s cubic-bezier(0, 0.96, 1, 0.02) background-color',
    },
    '& label div': {
      position: 'relative',
      top: 0,
      height: 12,
      backgroundColor: '#000',
      marginBottom: 12,
      transition:
        '0.3s ease transform, 0.3s ease top, 0.3s ease width, .3s ease right',
      borderRadius: 2,
    },
    '& label div:last-child': {
      marginBottom: 0,
      transformOrigin: 60,
    },
    '& label div:first-child': {
      transformOrigin: 0,
    },
    '& label div:nth-child(2)': {
      right: 0,
      width: 60,
    },
    '& #menu_checkbox:checked + label:before': {
      backgroundColor: '#4caf50',
    },
    '& #menu_checkbox:checked + label div:first-child': {
      top: '-6px',
      transform: 'rotateZ(45deg)',
    },
    '& #menu_checkbox:checked + label div:last-child': {
      top: -11,
      right: -7,
      transform: 'rotateZ(45deg)',
    },
    '& #menu_checkbox:checked + label div:nth-child(2)': {
      width: 85,
      top: 0,
      right: 13,
      transform: 'rotateZ(-45deg)',
    },
  },
});

const HamburgerIcon = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <button className={classes.root}>
      <input
        type="checkbox"
        id="menu_checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </button>
  );
};

export default HamburgerIcon;

import { createUseStyles } from 'react-jss';
import HamburgerIcon from './HamburgerIcon/HamburgerIcon';
import Link from './Link/Link';
import { useState } from 'react';
const cx = (classes: string[]) => classes.join(' ');

const useStyles = createUseStyles<
  'root' | 'linksCont' | 'link' | 'logo' | 'hamburger',
  { variant: HeaderVariant },
  {}
>({
  root: {
    display: 'grid',
    gridTemplateColumns: ({ variant }) =>
      variant === HeaderVariant.Default ? '100px auto' : 'auto',
    gridTemplateRows: ({ variant }) =>
      variant === HeaderVariant.Default ? 'auto' : '75px 50px',
    gridTemplateAreas: ({ variant }) =>
      variant === HeaderVariant.Default
        ? `
      "logo nav"
    `
        : `
    "logo"
    "nav"
  `,
  },
  logo: {
    marginLeft: ({ variant }) =>
      variant === HeaderVariant.Default ? '0px' : 'auto',
    marginRight: ({ variant }) =>
      variant === HeaderVariant.Default ? '0px' : 'auto',
  },
  linksCont: {
    marginLeft: ({ variant }) =>
      variant === HeaderVariant.Default ? '0px' : 'auto',
    marginRight: ({ variant }) =>
      variant === HeaderVariant.Default ? '0px' : 'auto',
    gridArea: 'nav',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  link: {
    marginLeft: '1rem',
    padding: 10,
  },
  hamburger: {
    marginLeft: ({ variant }) =>
      variant === HeaderVariant.Default ? '0px' : 'auto',
    marginRight: ({ variant }) =>
      variant === HeaderVariant.Default ? '0px' : 'auto',
    gridArea: 'nav',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '@media (min-width: 480px)': {
      visibility: 'hidden',
    },
  },
});

enum HeaderVariant {
  Default = 'default',
  Vertical = 'vertical',
}

type NavLink = {
  to: string;
  text: string;
  component?: React.ComponentType<{ className: string; to: string }>;
};

type ResponsiveHeaderProps = {
  logo?: {
    src: string;
    alt: string;
  };
  links: NavLink[];
  variant?: HeaderVariant;
  className?: string;
};

const ResponsiveHeader = ({
  logo,
  links,
  variant = HeaderVariant.Default,
  className,
}: ResponsiveHeaderProps): JSX.Element => {
  const classes = useStyles({ variant });
  const [open, setOpen] = useState(false);

  const openBurger = () => {
    setOpen(!open);
  };

  return (
    <nav className={cx([classes.root, className])}>
      {logo && <img className={classes.logo} src={logo.src} alt={logo.alt} />}
      <div className={classes.linksCont}>
        {links.map(({ to, text, component: Component }) => (
          <>
            <Link to={to} text={text} Component={Component} open={open}></Link>
          </>
        ))}
      </div>
      <div className={classes.hamburger}>
        <HamburgerIcon openBurger={openBurger} />
      </div>
    </nav>
  );
};

export default ResponsiveHeader;

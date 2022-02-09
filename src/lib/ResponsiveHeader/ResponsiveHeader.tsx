import { createUseStyles } from 'react-jss';
import HamburgerIcon from './HamburgerIcon/HamburgerIcon';

const cx = (classes: string[]) => classes.join(' ');

const useStyles = createUseStyles<
  'root' | 'linksCont' | 'link' | 'logo',
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

  return (
    <nav className={cx([classes.root, className])}>
      {logo && <img className={classes.logo} src={logo.src} alt={logo.alt} />}
      <div className={classes.linksCont}>
        {links.map(({ to, text, component: Component }) => (
          <>
            {Component ? (
              <Component className={classes.link} to={to}>
                {text}
              </Component>
            ) : (
              <a className={classes.link} href={to}>
                {text}
              </a>
            )}
          </>
        ))}
      </div>
      <div className={classes.linksCont}>
        <HamburgerIcon />
      </div>
    </nav>
  );
};

export default ResponsiveHeader;

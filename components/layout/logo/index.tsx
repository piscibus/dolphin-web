import Image from 'next/image';
import Link from 'next/link';
import logoSm from '../../../public/assets/images/logo-sm.svg';
import config from '../../../config';
import styles from './Logo.module.css';

type Theme = 'light' | 'dark';

const LogoImage = () => (
  <span className={styles.logo}>
    <Image src={logoSm} alt={config.app.name}/>
  </span>
);

const AppName = () => <span className="logo-txt">{config.app.name}</span>;

const LogoSm = () => <span className="logo-sm"><LogoImage/></span>;

const LogoLg = () => <span className="logo-lg"><LogoImage/><AppName/></span>;

const ThemedLogo = (props: { theme: Theme }) => {
  const className = `logo logo-${props.theme}`;
  return (
    <Link href="/">
      <a className={className}>
        <LogoSm/>
        <LogoLg/>
      </a>
    </Link>
  );
};

const Logo = () => (
  <div className="navbar-brand-box">
    <ThemedLogo theme={'dark'}/>
    <ThemedLogo theme={'light'}/>
  </div>
);

export default Logo;

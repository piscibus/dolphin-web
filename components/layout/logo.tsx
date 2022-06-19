import Image from 'next/image';
import Link from 'next/link';

// @TODO: Fix image dimensions

const Logo = () => (
  <div className="navbar-brand-box">
    <Link href="/">
      <a className="logo logo-dark">
         <span className="logo-sm">
          <Image src="/assets/images/logo-sm.svg" alt="" width={24} height={24}/>
        </span>
        <span className="logo-lg">
        <Image src="/assets/images/logo-sm.svg" alt="" width={24} height={24}/>{" "}
          <span className="logo-txt">Minia</span>
        </span>
      </a>
    </Link>
    <Link href="/">
      <a className="logo logo-light">
         <span className="logo-sm">
            <Image src="/assets/images/logo-sm.svg" alt="" width={24} height={24}/>
          </span>
        <span className="logo-lg">
            <Image src="/assets/images/logo-sm.svg" alt="" width={24} height={24}/>{" "}
          <span className="logo-txt">Minia</span>
          </span>
      </a>
    </Link>
  </div>
);

export default Logo;

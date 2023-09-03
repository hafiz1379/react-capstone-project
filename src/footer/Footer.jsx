import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import './style.css';

function Footer() {
  return (
    <div>
      <div className="socials-layer bg-dodgerblue">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <img width={30} height={30} loading="lazy" src={facebook} alt="" />
        </a>
        <a
          href="https://twitter.com/Mahdi_Rezaei_AF"
          target="_blank"
          rel="noreferrer"
        >
          <img width={30} height={30} loading="lazy" src={twitter} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/rezaei.mahdi"
          target="_blank"
          rel="noreferrer"
        >
          <img width={30} height={30} loading="lazy" src={linkedin} alt="" />
        </a>
        <a
          href="https://github.com/MahdiSohaily"
          target="_blank"
          rel="noreferrer"
        >
          <img width={30} height={30} loading="lazy" src={github} alt="" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <img width={30} height={30} loading="lazy" src={instagram} alt="" />
        </a>
      </div>
      <div className="copyright bg-dodgerblue">
        <h4 className="text-neutral-100">©Mahdi Rezaei - 2022</h4>
      </div>
    </div>
  );
}

export default Footer;

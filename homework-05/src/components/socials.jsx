import apple from "../assets/apple.svg";
import appleHover from "../assets/apple-hover.svg";
import google from "../assets/google.svg";
import googleHover from "../assets/google-hover.svg";
import x from "../assets/x.svg";
import xHover from "../assets/x-hover.svg";

const socials = [
  {
    id: "apple",
    name: "Apple",
    src: apple,
    hoverSrc: appleHover,
    width: 97,
    height: 98,
    hoverWidth: 167.6,
    hoverHeight: 168.6,
  },
  {
    id: "google",
    name: "Google",
    src: google,
    hoverSrc: googleHover,
    width: 97,
    height: 98,
    hoverWidth: 167.6,
    hoverHeight: 168.6,
  },
  {
    id: "x",
    name: "X",
    src: x,
    hoverSrc: xHover,
    width: 105.92,
    height: 98.1158,
    hoverWidth: 176.52,
    hoverHeight: 168.716,
  },
];

function Socials() {
  return (
    <ul className="socials">
      {socials.map((item) => (
        <li className={`socials__item socials__item--${item.id}`} key={item.id}>
          <button
            className="socials__link"
            type="button"
            aria-label={`Sign in with ${item.name}`}
          >
            <span className="socials__icons">
              <img
                className="socials__icon"
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
              />
              <img
                className="socials__icon socials__icon--hover"
                src={item.hoverSrc}
                alt=""
                width={item.hoverWidth}
                height={item.hoverHeight}
              />
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Socials;

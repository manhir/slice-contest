// import gloabls
import '../styles/globals.css'

// fix for next/image
import * as nextImage from 'next/image';
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} style={{...props.style, verticalAlign: 'middle'}} />;
  },
});
import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

// Reads Vite env var VITE_CLOUDINARY_CLOUD_NAME
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

let cld = null;
if (cloudName) {
  try {
    cld = new Cloudinary({ cloud: { cloudName } });
  } catch (e) {
    // keep cld null and fall back to img
    cld = null;
  }
}

export default function CloudImage({ src, alt = '', className = '', ...rest }) {
  if (!src) return null;

  const isAbsoluteUrl = typeof src === 'string' && /^(https?:)?\/\//i.test(src);

  // If no cloud config or the src is an absolute URL, render a normal img
  if (!cld || isAbsoluteUrl) {
    return <img src={src} alt={alt} className={className} {...rest} />;
  }

  // Otherwise assume `src` is a Cloudinary public ID (without extension)
  try {
    const img = cld.image(src);
    return <AdvancedImage cldImg={img} className={className} alt={alt} {...rest} />;
  } catch (e) {
    // fallback to simple img if something goes wrong
    return <img src={src} alt={alt} className={className} {...rest} />;
  }
}

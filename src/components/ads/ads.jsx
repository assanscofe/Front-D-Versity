import React, { useEffect } from 'react'

const Ads = ({ client, slot, format, style }) => {
    useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
     <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
    />
  )
}

export default Ads

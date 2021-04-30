import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={320}
      height={440}
      viewBox="0 0 320 440"
      backgroundColor="#dee3e3"
      foregroundColor="#edeefd">
      <rect x="41" y="35" rx="0" ry="0" width="187" height="153" />
      <rect x="158" y="145" rx="0" ry="0" width="0" height="1" />
      <rect x="83" y="236" rx="0" ry="0" width="108" height="38" />
      <rect x="55" y="308" rx="0" ry="0" width="161" height="24" />
      <rect x="28" y="359" rx="0" ry="0" width="45" height="25" />
      <rect x="174" y="348" rx="0" ry="0" width="114" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;

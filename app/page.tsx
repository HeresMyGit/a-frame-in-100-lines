import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const NEXT_PUBLIC_URL = 'https://zizzamia.xyz';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Click Me',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/park-1.png`,
  input: {
    text: 'Tell me a boat story',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@google/model-viewer/dist/model-viewer.min.js" strategy="beforeInteractive" />
      <h1>zizzamia.xyz</h1>
      <model-viewer
        src="https://cybermfers.sfo3.digitaloceanspaces.com/cybermfers/public/assets/glb/8292.glb"
        ios-src="https://cybermfers.sfo3.digitaloceanspaces.com/cybermfers/public/assets/usdz/8292.usdz"
        alt="A 3D model"
        ar
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '400px' }}>
      </model-viewer>
    </>
  );
}

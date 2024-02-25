import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time!',
    },
    {
      action: 'link',
      label: 'Link to Google',
      target: 'https://www.google.com',
    },
    {
      label: 'Redirect to pictures',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a boat story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
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

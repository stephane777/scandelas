'use client';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

export default function ZoomImage({
  alt,
  src,
  width,
  height,
  magnifierHeight = 150,
  magnifieWidth = 150,
  zoomLevel = 1.5,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  magnifierHeight?: number;
  magnifieWidth?: number;
  zoomLevel?: number;
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

  return (
    <>
      <div
        className={clsx('relative overflow-hidden', {
          [`w-[${width}px]`]: true,
          [`h-[${height}px]`]: true,
        })}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          draggable={false}
          decoding="async"
          onMouseEnter={(e) => {
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseLeave={(e) => {
            setShowMagnifier(false);
          }}
          onMouseMove={(e) => {
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
        />
        <div
          style={{
            height: `${magnifierHeight}px`,
            width: `${magnifieWidth}px`,
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifieWidth / 2}px`,
            backgroundImage: `url('${src}')`,
            backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
            backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          }}
          className={clsx(
            'pointer-events-none absolute cursor-cell rounded-full border-1 border-gray-400 bg-no-repeat opacity-100',
            showMagnifier ? '' : 'hidden',

            {
              //   ['hidden']: showMagnifier,
              //     [`bg-[${-x * zoomLevel + magnifieWidth / 2}px ${-y * zoomLevel + magnifierHeight / 2}px]`]:
              //       true,
              //     [`bg-[length:${imgWidth * zoomLevel}px_${imgHeight * zoomLevel}px]`]: true,
              //     [`bg-[url(${src}))]`]: true,
              //   [`h-[${magnifierHeight}px]`]: true,
              //   [`w-[${magnifieWidth}px]`]: true,
              //     [`top-[${y - magnifierHeight / 2}px]`]: true,
              //     [`left-[${x - magnifieWidth / 2}px]`]: true,
            }
          )}
        ></div>
      </div>
    </>
  );
}

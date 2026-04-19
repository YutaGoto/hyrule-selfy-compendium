'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getImageUrl } from '@/utils/getImageUrl';
import { Clickable } from './Clickable';

interface ItemImageProps {
  id: string;
  name: string;
}

export const ItemImage = ({ id, name }: ItemImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Clickable
        onClick={toggleOpen}
        className="group lg:col-span-4 md:col-span-1 lg:w-96 h-96 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-sky-300 rounded-lg shadow-xl"
      >
        <Image
          src={getImageUrl(`/assets/images/totk/${id}.jpg`)}
          alt={name}
          style={{
            objectPosition: '0px 0px',
          }}
          width={384}
          height={384}
          quality={100}
          className="scale-300 transition-transform duration-300 group-hover:scale-[3.05]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 bg-sky-500/80 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg backdrop-blur-sm">
            全画面表示
          </div>
        </div>
      </Clickable>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/98"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} の拡大画像`}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setIsOpen(false);
          }}
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 w-full h-full cursor-pointer bg-transparent border-none appearance-none"
            onClick={toggleOpen}
            aria-label="プレビューを閉じる"
          />

          {/* Header */}
          <div className="absolute top-0 w-full p-4 flex justify-between items-center text-white bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none">
            <div className="ml-4 pointer-events-auto">
              <h2 className="text-xl font-bold text-sky-300">{name}</h2>
              <p className="text-xs text-gray-400">No. {id}</p>
            </div>
            <button
              type="button"
              className="p-2 mr-4 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              aria-label="閉じる"
            >
              <XMarkIcon className="w-8 h-8 text-sky-300" />
            </button>
          </div>

          {/* Image Container */}
          <div className="relative w-full h-[85vh] px-4 md:px-8 flex items-center justify-center pointer-events-none z-10">
            <div className="relative w-full h-full max-w-6xl">
              <Image
                src={getImageUrl(`/assets/images/totk/${id}.jpg`)}
                alt={name}
                fill
                style={{ objectFit: 'contain' }}
                quality={100}
                priority
                className="drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="absolute bottom-8 flex flex-col items-center z-10 pointer-events-none">
            <div className="text-white/60 text-sm mb-4 animate-pulse">
              クリックで閉じる
            </div>
          </div>
        </div>
      )}
    </>
  );
};

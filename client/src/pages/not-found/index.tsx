import React from 'react';
import { IconCaution } from '../../assets';
import { Footer, Header } from '../../components';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="fallback">
        <div className="fallback__message">
          <IconCaution />
          <div className="fallback__title mb-1">404 Not Found</div>
          <div className="fallback__details">
            Halaman yang Anda maksud, tidak dapat ditemukan. Kembali ke{' '}
            <a
              style={{ fontWeight: 700, color: 'var(--color-black)' }}
              href="/"
            >
              Beranda
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

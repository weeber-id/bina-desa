import React from 'react';
import { Card, Footer, Header } from '../../components';
import { dummyArticles } from '../../json/dummy-articles';

const BeritaDetails = () => {
  return (
    <>
      <Header />
      <main className="berita-details">
        <div className="berita-details__container max-width-1200">
          <h1 className="heading-primary">Ini Judul Yang Panjang Banget</h1>
          <h4 className="berita-details__date mb-3">19 Juli 2020</h4>
          <div
            className="berita-details__content mb-5"
            dangerouslySetInnerHTML={{ __html: dummyArticles }}
          />
          <h3 className="heading-tertiary mb-3">Berita Lainnya</h3>
          <div className="berita-details__more">
            <Card date="15 Desember 2020" title="Judul Panjang Banget" />
            <Card date="15 Desember 2020" title="Judul Panjang Banget" />
            <Card date="15 Desember 2020" title="Judul Panjang Banget" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BeritaDetails;

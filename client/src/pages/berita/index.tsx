import React from 'react';
import { Card, Header } from '../../components';
import Footer from '../../components/footer';

const Berita = () => {
  return (
    <>
      <Header />
      <main className="berita">
        <div className="bg-berita-1" />
        <div className="bg-berita-2" />
        <div className="berita__container max-width-1200">
          <section className="berita__heading mb-3">
            <h1 className="heading-primary">Berita Terbaru</h1>
          </section>
          <section className="berita__cards">
            <Card
              date="15 Desember 2020"
              title="Judul Panjang Banget"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet "
            />
            <Card
              date="15 Desember 2020"
              title="Judul Panjang Banget"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet "
            />
            <Card
              date="15 Desember 2020"
              title="Judul Panjang Banget"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet "
            />
            <Card
              date="15 Desember 2020"
              title="Judul Panjang Banget"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet "
            />
            <Card
              date="15 Desember 2020"
              title="Judul Panjang Banget"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet "
            />
            <Card
              date="15 Desember 2020"
              title="Judul Panjang Banget"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet "
            />
            <Card
              date="15 Desember 2020"
              title="Judul Panjang Banget"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet "
            />
            <Card
              date="15 Desember 2020"
              title="Judul Panjang Banget"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet "
            />

            <Card date="15 Desember 2020" title="halo" />
            <Card date="15 Desember 2020" title="halo" />
            <Card date="15 Desember 2020" title="halo" />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Berita;

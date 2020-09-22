import React from 'react';
import {
  IconHeroLanding,
  LogoBemVokasi,
  LogoBinaDesa,
  LogoWeeber,
} from '../../assets';
import { Button, Header, Input, TextArea } from '../../components';
import Footer from '../../components/footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main className="landing-page">
        <div className="bg__landing" />
        <div className="max-width-1200 landing-page__container">
          <section className="hero">
            <div className="hero__details">
              <h1 className="heading-primary mb-3">
                Selamat Datang di <br />{' '}
                <span className="co-green"> Desa Teluk Jambe</span>
              </h1>
              <p className="paragraph mb-3">
                Website ini merupakan tempat pelayanan warga Desa Telukjambe
                perilah pengajuan KK, Akta Kelahiran, serta Surat Keterangan
                (SK) desa. Selain itu, anda juga dapat mengetahui info-info
                terbaru mengenai Desa Telukjambe.
              </p>
              <div className="hero__cek-status">
                <label>Cek Status</label>
                <div className="hero__input-container mb-3">
                  <Input
                    placeholder="masukkan kode unik"
                    type="text"
                    bgColor="grey"
                  />
                  <Button color="grey">Cek Status</Button>
                </div>
                <p className="paragraph mb-2">
                  Belum terdaftar? Silahkan isi form
                </p>
                <Button color="green">Daftar Pengajuan</Button>
              </div>
            </div>
            <div className="hero__icon">
              <IconHeroLanding className="hero__svg" />
            </div>
          </section>
          <section className="pengaduan">
            <p className="paragraph">
              Isian di bawah ini merupakan tempat bagi warga Desa Telukjambe,
              untuk menyampaikan keluhan-keluhan terkait keadaan Desa
              Telukjambe. Kami akan dengan senang hati mendengarkan dan
              menangani keluhan mengenai desa dari anda.
            </p>
            <h2 className="heading-secondary mb-3">Kanal Pengaduan</h2>
            <form className="pengaduan__form">
              <Input type="text" placeholder="Nama" />
              <TextArea className="alamat" placeholder="Alamat" />
              <Input className="rt" type="text" placeholder="RT" />
              <Input className="rw" type="text" placeholder="RW" />
              <TextArea className="keluhan" placeholder="Tuliskan Keluhanmu" />
              <Button>Submit</Button>
            </form>
          </section>
          <section className="sponsor">
            <p className="paragraph mb-2">Didukung oleh:</p>
            <div className="sponsor__organizations">
              <div className="sponsor__organization">
                <img
                  src={LogoBinaDesa}
                  alt="Logo Bina Desa"
                  className="sponsor__logo"
                />
                <p className="sponsor__name">Bina Desa Vokasi UI 2020</p>
              </div>
              <div className="sponsor__organization">
                <img
                  src={LogoBemVokasi}
                  alt="Logo BEM Vokasi"
                  className="sponsor__logo sponsor__logo--vokasi"
                />
                <p className="sponsor__name">
                  Departemen Sosial Masyarkat dan Lingkungan BEM Voaksi UI 2020
                </p>
              </div>
              <div className="sponsor__organization">
                <img
                  src={LogoWeeber}
                  alt="Logo Weeber Indonesia"
                  className="sponsor__logo"
                />
                <p className="sponsor__name">Weeber Indonesia</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

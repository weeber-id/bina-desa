import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { Header } from '../../components';
import Footer from '../../components/footer';

const InfoUmum = () => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiYXpoYXJhbGlmYXV6aSIsImEiOiJja2Znb3ZwNmkwMnU1MnRwN2dydDdteGFuIn0.dxecEcLFNbTT4m2V-TQiJw',
    interactive: false,
  });

  return (
    <>
      <Header />
      <main className="info-umum">
        <div className="info-umum__map-container">
          <Map
            className="info-umum__map"
            center={[107.3135685, -6.3472259]}
            zoom={[14.44]}
            containerStyle={{ height: '100%', width: '100%' }}
            // eslint-disable-next-line
            style="mapbox://styles/azharalifauzi/ckfgv2wbg0mxr19mh7x1ns07y"
          ></Map>
        </div>
        <div className="info-umum__details">
          <h1 className="heading-primary mb-3">Desa Telukjambe</h1>
          <p className="paragraph">
            Desa Telukjambe merupakan desa yang terletak di Kecamatan Telukjambe
            Timur, Kabupaten Karawang. Didirikan sejak tahun 1624 dengan nama
            Desa Wariginpitu, desa yang awalnya menjadi Langkah awal dari usaha
            Kesultanan Mataram untuk meredam pengaruh Kesultanan Banten, kini
            menjadi sebuah pusat pemerintahan dari Kecamatan Teluk Jambe Timur.{' '}
            <br />
            <br />
            Desa Telukjamber memiliki beberapa potensi wisata, salah satunya
            adalah Danau Bintang Alam. Danau Bintang Alam berada di dalam
            Perumahan Bintang Alam, Desa Telukjambe, Kecamatan Telukjambe Timur,
            Kabupaten Karawang. Lokasi danau ini cukup strategis, karena bisa
            diakses dari berbagai daerah khususnya Perumahan Galuh Mas dan
            Adiarsa. Luas lahan Danau Bintang Alam Sekitar 3,8 Ha dan
            kedalamannya sekitar 40-60 m. Dahulu Danau Bintang Alam ialah danau
            bekas penggalian pasir yang digunakan pada tahun 1980.
            <br />
            <br />
            Danau Bintang Alam sering digunakan untuk berbagai event di
            Karawang, contohnya kegiatan memancing yang diadakan oleh Pemerintah
            Kabupaten Karawang tahun 2018 dalam memperingati Hari Jadi Karawang
            yang ke-385. Danau ini merupakan objek wisata swafoto yang bagus
            serta tempat yang cocok untuk bersantai, seperti menikmati secangkir
            kopi di pinggir danau.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default InfoUmum;

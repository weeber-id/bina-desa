import React, { useEffect, useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { Header } from '../../components';
import Footer from '../../components/footer';
import { getWidth } from '../../utils/getWidth';

const InfoUmum = () => {
  const [center, setCenter] = useState<[number, number]>([
    107.3135685,
    -6.3472259,
  ]);

  useEffect(() => {
    if (getWidth() <= 900) setCenter([107.3135685, -6.3372259]);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (getWidth() <= 900 && center[1] !== -6.3372259) {
        setCenter([107.3135685, -6.3372259]);
      }
      if (getWidth() >= 900 && center[1] !== -6.3472259) {
        setCenter([107.3135685, -6.3472259]);
      }
    });
  }, [center]);

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
            center={center}
            zoom={[14.44]}
            containerStyle={{ height: '100%', width: '100%' }}
            // eslint-disable-next-line
            style="mapbox://styles/azharalifauzi/ckfgv2wbg0mxr19mh7x1ns07y"
          ></Map>
        </div>
        <div className="info-umum__details">
          <h1 className="heading-primary mb-3">Desa Teluk Jambe</h1>
          <p className="paragraph">
            Desa Teluk Jambe merupakan desa yang terletak di Kecamatan Teluk
            Jambe Timur, Kabupaten Karawang. Didirikan sejak tahun 1624 dengan
            nama Desa Wariginpitu, desa yang awalnya menjadi Langkah awal dari
            usaha Kesultanan Mataram untuk meredam pengaruh Kesultanan Banten,
            kini menjadi sebuah pusat pemerintahan dari Kecamatan Teluk Jambe
            Timur. <br />
            <br />
            Desa Teluk Jambe memiliki beberapa potensi wisata, salah satunya
            adalah Danau Bintang Alam. Danau Bintang Alam berada di dalam
            Perumahan Bintang Alam, Desa Teluk Jambe, Kecamatan Teluk Jambe
            Timur, Kabupaten Karawang. Lokasi danau ini cukup strategis, karena
            bisa diakses dari berbagai daerah khususnya Perumahan Galuh Mas dan
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

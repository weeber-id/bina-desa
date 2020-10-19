import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IconHeroLanding,
  LogoBemVokasi,
  LogoBinaDesa,
  LogoWeeber,
} from '../../assets';
import {
  Button,
  Header,
  Input,
  LoadingMessage,
  TextArea,
} from '../../components';
import Footer from '../../components/footer';
import { fetchRequest } from '../../hooks/use-request';
import { urlServer } from '../../utils/urlServer';

type FormPengaduan = {
  name: string;
  rt: string;
  rw: string;
  address: string;
  complaint: string;
};

const LandingPage = () => {
  const [formPengaduan, setFormPengaduan] = useState<FormPengaduan>({
    address: '',
    complaint: '',
    name: '',
    rt: '',
    rw: '',
  });
  const [statusPengajuan, setStatusPengajuan] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const handleChangeFormPengaduan = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value, name } = e.target;
    setFormPengaduan({
      ...formPengaduan,
      [name]: value,
    });
  };

  const handleSubmitFormPengaduan = async (
    e:
      | React.MouseEvent<HTMLButtonElement | HTMLInputElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    const { error, isLoading } = await fetchRequest(
      'post',
      `${urlServer}/complaint`,
      JSON.stringify(formPengaduan)
    );
    setLoading(isLoading);
    setFormPengaduan({
      address: '',
      complaint: '',
      name: '',
      rt: '',
      rw: '',
    });
    if (error) {
      history.push('/fallback?type=fail');
    } else {
      history.push('/fallback');
    }
  };

  const handleSubmitCekStatusPengajuan = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    const { error, isLoading, res } = await fetchRequest(
      'get',
      `${urlServer}/submission/find?unique_code=${statusPengajuan}`
    );
    let key: string[] = [];
    let status;

    if (!res) status = '404';

    if (res) {
      // eslint-disable-next-line
      Object.keys(res.data.data).map((val) => {
        key.push(val);
      });
    }
    setLoading(isLoading);

    if (error) {
      history.push(`/fallback?type=fail&status=${status}`);
    } else {
      const { unique_code, status_code } = res.data.data[key[0]];

      const d = {
        uniqueCode: unique_code,
        statusCode: status_code,
        is_paid: true,
      };

      if (res.data.data[key[0]]['is_paid'] !== undefined) {
        d['is_paid'] = res.data.data[key[0]]['is_paid'];
      }

      history.push(
        `/fallback?type=status-pengajuan&unique_code=${unique_code}&status_code=${status_code}`,
        d
      );
    }
  };

  return (
    <>
      <Header />
      {loading && <LoadingMessage />}
      <main className="landing-page">
        <div className="bg__landing" />
        <div className="max-width-1200 landing-page__container">
          <section className="hero">
            <div className="hero__details">
              <h1 className="heading-primary mb-3">
                Selamat Datang di
                <br />
                <span className="co-green">Desa Teluk Jambe</span>
              </h1>
              <p className="paragraph mb-3">
                Website ini merupakan tempat pelayanan warga Desa Teluk Jambe
                perilah pengajuan KK, Akta Kelahiran, serta Surat Keterangan
                (SK) desa. Selain itu, anda juga dapat mengetahui info-info
                terbaru mengenai Desa Teluk Jambe.
              </p>
              <div className="hero__cek-status">
                <form onSubmit={handleSubmitCekStatusPengajuan}>
                  <label>Cek Status Pengajuan Anda</label>
                  <div className="hero__input-container mb-3">
                    <Input
                      required
                      placeholder="masukkan kode unik"
                      type="text"
                      bgColor="grey"
                      value={statusPengajuan}
                      onChange={(e) => setStatusPengajuan(e.target.value)}
                    />
                    <Button type="submit" color="grey">
                      Cek Status
                    </Button>
                  </div>
                </form>
                <p className="paragraph mb-2">
                  Belum terdaftar? Silahkan isi form
                </p>
                <Button url="/form" color="green">
                  Daftar Pengajuan
                </Button>
              </div>
            </div>
            <div className="hero__icon">
              <IconHeroLanding className="hero__svg" />
            </div>
          </section>
          <section className="pengaduan">
            <h2 className="heading-secondary mb-3">Kanal Pengaduan</h2>
            <p className="paragraph">
              Isian di bawah ini merupakan tempat bagi warga Desa Teluk Jambe,
              untuk menyampaikan keluhan-keluhan terkait keadaan Desa Teluk
              Jambe. Kami akan dengan senang hati mendengarkan dan menangani
              keluhan mengenai desa dari anda.
            </p>
            <form
              onSubmit={handleSubmitFormPengaduan}
              className="pengaduan__form"
            >
              <Input
                name="name"
                className="nama"
                type="text"
                placeholder="Nama"
                onChange={handleChangeFormPengaduan}
                required
                autoComplete="off"
              />
              <TextArea
                name="address"
                className="alamat"
                placeholder="Alamat"
                onChange={handleChangeFormPengaduan}
                required
              />
              <Input
                onChange={handleChangeFormPengaduan}
                name="rt"
                className="rt"
                type="number"
                placeholder="RT"
                required
                autoComplete="off"
              />
              <Input
                onChange={handleChangeFormPengaduan}
                name="rw"
                className="rw"
                type="number"
                placeholder="RW"
                required
                autoComplete="off"
              />
              <TextArea
                name="complaint"
                className="keluhan"
                placeholder="Tuliskan Keluhanmu"
                onChange={handleChangeFormPengaduan}
                required
              />
              <Button type="submit">Submit</Button>
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
                  Departemen Sosial Masyarakat dan Lingkungan BEM Voaksi UI 2020
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

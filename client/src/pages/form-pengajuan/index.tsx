import React, { useState } from 'react';
import { Button, Dropdown, Header, Input } from '../../components';
import Footer from '../../components/footer';

const FormPengajuan = () => {
  const [ktpSuami, setKtpSuami] = useState<FileList | undefined>(undefined);
  const handleChange = (value: string) => {};

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setKtpSuami(files);
    }
  };

  return (
    <>
      <Header />
      <main className="pengajuan">
        <div className="max-width-1200 pengajuan__container">
          <div className="pengajuan__heading">
            <h1 className="heading-tertiary">SURAT PENGAJUAN</h1>
          </div>
          <form className="form-pengajuan">
            <Dropdown
              placeholder="Pilih Surat Pengajuan"
              onChangeOptions={handleChange}
              options={[
                'KK (Kartu Keluarga)',
                'Akta Kelahiran',
                'Surat Keterangan Desa',
              ]}
            />
            <Input type="text" placeholder="Nama Kepala Keluarga" />
            <Input type="text" placeholder="Nomer Telepon" />
            <Input
              fileName={ktpSuami}
              onChange={handleChangeFile}
              onCancel={() => setKtpSuami(undefined)}
              type="file"
              id="ktp-suami"
              placeholder="KTP Suami"
            />
            <Input type="file" id="ktp-istri" placeholder="KTP Istri" />
            <Input type="file" id="surat-nikah" placeholder="Surat Nikah" />
            <Input
              type="file"
              id="akta"
              placeholder="Akta Kelahiran Anak (opsional)"
            />
            <div className="form-pengajuan__button-container">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FormPengajuan;

import React, { useState } from 'react';
import { Button, Dropdown, Header, Input } from '../../components';
import Footer from '../../components/footer';
import FormPengajuanData from '../../json/form-pengajuan.json';

const FormPengajuan = () => {
  const [indexFormPengajuan, setIndexFormPengajuan] = useState<number>(-1);

  const handleChange = (value: string) => {
    if (value === 'KK (Kartu Keluarga)') setIndexFormPengajuan(0);
    else if (value === 'Akta Kelahiran') setIndexFormPengajuan(1);
    else if (value === 'Surat Keterangan Desa') setIndexFormPengajuan(2);
    else setIndexFormPengajuan(-1);
  };

  return (
    <>
      <Header />
      <main className="pengajuan">
        <div className="bg-pengajuan" />
        <div className="max-width-1200 pengajuan__container">
          <div className="pengajuan__heading">
            <h1 className="heading-tertiary mb-4">SURAT PENGAJUAN</h1>
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
            {indexFormPengajuan > -1
              ? FormPengajuanData[indexFormPengajuan].map(
                  ({ type, options, ...otherProps }, i) => {
                    if (type === 'dropdown' && options) {
                      return <Dropdown {...otherProps} options={options} />;
                    }

                    return (
                      <Input
                        key={`pengajuan-form-${i}`}
                        type={type as any}
                        {...otherProps}
                      />
                    );
                  }
                )
              : null}
            <div className="form-pengajuan__button-container">
              <Button style={{ minWidth: '20rem', marginTop: '2rem' }}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FormPengajuan;

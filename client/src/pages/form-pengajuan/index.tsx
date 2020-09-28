import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Dropdown,
  Header,
  Input,
  LoadingMessage,
} from '../../components';
import Footer from '../../components/footer';
import { fetchRequest } from '../../hooks/use-request';
import FormPengajuanData from '../../json/form-pengajuan.json';
import { urlServer } from '../../utils/urlServer';

type KKState = {
  [key: string]: any;
  email?: string;
  nama_kepala_keluarga?: string;
  ktp_suami?: FileList[0];
  ktp_istri?: FileList[0];
  surat_nikah?: FileList[0];
  akta_kelahiran?: FileList[0];
};

const FormPengajuan = () => {
  const [indexFormPengajuan, setIndexFormPengajuan] = useState<number>(-1);
  const [KKState, setKKState] = useState<KKState>({
    email: '',
    nama_kepala_keluarga: '',
    ktp_suami: undefined,
    ktp_istri: undefined,
    surat_nikah: undefined,
    akta_kelahiran: undefined,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const handleChange = (value: string) => {
    if (value === 'KK (Kartu Keluarga)') setIndexFormPengajuan(0);
    else if (value === 'Akta Kelahiran') setIndexFormPengajuan(1);
    else if (value === 'Surat Keterangan Desa') setIndexFormPengajuan(2);
    else setIndexFormPengajuan(-1);
  };
  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (
      name !== 'email' &&
      name !== 'nama_kepala_keluarga' &&
      files &&
      files?.length > 0
    ) {
      setKKState({
        ...KKState,
        [name]: files[0],
      });
    } else {
      setKKState({
        ...KKState,
        [name]: value,
      });
    }
  };

  const handleCancel = (name: string) => {
    setKKState({
      ...KKState,
      [name]: undefined,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    // eslint-disable-next-line
    Object.keys(KKState).map((key: string) => {
      formdata.append(key, KKState[key]);
    });
    const { error, res, isLoading } = await fetchRequest(
      'formdata',
      `${urlServer}/submission/kartu-keluarga`,
      formdata
    );
    setLoading(isLoading);
    if (error) history.push('/fallback?type=fail');
    if (res)
      history.push('/fallback?type=form-pengajuan', {
        uniqueCode: res.data.unique_code,
      });
  };

  return (
    <>
      {loading && <LoadingMessage />}
      <Header />
      <main className="pengajuan">
        <div className="bg-pengajuan" />
        <div className="max-width-1200 pengajuan__container">
          <div className="pengajuan__heading">
            <h1 className="heading-tertiary mb-4">SURAT PENGAJUAN</h1>
          </div>
          <form onSubmit={handleSubmit} className="form-pengajuan">
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
                  ({ type, options, name, id, ...otherProps }, i) => {
                    if (type === 'dropdown' && options) {
                      return <Dropdown {...otherProps} options={options} />;
                    }

                    return (
                      <Input
                        id={id}
                        key={`pengajuan-form-${i}`}
                        type={type as any}
                        name={name}
                        onChange={handleChangeForm}
                        // @ts-ignore
                        value={KKState[name]}
                        // @ts-ignore
                        fileName={KKState[name]}
                        onCancel={() => handleCancel(name)}
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

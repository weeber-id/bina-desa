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
  akta_kelahiran_anak?: FileList[0];
};

type AktaKelahiranState = {
  [key: string]: any;
  email?: string;
  nama_kepala_keluarga?: string;
  ktp_suami?: FileList[0];
  ktp_istri?: FileList[0];
  ktp_saksi_1?: FileList[0];
  ktp_saksi_2?: FileList[0];
  surat_nikah?: FileList[0];
  surat_kelahiran?: FileList[0];
};

type SuratKeteranganState = {
  [key: string]: any;
  email?: string;
  nama_kepala_keluarga?: string;
  tipe?: string;
  nama?: string;
  surat_pernyataan?: FileList[0];
  ktp?: FileList[0];
  lampiran_pendukung?: FileList[0];
};

const FormPengajuan = () => {
  const [indexFormPengajuan, setIndexFormPengajuan] = useState<number>(-1);
  const [KKState, setKKState] = useState<KKState>({
    email: '',
    nama_kepala_keluarga: '',
    ktp_suami: undefined,
    ktp_istri: undefined,
    surat_nikah: undefined,
    akta_kelahiran_anak: undefined,
  });
  const [AktaKelahiranState, setAktaKelahiranState] = useState<
    AktaKelahiranState
  >({
    email: '',
    nama_kepala_keluarga: '',
    ktp_suami: undefined,
    ktp_istri: undefined,
    ktp_saksi_1: undefined,
    ktp_saksi_2: undefined,
    surat_kelahiran: undefined,
    surat_nikah: undefined,
  });
  const [SuratKeteranganState, setSuratKeteranganState] = useState<
    SuratKeteranganState
  >({
    email: '',
    nama: '',
    tipe: '',
    nama_kepala_keluarga: '',
    ktp: undefined,
    lampiran_pendukung: undefined,
    surat_pernyataan: undefined,
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
      name !== 'name' &&
      files &&
      files?.length > 0
    ) {
      if (indexFormPengajuan === 0) {
        setKKState({
          ...KKState,
          [name]: files[0],
        });
      } else if (indexFormPengajuan === 1) {
        setAktaKelahiranState({
          ...AktaKelahiranState,
          [name]: files[0],
        });
      } else if (indexFormPengajuan === 2) {
        setSuratKeteranganState({
          ...SuratKeteranganState,
          [name]: files[0],
        });
      }
    } else {
      if (indexFormPengajuan === 0) {
        setKKState({
          ...KKState,
          [name]: value,
        });
      } else if (indexFormPengajuan === 1) {
        setAktaKelahiranState({
          ...AktaKelahiranState,
          [name]: value,
        });
      } else if (indexFormPengajuan === 2) {
        setSuratKeteranganState({
          ...SuratKeteranganState,
          [name]: value,
        });
      }
    }
  };

  const handleChangeFormDropdown = (val: string, name: string) => {
    setSuratKeteranganState({
      ...SuratKeteranganState,
      [name]: val,
    });
  };

  const handleCancel = (name: string) => {
    if (indexFormPengajuan === 0) {
      setKKState({
        ...KKState,
        [name]: undefined,
      });
    } else if (indexFormPengajuan === 1) {
      setAktaKelahiranState({
        ...AktaKelahiranState,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    let ObjMapped;
    if (indexFormPengajuan === 0) ObjMapped = KKState;
    else if (indexFormPengajuan === 1) ObjMapped = AktaKelahiranState;
    else if (indexFormPengajuan === 2) ObjMapped = SuratKeteranganState;
    ObjMapped &&
      // eslint-disable-next-line
      Object.keys(ObjMapped).map((key: string) => {
        if (indexFormPengajuan === 0) {
          formdata.append(key, KKState[key]);
        } else if (indexFormPengajuan === 1) {
          formdata.append(key, AktaKelahiranState[key]);
        } else if (indexFormPengajuan === 2) {
          formdata.append(key, SuratKeteranganState[key]);
        }
      });
    let urlRequest = '';
    if (indexFormPengajuan === 0) {
      urlRequest = `${urlServer}/submission/kartu-keluarga`;
    } else if (indexFormPengajuan === 1) {
      urlRequest = `${urlServer}/submission/akta-kelahiran`;
    } else if (indexFormPengajuan === 2) {
      urlRequest = `${urlServer}/submission/surat-keterangan`;
    }
    const { error, res, isLoading } = await fetchRequest(
      'formdata',
      urlRequest,
      formdata
    );
    setLoading(isLoading);

    if (error) {
      history.push('/fallback?type=fail');
    } else if (/required/gi.test(res.error)) {
      history.push('/fallback?type=bad-request');
    } else {
      const historyState = {
        uniqueCode: res.data.unique_code,
        is_paid: true,
      };

      if (res.data.is_paid === undefined) historyState['is_paid'] = true;
      else historyState['is_paid'] = res.data.is_paid;

      history.push('/fallback?type=form-pengajuan', historyState);
    }
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
                  ({ type, options, name, id, required, ...otherProps }, i) => {
                    if (type === 'dropdown' && options) {
                      return (
                        <Dropdown
                          {...otherProps}
                          options={options}
                          onChangeOptions={(val) =>
                            handleChangeFormDropdown(val, name)
                          }
                        />
                      );
                    }
                    let value;
                    if (indexFormPengajuan === 0) {
                      value = KKState[name];
                    } else if (indexFormPengajuan === 1) {
                      value = AktaKelahiranState[name];
                    } else if (indexFormPengajuan === 2) {
                      value = SuratKeteranganState[name];
                    }

                    return (
                      <Input
                        id={id}
                        key={`pengajuan-form-${i}`}
                        type={type as any}
                        name={name}
                        onChange={handleChangeForm}
                        required={required}
                        indexPengajuanForm={indexFormPengajuan}
                        // @ts-ignore
                        value={value}
                        // @ts-ignore
                        fileName={value}
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

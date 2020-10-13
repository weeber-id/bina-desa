import React from 'react';
import { useLocation } from 'react-router-dom';
import { IconSuccessMessage } from '../../assets';
import { Footer, Header } from '../../components';
import { useQuery } from '../../hooks/use-query';

type FormPengajuanFallbackState = {
  uniqueCode?: string;
  statusCode?: 0 | 1 | 2 | 3;
  is_paid?: boolean;
};

const FallbackPage: React.FC = () => {
  const query = useQuery().get('type');
  const resStatus = useQuery().get('status');
  const { state } = useLocation<FormPengajuanFallbackState>();

  let title = 'TERKIRIM!';
  let details =
    'Terima kasih atas kritik dan sarannya. Kami akanproses dan memperbaiki servis kami.';
  let status;

  if (state?.statusCode === 0)
    status = `<strong>BELUM DIPROSES</strong>, mohon untuk kembali mengecek status pengajuan anda pada hari berikutnya.`;
  if (state?.statusCode === 1)
    status = `sedang <strong>DIPROSES</strong>. Kami akan mengirimkan email pemberitahuan saat pengajuan anda sudah selesai.`;
  if (state?.statusCode === 2)
    status = `<strong>DITOLAK</strong>. Mohon hubungi kantor desa untuk info lebih lanjut.`;
  if (state?.statusCode === 3)
    status = `sudah <strong>SELESAI</strong>. Anda perlu membayar 20 ribu untuk mengambil hasilnya dari kantor desa terdekat.`;

  if (query === 'fail' && resStatus === '404') {
    title = 'Tidak Ditemukan';
    details =
      'Mohon maaf, pengajuan yang anda cari tidak dapat ditemukan. Mohon masukkan kode unik yang valid. Terima kasih.';
  } else if (query === 'fail') {
    title = 'Gagal';
    details =
      'Mohon maaf, terjadi kesalahan. Silahkan mencoba lagi. Terima kasih.';
  }

  if (query === 'bad-request') {
    title = 'Bad Request';
    details =
      'Mohon maaf, tolong isi form sesuai dengan ketentuan. Terima kasih.';
  }

  if (query === 'form-pengajuan')
    details = `<span class="mb-1" style="font-size: 2rem; display: block;">Kode unik anda adalah <strong>${
      state?.uniqueCode
    }</strong></span> Kode unik ini dapat anda gunakan untuk mengecek status pengajuan di halaman <a style="color: var(--color-black); font-weight: 700;" href='/' >beranda</a>. Jika sudah selesai, maka anda dapat mengambilnya di kantor Desa Telukjambe serta membayar biaya sebesar <strong>Rp. ${
      state.is_paid ? '20.000;' : '0;'
    }</strong>`;

  if (query === 'status-pengajuan')
    details = `<span class="mb-1" style="font-size: 2rem; display: block;">Kode unik anda adalah <strong>${state?.uniqueCode}</strong></span> Pengajuan data anda ${status} `;

  if (query === 'not-found') {
    details =
      'Halaman yang Anda maksud, tidak dapat ditemukan. Kembali ke <a style="color: var(--color-black); font-weight: 700;" href="/">Beranda</>';

    title = '404 Not Found';
  }

  return (
    <>
      <Header />
      <main className="fallback">
        <div className="fallback__message">
          <IconSuccessMessage />
          <div className="fallback__title mb-1">{title}</div>
          <div
            dangerouslySetInnerHTML={{ __html: details ? details : '' }}
            className="fallback__details"
          ></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FallbackPage;

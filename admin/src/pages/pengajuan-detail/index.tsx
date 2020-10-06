import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header, PageWrapper, Sidebar } from '../../components';
import { useQuery } from '../../hooks/use-query';
import { fetchRequest } from '../../hooks/use-request';
import { urlServer } from '../../utils/urlServer';

const PengajuanDetail = () => {
  const { id } = useParams<{ id: string }>();
  const kategori = useQuery().get('kategori');

  useEffect(() => {
    (async () => {
      await fetchRequest(
        `${urlServer}/submission/${kategori}?unique_code=${id}`
      );
    })();
  });

  return (
    <>
      <Header />
      <Sidebar />
      <PageWrapper></PageWrapper>
    </>
  );
};

export default PengajuanDetail;

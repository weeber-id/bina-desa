import React, { useEffect, useState } from 'react';
import { Card, Header, Pagination } from '../../components';
import Footer from '../../components/footer';
import { fetchRequest } from '../../hooks/use-request';
import { urlServer } from '../../utils/urlServer';

type News = {
  author: string;
  content: string;
  created_at: string;
  modified_at: string;
  image_cover: string;
  title: string;
  slug: string;
};

const Berita = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    (async () => {
      const { isLoading, res } = await fetchRequest(
        'get',
        `${urlServer}/news?page=${1}&content_per_page=12`
      );

      if (!isLoading) setNews(res.data.data);

      setLoading(isLoading);
    })();
  }, [currentPage]);

  return (
    <>
      <Header />
      <main className="berita">
        <div className="bg-berita-1" />
        <div className="bg-berita-2" />
        <div className="berita__container max-width-1200">
          <section className="berita__heading mb-3">
            <h1 className="heading-primary">Berita Terbaru</h1>
          </section>
          <section className="berita__cards">
            {loading
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => (
                  <Card key={`card-loading-${val}`} isLoading />
                ))
              : news.map((val) => {
                  const date = new Date(val.modified_at);
                  const formattedDate = new Intl.DateTimeFormat('id-ID', {
                    month: 'long',
                    year: 'numeric',
                    day: 'numeric',
                  }).format(date);
                  return (
                    <Card
                      key={val.slug}
                      title={val.title}
                      img={val.image_cover}
                      date={formattedDate}
                      alt={val.title}
                      description={val.content}
                      url={val.slug.split('+').join('-')}
                    />
                  );
                })}
          </section>
          <section className="pagination__container">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maxPage={1}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Berita;

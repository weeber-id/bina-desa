import React, { useEffect, useState } from 'react';
import edjsHtml from '../../utils/editorjs-to-html';
import { Card, Header, Pagination } from '../../components';
import Footer from '../../components/footer';
import { fetchRequest } from '../../hooks/use-request';
import { urlServer } from '../../utils/urlServer';

export type News = {
  author: string;
  content: string;
  created_at: string;
  modified_at: string;
  image_cover: string;
  title: string;
  slug: string;
  id: string;
};

const Berita = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const { isLoading, res } = await fetchRequest(
        'get',
        `${urlServer}/news?page=${currentPage}&content_per_page=12`
      );

      if (!isLoading) {
        setNews(res.data.data);
        setMaxPage(res.data.max_page);
      }

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
              ? [1, 2, 3, 4].map((val) => (
                  <Card key={`card-loading-${val}`} isLoading />
                ))
              : news.map((val) => {
                  const date = new Date(val.modified_at);
                  const formattedDate = new Intl.DateTimeFormat('id-ID', {
                    month: 'long',
                    year: 'numeric',
                    day: 'numeric',
                  }).format(date);

                  const parsedContent = edjsHtml()
                    .parse(JSON.parse(val.content))
                    .join(' ');
                  return (
                    <Card
                      key={val.slug}
                      title={val.title}
                      img={val.image_cover}
                      date={formattedDate}
                      alt={val.title}
                      description={parsedContent}
                      url={val.slug + `?id=${val.id}`}
                    />
                  );
                })}
          </section>
          <section className="pagination__container">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maxPage={maxPage}
              isDisabled={loading}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Berita;

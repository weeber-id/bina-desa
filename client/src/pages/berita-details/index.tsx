import React, { useEffect, useState } from 'react';
import edjsHtml from '../../utils/editorjs-to-html';
import { Card, Footer, Header } from '../../components';
import { useQuery } from '../../hooks/use-query';
import { fetchRequest } from '../../hooks/use-request';
import { urlServer } from '../../utils/urlServer';
import { useHistory } from 'react-router-dom';
import { News } from '../berita';

const BeritaDetails = () => {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [imageCover, setImageCover] = useState<string>('');
  const [moreNews, setMoreNews] = useState<News[]>([]);
  const id = useQuery().get('id');

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const { res, error } = await fetchRequest(
        'get',
        `${urlServer}/news?id=${id}`
      );

      if (error) {
        history.push('/fallback?type=not-found');
      } else if (res.data.message === 'OK') {
        setTitle(res.data.data.title);
        let date = new Intl.DateTimeFormat('id-ID', {
          year: 'numeric',
          day: 'numeric',
          month: 'long',
          weekday: 'long',
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(res.data.data.created_at));

        if (res.data.data.modified_at > res.data.data.created_at) {
          date =
            date +
            ` - <i>Terakhir diubah pada ${new Intl.DateTimeFormat('id-ID', {
              year: 'numeric',
              day: 'numeric',
              month: 'long',
              weekday: 'long',
              hour: 'numeric',
              minute: 'numeric',
            }).format(new Date(res.data.data.modified_at))}</i>`;
        }

        setDate(date);
        setImageCover(res.data.data.image_cover);
        const edjsParser = edjsHtml();
        const parsedContent = edjsParser.parse(
          JSON.parse(res.data.data.content)
        );
        setContent(parsedContent.join(' '));
      }
    })();
  }, [id, history]);

  useEffect(() => {
    (async () => {
      const { isLoading, res } = await fetchRequest(
        'get',
        `${urlServer}/news?page=1&content_per_page=3&exclude_id=${id}`
      );

      if (!isLoading) {
        setMoreNews(res.data.data);
      }
    })();
  }, [id]);

  return (
    <>
      <Header />
      <main className="berita-details">
        <div className="berita-details__container max-width-900">
          {title.length > 0 ? (
            <h1 className="heading-primary mb-1">{title}</h1>
          ) : (
            <div
              style={{ height: '10rem', width: '100%' }}
              className="skeleton-bar mb-2"
            ></div>
          )}
          {date.length > 0 ? (
            <h4
              dangerouslySetInnerHTML={{ __html: date }}
              className="berita-details__date mb-3"
            ></h4>
          ) : (
            <div
              style={{ height: '3rem', width: '50%' }}
              className="skeleton-bar mb-3"
            ></div>
          )}
          {imageCover.length > 0 ? (
            <img
              alt="news cover"
              style={{ width: '100%', marginBottom: '4rem' }}
              src={imageCover}
            />
          ) : (
            ''
          )}
          {content.length > 0 ? (
            <div
              className="berita-details__content mb-5"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <div
              style={{ height: '50rem', width: '100%' }}
              className="skeleton-bar mb-3"
            ></div>
          )}
        </div>
        <div className="berita-details__more-container max-width-1200 mb-5">
          <h3 className="heading-tertiary mb-3">Berita Lainnya</h3>
          <div className="berita-details__more">
            {moreNews.length > 0 ? (
              moreNews.map((val) => {
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
                    date={formattedDate}
                    description={parsedContent}
                    title={val.title}
                    img={val.image_cover}
                    url={val.slug + `?id=${val.id}`}
                  />
                );
              })
            ) : (
              <>
                {' '}
                <Card isLoading />
                <Card isLoading />
                <Card isLoading />
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BeritaDetails;

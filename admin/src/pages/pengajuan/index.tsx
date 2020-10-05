import React from 'react';
import { Dropdown, Header, PageWrapper, Sidebar } from '../../components';

const Pengajuan = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <PageWrapper>
        <div className="data-pengajuan">
          <div className="table">
            <div className="table__info">
              <h3 className="heading-tertiary">Data Pengajuan</h3>
              <Dropdown
                style={{ minWidth: '25rem' }}
                options={['Akta Kelahiran']}
                placeholder="Sort by"
              />
            </div>
            <div className="table__head">
              <div className="table__column">Nama</div>
              <div className="table__column">No.Telepon</div>
              <div className="table__column">Kategori</div>
              <div className="table__column">Status</div>
              <div className="table__column">Edit</div>
            </div>
            <div className="container">
              <div className="table__body">
                <div className="table__row">
                  <div className="table__column">Suparman</div>
                  <div className="table__column">08986956006</div>
                  <div className="table__column">Akta Kelahiran</div>
                  <div className="table__column">On Process</div>
                  <div className="table__column"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Pengajuan;

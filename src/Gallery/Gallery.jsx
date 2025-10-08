import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { galleryItems } from '../data/galleryData';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  return (
    <Routes>
      <Route path="/" element={<GalleryMain />} />
      <Route path="/:id" element={<GalleryItem />} />
    </Routes>
  );
};

const GalleryMain = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 mb-4">PNC Facilities Gallery</h1>
          <p className="lead mb-5">
            Explore our state-of-the-art facilities and campus amenities that support student learning and development.
          </p>
        </div>
      </div>

      <div className="row">
        {galleryItems.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-img-top" style={{ height: '250px', overflow: 'hidden' }}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text flex-grow-1">{item.description}</p>
                <div className="mt-auto">
                  <div className="row mb-2">
                    <div className="col-6">
                      <small className="text-muted">
                        <strong>Capacity:</strong> {item.capacity}
                      </small>
                    </div>
                    <div className="col-6">
                      <small className="text-muted">
                        <strong>Established:</strong> {item.established}
                      </small>
                    </div>
                  </div>
                  <a 
                    href={`/gallery/${item.id}`} 
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
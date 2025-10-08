import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { galleryItems } from '../data/galleryData';

const GalleryItem = () => {
  const { id } = useParams();
  const item = galleryItems.find(item => item.id === parseInt(id));

  // Handle invalid IDs - DYNAMIC ROUTING WITH VALIDATION
  if (!item) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          <h4>Gallery Item Not Found</h4>
          <p>The gallery item with ID {id} does not exist.</p>
          <Link to="/gallery" className="btn btn-primary">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {item.title}
          </li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-md-8">
          <img 
            src={item.image} 
            alt={item.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-4">
          <h1>{item.title}</h1>
          <p className="lead">{item.description}</p>
          <p>{item.fullDescription}</p>
          
          <div className="mt-4">
            <h5>Facilities:</h5>
            <ul>
              {item.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>

          <div className="row mt-4">
            <div className="col-6">
              <strong>Capacity:</strong>
              <p>{item.capacity}</p>
            </div>
            <div className="col-6">
              <strong>Established:</strong>
              <p>{item.established}</p>
            </div>
          </div>

          <Link to="/gallery" className="btn btn-outline-primary mt-3">
            Back to Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
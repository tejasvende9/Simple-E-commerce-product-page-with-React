import { useState } from 'react'
import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import Cart from './components/Cart'
import CartPage from './components/CartPage'

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', marginTop:'20px', background: '#f1f1f1' }}>
            <p>&copy; 2025 Tejas Vende. All rights reserved.</p>
        </footer>
    );
};

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Dell Laptop",
      price: 68790,
      description: "Dell Inspiron 3530 Laptop, 13th Generation Intel Core i7-1355U Processor, 16GB, 512GB, 15.6 (39.62cm) FHD 120Hz Display, Backlit KB, Windows 11+  MSO'21, 15 Month McAfee, Silver, Thin & Light-1.62kg",
      image: "/images/dell1.webp"
    },
    {
      id: 2,
      name: "Dell Laptop",
      price: 15000,
      description: "Dell Inspiron 3530 Laptop, 13th Generation Intel Core i7-1355U Processor, 16GB, 512GB, 15.6 (39.62cm) FHD 120Hz Display, Backlit KB, Windows 11+  MSO'21, 15 Month McAfee, Silver, Thin & Light-1.62kg",
      image: "/images/dell.jpg"
    },
    {
      id: 3,
      name: "Asus VivoBook",
      price: 68000,
      description: "ASUS ASUS Vivobook S 15 Intel Core i5 13th Gen 13500H - (16 GB/512 GB SSD/Windows 11 Home) K5504VAB-BN416WS Thin and Light Laptop  (15.6 inch, Cool Silver, 1.70 kg, With MS Office)",
      image: "/images/asusvivobook.jpg"
    },
    {
      id: 4,
      name: "Hp Pavilion",
      price: 78000,
      description: "HP Pavilion x360 35.6 cm (14) 2-in-1 Laptop 14-ek1074TU, SilverStream, listen, browse and do all the things. More modern, more premium design elements on mainstream devices for a great price",
      image: "/images/hp2.jpg"
    },
    {
      id: 5,
      name: "Hp",
      price: 70000,
      description: "HP Laptop 39.6 cm (15.6) 15-fd0070TU, , SilverStream, listen, browse and do all the things. More modern, more premium design elements on mainstream devices for a great price",
      image: "/images/hp1.jpg"
    },
    {
      id: 6,
      name: "Apple Mackbook Air",
      price: 72000,
      description: "Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey",
      image: "/images/mac.jpg"
    },
  ]);

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (showCart) {
    return (
      <ErrorBoundary>
        <CartPage 
          cart={cart} 
          removeFromCart={removeFromCart} 
          onClose={() => setShowCart(false)} 
        />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div className="container-fluid p-0">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container">
            <a className="navbar-brand" href="#">E-Shop</a>
            
            <div className="d-flex order-lg-2">
              <div className="d-none d-lg-block me-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-pill"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      width: '200px',
                      height: '35px',
                      fontSize: '0.9rem',
                    }}
                  />
                  <span 
                    className="input-group-text rounded-pill bg-white border-start-0"
                    style={{
                      marginLeft: '-40px',
                      zIndex: '5',
                      border: 'none',
                      backgroundColor: 'transparent'
                    }}
                  >
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </div>
              
              <button 
                className="btn btn-outline-light position-relative me-2"
                onClick={() => setShowCart(true)}
              >
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </button>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              {/* Mobile Search Bar */}
              <div className="d-lg-none mt-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-pill"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      height: '35px',
                      fontSize: '0.9rem',
                    }}
                  />
                  <span 
                    className="input-group-text rounded-pill bg-white border-start-0"
                    style={{
                      marginLeft: '-40px',
                      zIndex: '5',
                      border: 'none',
                      backgroundColor: 'transparent'
                    }}
                  >
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Products Grid - 3 items per row */}
        <div className="container px-2 px-sm-4">
          <div className="row mt-3">
            <div className="col-12">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 g-sm-4">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className="col">
                    <div className="card h-100 shadow-sm">
                      <div className="card-img-wrapper" style={{ position: 'relative', paddingTop: '75%' }}>
                        <img 
                          src={product.image} 
                          className="card-img-top" 
                          alt={product.name}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            padding: '8px'
                          }}
                          loading="lazy"
                        />
                      </div>
                      <div className="card-body d-flex flex-column p-3">
                        <h5 className="card-title text-truncate mb-1" style={{ fontSize: '1rem' }}>{product.name}</h5>
                        <p className="card-text small text-muted" style={{
                          display: '-webkit-box',
                          WebkitLineClamp: '2',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          marginBottom: '0.5rem',
                          fontSize: '0.875rem'
                        }}>
                          {product.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                          <h6 className="mb-0 fw-bold">₹{product.price.toLocaleString()}</h6>
                          <div className="btn-group">
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => addToCart(product)}
                              style={{ padding: '0.25rem 0.5rem' }}
                            >
                              <i className="bi bi-cart-plus"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => setSelectedProduct(product)}
                              style={{ padding: '0.25rem 0.5rem' }}
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div 
            className="modal show d-block" 
            style={{backgroundColor: 'rgba(0,0,0,0.5)'}} 
            tabIndex="-1"
          >
            <div className="modal-dialog modal-fullscreen-sm-down modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProduct.name}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedProduct(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row g-4">
                    <div className="col-12 col-md-6">
                      <div style={{ position: 'relative', paddingTop: '75%' }}>
                        <img 
                          src={selectedProduct.image} 
                          className="rounded" 
                          alt={selectedProduct.name}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <h4>Product Details</h4>
                      <p>{selectedProduct.description}</p>
                      <h5 className="text-primary">₹{selectedProduct.price.toLocaleString()}</h5>
                      <button
                        className="btn btn-primary w-100 mt-3"
                        onClick={() => {
                          addToCart(selectedProduct);
                          setSelectedProduct(null);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

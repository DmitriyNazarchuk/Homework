import React, { useState } from 'react';

export const Spoiler = ({ header, open = false, children }) => {

    const [isOpen, setIsOpen] = useState(open);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <div onClick={toggleOpen} style={{ cursor: 'pointer' }}>
          {header}
        </div>
        {isOpen && <div>{children}</div>}
      </div>
    );
  };


export const RangeInput = ({ min, max, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const isValid = value.length >= min && value.length <= max;

  return (
    <input
      {...props}
      value={value}
      onChange={handleChange}
      style={{ borderColor: isValid ? 'initial' : 'red' }}
    />
  );
};

export const LoginForm = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin({ login, password });
    }
  };

  const isFormValid = login.length > 0 && password.length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Login:
          <input type="text" value={login} onChange={handleLoginChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <button type="submit" disabled={!isFormValid}>
        Login
      </button>
    </form>
  );
};


export const PasswordConfirm = ({ min = 2 }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };
  
    const validatePassword = () => {
      if (password.length < min) {
        setError(`Password must be at least ${min} characters long.`);
        return false;
      }
      if (!/\d/.test(password)) {
        setError('Password must contain at least one digit.');
        return false;
      }
      if (!/[A-Z]/.test(password)) {
        setError('Password must contain at least one uppercase letter.');
        return false;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return false;
      }
      setError('');
      return true;
    };
  
    return (
      <div className="password-confirm">
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
              className={error ? 'error' : ''}
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onBlur={validatePassword}
              className={error ? 'error' : ''}
            />
          </label>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    );
  };

export const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevClick = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
  
    const handleNextClick = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };
  
    const handleThumbnailClick = (index) => {
      setCurrentIndex(index);
    };
    const Thumbnails = ({ images, current, onChange }) => {
        return (
          <div className="thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={current === index ? 'thumbnail selected' : 'thumbnail'}
                onClick={() => onChange(index)}
              />
            ))}
          </div>
        );
      };
    return (
      <div className="carousel">
        <div className="main-image-container">
          <div className="clickable-area left" onClick={handlePrevClick}></div>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="main-image"
          />
          <div className="clickable-area right" onClick={handleNextClick}></div>
        </div>
        <Thumbnails
          images={images}
          current={currentIndex}
          onChange={handleThumbnailClick}
        />
      </div>
    );
  };
  
export const Pagination = ({ render: Render, max }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleFirstPage = () => setCurrentPage(1);
    const handleLastPage = () => setCurrentPage(max);
    const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, max));
    const handlePageClick = (page) => setCurrentPage(page);

    const renderPageNumbers = () => {
        let pageNumbers = [];
        for (let i = 1; i <= max; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    style={{ fontWeight: currentPage === i ? 'bold' : 'normal' }}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div>
            <Render page={currentPage} />
            <div>
                <button onClick={handleFirstPage} disabled={currentPage === 1}>
                    &laquo;
                </button>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    &lsaquo;
                </button>
                {renderPageNumbers()}
                <button onClick={handleNextPage} disabled={currentPage === max}>
                    &rsaquo;
                </button>
                <button onClick={handleLastPage} disabled={currentPage === max}>
                    &raquo;
                </button>
            </div>
        </div>
    );
};
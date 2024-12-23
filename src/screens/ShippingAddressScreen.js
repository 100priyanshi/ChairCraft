import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  const [country, setCountry] = useState(shippingAddress.country || 'India');
  const [postalCodeError, setPostalCodeError] = useState('');

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);

  // Postal Code Validation Function (for Indian postal codes)
  const isValidPostalCode = (code) => {
    const postalCodePattern = /^[1-9][0-9]{5}$/; // 6 digits, first digit should not be 0
    return postalCodePattern.test(code);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!isValidPostalCode(postalCode)) {
      setPostalCodeError(
        'Invalid postal code. Please enter a valid 6-digit postal code for India.'
      );
      return;
    } else {
      setPostalCodeError(''); // Clear the error if the postal code is valid
    }

    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
        location: shippingAddress.location,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
        location: shippingAddress.location,
      })
    );
    navigate('/payment');
  };

  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>

      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="my-3">Shipping Address</h1>
        <Form onSubmit={submitHandler} autoComplete="off">
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="newFullName" // Random name to prevent autofill
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="newAddress" // Random name to prevent autofill
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="newCity" // Random name to prevent autofill
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              name="newPostalCode" // Random name to prevent autofill
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              autoComplete="off"
            />
            {postalCodeError && (
              <div className="text-danger">{postalCodeError}</div>
            )}{' '}
            {/* Display error message */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="newCountry" // Random name to prevent autofill
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              autoComplete="off"
              disabled
            />
          </Form.Group>
          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

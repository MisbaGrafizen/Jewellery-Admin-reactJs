import React, { useState } from 'react';
import axios from 'axios';
import { ApiGet } from '../helper/axios';

const scan = () => {
  const [barcode, setBarcode] = useState('');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const handleScan = async (event) => {
    if (event.key === 'Enter') { // Scanner typically sends Enter key after the barcode
      try {
        const response = await ApiGet(`/admin/product/${barcode}`);
        console.log("response", response)
        setProduct(response.product); // Store the fetched product details
        setError('');
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Product not found or an error occurred.');
        setProduct(null);
      }
      setBarcode(''); // Clear the barcode input after processing
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Barcode Scanner</h1>

      <input
        type="text"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        onKeyDown={handleScan}
        placeholder="Scan or Enter Barcode"
        className="border border-gray-300 rounded p-2 mb-4 w-full max-w-md text-center"
        autoFocus
      />

      {error && (
        <div className="text-red-500 font-medium mb-4">
          {error}
        </div>
      )}

      {product && (
        <div className="bg-white rounded shadow p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Product Details</h2>
          <p><strong>Barcode:</strong> {product.barCode}</p>
          <p><strong>Group:</strong> {product.groupId?.name}</p>
          <p><strong>Item:</strong> {product.groupItemId?.itemName}</p>
          <p><strong>Metal:</strong> {product.metalId?.metalName}</p>
          <p><strong>Weight:</strong> {product.toWeight}</p>
          <p><strong>Net Weight:</strong> {product.netWeight}</p>
          <p><strong>Fine Weight:</strong> {product.fineWeight}</p>
          <p><strong>Total Price:</strong> {product.totalPrice}</p>
          {product.barcodeImage && (
            <img src={product.barcodeImage} alt="Barcode" className="mt-4" />
          )}
        </div>
      )}
    </div>
  );
};

export default scan;

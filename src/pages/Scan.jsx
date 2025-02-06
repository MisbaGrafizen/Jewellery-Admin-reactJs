import React, { useState, useEffect } from "react";
import { ApiGet } from "../helper/axios";
import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";

const Scan = () => {
  const [barcode, setBarcode] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null); // Timeout for auto-submit

  // Auto-submit barcode when scanner types fast
  useEffect(() => {
    if (barcode.length > 5) {
      clearTimeout(typingTimeout);
      const timeout = setTimeout(() => {
        fetchProductDetails(barcode.trim());
      }, 500); // 0.5-second delay before submitting
      setTypingTimeout(timeout);
    }
  }, [barcode]);

  // Fetch product details
  const fetchProductDetails = async (scannedBarcode) => {
    if (!scannedBarcode || scannedBarcode === product?.barCode) return;

    try {
      console.log("Fetching product for barcode:", scannedBarcode);
      const response = await ApiGet(`/admin/product/${scannedBarcode}`);
      console.log('response', response);

      if (response?.product) {
        setProduct(response.product);
        setError("");
        setIsPopupOpen(true);
      } else {
        throw new Error("Product not found");
      }
    } catch (err) {
      console.error("❌ Error fetching product:", err);
      setError("Product not found or an error occurred.");
      setProduct(null);
    }

    setBarcode("");
  };

  // Handle Enter Key Press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchProductDetails(barcode.trim());
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Barcode Scanner</h1>

      {/* Barcode input field */}
      <input
        type="text"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        onKeyDown={handleKeyDown} // Listening for Enter key
        placeholder="Scan barcode..."
        className="border border-gray-300 rounded p-2 mb-4 w-full max-w-md text-center"
        autoFocus
      />

      {error && <div className="text-red-500 font-medium mb-4">{error}</div>}

      {/* Barcode Product Details Popup */}
      <NextUIModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <ModalContent className="shadow-none flex flex-col bg-white max-w-[600px] mx-auto p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Product Details</h2>        {product ? (
            <div>
              <p><strong>Product ID:</strong> {product._id}</p>
              <p><strong>Group:</strong> {product.groupId?.name}</p>
              <p><strong>Item:</strong> {product.groupItemId?.itemName}</p>
              <p><strong>Barcode:</strong> {product.barCode}</p>
              <p><strong>Weight:</strong> {product.netWeight}g</p>
              <p><strong>Net Weight:</strong> {product.netWeight}</p>
              <p><strong>Majuri:</strong> {product.labour}</p>
              <p><strong>Extra Rate:</strong> {product.extraRate}</p>
              <p><strong>G Rate:</strong> {product.marketRateUsed}</p>
              <p><strong>G Rs:</strong> {product.calculatedMarketRate}</p>
              <p><strong>GME Amount:</strong> {product.GMEPrice}</p>
              <p><strong>GST:</strong> {product.gst}</p>
              <p><strong>Final Price:</strong> ₹{product.finalPrice}</p>
              {product.barcodeImage && (
                <img
                  src={product.barcodeImage}
                  alt="Barcode"
                  className="w-40 mt-3"
                />
              )}
            </div>
          ) : (
            <p className="text-red-500">No product details available.</p>
          )}
        </ModalContent>
      </NextUIModal>
    </div>
  );
};

export default Scan;

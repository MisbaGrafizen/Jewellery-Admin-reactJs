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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Barcode Scanner</h1>

      {/* Barcode input field */}
      <input
        type="text"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        placeholder="Scan barcode..."
        className="border border-gray-300 rounded p-2 mb-4 w-full max-w-md text-center"
        autoFocus
      />

      {error && <div className="text-red-500 font-medium mb-4">{error}</div>}

      {/* Barcode Product Details Popup */}
      <NextUIModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <ModalContent className="shadow-none z-[100] flex flex-col !bg-transparent max-w-[600px] h-auto">
          {product ? (
            <div className="relative w-full bg-white mt-[10px] rounded-2xl z-[100] flex justify-center !py-6 mx-auto h-auto p-6">
              <h2 className="text-xl font-bold mb-4">Product Details</h2>
              <p><strong>Barcode:</strong> {product.barCode}</p>
              <p><strong>Group:</strong> {product.groupId?.name}</p>
              <p><strong>Item:</strong> {product.groupItemId?.itemName}</p>
              <p><strong>Weight:</strong> {product.toWeight}g</p>
              <p><strong>Net Weight:</strong> {product.netWeight}g</p>
              <p><strong>Fine Weight:</strong> {product.fineWeight}</p>
              <p><strong>Total Price:</strong> ₹{product.totalPrice}</p>
              {product.barcodeImage && (
                <img src={product.barcodeImage} alt="Barcode" className="mt-4" />
              )}
            </div>
          ) : (
            <p className="text-center">No product found.</p>
          )}
        </ModalContent>
      </NextUIModal>
    </div>
  );
};

export default Scan;

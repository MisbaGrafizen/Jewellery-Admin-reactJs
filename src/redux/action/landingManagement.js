import {
  ApiDelete,
  ApiGet,
  ApiPost,
  ApiPut,
} from '../../helper/axios';
import { GET_CATEGORY, GET_GROUP_ITEM, GET_METAL, ADD_DESIGN,UPDATE_DESIGN, DELETE_SIZE, DELETE_DESIGN, GET_SIZE, ADD_SIZE, UPDATE_SIZE, ADD_NON_BARCODE_PRODUCT, GET_DESIGN,  DELETE_NON_BARCODE_PRODUCT, GET_NON_BARCODE_PRODUCT, UPDATE_NON_BARCODE_CATEGORY, DELETE_NON_BARCODE_CATEGORY, ADD_NON_BARCODE_CATEGORY, GET_NON_BARCODE_CATEGORY, GET_ORDER_BY_ID, DELETE_CATEGORY, GET_PRODUCT, ADD_PRODUCT, DELETE_GROUP_ITEM, ADD_CATEGORY, ADD_METAL, ADD_GROUP_ITEM, UPDATE_METAL, UPDATE_GROUP_ITEM,  UPDATE_CATEGORY, DELETE_PRODUCT, DELETE_METAL,
  GET_PRODUCTS_BY_TOWEIGHT, GET_PRODUCTS_BY_FINEWEIGHT, GET_PRODUCTS_BY_NETWEIGHT, GET_PRODUCTS_BY_GROUP, GET_PRODUCTS_BY_GROUPITEMID, GET_PRODUCTS_BY_WASTAGE, GET_PRODUCTS_BY_HSNCODE, GET_PRODUCTS_BY_SILVERRATE, GET_PRODUCTS_BY_ACCOUNT, GET_PRODUCTS_BY_LABOUR, GET_PRODUCTS_BY_EXTRARATE,
    GET_PRODUCTS_BY_LOCATION, GET_PRODUCTS_BY_PCS, GET_PRODUCTS_BY_DESIGN,GET_PRODUCTS_BY_SIZE, GET_PRODUCTS_BY_MOTI, GET_PRODUCTS_BY_STONE,GET_PRODUCTS_BY_JADATR, GET_PRODUCTS_BY_HUID, GET_PRODUCTS_BY_HUIDRULE, GET_PRODUCTS_BY_GROUPNAME,
    GET_PRODUCTS_BY_HUIDCHARGE, GET_PRODUCTS_BY_TOTALPRICE, GET_PRODUCTS_BY_MARKETRATEUSED,GET_PRODUCTS_BY_CALCULATEDMARKETRATE, GET_PRODUCTS_BY_GMEPRICE, GET_PRODUCTS_BY_GST,GET_PRODUCTS_BY_FINALPRICE, GET_NON_PRODUCTS_BY_CALCULATEDMARKETRATE, GET_NON_PRODUCTS_BY_GMEPRICE, GET_NON_PRODUCTS_BY_GST, GET_NON_PRODUCTS_BY_FINALPRICE,
    GET_NON_PRODUCTS_BY_GROUP, GET_NON_PRODUCTS_BY_GROUPITEMID, GET_NON_PRODUCTS_BY_EXTRARATE, GET_NON_PRODUCTS_BY_HSNCODE, GET_NON_PRODUCTS_BY_FINEWEIGHT, GET_NON_PRODUCTS_BY_NETWEIGHT,
    GET_NON_PRODUCTS_BY_LABOUR, GET_NON_PRODUCTS_BY_LOCATION, GET_NON_PRODUCTS_BY_PCS, GET_NON_PRODUCTS_BY_TOWEIGHT, GET_NON_PRODUCTS_BY_TOTALPRICE, GET_NON_PRODUCTS_BY_MARKETRATEUSED, 
} from '../type';


export const getCategroyAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/categories`)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: GET_CATEGORY,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_CATEGORY,
        payload: error,
      });
    });
};
};

export const getnonBarcodeCategroyAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/non-barcode-categories`)
    .then((res) => {
      console.log('resasdf', res);
      if (res.category) {
        dispatch({
          type: GET_NON_BARCODE_CATEGORY,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_NON_BARCODE_CATEGORY,
        payload: error,
      });
    });
};
};


export const getAllSizeAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/size`)
    .then((res) => {
      console.log('res', res);
      if (res.size) {
        dispatch({
          type: GET_SIZE,
          payload: res.size,
        });
        return res.size;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_SIZE,
        payload: error,
      });
    });
  };
  };

export const getOrderByIdAction = (orderId) => {
return (dispatch) => {
    return ApiGet(`/admin/order/${orderId}`)
  .then((res) => {
    console.log('res', res)
    if (res.order) {
      dispatch({
        type: GET_ORDER_BY_ID,
        payload: res.order,
      });
      return res.order;
    }
  })
  .catch((error) => {
    dispatch({
      type: GET_ORDER_BY_ID,
      payload: error,
    });
  });
};
};

export const getMetalAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/metals`)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: GET_METAL,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_METAL,
        payload: error,
      });
    });
};
};

export const getGroupItemAction = () => {
return (dispatch) => {
    return ApiGet(`/admin/group-items`)
  .then((res) => {
    console.log('res', res);
    if (res.category) {
      dispatch({
        type: GET_GROUP_ITEM,
        payload: res.category,
      });
      return res.category;
    }
  })
  .catch((error) => {
    dispatch({
      type: GET_GROUP_ITEM,
      payload: error,
    });
  });
};
};

export const getAllStockAction = () => {
return (dispatch) => {
    return ApiGet(`/admin/products`)
  .then((res) => {
    console.log('res', res);
    if (res.product) {
      dispatch({
        type: GET_PRODUCT,
        payload: res.product,
      });
      return res.product;
    }
  })
  .catch((error) => {
    dispatch({
      type: GET_PRODUCT,
      payload: error,
    });
  });
};
};

export const getDesignAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/design`)
    .then((res) => {
      console.log('res', res);
      if (res.design) {
        dispatch({
          type: GET_DESIGN,
          payload: res.design,
        });
        return res.design;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCT,
        payload: error,
      });
    });
  };
  };

export const getAllNonBarcodeProductAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/non-barcode/products`)
    .then((res) => {
      console.log('res', res);
      if (res.product) {
        dispatch({
          type: GET_NON_BARCODE_PRODUCT,
          payload: res.product,
        });
        return res.product;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_NON_BARCODE_PRODUCT,
        payload: error,
      });
    });
  };
  };


export const addStockAction = (stockData) => {
return (dispatch) => {
    return ApiPost(`/admin/product`, stockData)
  .then((res) => {
    console.log('resasdfg', res);
    if (res.data.data) {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data.data,
      });
      return res.data.data;
    }
  })
  .catch((error) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: error,
    });
  });
};
};

export const addDesignAction = (designData) => {
  return (dispatch) => {
      return ApiPost(`/admin/design`, designData)
    .then((res) => {
      console.log('resasdfg', res);
      if (res.data.design) {
        dispatch({
          type: ADD_DESIGN,
          payload: res.data.design,
        });
        return res.data.design;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_DESIGN,
        payload: error,
      });
    });
  };
  };

  export const addSizeAction = (stockData) => {
    return (dispatch) => {
        return ApiPost(`/admin/size`, stockData)
      .then((res) => {
        console.log('resasdfg', res);
        if (res.data.size) {
          dispatch({
            type: ADD_SIZE,
            payload: res.data.size,
          });
          return res.data.size;
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_SIZE,
          payload: error,
        });
      });
    };
    };

export const addNonBarcodeProductAction = (stockData) => {
  return (dispatch) => {
      return ApiPost(`/admin/non-barcode/product`, stockData)
    .then((res) => {
      console.log('resasdfg', res);
      if (res.data.data) {
        dispatch({
          type: ADD_NON_BARCODE_PRODUCT,
          payload: res.data.data,
        });
        return res.data.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_NON_BARCODE_PRODUCT,
        payload: error,
      });
    });
  };
  };

export const addMetalAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/metal`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: ADD_METAL,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_METAL,
        payload: error,
      });
    });
};
};

export const addGroupItemAction = (formData) => {
return (dispatch) => {
    return ApiPost(`/admin/group-item`, formData)
  .then((res) => {
    console.log('res', res);
    if (res.category) {
      dispatch({
        type: ADD_GROUP_ITEM,
        payload: res.category,
      });
      return res.category;
    }
  })
  .catch((error) => {
    dispatch({
      type: ADD_GROUP_ITEM,
      payload: error,
    });
  });
};
};

export const addCategoryAction = (name) => {
console.log("api called")
  return (dispatch) => {
      return ApiPost(`/admin/category`, {name})
    .then((res) => {
      console.log('ressss', res);
      if (res.data.category) {
        dispatch({
          type: ADD_CATEGORY,
          payload: res.data.category,
        });
        return res.data.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_CATEGORY,
        payload: error,
      });
    });
};
};

export const addNonBarcodeCategoryAction = (itemName) => {
  console.log("api called")
    return (dispatch) => {
        return ApiPost(`/admin/non-barcode-category`, {itemName})
      .then((res) => {
        console.log('ressss', res);
        if (res.data.category) {
          dispatch({
            type: ADD_NON_BARCODE_CATEGORY,
            payload: res.data.category,
          });
          return res.data.category;
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_NON_BARCODE_CATEGORY,
          payload: error,
        });
      });
  };
  };

export const updateMetalAction = (metalId, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/metal/${metalId}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: UPDATE_METAL,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_METAL,
        payload: error,
      });
    });
};
};

export const updateDesignAction = (designId, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/design/${designId}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.design) {
        dispatch({
          type: UPDATE_DESIGN,
          payload: res.design,
        });
        return res.design;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_DESIGN,
        payload: error,
      });
    });
};
};

export const updateSizeAction = (sizeId, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/size/${sizeId}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.size) {
        dispatch({
          type: UPDATE_SIZE,
          payload: res.size,
        });
        return res.size;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_SIZE,
        payload: error,
      });
    });
};
};

export const updateGroupItemAction = (categoryId, formData) => {
return (dispatch) => {
    return ApiPut(`/admin/group-item/${categoryId}`, formData)
  .then((res) => {
    console.log('res', res);
    if (res.category) {
      dispatch({
        type: UPDATE_GROUP_ITEM,
        payload: res.category,
      });
      return res.category;
    }
  })
  .catch((error) => {
    dispatch({
      type: UPDATE_GROUP_ITEM,
      payload: error,
    });
  });
};
};

export const updateCategoryAction = (categoryId, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/category/${categoryId}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: UPDATE_CATEGORY,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_CATEGORY,
        payload: error,
      });
    });
};
};

export const updateNonBarcodeCategoryAction = (nonBarcodeCategoryId, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/non-barcode-category/${nonBarcodeCategoryId}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: UPDATE_NON_BARCODE_CATEGORY,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_NON_BARCODE_CATEGORY,
        payload: error,
      });
    });
};
};

export const updateStockAction = (productId, formData) => async () => {
try {
  const response = await ApiPut(`/admin/product/${productId}`, formData); 
  console.log("Product updated successfully:", response);
  return response;
} catch (error) {
  console.error("Error updating product:", error);
  throw error;
}
};

export const updateNonBarcodeProductAction = (productId, formData) => async () => {
  try {
    const response = await ApiPut(`/admin/non-barcode/product/${productId}`, formData); 
    console.log("Product updated successfully:", response);
    return response;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
  };


export const deleteStockAction = (productId) => {
  return (dispatch) => {
      return ApiDelete(`/admin/product/${productId}`)
    .then((res) => {
      console.log('res', res);
      if (res.product) {
        dispatch({
          type: DELETE_PRODUCT,
          payload: productId,
        });
        return res.product;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: error,
      });
    });
};
};

export const deleteNonBarcodeProductAction = (productId) => {
  return (dispatch) => {
      return ApiDelete(`/admin/non-barcode/product/${productId}`)
    .then((res) => {
      console.log('res', res);
      if (res.product) {
        dispatch({
          type: DELETE_NON_BARCODE_PRODUCT,
          payload: productId,
        });
        return res.product;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_NON_BARCODE_PRODUCT,
        payload: error,
      });
    });
};
};

export const deleteMetalAction = (metalId) => {
  return (dispatch) => {
      return ApiDelete(`/admin/metal/${metalId}`)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: DELETE_METAL,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_METAL,
        payload: error,
      });
    });
};
};

export const deleteDesignAction = (designId) => {
  return (dispatch) => {
      return ApiDelete(`/admin/design/${designId}`)
    .then((res) => {
      console.log('res', res);
      if (res.design) {
        dispatch({
          type: DELETE_DESIGN,
          payload: res.design,
        });
        return res.design;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_DESIGN,
        payload: error,
      });
    });
};
};

export const deleteSizeAction = (sizeId) => {
  return (dispatch) => {
      return ApiDelete(`/admin/size/${sizeId}`)
    .then((res) => {
      console.log('res', res);
      if (res.size) {
        dispatch({
          type: DELETE_SIZE,
          payload: res.size,
        });
        return res.size;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_SIZE,
        payload: error,
      });
    });
};
};



export const deleteGroupItemAction = (categoryId) => {
return (dispatch) => {
    return ApiDelete(`/admin/group-item/${categoryId}`)
  .then((res) => {
    console.log('res', res);
    if (res.category) {
      dispatch({
        type: DELETE_GROUP_ITEM,
        payload: res.category,
      });
      return res.category;
    }
  })
  .catch((error) => {
    dispatch({
      type: DELETE_GROUP_ITEM,
      payload: error,
    });
  });
};
};

export const deleteCategoryAction = (categoryId) => {
return (dispatch) => {
    return ApiDelete(`/admin/category/${categoryId}`)
  .then((res) => {
    console.log('Api delete category', res);
    if (res.category) {
      dispatch({
        type: DELETE_CATEGORY,
        payload: res.category,
      });
      return res.category;
    }
  })
  .catch((error) => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: error,
    });
  });
};
};

export const deleteNonBarcodeCategoryAction = (nonBarcodeCategoryId) => {
  return (dispatch) => {
      return ApiDelete(`/admin/non-barcode-category/${nonBarcodeCategoryId}`)
    .then((res) => {
      console.log('Api delete category', res);
      if (res.category) {
        dispatch({
          type: DELETE_NON_BARCODE_CATEGORY,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_NON_BARCODE_CATEGORY,
        payload: error,
      });
    });
  };
  };


  const fetchProductByField = (type, endpoint, param) => {
    return (dispatch) => {
        return ApiGet(`/admin/${endpoint}?${param}`)
            .then((res) => {
              console.log("res", res)
                if (res) {
                    dispatch({ type, payload: res });
                    return res;
                }
            })
            .catch((error) => {
                dispatch({ type, payload: error });
            });
    };
};


export const getProductsByToWeightAction = (toWeight) => fetchProductByField(GET_PRODUCTS_BY_TOWEIGHT, "product-by-weight", `toWeight=${toWeight}`);
export const getProductsByFineWeightAction = (fineWeight) => fetchProductByField(GET_PRODUCTS_BY_FINEWEIGHT, "product-by-fine-weight", `fineWeight=${fineWeight}`);
export const getProductsByNetWeightAction = (netWeight) => fetchProductByField(GET_PRODUCTS_BY_NETWEIGHT, "product-by-net-weight", `netWeight=${netWeight}`);
export const getProductsByGroupAction = (groupId) => fetchProductByField(GET_PRODUCTS_BY_GROUP, "product-by-group", `groupId=${groupId}`);
export const getProductsByGroupItemIdAction = (groupItemId) => fetchProductByField(GET_PRODUCTS_BY_GROUPITEMID, "product-by-item", `groupItemId=${groupItemId}`);
export const getProductsByWastageAction = (wastage) => fetchProductByField(GET_PRODUCTS_BY_WASTAGE, "product-by-wastage", `wastage=${wastage}`);
export const getProductsByHsnCodeAction = (hsnCode) => fetchProductByField(GET_PRODUCTS_BY_HSNCODE, "product-by-hsncode", `hsnCode=${hsnCode}`);
export const getProductsBySilverRateAction = (silverRate) => fetchProductByField(GET_PRODUCTS_BY_SILVERRATE, "product-by-silver-rate", `silverRate=${silverRate}`);
export const getProductsByAccountAction = (account) => fetchProductByField(GET_PRODUCTS_BY_ACCOUNT, "product-by-account", `account=${account}`);
export const getProductsByLabourAction = (labour) => fetchProductByField(GET_PRODUCTS_BY_LABOUR, "product-by-labour", `labour=${labour}`);
export const getProductsByLocationAction = (location) => fetchProductByField(GET_PRODUCTS_BY_LOCATION, "product-by-location", `location=${location}`);
export const getProductsByPcsAction = (pcs) => fetchProductByField(GET_PRODUCTS_BY_PCS, "product-by-pcs", `pcs=${pcs}`);
export const getProductsByDesignAction = (design) => fetchProductByField(GET_PRODUCTS_BY_DESIGN, "product-by-design", `design=${design}`);
export const getProductsBySizeAction = (size) => fetchProductByField(GET_PRODUCTS_BY_SIZE, "product-by-size", `size=${size}`);
export const getProductsByGstAction = (gst) => fetchProductByField(GET_PRODUCTS_BY_GST, "product-by-gst", `gst=${gst}`);
export const getProductsByGMEPriceAction = (gmePrice) => fetchProductByField(GET_PRODUCTS_BY_GMEPRICE, "product-by-gme-price", `GMEPrice=${gmePrice}`);
export const getProductsByMarketRateUsedAction = (marketRate) => fetchProductByField(GET_PRODUCTS_BY_MARKETRATEUSED, "product-by-market-rate-used", `marketRateUsed=${marketRate}`);
export const getProductsByCalculatedMarketRateAction = (calculatedRate) => fetchProductByField(GET_PRODUCTS_BY_CALCULATEDMARKETRATE, "product-by-calculatedRate", `calculatedMarketRate=${calculatedRate}`);
export const getProductsByTotalPriceAction = (totalPrice) => fetchProductByField(GET_PRODUCTS_BY_TOTALPRICE, "product-by-total-price", `totalPrice=${totalPrice}`);
export const getProductsByHuidAction = (huid) => fetchProductByField(GET_PRODUCTS_BY_HUID, "product-by-huid", `huid=${huid}`);
export const getProductsByHuidRuleAction = (huidRule) => fetchProductByField(GET_PRODUCTS_BY_HUIDRULE, "product-by-huid-rule", `huidRule=${huidRule}`);
export const getProductsByHuidChargeAction = (huidCharge) => fetchProductByField(GET_PRODUCTS_BY_HUIDCHARGE, "product-by-huid-charge", `huidCharge=${huidCharge}`);
export const getProductsByJadatrAction = (jadatr) => fetchProductByField(GET_PRODUCTS_BY_JADATR, "product-by-jadatr", `jadatr=${jadatr}`);
export const getProductsByStoneAction = (stone) => fetchProductByField(GET_PRODUCTS_BY_STONE, "product-by-stone", `stone=${stone}`);
export const getProductsByMotiAction = (moti) => fetchProductByField(GET_PRODUCTS_BY_MOTI, "product-by-moti", `moti=${moti}`);
export const getProductsByExtraRateAction = (extraRate) => fetchProductByField(GET_PRODUCTS_BY_EXTRARATE, "product-by-extra-rate", `extraRate=${extraRate}`);
export const getProductsByGroupNameAction = (groupName) => fetchProductByField(GET_PRODUCTS_BY_GROUPNAME, "product-by-groupName", `group=${groupName}`);
export const getProductsByFinalPriceAction = (finalPrice) => fetchProductByField(GET_PRODUCTS_BY_FINALPRICE, "product-by-final-price", `finalPrice=${finalPrice}`);


const fetchNonBarcodeProductByField = (type, endpoint, param) => {
  return (dispatch) => {
      return ApiGet(`/admin/${endpoint}?${param}`)
          .then((res) => {
            console.log("res", res)
              if (res) {
                  dispatch({ type, payload: res });
                  return res;
              }
          })
          .catch((error) => {
              dispatch({ type, payload: error });
          });
  };
};

export const getNonProductsByToWeightAction = (toWeight) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_TOWEIGHT, "non-barcode/product-by-weight", `toWeight=${toWeight}`);
export const getNonProductsByFineWeightAction = (fineWeight) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_FINEWEIGHT, "non-barcode/product-by-fine-weight", `fineWeight=${fineWeight}`);
export const getNonProductsByNetWeightAction = (netWeight) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_NETWEIGHT, "non-barcode/product-by-net-weight", `netWeight=${netWeight}`);
export const getNonProductsByGroupAction = (groupId) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_GROUP, "non-barcode/product-by-group", `groupId=${groupId}`);
export const getNomProductsByGroupItemIdAction = (groupItemId) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_GROUPITEMID, "non-barcode/product-by-item", `groupItemId=${groupItemId}`);
export const getNonProductsByHsnCodeAction = (hsnCode) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_HSNCODE, "non-barcode/product-by-hsncode", `hsnCode=${hsnCode}`);
export const getNonProductsByLabourAction = (labour) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_LABOUR, "non-barcode/product-by-labour", `labour=${labour}`);
export const getNonProductsByLocationAction = (location) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_LOCATION, "non-barcode/product-by-location", `location=${location}`);
export const getNonProductsByPcsAction = (pcs) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_PCS, "non-barcode/product-by-pcs", `pcs=${pcs}`);
export const getNonProductsByGstAction = (gst) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_GST, "non-barcode/product-by-gst", `gst=${gst}`);
export const getNonProductsByGMEPriceAction = (gmePrice) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_GMEPRICE, "non-barcode/product-by-gme-price", `GMEPrice=${gmePrice}`);
export const getNonProductsByMarketRateUsedAction = (marketRate) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_MARKETRATEUSED, "non-barcode/product-by-market-rate-used", `marketRateUsed=${marketRate}`);
export const getNonProductsByCalculatedMarketRateAction = (calculatedRate) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_CALCULATEDMARKETRATE, "non-barcode/product-by-calculatedRate", `calculatedMarketRate=${calculatedRate}`);
export const getNonProductsByTotalPriceAction = (totalPrice) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_TOTALPRICE, "non-barcode/product-by-total-price", `totalPrice=${totalPrice}`);
export const getNonProductsByExtraRateAction = (extraRate) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_EXTRARATE, "non-barcode/product-by-extra-rate", `extraRate=${extraRate}`);
export const getNonProductsByFinalPriceAction = (finalPrice) => fetchNonBarcodeProductByField(GET_NON_PRODUCTS_BY_FINALPRICE, "non-barcode/product-by-final-price", `finalPrice=${finalPrice}`);

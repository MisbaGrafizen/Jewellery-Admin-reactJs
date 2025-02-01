import {
  ApiDelete,
  ApiGet,
  ApiPost,
  ApiPut,
} from '../../helper/axios';
import { GET_CATEGORY, GET_GROUP_ITEM, GET_METAL, ADD_DESIGN,UPDATE_DESIGN, DELETE_SIZE, DELETE_DESIGN, GET_SIZE, ADD_SIZE, UPDATE_SIZE, ADD_NON_BARCODE_PRODUCT, GET_DESIGN,  DELETE_NON_BARCODE_PRODUCT, GET_NON_BARCODE_PRODUCT, UPDATE_NON_BARCODE_CATEGORY, DELETE_NON_BARCODE_CATEGORY, ADD_NON_BARCODE_CATEGORY, GET_NON_BARCODE_CATEGORY, GET_ORDER_BY_ID, DELETE_CATEGORY, GET_PRODUCT, GET_ORDER_LIST, ADD_PRODUCT, DELETE_GROUP_ITEM, ADD_CATEGORY, ADD_METAL, ADD_GROUP_ITEM, UPDATE_METAL, UPDATE_GROUP_ITEM,  UPDATE_CATEGORY, DELETE_PRODUCT, DELETE_METAL} from '../type';


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



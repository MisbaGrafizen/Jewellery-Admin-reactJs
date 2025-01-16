import { toast } from 'react-toastify';
import Auth from '../../config/auth';
import {
    ApiDelete,
    ApiGet,
    ApiPost,
    ApiPostData,
    ApiPostNoAuth,
    ApiPut,
    ApiPutWithId,
} from '../../helper/axios';
import { GET_PRODUCT_STATUS, ADD_PRODUCT_STATUS, UPDATE_PRODUCT_STATUS, DELETE_PRODUCT_STATUS, ADD_COMPANY_INFO, UPDATE_BRAND, DELETE_BRAND, GET_PRODUCT_COLLECTION, ADD_PRODUCT_COLLECTION, UPDATE_PRODUCT_COLLECTION, DELETE_PRODUCT_COLLECTION, GET_LABEL,ADD_LABEL,UPDATE_LABEL,DELETE_LABEL, GET_ATTRIBUTE, ADD_ATTRIBUTE, UPDATE_ATTRIBUTE, DELETE_ATTRIBUTE} from '../type';


export const getAllProductStatusAction = () => {
    return (dispatch) => {
        return ApiGet(`/admin/product-status`)
      .then((res) => {
        console.log('res', res);
        if (res.statusData) {
          dispatch({
            type: GET_PRODUCT_STATUS,
            payload: res.statusData,
          });
          return res.statusData;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_PRODUCT_STATUS,
          payload: error,
        });
      });
  };
};


export const addProductStatusAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/product-status`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.statusData) {
        dispatch({
          type: ADD_PRODUCT_STATUS,
          payload: res.statusData,
        });
        return res.statusData;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_PRODUCT_STATUS,
        payload: error,
      });
    });
};
};

export const updateProductStatusAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/product-status/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.statusData) {
        dispatch({
          type: UPDATE_PRODUCT_STATUS,
          payload: res.statusData,
        });
        return res.statusData;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_PRODUCT_STATUS,
        payload: error,
      });
    });
};
};

export const deleteProductStatusAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/product-status/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.statusData) {
        dispatch({
          type: DELETE_PRODUCT_STATUS,
          payload: res.statusData,
        });
        return res.statusData;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PRODUCT_STATUS,
        payload: error,
      });
    });
};
};


// export const getAllBrandAction = () => {
//     return (dispatch) => {
//         return ApiGet(`/admin/brand`)
//       .then((res) => {
//         console.log('res', res);
//         if (res.brand) {
//           dispatch({
//             type: GET_BRAND,
//             payload: res.brand,
//           });
//           return res.brand;
//         }
//       })
//       .catch((error) => {
//         dispatch({
//           type: GET_BRAND,
//           payload: error,
//         });
//       });
//   };
// };

export const addCompanyInfoAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/info`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.data.data) {
        dispatch({
          type: ADD_COMPANY_INFO,
          payload: res.data.data,
        });
        return res.data.data;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_COMPANY_INFO,
        payload: error,
      });
    });
};
};

export const updateBrandAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/brand/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.brand) {
        dispatch({
          type: UPDATE_BRAND,
          payload: res.brand,
        });
        return res.brand;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_BRAND,
        payload: error,
      });
    });
};
};

export const deleteBrandAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/brand/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.brand) {
        dispatch({
          type: DELETE_BRAND,
          payload: res.brand,
        });
        return res.brand;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_BRAND,
        payload: error,
      });
    });
};
};

export const getAllProductCollectionAction = () => {
    return (dispatch) => {
        return ApiGet(`/admin/collection`)
      .then((res) => {
        console.log('res', res);
        if (res.category) {
          dispatch({
            type: GET_PRODUCT_COLLECTION,
            payload: res.category,
          });
          return res.category;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_PRODUCT_COLLECTION,
          payload: error,
        });
      });
  };
};

export const addProductCollectionAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/collection`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: ADD_PRODUCT_COLLECTION,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_PRODUCT_COLLECTION,
        payload: error,
      });
    });
};
};

export const updateProductCollectionAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/collection/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: UPDATE_PRODUCT_COLLECTION,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_PRODUCT_COLLECTION,
        payload: error,
      });
    });
};
};

export const deleteProductCollectionAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/collection/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: DELETE_PRODUCT_COLLECTION,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PRODUCT_COLLECTION,
        payload: error,
      });
    });
};
};

// export const getAllTagsAction = () => {
//     return (dispatch) => {
//         return ApiPost(`/admin/tag`)
//       .then((res) => {
//         console.log('res', res);
//         if (res.category) {
//           dispatch({
//             type: ADD_TAG,
//             payload: res.category,
//           });
//           return res.category;
//         }
//       })
//       .catch((error) => {
//         dispatch({
//           type: ADD_TAG,
//           payload: error,
//         });
//       });
//   };
// };

export const getAllLabelsAction = () => {
    return (dispatch) => {
        return ApiGet(`/admin/label`)
      .then((res) => {
        console.log('res', res);
        if (res.label) {
          dispatch({
            type: GET_LABEL,
            payload: res.label,
          });
          return res.label;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_LABEL,
          payload: error,
        });
      });
  };
};

export const addLabelAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/label`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.label) {
        dispatch({
          type: ADD_LABEL,
          payload: res.label,
        });
        return res.label;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_LABEL,
        payload: error,
      });
    });
};
};

export const updateLabelAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/label/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.label) {
        dispatch({
          type: UPDATE_LABEL,
          payload: res.label,
        });
        return res.label;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_LABEL,
        payload: error,
      });
    });
};
};

export const deleteLabelAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/label/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.label) {
        dispatch({
          type: DELETE_LABEL,
          payload: res.label,
        });
        return res.label;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_LABEL,
        payload: error,
      });
    });
};
};




export const getAllAttributeAction = () => {
    return (dispatch) => {
        return ApiGet(`/admin/attribute`)
      .then((res) => {
        console.log('res', res);
        if (res.category) {
          dispatch({
            type: GET_ATTRIBUTE,
            payload: res.category,
          });
          return res.category;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ATTRIBUTE,
          payload: error,
        });
      });
  };
};

export const addAttributeAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/attribute`, formData )
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: ADD_ATTRIBUTE,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_ATTRIBUTE,
        payload: error,
      });
    });
};
};

export const updateAttributeAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/attribute/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: UPDATE_ATTRIBUTE,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_ATTRIBUTE,
        payload: error,
      });
    });
};
};

export const deleteAttributeAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/attribute/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: DELETE_ATTRIBUTE,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_ATTRIBUTE,
        payload: error,
      });
    });
};
};



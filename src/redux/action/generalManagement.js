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
import { GET_UCHAK, ADD_UCHAK, UPDATE_UCHAK, DELETE_UCHAK, ADD_COMPANY_INFO, UPDATE_BRAND, DELETE_BRAND, GET_PERCENTAGE, ADD_PERCENTAGE, UPDATE_PERCENTAGE, DELETE_PERCENTAGE, GET_PERGRAM,ADD_PERGRAM,UPDATE_PERGRAM,DELETE_PERGRAM, GET_ATTRIBUTE, ADD_ATTRIBUTE, UPDATE_ATTRIBUTE, DELETE_ATTRIBUTE} from '../type';


export const getAllUchakAction = () => {
    return (dispatch) => {
        return ApiGet(`/admin/uchak`)
      .then((res) => {
        console.log('res', res);
        if (res.uchak) {
          dispatch({
            type: GET_UCHAK,
            payload: res.uchak,
          });
          return res.uchak;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_UCHAK,
          payload: error,
        });
      });
  };
};


export const addUchakAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/uchak`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.uchak) {
        dispatch({
          type: ADD_UCHAK,
          payload: res.uchak,
        });
        return res.uchak;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_UCHAK,
        payload: error,
      });
    });
};
};

export const updateUchakAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/uchak/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.uchak) {
        dispatch({
          type: UPDATE_UCHAK,
          payload: res.uchak,
        });
        return res.uchak;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_UCHAK,
        payload: error,
      });
    });
};
};

export const deleteUchakAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/uchak/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.uchak) {
        dispatch({
          type: DELETE_UCHAK,
          payload: res.uchak,
        });
        return res.uchak;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_UCHAK,
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

export const getPercentageAction = () => {
    return (dispatch) => {
        return ApiGet(`/admin/percentage`)
      .then((res) => {
        console.log('res', res);
        if (res.percentage) {
          dispatch({
            type: GET_PERCENTAGE,
            payload: res.percentage,
          });
          return res.percentage;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_PERCENTAGE,
          payload: error,
        });
      });
  };
};

export const addPercentageAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/percentage`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.percentage) {
        dispatch({
          type: ADD_PERCENTAGE,
          payload: res.percentage,
        });
        return res.percentage;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_PERCENTAGE,
        payload: error,
      });
    });
};
};

export const updatePercentageAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/percentage/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.percentage) {
        dispatch({
          type: UPDATE_PERCENTAGE,
          payload: res.percentage,
        });
        return res.percentage;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_PERCENTAGE,
        payload: error,
      });
    });
};
};

export const deletePercentageAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/percentage/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.percentage) {
        dispatch({
          type: DELETE_PERCENTAGE,
          payload: res.percentage,
        });
        return res.percentage;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PERCENTAGE,
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

export const getPerGramAction = () => {
    return (dispatch) => {
        return ApiGet(`/admin/pergram`)
      .then((res) => {
        console.log('res', res);
        if (res.pergram) {
          dispatch({
            type: GET_PERGRAM,
            payload: res.pergram,
          });
          return res.pergram;
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_PERGRAM,
          payload: error,
        });
      });
  };
};

export const addPerGramAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/pergram`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.pergram) {
        dispatch({
          type: ADD_PERGRAM,
          payload: res.pergram,
        });
        return res.pergram;
      }
    })
    .catch((error) => {
      dispatch({
        type: ADD_PERGRAM,
        payload: error,
      });
    });
};
};

export const updatePerGramAction = (id, formData) => {
  return (dispatch) => {
      return ApiPut(`/admin/pergram/${id}`, formData)
    .then((res) => {
      console.log('res', res);
      if (res.pergram) {
        dispatch({
          type: UPDATE_PERGRAM,
          payload: res.pergram,
        });
        return res.pergram;
      }
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_PERGRAM,
        payload: error,
      });
    });
};
};

export const deletePerGramAction = (id) => {
  return (dispatch) => {
      return ApiDelete(`/admin/pergram/${id}`)
    .then((res) => {
      console.log('res', res);
      if (res.pergram) {
        dispatch({
          type: DELETE_PERGRAM,
          payload: res.pergram,
        });
        return res.pergram;
      }
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PERGRAM,
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



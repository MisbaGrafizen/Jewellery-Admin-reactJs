import {
    ApiDelete,
    ApiGet,
    ApiPost,
    ApiPut,
} from '../../helper/axios';
import { GET_CATEGORY, GET_GROUP_ITEM, GET_METAL, GET_ORDER_BY_ID, DELETE_CATEGORY, GET_PRODUCT, GET_ORDER_LIST, ADD_PRODUCT, DELETE_GROUP_ITEM, ADD_CATEGORY, ADD_METAL, ADD_GROUP_ITEM, UPDATE_METAL, UPDATE_GROUP_ITEM,  UPDATE_CATEGORY, DELETE_PRODUCT, DELETE_METAL} from '../type';


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

export const getAllOrderAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/orderList`)
    .then((res) => {
      console.log('res', res);
      if (res.orderList) {
        dispatch({
          type: GET_ORDER_LIST,
          payload: res.orderList,
        });
        return res.orderList;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_ORDER_LIST,
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



export const getAllProductAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/products`)
    .then((res) => {
      console.log('res', res);
      if (res.product) {
        dispatch({
          type: GET_PRODUCT,
          payload: res.product.products,
        });
        return res.product.products;
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
export const addProductAction = (formData) => {
  return (dispatch) => {
      return ApiPost(`/admin/product`, formData)
    .then((res) => {
      console.log('resasdfg', res);
      if (res.data.product) {
        dispatch({
          type: ADD_PRODUCT,
          payload: res.data.product,
        });
        return res.data.product;
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

export const updateCategoryAction = (categoryId, updateName) => {
    return (dispatch) => {
        return ApiPut(`/admin/category/${categoryId}`, {name: updateName})
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

export const updateProductAction = (productId, formData) => async (dispatch) => {
  try {
    const response = await ApiPut(`/admin/product/${productId}`, formData); 
    console.log("Product updated successfully:", response);
    return response;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};


export const deleteProductAction = (productId) => {
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

export const deleteMetalAction = (metalId) => {
    return (dispatch) => {
        return ApiPut(`/admin/metal/${metalId}`)
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

export const deleteGroupItemAction = (categoryId) => {
  return (dispatch) => {
      return ApiPut(`/admin/group-item/${categoryId}`)
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



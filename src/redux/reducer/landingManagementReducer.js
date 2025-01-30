import { RESET_GLOBAL_STATE, GET_CATEGORY, GET_NON_BARCODE_PRODUCT, ADD_NON_BARCODE_PRODUCT, DELETE_NON_BARCODE_PRODUCT,GET_GROUP_ITEM, DELETE_CATEGORY, DELETE_NON_BARCODE_CATEGORY, UPDATE_NON_BARCODE_CATEGORY, ADD_NON_BARCODE_CATEGORY, GET_NON_BARCODE_CATEGORY, DELETE_GROUP_ITEM, UPDATE_GROUP_ITEM, ADD_GROUP_ITEM, GET_PRODUCT, ADD_PRODUCT, GET_ORDER_LIST, GET_ORDER_BY_ID, GET_METAL, ADD_CATEGORY, ADD_METAL, UPDATE_CATEGORY, UPDATE_METAL, DELETE_PRODUCT, DELETE_METAL } from '../type';

const initialState = {
    getAllCategory: [],
    getMetal: [],
    getGroupItem: [],
    addCategory: [],
    addMetal: [],
    addGroupItem: [],
    updateCategory: [],
    updateMetal: [],
    updateGroupItem: [],
    deleteProduct: null,
    deleteMetal: [],
    deleteGroupItem: [],
    getProduct: [],
    addProduct: [],
    getOrderList: [],
    getorderById: [],
    deleteCategory: null,
    getNonBarcodeCategory: [],
    addNonBarcodeCategory: [],
    updateNonBarcodeCategroy: [],
    deleteNonBarcodeCategory: [],
    getNonBarcodeProduct: [],
    addNonBarcodeProduct: [],
    deleteNonBarcodeProduct: [],                                                                                    
};


const landingManagementReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CATEGORY: 
        return {
            ...state,
            getAllCategory: action.payload,
        };
        case GET_METAL: 
        return {
            ...state,
            getMetal: action.payload,
        };
        case GET_GROUP_ITEM:
            return {
                ...state,
                getGroupItem: action.payload,
            };
        case GET_PRODUCT: 
         return {
            ...state,
            getProduct: action.payload,
         };
         case ADD_PRODUCT:
            return {
                ...state,
                addProduct: action.payload,
            };
        case ADD_CATEGORY:
            return {
                ...state,
                addCategory: action.payload,
                    };
        case ADD_METAL:
            return {
                ...state,
                addMetal: action.payload,
            };
        case ADD_GROUP_ITEM:
            return {
                ...state,
                addGroupItem: action.payload,
            };
        case UPDATE_CATEGORY: 
        return {
            ...state,
            getAllCategory: state.getAllCategory.map((category) =>
                category._id === action.payload.categoryId
                  ? { ...category, name: action.payload.name }
                  : category
              ),
            };
        case UPDATE_METAL: 
        return {
            ...state,
            updateMetal: action.payload,
        };
        case UPDATE_GROUP_ITEM:
            return {
                ...state,
                updateGroupItem: action.payload,
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                getProduct: state.getProduct.filter(
                    (product) => product._id !== action.payload 
                  ),
                  deleteProduct: null,
            };
        case DELETE_METAL:
            return {
                ...state,
                deleteMetal: action.payload,
            };
        case DELETE_GROUP_ITEM:
            return {
                ...state,
                deleteGroupItem: action.payload,
            };
        case GET_ORDER_LIST: 
        return {
            ...state,
            getOrderList: action.payload,
        };
        case GET_ORDER_BY_ID: 
            return {
                ...state,
                getorderById: action.payload,
            };
        case DELETE_CATEGORY:
            return {
                ...state,
                getAllCategory: state.getAllCategory.filter(
                    (category) => category._id !== action.payload
                ),  
            };
        case GET_NON_BARCODE_CATEGORY:
            return {
                ...state,
                getNonBarcodeCategory: action.payload,
            };
        case ADD_NON_BARCODE_CATEGORY: 
        return {
            ...state,
            addNonBarcodeCategory: action.payload,
        };
        case UPDATE_NON_BARCODE_CATEGORY:
            return {
                ...state,
                updateNonBarcodeCategroy: action.payload,
            };
        case DELETE_NON_BARCODE_CATEGORY:
            return {
                ...state,
                deleteNonBarcodeCategory: action.payload,
            };
        case GET_NON_BARCODE_PRODUCT: 
        console.log('action.payload', action.payload)
        return {
            ...state,
            getNonBarcodeProduct: action.payload,
        };
        case ADD_NON_BARCODE_PRODUCT: 
        return {
            ...state,
            addNonBarcodeProduct: action.payload,
        };
        case DELETE_NON_BARCODE_PRODUCT:
            return {
                ...state,
                deleteNonBarcodeProduct: action.payload,
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
};

export default landingManagementReducer;
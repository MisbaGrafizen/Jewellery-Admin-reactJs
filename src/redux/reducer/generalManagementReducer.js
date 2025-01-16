import { RESET_GLOBAL_STATE, GET_PRODUCT_STATUS, ADD_PRODUCT_STATUS, UPDATE_PRODUCT_STATUS, DELETE_PRODUCT_STATUS,  GET_TAG, ADD_TAG, UPDATE_TAG, DELETE_TAG, GET_PRODUCT_COLLECTION, ADD_PRODUCT_COLLECTION, UPDATE_PRODUCT_COLLECTION, DELETE_PRODUCT_COLLECTION, GET_BRAND, ADD_COMPANY_INFO, UPDATE_BRAND, DELETE_BRAND, GET_ATTRIBUTE, ADD_ATTRIBUTE, UPDATE_ATTRIBUTE, DELETE_ATTRIBUTE, GET_LABEL, ADD_LABEL, UPDATE_LABEL, DELETE_LABEL } from '../type';

const initialState = {
    getProductStatus: [],
    getTag: [],
    getProductCollection: [],
    getBrand: [],
    getAttribute: [],
    getLabel: [],
    addProductStatus : [],
    updateProductStatus: [],
    deleteProductStatus: [],
    addTag: [],
    updateTag: [],
    deleteTag: [],
    addProductCollection: [],
    updateProductCollection: [],
    deleteProductCollection: [],
    addCompanyInfo: [],
    updateBrand: [],
    deleteBrand: [],
    addAttribute: [],
    updateAttribute: [],
    deleteAttribute: [],
    addLabel: [],
    updateLabel: [],
    deleteLabel: []
};

const generalManagementReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCT_STATUS: 
        return {
            ...state,
            getProductStatus: action.payload,
        };
        case GET_TAG: 
        return {
            ...state,
            getTag: action.payload,
        };
        case GET_PRODUCT_COLLECTION:
            return {
                ...state,
                getProductCollection: action.payload,
            };
        case GET_BRAND:
            return {
                ...state,
                getBrand: action.payload,
            };
        case GET_ATTRIBUTE: 
        return {
            ...state,
            getAttribute: action.payload,
        };
        case GET_LABEL: 
        console.log('action.payload', action.payload)
        return {
            ...state,
            getLabel: action.payload,
        };
        case ADD_PRODUCT_STATUS: 
        return {
            ...state,
            addProductStatus: action.payload,
        };
        case ADD_TAG: 
        return {
            ...state,
            addTag: action.payload,
        };
        case ADD_PRODUCT_COLLECTION:
            return {
                ...state,
                addProductCollection: action.payload,
            };
        case ADD_COMPANY_INFO:
            return {
                ...state,
                addCompanyInfo: action.payload,
            };
        case ADD_ATTRIBUTE: 
        return {
            ...state,
            addAttribute: action.payload,
        };
        case ADD_LABEL: 
        console.log('action.payload', action.payload)
        return {
            ...state,
            addLabel: action.payload,
        };
        case UPDATE_PRODUCT_STATUS: 
        return {
            ...state,
            updateProductStatus: action.payload,
        };
        case UPDATE_TAG: 
        return {
            ...state,
            updateTag: action.payload,
        };
        case UPDATE_PRODUCT_COLLECTION:
            return {
                ...state,
                updateProductCollection: action.payload,
            };
        case UPDATE_BRAND:
            return {
                ...state,
                updateBrand: action.payload,
            };
        case UPDATE_ATTRIBUTE: 
        return {
            ...state,
            updateAttribute: action.payload,
        };
        case UPDATE_LABEL: 
        console.log('action.payload', action.payload)
        return {
            ...state,
            updateLabel: action.payload,
        };
        case DELETE_PRODUCT_STATUS: 
        return {
            ...state,
            deleteProductStatus: action.payload,
        };
        case DELETE_TAG: 
        return {
            ...state,
            deleteTag: action.payload,
        };
        case DELETE_PRODUCT_COLLECTION:
            return {
                ...state,
                deleteProductCollection: action.payload,
            };
        case DELETE_BRAND:
            return {
                ...state,
                deleteBrand: action.payload,
            };
        case DELETE_ATTRIBUTE: 
        return {
            ...state,
            deleteAttribute: action.payload,
        };
        case DELETE_LABEL: 
        return {
            ...state,
            deleteLabel: action.payload,
        };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
};

export default generalManagementReducer;
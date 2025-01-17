import { RESET_GLOBAL_STATE, GET_UCHAK, ADD_UCHAK, UPDATE_UCHAK, DELETE_UCHAK,  GET_TAG, ADD_TAG, UPDATE_TAG, DELETE_TAG, GET_PERCENTAGE, ADD_PERCENTAGE, UPDATE_PERCENTAGE, DELETE_PERCENTAGE, GET_BRAND, ADD_COMPANY_INFO, UPDATE_BRAND, DELETE_BRAND, GET_ATTRIBUTE, ADD_ATTRIBUTE, UPDATE_ATTRIBUTE, DELETE_ATTRIBUTE, GET_PERGRAM, ADD_PERGRAM, UPDATE_PERGRAM, DELETE_PERGRAM } from '../type';

const initialState = {
    getUchak: [],
    getTag: [],
    getPercentage: [],
    getBrand: [],
    getAttribute: [],
    getPergram: [],
    addUchak : [],
    updateUchak: [],
    deleteUchak: [],
    addTag: [],
    updateTag: [],
    deleteTag: [],
    addPercentage: [],
    updatePercentage: [],
    deletePercentage: [],
    addCompanyInfo: [],
    updateBrand: [],
    deleteBrand: [],
    addAttribute: [],
    updateAttribute: [],
    deleteAttribute: [],
    addPergram: [],
    updatePergram: [],
    deletePergram: []
};

const generalManagementReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_UCHAK: 
        return {
            ...state,
            getUchak: action.payload,
        };
        case GET_TAG: 
        return {
            ...state,
            getTag: action.payload,
        };
        case GET_PERCENTAGE:
            return {
                ...state,
                getPercentage: action.payload,
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
        case GET_PERGRAM: 
        return {
            ...state,
            getPergram: action.payload,
        };
        case ADD_UCHAK: 
        return {
            ...state,
            addUchak: action.payload,
        };
        case ADD_TAG: 
        return {
            ...state,
            addTag: action.payload,
        };
        case ADD_PERCENTAGE:
            return {
                ...state,
                addPercentage: action.payload,
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
        case ADD_PERGRAM: 
        return {
            ...state,
            addPergram: action.payload,
        };
        case UPDATE_UCHAK: 
        return {
            ...state,
            updateUchak: action.payload,
        };
        case UPDATE_TAG: 
        return {
            ...state,
            updateTag: action.payload,
        };
        case UPDATE_PERCENTAGE:
            return {
                ...state,
                updatePercentage: action.payload,
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
        case UPDATE_PERGRAM: 
        return {
            ...state,
            updatePergram: action.payload,
        };
        case DELETE_UCHAK: 
        return {
            ...state,
            deleteUchak: action.payload,
        };
        case DELETE_TAG: 
        return {
            ...state,
            deleteTag: action.payload,
        };
        case DELETE_PERCENTAGE:
            return {
                ...state,
                deletePercentage: action.payload,
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
        case DELETE_PERGRAM: 
        return {
            ...state,
            deletePergram: action.payload,
        };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
};

export default generalManagementReducer;
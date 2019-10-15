import DomainTableConstants from './DomainTableConstants';

//initial state for domain table
const initState = {
    selected: [],
    rowsPerPage: 10,
    page: 0
}
//to see notes on what each of these cases are doing, refer back to te actions file
const DomainTableReducer = (state = initState, action) => {
    switch (action.type) {
        case DomainTableConstants.DOMTAB_SELECT_ALL: {
            return {
                ...state,
                selected: action.selected
            }
        }
        case DomainTableConstants.DOMTAB_CHANGE_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case DomainTableConstants.DOMTAB_CHANGE_ROWS: {
            return {
                ...state,
                rowsPerPage: action.rowsPerPage
            }
        }
        default: {
            return state;
        }
    }
}

export default DomainTableReducer;
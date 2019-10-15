import DomainTableConstants from './DomainTableConstants';

//this action is for handling the select all button and other select things
export const domTabSelectAll = (selected) => {
    return {
        type: DomainTableConstants.DOMTAB_SELECT_ALL,
        selected: selected
    }
}
//this action is for handling a page change
export const domTabChangePage = (page) => {
    return {
        type: DomainTableConstants.DOMTAB_CHANGE_PAGE,
        page: page
    }
}
//this action is for handling a row change
export const domTabChangeRows = (rowsPerPage) => {
    return {
        type: DomainTableConstants.DOMTAB_CHANGE_ROWS,
        rowsPerPage: rowsPerPage
    }
}
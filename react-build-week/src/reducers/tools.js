import * as types from '../actions/actionTypes';

const initialState = { allTools: [], tool: {}, activeFilter: {}, searchFilter: null}

export function tools(toolsArray = initialState, action) {
    switch (action.type) {
      case types.FETCH_TOOLS:
        return {...toolsArray, allTools: action.payload}
      case types.SEARCH_TOOLS:
        return {...toolsArray, searchFilter: action.payload}
      case types.FILTER_TOOLS:
        return {...toolsArray, activeFilter: action.payload}
      case types.FETCH_TOOL:
        return {...toolsArray, tool: action.payload}
      case types.ADD_TOOL:
        return {...toolsArray, allTools: [...toolsArray.allTools,  action.payload]}
      case types.EDIT_TOOL:
      return {...toolsArray, allTools: [...toolsArray.allTools.filter(tool => tool.id !== action.payload.id),  action.payload]}
      case types.DELETE_TOOL:
        return {...toolsArray, allTools: toolsArray.allTools.filter(tool => tool.id !== action.payload)}
      default:
        return toolsArray;
    }
  }
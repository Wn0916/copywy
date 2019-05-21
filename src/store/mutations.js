import {

  RECEIVE_CATEGORYHOTSELLMODULE,
  RECEIVE_KINGKONGMODULE,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_FLASHSALEMODULE,
  RECEIVE_NEWITEMLIST,
  RECEIVE_CATEGORYMODULE,
  RECEIVE_CATEGORYL1LIST,


} from './mutations-type'

export default {

  [RECEIVE_CATEGORYHOTSELLMODULE](state,categoryHotSellModule){
    state.categoryHotSellModule = categoryHotSellModule
  },
  [RECEIVE_KINGKONGMODULE](state,kingKongModule){
    state.kingKongModule = kingKongModule
  },
  [RECEIVE_POPULARITEMLIST](state,popularItemList){
    state.popularItemList = popularItemList
  },
  [RECEIVE_FLASHSALEMODULE](state,flashSaleModule){
    state.flashSaleModule = flashSaleModule
  },
  [RECEIVE_NEWITEMLIST](state,newItemList){
    state.newItemList = newItemList
  },
  [RECEIVE_CATEGORYMODULE](state,categoryModule){
    state.categoryModule = categoryModule
  },

  [RECEIVE_CATEGORYL1LIST](state,categoryL1List){
    state.categoryL1List = categoryL1List
  },





}

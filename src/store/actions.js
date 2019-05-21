import {
  reqHomeData,
  reqcategorylist
} from '../api'

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


  // 获取  categoryhotsellmodule
  async getCategoryHotSellModule({commit}) {
    // 1. 发送异步ajax请求
    const result = await reqHomeData()
    console.log(result)
    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      const data = result.data.categoryHotSellModule
      commit(RECEIVE_CATEGORYHOTSELLMODULE, data)
    } else {
      console.log('失败获取信息')
    }

  },

  // 获取  kingkongmodule
  async getKingKongModule({commit}) {
    // 1. 发送异步ajax请求
    const result = await reqHomeData()
    console.log(result)
    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      const data = result.data.kingKongModule
      commit(RECEIVE_KINGKONGMODULE, data)
    } else {
      console.log('失败获取信息')
    }

  },

 // 获取  popularitemlist
  async getpopularItemList({commit}) {
    // 1. 发送异步ajax请求
    const result = await reqHomeData()
    console.log(result)
    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      const data = result.data.popularItemList
      commit(RECEIVE_POPULARITEMLIST, data)
    } else {
      console.log('失败获取信息')
    }

  },

  // 获取  flashsalemodule
  async getflashSaleModule({commit}) {
    // 1. 发送异步ajax请求
    const result = await reqHomeData()
    console.log(result)
    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      const data = result.data.flashSaleModule
      commit(RECEIVE_FLASHSALEMODULE, data)
    } else {
      console.log('失败获取信息')
    }

  },

  // 获取  newItemList
  async getnewItemList({commit}) {
    // 1. 发送异步ajax请求
    const result = await reqHomeData()
    console.log(result)
    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      const data = result.data.newItemList
      commit(RECEIVE_NEWITEMLIST, data)
    } else {
      console.log('失败获取信息')
    }

  },

  // 获取  categoryModule
  async getcategoryModule({commit}) {
    // 1. 发送异步ajax请求
    const result = await reqHomeData()
    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      const data = result.data.categoryModule
      commit(RECEIVE_CATEGORYMODULE, data)
    } else {
      console.log('失败获取信息')
    }

  },

  // 获取  categoryl1list
  async getcategoryL1List({commit}) {
    // 1. 发送异步ajax请求
    const result = await reqcategorylist()

    // 2. 成功后, 提交mutation
    if (result.code === 0) {
      const data = result.data.categoryL1List
      commit(RECEIVE_CATEGORYL1LIST, data)
    } else {
      console.log('失败获取信息')
    }

  },


}


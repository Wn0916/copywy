import ajax from './ajax'

//首页
export const reqHomeData = () => ajax('/mock/home')

//分类
export const reqcategorylist = () => ajax('/mock/categorylist');


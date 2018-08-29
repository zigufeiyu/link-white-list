/** 
 * @function URL地址白名单校验
 * @param {String} url      要校验的URL地址字符串
 * @param {Array} whiteList 合法域名白名单规则集
 * @return {URL | false}    校验通过，返回url，否则返回false
 */

// 函数接口
interface OurLink {
    (url: string, whiteList: string[]): string | false;
}

// 声明默认函数
declare let ourLink: OurLink;

// 导出默认函数
export = ourLink;
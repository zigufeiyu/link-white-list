/** 
 * @Function URL地址白名单校验
 * @param {String} url      要校验的URL地址字符串
 * @param {Array} whiteList 合法域名白名单规则集
 * @return {URL | false}    校验通过，返回url，否则返回false
 * @author maqing01
 */

(function (global, factory) {
    typeof module === "object" && module && typeof module.exports === "object" ? // CommonJs
        module.exports = factory() :
        typeof define === "function" && define.amd ? // AMD
            define(factory) :
            global.ourLink = factory(); // HTML script

})(typeof window !== "undefined" ? window : this, function () {
    return function (url, whiteList) {
        // url不存在或者type非string直接返回false
        if (!url || typeof url !== "string") { return false; }

        // url为string，解码后匹配协议特征，不匹配则为内链地址，返回当前url
        url = decodeURIComponent(url);
        var hasHost = /^(https?:)?\/\//;
        if (!hasHost.test(url)) { return url; }

        // url为绝对地址，whiteList白名单列表必须为数组，否则whiteList赋值为空数组，表示不允许任何域名形式的访问
        Object.prototype.toString.call(whiteList) !== '[object Array]' && (whiteList = []);

        for (var i = 0; i < whiteList.length; i++) {
            var pattern = whiteList[i];

            // whiteList元素为白名单规则，跳过非法规则校验
            // 如果whiteList元素均为非法规则，则表示不允许任何域名形式的访问
            if (typeof pattern !== 'string' || !pattern.trim()) {
                continue;
            }
            pattern = pattern.trim(); // 去除规则字符串前后空格
            var isOurLink = new RegExp("^(https?:)?//" + pattern);

            // 校验url，符合某条白名单规则即返回当前url
            if (isOurLink.test(url)) {
                return url;
            }
        }

        return false;
    }
})
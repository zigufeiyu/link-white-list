const ourLink = require('../dist/index');

describe("is our link", () => {
    it("no url or url's type not string", () => {
        expect(ourLink()).toBe(false);
        expect(ourLink(true)).toBe(false);
    })
    it("url no host", () => {
        expect(ourLink("/")).toBe("/");
        expect(ourLink("/test/index")).toBe("/test/index");
        expect(ourLink("/test?path=http://test.com")).toBe("/test?path=http://test.com");
    })
    it("whiteList's type not array", () => {
        expect(ourLink("//test.com")).toBe(false);
        expect(ourLink("//test.com", { url: "pattern"})).toBe(false);
    })
    it("invalid element of whiteList", () => {
        expect(ourLink("//test.com", [])).toBe(false);
        expect(ourLink("//test.com", [[], {}, true, '  '])).toBe(false);
    })
    it("vaild verification", () => {
        expect(ourLink("//test.com", ["test.com", "test.com:8080"])).toBe("//test.com");
        expect(ourLink("//test.com:8080", ["test.com", "test.com:8080"])).toBe("//test.com:8080");
        expect(ourLink("//test.com", ["test"])).toBe("//test.com");
    })
    it("glob RegExp", () => {
        expect(ourLink("//qiangui.58.com", ["*.58.com"])).toBe("//qiangui.58.com");
        expect(ourLink("//58.com", ["*.58.com"])).toBe("//58.com");
        expect(ourLink("//qian.gui.58.com", ["*.58.com"])).toBe("//qian.gui.58.com");
    })
})
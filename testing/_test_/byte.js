const converstion = require("../index")

describe("Converstion to ..", function () {
    test("storage" , function() {
        expect(converstion(0)).toBe("0 bytes")
    })
    test("storage in byte" , function() {
        expect(converstion(1)).toBe("1 byte")
    })
    test("storage in bytes" , function() {
        expect(converstion(222)).toBe("222 bytes")
    })
    test("storage in kb" , function() {
        expect(converstion(1000)).toBe("1.000 kb")
    })
    test("storage in kilo bytes" , function() {
        expect(converstion(1230)).toBe("1.230 kb")
    })
    test("storage in mb" , function() {
        expect(converstion(10000)).toBe("1.000 Mb")
    })
    test("storage in mega bytes" , function() {
        expect(converstion(14400)).toBe("1.440 Mb")
    })
    test("storage in gb" , function() {
        expect(converstion(100000)).toBe("1.000 Gb")
    })
    test("storage in giga bytes" , function() {
        expect(converstion(144600)).toBe("1.446 Gb")
    })
})
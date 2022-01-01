import { removeFileExtension } from "./removeFileExtension";

describe("removeFileExtension", () => {
    it("should return the filename without the extension if there is an extension", () => {
        const result = removeFileExtension("Some-file.name.ufo");
        expect(result).toStrictEqual("Some-file.name");
    });

    it("should return the filename if there is no extension", () => {
        const result = removeFileExtension("Some-file-name-without-extension");
        expect(result).toStrictEqual("Some-file-name-without-extension");
    });
})

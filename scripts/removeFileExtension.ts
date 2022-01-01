export const removeFileExtension = (filename: string): string => {
    try {
        return filename.match(/(.*)[.]\w+$/)![1]
    } catch (e) {
        return filename
    }
}

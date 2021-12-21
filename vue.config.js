module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/test-deploy/' // Thay tên repository của các bạn vào đây nhé
        :
        '/'
}
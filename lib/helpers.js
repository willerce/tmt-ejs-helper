var ejs = require('ejs')
    , read = require('fs').readFileSync
    , path = require('path')
    , template = {};

module.exports = function (opts) {
    return {

        css: function (fileName) {
            return render('css', {
                loclaUrl: ['..', opts.cssDir, fileName].join('/'),
                cdnUrl: [opts.cdnUrl, opts.projectName, 'dist', opts.cssDir, fileName].join('/')
            })
        },

        js: function (fileName) {
            return render('js', {
                loclaUrl: ['..', opts.jsDir, fileName].join('/'),
                cdnUrl: [opts.cdnUrl, opts.projectName, 'dist', opts.jsDir, fileName].join('/')
            })
        },

        img: function (width, height, className) {
            return render('img', {
                width: width,
                height: height,
                className: className
            })
        },

        /**
         *
         * @param length 长度
         * @param offset 偏移值
         * @returns 文本
         */
        text: function (length, offset) {

            if (typeof offset === "undefined") {
                offset = 0
            } else {
                offset = Math.floor(Math.random() * offset) * (Math.floor(Math.random() * 1) === 1 ? -1 : 1);
            }

            length = length + offset

            return render('text', {random: Math.floor(Math.random() * 10)}).replace(/\r\n/g, '')
                .replace(/\n/g, '')
                .substring(0, length)
        },


        avatar: function (width, height) {
            return render('avatar', {
                width: width,
                height: height
            })
        }
    }

}

function render(tplname, data) {

    if (!template[tplname]) {
        template[tplname] = read(path.join(__dirname, '../templates/', tplname + ".ejs"), 'utf8')
    }

    return ejs.compile(template[tplname], {filename: tplname})(data);
}

function getText() {

}
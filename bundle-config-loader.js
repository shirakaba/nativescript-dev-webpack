module.exports = function(source) {
    this.cacheable();
    const { angular = false, loadCss = true } = this.query;

    source = `
        require("tns-core-modules/bundle-entry-points");
        ${source}
    `;

    if (!angular) {
        source = `
            require("nativescript-dev-webpack/register-modules");
            ${source}
        `;
    }

    if (loadCss) {
        source = `
            require("nativescript-dev-webpack/load-application-css")(${angular});
            ${source}
        `;
    }

    this.callback(null, source);
};

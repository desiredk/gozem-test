const excludePathsToLog = (pathname) => {
    const excludePaths = [
        "/api-docs/",
        "/favicon",
        "/swagger-ui",
        "/swagger-ui-bundle",
        "/swagger-ui-standalone-preset",
    ]

    for (const path in excludePaths) {
        if (pathname.startsWith(excludePaths[path])) {
            return true;
        }
    }

    return false;
}

module.exports = {
    excludePathsToLog
}

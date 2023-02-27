exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
}) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.gltf$/,
                    use: [
                        `url-loader`,
                    ],
                },
                {
                    test: /\.glb$/,
                    use: [
                        `url-loader`,
                    ],
                },
            ],
        },
    })
}
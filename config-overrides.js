module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        babelrc: false,
        configFile: false,
        presets: [["react-app", {flow: false, typescript: true}]],
        plugins: [
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
        ],
      },
    },
  })
  return config
}

module.exports = {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic', // Necessário para React 17+ sem a importação explícita do React
        },
      ],
      '@babel/preset-typescript',
    ],
  };
   
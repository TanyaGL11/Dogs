module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    /*"prettier",*/
    /* 'airbnb',*/
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": 0,
    "disable-next-line": 0,
    disable: 0,
    semi: ["error", "never"],
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "no-console": 0,
    "import/no-cycle": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-equals-spacing": 0,
    "space-before-blocks": "off",
  },
}
// отключаем точки с запятой в конце строк, semi: ['error', 'never'],
// отключаем чтоб на консоль не ругалась,
// используем реакт не только в кофиг файлах,
// и т.д*/

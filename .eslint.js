{
  "env": {
      "browser": true,
      "es2021": true,
      "jest": true
  },
  "extends": [
      "eslint:recommended",
      "eslint-config-rallycoding"
      "plugin:react/recommended",
      "plugin:prettier/recommended"
      "react-native-prettier"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "react/react-in-jsx-scope": "off"
  }
}
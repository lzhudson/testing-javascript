# Static Analysis Testing Javascript

## 01 Javascript Lint Javascript by Configuring and Running Eslint

1 - Install eslint in project
```
npm install eslint --save-dev
```

2 - Configuration for eslint and running tool
  1 - Create file .eslintrc
  ```json
  {
    "parserOptions": {
      "ecmaVersion": 2019,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
      "strict": ["warn", "never"],
      "valid-typeof": "warn",
      "no-unsafe-negation": "error",
      "no-unused-vars": "error",
      "no-unexpected-multiline": "error",
      "no-undef": "error"
    },
    "env": {
      "browser": true
    }
  }
  ```
  2 - Running eslint
  ```
  npx eslint .
  ```
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
  Eslint rules with error will exit the process and fail a build.

  Eslint rules with warn will continue to run the process and not fail a build.

  Eslint rules with off will ignore the rule entirely.

  One can extend one's eslint config using the extends property. eslint:recommended is a built-in config.

  The env property can be used to set the environment against which files should be evaluated.
## 02 - Learn use the eslint extension in vscode

1 - Install eslint extension in vscode

2 - Fixing archives via cli
````
npx eslint . --fix
````

## 03 - Eslint use pre-built configuration extends

1 - Add in eslint config property extends and remove rule for no overwrite configs by extends.
```json
{
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "strict": ["error", "never"],
  },
  "env": {
    "browser": true
  }
}
```
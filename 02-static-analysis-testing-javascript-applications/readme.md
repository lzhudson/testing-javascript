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

## 04 - Eslint run with npm scripts

1 - Create scripts to run eslint
```json
{
  "name": "static-testing-tools",
  "private": true,
  "author": "Kent C. Dodds (http://kentcdodds.com/)",
  "license": "GPLv3",
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint ."
  },
  "devDependencies": {
    "@babel/cli": "^7.13.10",
    "@babel/core": "^7.7.2",
    "@babel/preset-env": "^7.7.1",
    "eslint": "^7.21.0"
  }
}
```

2 - Add folder node_modules and dist to ignore eslint cli:

.eslintignore
```text
node_modules
dist
```

3 - Or additional ignore path in npm script
```json
{
  "name": "static-testing-tools",
  "private": true,
  "author": "Kent C. Dodds (http://kentcdodds.com/)",
  "license": "GPLv3",
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint --ignore-path .gitignore . --fix"
  },
  "devDependencies": {
    "@babel/cli": "^7.13.10",
    "@babel/core": "^7.7.2",
    "@babel/preset-env": "^7.7.1",
    "eslint": "^7.21.0"
  }
}
```

## 05 - Formatting code with prettier
1 - Install prettier

2 - Run prettier to show code formatted:
```bash
npx prettier src/example.js
```
This is output is archive formatted

3 - Run prettier to format code:
```bash
npx prettier src/example.js --write
```

4 - Create npm script to format all code .js or .json:
```json
{
  "name": "static-testing-tools",
  "private": true,
  "author": "Kent C. Dodds (http://kentcdodds.com/)",
  "license": "GPLv3",
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint .",
    "format": "prettier --ignore-path .gitignore --write \"**/*.+(js|json)\""
  },
  "devDependencies": {
    "@babel/cli": "^7.13.10",
    "@babel/core": "^7.7.2",
    "@babel/preset-env": "^7.7.1",
    "eslint": "^7.21.0"
  }
}
```
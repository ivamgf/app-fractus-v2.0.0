_Prettier Example_

<code>
    {
        "trailingComma": "es5",
        "tabWidth": 4,
        "semi": false,
        "singleQuote": true
    }
</code>

Put the code in prettier.json file.

**Use the commands**

Now, format all files with Prettier:

<code>
npx prettier --write .
</code>

If you have a CI setup, run the following as part of it to make sure that everyone runs Prettier. This avoids merge conflicts and other collaboration issues!

<code>
npx prettier --check .
</code>

For example, you can do the following to have Prettier run before each commit:

1.Install husky and lint-staged:

<code>
npm install --save-dev husky lint-staged
npx husky install
npm set-script prepare "husky install"
npx husky add .husky/pre-commit "npx lint-staged"
</code>

2.Add the following to your package.json:

<code>
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
</code>

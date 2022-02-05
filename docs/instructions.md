_Instructions_

Use Husky development only. When running a pre-commit and a failure occurs, use the command to escape:

$ git commit -m "message" --no-verify $

Use the settings to future versions:

<code>
"husky": {
    "hooks": {
      "pre-commit": "npm test",
      "prepush": "npm run lint"
    }
  },
</code>

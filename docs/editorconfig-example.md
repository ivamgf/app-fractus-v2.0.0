_Editorconfig Example_

File name ".editorconfig"

# EditorConfig is awesome: https://editorconfig.org/

# top-most EditorConfig file

root = true

# Unix-style newlines with a newline ending every file

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 80
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false

[*.js]
trim_trailing_whitespace = true

[*.ts]
trim_trailing_whitespace = true

[COMMIT_EDITMSG]
max_line_length = 0

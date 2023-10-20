# CodeStyle

## JavaScript

### 1. Naming Conventions

- Use camelCase for variables and functions.
  
  ```js
  function appendToDisplay(value) {}
  function multiply() {}
  function divide() {}
  function power() {}
  ```
- Use PascalCase for class names.


### 2. Indentation and Spaces

- Use 4 spaces for indentation.
- Avoid leaving spaces at the end of lines.

### 3. Comments

Use `//` for single-line comments and `/* ... */` for multi-line comments.

Comments should be clear, concise, and explain the purpose of the code.

  ```js
  // Function to format a number
  function formatNumber(number) {
      if (Number.isInteger(number)) {
          return number; // If it's an integer, return the number directly
      } else {
          return parseFloat(number.toFixed(6)); // If it's a decimal, round to 6 decimal places and return
      }
  }
  ```

### 4. Variables

- Use `const` or `let` to declare variables, avoid using `var`.
- Give variables clear names when declaring them.
- Minimize the use of global variables.

###  5. Functions

- Functions should have a clear purpose and follow the single responsibility principle.
- Keep functions small and concise, not exceeding 20 lines.

## HTML 

### 1. Indentation and Spaces

- Use 4 spaces for indentation.
- Avoid leaving spaces at the end of lines.

### 2. Naming Conventions

- Use meaningful, descriptive names for tags and attributes.
- Avoid using meaningless tags (e.g., `<div>` or `<span>`).

### 3. Comments

Use `<!-- ... -->` comment tags to add comments.
Provide useful comments explaining the purpose and structure of the code.
Avoid excessive comments, only use them when necessary.

### 4. Quotes

- Use double quotes to enclose attribute values.
- Maintain consistency, either use double quotes or single quotes.

### 5. HTML Completeness
- HTML tags should be properly closed, ensuring each tag has both an opening and closing tag.

## CSS

### 1. Naming Conventions 

- Use meaningful, descriptive class names and IDs.
- Use lowercase letters and kebab-case for class names.
- Use camelCase for ID names.

### 2. Selectors

- Avoid using universal selectors (`*`).
- Use class selectors and ID selectors instead of tag selectors.
- Avoid excessive nesting of selectors.

### 3. Indentation and Formatting

- Use 4 spaces for indentation, do not use tabs.
- Use appropriate spaces between selectors, properties, and property values.

### 4. CSS Styles
- Maintain consistent styling, ensuring similar elements have similar styles.

# [Calculator App](https://himanshu31shr.github.io/assessment-tdd/)

## Overview

This project is a web-based calculator app built with React and TypeScript. The app allows users to input sequences of numbers, separated by specific delimiters, and calculates their sum. It includes a custom `CalculatorService` class that handles the parsing and calculation logic, while the React frontend provides an intuitive interface for user interaction.

## Features

- **React Frontend**: A responsive user interface built with React, featuring Bootstrap for styling.
- **Calculator Service**: A backend service class (`CalculatorService`) that processes input strings and computes the sum of numbers.
- **Custom Delimiters**: Supports user-defined delimiters in addition to default ones like commas and newlines.
- **Error Handling**: Detects negative numbers in the input and displays an error message.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/himanshu31shr/calculator-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd calculator-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

### User Interface

1. **Enter Input**: Users can input a sequence of numbers in the provided text area. The input can include commas, newlines, and custom delimiters.
2. **Calculate Sum**: After entering the sequence, users can press the "Calculate" button to see the sum of the numbers displayed in the results section.
3. **Custom Delimiters**: To include a custom delimiter, start the sequence with `//` followed by the delimiter character.

## Running Tests

The project includes unit tests to ensure the functionality of the `CalculatorService` and React components.

To run the tests:

```bash
npm run test
```

## Deployment

To deploy the app:

1. **Build the app**:

   ```bash
   npm run build
   ```

2. **Deploy**: Deploy the contents of the `build` directory to your preferred hosting service.

## Contact

For questions or feedback, please contact [himanshu31shr@gmail.com](mailto:himanshu31shr@gmail.com).

---

This `README.md` provides a comprehensive guide to setting up, using, and understanding the entire project. It integrates the `CalculatorService` with the React frontend and offers clear instructions for both developers and end users.

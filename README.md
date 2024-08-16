# React Investment Calculator

This project is a **React Investment Calculator** that allows users to estimate the future value of an investment based on their input. The user can input the initial investment, annual investment, expected return rate, and the investment duration. The calculator then displays the projected results.

## Features

- **Initial Investment**: Set the amount of money invested initially.
- **Annual Investment**: Specify the amount invested every year.
- **Expected Return**: Input the expected annual return rate as a percentage.
- **Duration**: Choose the number of years for the investment.
- **Validation**: Ensures that the duration is at least 1 year.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/react-investment-calculator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-investment-calculator
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

## Usage

- **Input your values**: Enter the initial investment, annual investment, expected return, and duration in the provided input fields.
- **View Results**: The calculator will display the projected investment value if the input is valid.

## Components

### `App.jsx`

- Manages state for the investment inputs and handles user interactions.
- Renders the `Input` component to collect user input.
- Displays the `Results` component when valid input is provided.

### `Input.jsx`

- A form component that collects user input for the investment parameters.
- Passes the user input to the parent component via callback functions.

### `Results.jsx`

- Displays the calculated results based on the user's input.

## Contributing

Feel free to open an issue or submit a pull request if you find any bugs or have suggestions for new features.

## License

This project is licensed under the MIT License.

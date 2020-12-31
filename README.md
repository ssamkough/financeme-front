# FinanceMe Frontend 💸

This is the frontend for the FinanceMe app.

FinanceMe is an app that allows you to manage your finances, simply. Instead of looking at excel sheets of your monthly statements, this app helps you visualize it a lot nicer.

## Technologies 🎷

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)

## Data Model 💽

Transaction

- id: uniqueidentifier
- created_at: Date

Expenses

- id: uniqueidentifier
- created_at: Date

Payment

- id: uniqueidentifier
- created_at: Date

Future Purchases

- id: uniqueidentifier
- created_at: Date

## Resources 💨

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)

### Ant Design 🐜

- [@ant-design/charts](https://github.com/ant-design/ant-design-charts)
- [Ant Design Charts Gallery](https://charts.ant.design/demos/global/)

## Todo ✔️

- Seeing if I went past my budget
  - Predicts how much you’ll make based off of how much you’re making (can predict for the next month, 2 months, it’s configurable)
- Seeing in what categories I spent the most
- Put in items you want to purchase for the month and see if it crosses budget
- how will i visualize the payments
- enable sign in/sign out func
  - this will entail us to save user data (when we'll start needing to work on backend)
- push to domain (try using aws instead of netlify)

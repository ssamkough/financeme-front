# FinanceMe Frontend 💸

[![Website financeme.money](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://financeme.money)<br/>
[financeme.money](https://financeme.money)

This is the frontend for the FinanceMe app.

FinanceMe is an app that allows you to manage your finances, simply. Instead of looking at excel sheets of your monthly statements, this app helps you visualize it a lot nicer.

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

## Technologies 🎷

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [AWS](https://aws.amazon.com/)
  - [CodeBuild](https://aws.amazon.com/codebuild/)
  - [S3](https://aws.amazon.com/s3/)
  - [Route53](https://aws.amazon.com/route53/)

## Deployment 🛩️

1. Every push to master, CodeBuild starts the deployment process.
2. Executes instructions in buildspec.yml.
3. After build finishes, it pushes build folder to S3.
4. Route 53 sets up an alias that uses the S3 bucket and routes it to [financeme.money](https://financeme.money).

## Resources 💨

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)
- [Build a CI/CD Pipeline for a React App | AWS CodePipeline Full Tutorial | Code With Me!](https://www.youtube.com/watch?v=zkNdHv1iMgY)
- [Amazon S3 Static Website Hosting with Custom Domain | Route 53 | Namecheap](https://www.youtube.com/watch?v=Z2GyV1vIiMc)
- [Why can't I select my preferred alias target when creating a Route 53 alias resource record set?](https://aws.amazon.com/premiumsupport/knowledge-center/route-53-no-targets/)
- [Adding a bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/static-website-hosting.html#add-bucket-policy-public-access)
- [Set up CI/CD for containerized React App using Docker, AWS CodeBuild, AWS ECS, AWS CodePipeline & Github](https://dev.to/mubbashir10/set-up-ci-cd-for-containerized-react-app-using-docker-aws-codebuild-aws-ecs-aws-codepipeline-github-2p11)

### Ant Design 🐜

- [@ant-design/charts](https://github.com/ant-design/ant-design-charts)
- [Ant Design Charts Gallery](https://charts.ant.design/demos/global/)

## Todo ✔️

- enable ssl
- Draw out models and their relationships (user, charge, purchase, etc.) so you can finalize the models
- Line chart needs to have points on liner to hover over and give information like description (similar to njcoronavirus.com)
- Change attribute date to recurring_date for Charge model
- Seeing if I went past my budget
  - Predicts how much you’ll make based off of how much you’re making (can predict for the next month, 2 months, it’s configurable)
- Seeing in what categories I spent the most
- Put in items you want to purchase for the month and see if it crosses budget
- how will i visualize the payments
- enable sign in/sign out func
  - this will entail us to save user data (when we'll start needing to work on backend)

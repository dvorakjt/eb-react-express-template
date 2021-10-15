# eb-react-express-template

Template for building express-react apps to deploy to eb. You must have EB CLI downloaded and configured to procede.

- Download the code
- Run the following commands:

  - git init
  - touch .gitignore

- Add the following lines of code to the gitignore:
  node_modules/
  .gitignore
  .elasticbeanstalk/

- Run the following commands:

  - npm install
  - npm run install
  - npm run build

- Remove build from the client/.gitignore file

- Run eb init --platform node.js --region us-east-2

- Run eb create --sample your-env-name

- Run touch procfile within .elasticbeanstalk

- Add the following line of code to the procfile:
  web: npm start:prod

- Run git add .

- Run git commit -m "your message here"

- Run eb deploy

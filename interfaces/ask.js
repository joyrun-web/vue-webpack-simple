const execSync = require('child_process').execSync;

module.exports = function askCreator(template = '') {
  let user = execSync('git config --global user.name', { encoding: 'utf-8' });
  let email = execSync('git config --global user.email', { encoding: 'utf-8' });

  user = user.trim();
  email = email.trim();

  return [
    {
      type   : 'input',
      name   : 'name',
      message: 'Project name',
      default: template,
      validate(input) {
        const done = this.async();
        if (input.trim().length === 0) {
          done('project name is empty');
          return;
        }
        done(null, true);
      }
    },
    {
      type   : 'input',
      name   : 'Project description',
      message: 'description',
      default: 'A Vue.js project'
    },
    {
      type   : 'input',
      name   : 'License',
      default: 'MIT'
    },
    {
      type   : 'input',
      name   : 'author',
      message: 'author',
      default: email
    },
    {
      type: 'confirm',
      message: "Use sass?",
      default: false
    }
  ];
}

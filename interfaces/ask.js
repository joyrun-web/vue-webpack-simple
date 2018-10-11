const execSync = require('child_process').execSync;

module.exports = function askCreator(template = '') {
  let name = execSync('git config --global user.name', { encoding: 'utf-8' });
  let email = execSync('git config --global user.email', { encoding: 'utf-8' });

  name = (name && JSON.stringify(name.toString().trim()).slice(1, -1)) || ''
  email = (email && (' <' + email.toString().trim() + '>')) || ''

  return [
    // {
    //   type   : 'input',
    //   name   : 'name',
    //   message: 'Project name',
    //   default: template,
    //   validate (input) {
    //     const done = this.async();
    //     if (input.trim().length === 0) {
    //       done('project name is empty');
    //       return;
    //     }
    //     done(null, true);
    //   }
    // },
    {
      type   : 'input',
      name   : 'description',
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
      type   : 'confirm',
      name   : 'lint',
      message: 'Use ESLint to lint your code?',
      default: true
    },
    {
      when: 'lint',
      type: 'list',
      name: 'lintConfig',
      message: 'Pick an ESLint preset',
      choices: [
        {
          name: 'Standard (https://github.com/standard/standard)',
          value: 'standard',
          short: 'Standard'
        }
      ]
    },
    {
      type: 'input',
      name: 'shareHost',
      message: 'share url host in wechat',
      validate (input) {
        const done = this.async()
        if (input.trim().length === 0) {
          done('share url is empty')
          return
        }
        done(null, true)
      }
    },
    {
      type: 'list',
      name: 'cssPerprocessor',
      message: 'Whether or not to use css perprocessor?',
      choices: [
        {
          name: 'yes, use less',
          value: 'less',
          short: 'less'
        },
        {
          name: 'yes, use sass',
          value: 'sass',
          short: 'sass'
        },
        {
          name: 'no',
          value: 'none',
          short: 'none'
        }
      ]
    },
    {
      type: 'list',
      name: 'animateType',
      message: 'animation type when the router change',
      choices: [
        {
          name: 'fade (fade in and fade out)',
          value: 'fade',
          short: 'fade'
        },
        {
          name: 'none (no animation)',
          value: 'none',
          short: 'none'
        }
      ]
    }
  ];
}

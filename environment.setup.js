// determine target url from environment variables

const targetUrlMap = {
  'local': 'http://localhost:3000',
  'gh-pages-de': 'https://docs.nanocosmos.de',
  'gh-pages-net': 'https://docs.nanocosmos.net',
  'gitlab-ci': process.env.CI_ENVIRONMENT_URL || 'https://docs.nanostream.cloud'
};

const baseUrlMap = {
  'local': '/',
  'gh-pages-de': '/',
  'gh-pages-net': '/',
  'gitlab-ci': '/'
};

function getEnvironmentConfig() {
  require('dotenv').config();
  
  let projectName = 'docs';
  let cname = '';
  let deployTarget = 'local';

  if (process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY.startsWith('nanocosmos/')) {
    projectName = process.env.GITHUB_REPOSITORY.split('/').pop();
    if (projectName === 'documentation') {
      deployTarget = 'gh-pages-de';
    } else if (projectName === 'documentation-net') {
      deployTarget = 'gh-pages-net';
    }

    const fs = require('fs');
    const path = require('path');
    
    cname = targetUrlMap[deployTarget].replace(/^https?:\/\//, '');
    fs.writeFileSync(path.join(__dirname, 'build', 'CNAME'), cname);
  } else if (process.env.GITLAB_CI === 'true' && process.env.CI_ENVIRONMENT_URL) {
    projectName = process.env.CI_PROJECT_NAME;
    deployTarget = 'gitlab-ci';
    cname = targetUrlMap[deployTarget].replace(/^https?:\/\//, '');
  }

  return {
    targetUrl: targetUrlMap[deployTarget],
    baseUrl: baseUrlMap[deployTarget],
    projectName,
    cname
  };
}

module.exports = getEnvironmentConfig;

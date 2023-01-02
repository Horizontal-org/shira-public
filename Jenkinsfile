pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {
        stage('Test npm') {
          steps {
            sh """
              npm --version
            """
          }
        }
        stage ('Deploy to staging') {
        steps {
          script {
            sh '''            
              ssh -o StrictHostKeyChecking=no root@shira.wearehorizontal.org "cd /home/shira-staging/shira-public ; git fetch --all ; git reset --hard origin/main ; export PATH=/root/.nvm/versions/node/v16.17.1/bin:$PATH ; npm install ; npm run build"
            '''
          }
        }
      }

    }
}
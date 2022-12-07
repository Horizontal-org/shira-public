pipeline {
    agent any

    stages {

        stage ('Deploy to staging') {
        steps {
          script {
            sh '''            
              ssh -o StrictHostKeyChecking=no root@shira.wearehorizontal.org "cd /home/shira-staging/shira-public ; pwd"
            '''
          }
        }
      }

    }
}
pipeline {
    agent any;

    stages {
        stage('Packets') {
            steps {
                sh 'yarn';
            }
        }
        stage('Restart Server') {
            steps {
                sh 'pm2 start app.js --name TelegramBotAPI'
            }
        }
    }
}
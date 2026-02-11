pipeline {
    agent any

    environment {
        IMAGE_NAME = "pips-hunter"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Antony-Mwangi/didactic-guacamole.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // 'mongodb-uri-id' must match the ID you created in Jenkins Credentials
                withCredentials([string(credentialsId: 'mongodb-uri-id', variable: 'MONGO_SECRET')]) {
                    echo "Building Docker image with MONGODB_URI..."
                    bat "docker build -t ${IMAGE_NAME} --build-arg MONGODB_URI=%MONGO_SECRET% ."
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Cleaning up old containers and starting the new one...'
                // 'ver > nul' is a Windows trick to prevent the script from failing if no container exists to stop
                bat """
                docker stop ${IMAGE_NAME} || ver > nul
                docker rm ${IMAGE_NAME} || ver > nul
                docker run -d --name ${IMAGE_NAME} -p 3000:3000 ${IMAGE_NAME}
                """
            }
        }
    }

    post {
        success {
            echo '============================================'
            echo 'App is live at http://localhost:3000'
            echo '============================================'
        }
        failure {
            echo 'Deployment failed! Check the "Build Docker Image" logs for MONGODB errors.'
        }
    }
}
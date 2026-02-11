pipeline {
    agent any

    environment {
        IMAGE_NAME = "pips-hunter"
        // This refers to the ID you created in Jenkins Credentials
        CRED_ID = "mongodb-uri-id"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Antony-Mwangi/didactic-guacamole.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    withCredentials([string(credentialsId: "${CRED_ID}", variable: 'MONGO_SECRET')]) {
                        echo "Building image: ${IMAGE_NAME}..."
                        // Pass secret to build-arg so Next.js build succeeds
                        bat "docker build -t ${IMAGE_NAME} --build-arg MONGODB_URI=%MONGO_SECRET% ."
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    withCredentials([string(credentialsId: "${CRED_ID}", variable: 'MONGO_SECRET')]) {
                        echo 'Stopping old containers and starting new one...'
                        // We use %MONGO_SECRET% to inject the URI into the running container
                        bat """
                        docker stop ${IMAGE_NAME} || ver > nul
                        docker rm ${IMAGE_NAME} || ver > nul
                        docker run -d --name ${IMAGE_NAME} -p 3000:3000 -e MONGODB_URI=%MONGO_SECRET% ${IMAGE_NAME}
                        """
                    }
                }
            }
        }
        
        stage('Cleanup') {
            steps {
                echo 'Cleaning up dangling Docker images...'
                bat "docker image prune -f"
            }
        }
    }

    post {
        success {
            echo "Successfully deployed! App is available at http://localhost:3000"
        }
        failure {
            echo "Deployment failed. Check the Jenkins console output."
        }
    }
}
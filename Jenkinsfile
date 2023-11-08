pipeline {
    agent any
    environment {
        REGISTRY = 'registry.alfianlensun.tech'
        APPS = 'portofolio'
        REGISTRY_LOCATION = 'registry.alfianlensun.tech/portofolio'
    }
    stages {
        stage('Build with docker') {
            steps {
                sh "sed -i 's/DOCKER_BUILD_NUMBER/${BUILD_NUMBER}/g' .env"
                sh "docker build -f Dockerfile -t ${REGISTRY}/${APPS}:${BUILD_NUMBER} -t ${REGISTRY}/${APPS}:latest ."
            }
        }
        stage('Publish to docker image') {
            steps {
                sh "docker push ${REGISTRY}/${APPS}:${BUILD_NUMBER}"
                sh "docker push ${REGISTRY}/${APPS}:latest"
            }
        }
        stage('Copy docker compose to server') {
            when {
                expression { GIT_BRANCH == 'origin/main'}
            }
            steps {
                sshagent (credentials: ['pk1']) {
                    sh "ssh -o StrictHostKeyChecking=no ${USER_PS1}@${IP_PS1} 'cd /home/vannila/portofolio && sed -i 's+DOCKERIMAGES+${REGISTRY_LOCATION}:${BUILD_NUMBER}+g' docker-compose.yaml && docker compose up --force-recreate --build -d && docker image prune -f'"
                }
            }
        }
        stage('Deploy to Production') {
            when {
                expression { GIT_BRANCH == 'origin/main'}
            }
            steps {
                sshagent (credentials: ['pk1']) {
                    sh "ssh -o StrictHostKeyChecking=no ${USER_PS1}@${IP_PS1} 'cd /home/vannila/portofolio && sed -i 's+DOCKERIMAGES+${REGISTRY_LOCATION}:${BUILD_NUMBER}+g' docker-compose.yaml && docker compose up --force-recreate --build -d && docker image prune -f'"
                }
            }
        }
    }
    post {
        always {
            sh "docker rmi ${REGISTRY_LOCATION}:${BUILD_NUMBER}"
        	sh "docker rmi ${REGISTRY_LOCATION}:latest"
        }
        success {
            echo 'I succeeded!'
        }
        failure {
            echo 'I failed :( '
        }
    }
}

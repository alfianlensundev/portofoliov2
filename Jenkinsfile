pipeline {
    agent any
    environment {
        REGISTRY = 'registry.alfianlensun.tech'
        APPS = 'portofolio'
        REGISTRY_LOCATION = 'registry.alfianlensun.tech/portofolio'
        PWA = '1'
    }
    stages {
        stage('Setup Environment') {
            steps {
                sh "sed -i 's/PWA_ENABLE/${PWA}/g' .env"
                sh "sed -i 's/DOCKER_BUILD_NUMBER/${BUILD_NUMBER}/g' .env"
                // sh "\\nDOCKER_BUILD_TIMESTAMP=${currentDateTime} >> .env"
                echo "\\nNEXT_PUBLIC_FIREBASE_API_KEY=${NEXT_PUBLIC_FIREBASE_API_KEY} >> .env"
                echo "\\nNEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN} >> .env"
                echo "\\nNEXT_PUBLIC_FIREBASE_PROJECT_ID=${NEXT_PUBLIC_FIREBASE_PROJECT_ID} >> .env"
                echo "\\nNEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET} >> .env"
                echo "\\nNEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID} >> .env"
                echo "\\nNEXT_PUBLIC_FIREBASE_APP_ID=${NEXT_PUBLIC_FIREBASE_APP_ID} >> .env"
                echo "\\nNEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=${NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID} >> .env"
            }
        }
        stage('Build with docker') {
            steps {
                sh "docker build -t ${REGISTRY}/${APPS}:${BUILD_NUMBER} -t ${REGISTRY}/${APPS}:latest ."
            }
        }
        stage('Publish to docker registry') {
            steps {
                sh "docker push ${REGISTRY}/${APPS}:${BUILD_NUMBER}"
                sh "docker push ${REGISTRY}/${APPS}:latest"
            }
        }
        stage('Prepare deployment file') {
            when {
                expression { GIT_BRANCH == 'origin/main'}
            }
            steps {
                sshagent (credentials: ['pk1']) {
                    sh "ssh -o StrictHostKeyChecking=no -p ${PORT_PS1} ${USER_PS1}@${IP_PS1} 'mkdir -p /home/vannila/jenkinsdeployment/${REGISTRY_LOCATION}'"
                    sh "scp -P ${PORT_PS1} docker-compose.yml ${USER_PS1}@${IP_PS1}:/home/vannila/jenkinsdeployment/${REGISTRY_LOCATION}"
                }
            }
        }
        stage('Deploy to Production') {
            when {
                expression { GIT_BRANCH == 'origin/main'}
            }
            steps {
                sshagent (credentials: ['pk1']) {
                    sh "ssh -o StrictHostKeyChecking=no -p ${PORT_PS1} ${USER_PS1}@${IP_PS1} 'cd /home/vannila/jenkinsdeployment/${REGISTRY_LOCATION} && sed -i 's+DOCKERIMAGES+${REGISTRY_LOCATION}:${BUILD_NUMBER}+g' docker-compose.yml && docker compose up --force-recreate --build -d && docker image prune -f' "
                }
            }
        }
    }
    post {
        always {
            sh "docker rmi -f ${REGISTRY_LOCATION}:${BUILD_NUMBER}"
        	sh "docker rmi -f ${REGISTRY_LOCATION}:latest"
        }
        success {
            echo 'I succeeded!!'
        }
        failure {
            echo 'I failed!'
        }
    }
}

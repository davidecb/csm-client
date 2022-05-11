@Library('ceiba-jenkins-library') _

pipeline{	
		agent {
		label 'Slave_Induccion'
		}	
        
		triggers {
        pollSCM('@hourly')
		}
	
		options {
			buildDiscarder(logRotator(numToKeepStr: '3'))
			disableConcurrentBuilds()
		}
		
		stages{		
			stage('Checkout') {
				steps {
					echo '------------>Checkout desde Git Microservicio<------------'
					checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], gitTool: 'Default' , submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'GitHub_davidecb', url: 'https://github.com/davidecb/adn-ceiba-front.git']]])
				}
			}		
		
			stage('compilar '){
        steps {
					sh 'npm i'
					sh 'npm run build'					
				}
			}

			stage('test'){
				steps {
					sh 'npm run test'				
				}
			}
			
			stage('Sonar Analysis'){
				steps{
					echo '------------>Analisis de código estático<------------'
					withSonarQubeEnv('Sonar') {
						sh "${tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dsonar.projectKey=co.com.ceiba.adn:ADN-productos3D-front.david.cortes -Dsonar.projectName=ADN-Productos3D-Front.david.cortes -Dproject.settings=./sonar-project.properties"
					}
				}
			}

			stage('Static Code Analysis') {
				steps{
							sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:ADN-productos3D-front.david.cortes', 
						sonarName:'ADN-Productos3D-Front.david.cortes', 
						sonarPathProperties:'./sonar-project.properties')
				}
			}
		}

		post {
			failure {
				mail(to: 'david.cortes@ceiba.com.co',
				body:"Build failed in Jenkins: Project: ${env.JOB_NAME} Build /n Number: ${env.BUILD_NUMBER} URL de build: ${env.BUILD_NUMBER}/n/nPlease go to ${env.BUILD_URL} and verify the build",
				subject: "ERROR CI: ${env.JOB_NAME}")
			}

			success {
				mail(to: 'david.cortes@ceiba.com.co',
				body:"Build Success in Jenkins: Project: ${env.JOB_NAME} Build /n Number: ${env.BUILD_NUMBER} URL de build: ${env.BUILD_NUMBER}/n/nPlease go to ${env.BUILD_URL} and verify the build",
				subject: "SUCCESS CI: ${env.JOB_NAME}")
			}
		}			
}
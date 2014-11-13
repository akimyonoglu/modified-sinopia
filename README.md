## Sinopia (Docker Image)

Sinopia is a private npm repository server. Here I am removing some changes from the original repo. Here I am removing the default user because I need to use it for deployment purpose. 

### Installing Image

`docker pull vishnunair/modified-sinopia`

### Creating Container

`docker run --name sinopia -d -p 4873:4873 -v </path/to/your/storage/>:/opt/sinopia/storage vishnunair/modified-sinopia:latest`

### Setting Registry

`npm set registry http://<docker_host>:4873/`  

###If you want to use it only for a particular user, you can create a file called .npmrc to his home directory and add the below line

`registry=http://127.0.0.1:4873/`  

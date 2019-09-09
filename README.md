# WEREWOLF
- Postman: ```https://www.getpostman.com/collections/12c164190f037baf92ab```
- Local werewolf: ```http://localhost:3000```
- Staging werewolf: ```http://10.60.7.150:6789```

# BUILD & RUN
- ```docker build -t werewolf .```
- ```docker push werewolf:latest```
- ```docker run -d --name werewolf  -p 6789:3000 werewolf```
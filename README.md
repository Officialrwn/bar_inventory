Building and running the project with docker compose:
- Install Docker/Docker desktop
- From the projects root directory run in the terminal and follow instructions: bash setup-env.sh
- From the projects root directory use terminal command to build containers and run: 
	"docker compose --env-file server/.env up --build -d"
- If you don't have docker desktop installed then use terminal command "docker ps" and check that all containers are up and running.
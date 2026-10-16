# CI/CD Pipeline - No Cloud Needed 🚀

## Workflow:
1. Push to GitHub → 2. GitHub Actions builds Docker Image → 3. Pushes to Docker Hub → 4. Pull & Run Locally

## How to Run Locally:
```bash
docker pull soundhar2003/cicd-static-app:latest
docker run -d -p 8080:80 --name my-cicd-app soundhar2003/cicd-static-app:latest
# Open http://localhost:8080
![GitHub Repo](screenshots/01-github-repo.png)
![GitHub Actions](screenshots/02-github-actions.png) - GREEN TICK MAIN!
![Docker Hub](screenshots/03-dockerhub.png)
![Deployed App](screenshots/04-deployed-app.png) - YOUR WONDERFUL UI!
![Terminal](screenshots/05-terminal.png)

# CI/CD Pipeline - No Cloud Needed 🚀

## Workflow:
1. Push to GitHub → 2. GitHub Actions builds Docker Image → 3. Pushes to Docker Hub → 4. Pull & Run Locally

## How to Run Locally:
```bash
docker pull soundhar2003/cicd-static-app:latest
docker run -d -p 8080:80 --name my-cicd-app soundhar2003/cicd-static-app:latest
# Open http://localhost:8080

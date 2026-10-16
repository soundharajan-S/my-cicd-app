# CI/CD Pipeline - No Cloud Needed

**Project 4 | Build: 16 Oct 2026 15:04:45 IST | Image: 27.47 MB | Live: http://localhost:8080**

### Workflow
Push to GitHub -> GitHub Actions builds Docker Image -> Pushes to Docker Hub -> Pull & Run Locally

### How to Run
docker pull soundhar2003/cicd-static-app:latest
docker run -d -p 8080:80 --name my-cicd-app soundhar2003/cicd-static-app:latest
Open localhost:8080

### Screenshots

#### 1. GitHub Repo
![Repo](screenshorts-project/04-repo.png)

#### 2. GitHub Actions - Green Tick (MAIN PROOF)
![Actions](screenshorts-project/03-actions.png)

#### 3. Docker Hub Image
![Docker Hub](screenshorts-project/02-dockerhub.png)

#### 4. Deployed App - Final Proof
![Deployed](screenshorts-project/01-deployed-.png)

#### 5. Terminal Verification
![Terminal](screenshorts-project/05-terminal.png)

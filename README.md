# End-to-End DevOps Kubernetes Project: Backend API CI/CD with Docker and, Kubernetes & Helm.

## Project Overview

This project demonstrates an end-to-end DevOps workflow covering application containerization, CI/CD automation, and deployment on Kubernetes.
The objective is to showcase practical DevOps skills aligned with real-world scenarios, with a strong focus on automation, scalability, and deployment best practices.
The Kubernetes cluster is created using **kind (Kubernetes IN Docker)**, which is lightweight and commonly used for CI/CD pipelines and local testing environments.

---

## Architecture Overview

High-level workflow:

1. Application source code is pushed to GitHub
2. CI pipeline builds the Docker image
3. Docker image is pushed to a container registry
4. Kubernetes manifests are applied to the kind cluster
5. Application is deployed and exposed via a Kubernetes Service
6. Monitoring stack (Prometheus and Grafana) planned for future integration to provide observability

---

## Tech Stack Used
- Backend: Node.js 
- Database: MongoDB)
- Containerization: Docker, Docker Compose
- CI/CD: GitHub Actions
- Container Registry: Docker Hub
- Orchestration: Kubernetes
- Packaging: Helm

---

## Kubernetes Cluster Setup

The Kubernetes cluster is created using **kind**.

Reasons for choosing kind:

* Lightweight and fast to spin up
* Widely used in CI/CD pipelines
* Ideal for local and test environments

```bash
kind create cluster --name devops-cluster
```

---

## CI/CD Workflow

1. Developer pushes code to the GitHub repository
2. CI pipeline triggers automatically
3. Docker image is built using a Dockerfile
4. Docker image is pushed to the container registry
5. Kubernetes manifests are applied to the cluster
6. Application is deployed or updated automatically

This workflow ensures automated, repeatable, and consistent deployments.

---

## Application Deployment

Kubernetes resources used:

* Deployment
* Service
* ConfigMap / Secret (if applicable)

Apply manifests:

```bash
kubectl apply -f k8s/
```

Verify application status:

```bash
kubectl get pods
kubectl get svc
```

---

## Monitoring and Observability

Monitoring is implemented to track application and cluster health.

### Prometheus

* Collects metrics from Kubernetes components and applications
* Deployed using Kubernetes manifests or Helm

### Grafana

* Visualizes metrics collected by Prometheus
* Dashboards configured for:

  * Pod health
  * CPU and memory usage
  * Application availability

Monitoring enables:

* Identification of performance bottlenecks
* Proactive issue detection
* Improved system reliability

---

## Challenges Faced

* Kubernetes networking setup in a local environment
* Managing container image versions
* Understanding Kubernetes resource dependencies
* Integrating monitoring components with the cluster

---

## Future Enhancements

* Centralized logging using ELK / EFK stack
* Horizontal Pod Autoscaler (HPA)
* Secure CI/CD with secrets management
* Deployment on managed Kubernetes services (EKS / AKS)
* Alerting using Alertmanager

---

## How to Run This Project Locally

1. Install Docker
2. Install kind and kubectl
3. Create Kubernetes cluster using kind
4. Build and push Docker image
5. Apply Kubernetes manifests
6. Access the application via the exposed service
7. Access Grafana dashboards for monitoring

---

## Author

**Navjot Singh**
Cloud / DevOps Engineer
GitHub: https://github.com/navu9n/devops-crud-demo/

---

## Conclusion

This project demonstrates hands-on experience with DevOps tools, Kubernetes, CI/CD automation, and monitoring(not yet).
It represents a production-like DevOps implementation suitable for showcasing real-world DevOps and cloud engineering skills.

import type { Roadmap } from "@/types";

export const roadmaps: Roadmap[] = [
  {
    id: "roadmap-frontend-dev",
    title: "Frontend Dev",
    slug: "frontend-dev",
    description: "A practical sequence for learning modern frontend development from structure and styling through frameworks, performance, and deployment.",
    steps: [
      {
        id: "frontend-1",
        title: "HTML fundamentals",
        description: "Learn semantic structure, forms, accessibility basics, and how browsers parse documents.",
        resources: ["https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content", "https://web.dev/learn/html"],
        status: "beginner"
      },
      {
        id: "frontend-2",
        title: "CSS layout and responsive design",
        description: "Get comfortable with the box model, flexbox, grid, media queries, and fluid spacing.",
        resources: ["https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics", "https://web.dev/learn/css"],
        status: "beginner"
      },
      {
        id: "frontend-3",
        title: "JavaScript essentials",
        description: "Focus on variables, functions, arrays, objects, DOM APIs, and asynchronous basics.",
        resources: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", "https://javascript.info/"],
        status: "beginner"
      },
      {
        id: "frontend-4",
        title: "TypeScript for UI work",
        description: "Add types, interfaces, unions, and safe component props to your workflow.",
        resources: ["https://www.typescriptlang.org/docs/", "https://www.totaltypescript.com/tutorials"],
        status: "intermediate"
      },
      {
        id: "frontend-5",
        title: "React fundamentals",
        description: "Understand components, props, state, effects, and composition with modern React patterns.",
        resources: ["https://react.dev/learn", "https://nextjs.org/learn"],
        status: "intermediate"
      },
      {
        id: "frontend-6",
        title: "Framework workflow with Next.js",
        description: "Learn routing, data fetching, server/client boundaries, metadata, and deployment ergonomics.",
        resources: ["https://nextjs.org/docs", "https://nextjs.org/learn/dashboard-app"],
        status: "intermediate"
      },
      {
        id: "frontend-7",
        title: "Accessibility and testing",
        description: "Audit keyboard flows, color contrast, semantics, and add component/integration tests.",
        resources: ["https://www.w3.org/WAI/fundamentals/accessibility-intro/", "https://testing-library.com/docs/"],
        status: "advanced"
      },
      {
        id: "frontend-8",
        title: "Performance and production delivery",
        description: "Profile bundles, optimize rendering, improve Core Web Vitals, and ship polished apps.",
        resources: ["https://web.dev/explore/learn-performance", "https://nextjs.org/docs/app/building-your-application/optimizing"],
        status: "advanced"
      }
    ]
  },
  {
    id: "roadmap-backend-dev",
    title: "Backend Dev",
    slug: "backend-dev",
    description: "A backend roadmap that starts with HTTP and server basics, then moves through persistence, APIs, auth, scaling, and observability.",
    steps: [
      {
        id: "backend-1",
        title: "HTTP and networking basics",
        description: "Learn requests, responses, headers, methods, status codes, cookies, and REST conventions.",
        resources: ["https://developer.mozilla.org/en-US/docs/Web/HTTP", "https://roadmap.sh/guides/what-is-http"],
        status: "beginner"
      },
      {
        id: "backend-2",
        title: "Pick a server runtime",
        description: "Choose Node.js, Python, Go, or another stack and learn how to structure routes and services.",
        resources: ["https://nodejs.org/en/learn", "https://fastapi.tiangolo.com/"],
        status: "beginner"
      },
      {
        id: "backend-3",
        title: "Databases and SQL",
        description: "Understand relational modeling, queries, indexes, constraints, and migrations.",
        resources: ["https://www.postgresql.org/docs/", "https://sqlbolt.com/"],
        status: "beginner"
      },
      {
        id: "backend-4",
        title: "Build REST and RPC APIs",
        description: "Design endpoints, request validation, pagination, error handling, and versioning.",
        resources: ["https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design", "https://grpc.io/docs/what-is-grpc/introduction/"],
        status: "intermediate"
      },
      {
        id: "backend-5",
        title: "Authentication and authorization",
        description: "Implement sessions, JWTs, password storage, OAuth flows, and role-based access control.",
        resources: ["https://authjs.dev/", "https://owasp.org/www-project-cheat-sheets/cheatsheets/Authentication_Cheat_Sheet.html"],
        status: "intermediate"
      },
      {
        id: "backend-6",
        title: "Caching and async jobs",
        description: "Use queues, workers, scheduled tasks, and caching layers to improve throughput.",
        resources: ["https://redis.io/docs/latest/", "https://docs.bullmq.io/"],
        status: "intermediate"
      },
      {
        id: "backend-7",
        title: "Observability and reliability",
        description: "Add structured logs, metrics, tracing, health checks, and alerting to services.",
        resources: ["https://opentelemetry.io/docs/", "https://grafana.com/docs/"],
        status: "advanced"
      },
      {
        id: "backend-8",
        title: "Scaling and architecture",
        description: "Study horizontal scaling, service boundaries, consistency tradeoffs, and resilience patterns.",
        resources: ["https://martinfowler.com/articles/microservices.html", "https://12factor.net/"],
        status: "advanced"
      }
    ]
  },
  {
    id: "roadmap-devops",
    title: "DevOps",
    slug: "devops",
    description: "A hands-on path for learning Linux, automation, containers, CI/CD, cloud deployment, and ongoing operations.",
    steps: [
      {
        id: "devops-1",
        title: "Linux and shell basics",
        description: "Become comfortable with the terminal, permissions, services, filesystems, and shell scripting.",
        resources: ["https://linuxjourney.com/", "https://www.gnu.org/software/bash/manual/bash.html"],
        status: "beginner"
      },
      {
        id: "devops-2",
        title: "Networking fundamentals",
        description: "Learn DNS, ports, subnets, load balancers, TLS, and troubleshooting connectivity.",
        resources: ["https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/"],
        status: "beginner"
      },
      {
        id: "devops-3",
        title: "Version control and automation",
        description: "Use Git fluently and automate repetitive tasks with scripts and task runners.",
        resources: ["https://git-scm.com/doc", "https://www.gnu.org/software/make/manual/make.html"],
        status: "beginner"
      },
      {
        id: "devops-4",
        title: "Containers with Docker",
        description: "Build images, run containers, manage volumes, and orchestrate local multi-service setups.",
        resources: ["https://docs.docker.com/get-started/", "https://docs.docker.com/compose/"],
        status: "intermediate"
      },
      {
        id: "devops-5",
        title: "CI/CD pipelines",
        description: "Set up automated builds, tests, artifact publishing, and deployment workflows.",
        resources: ["https://docs.github.com/en/actions", "https://docs.gitlab.com/ee/ci/"],
        status: "intermediate"
      },
      {
        id: "devops-6",
        title: "Infrastructure as code",
        description: "Describe infrastructure declaratively and keep environments reproducible.",
        resources: ["https://developer.hashicorp.com/terraform/docs", "https://www.ansible.com/resources/get-started"],
        status: "intermediate"
      },
      {
        id: "devops-7",
        title: "Cloud and orchestration",
        description: "Learn managed compute, networking, storage, IAM, and the basics of Kubernetes.",
        resources: ["https://kubernetes.io/docs/home/", "https://aws.amazon.com/getting-started/"],
        status: "advanced"
      },
      {
        id: "devops-8",
        title: "Monitoring, security, and incident response",
        description: "Practice alerting, dashboards, secrets management, backups, and production incident handling.",
        resources: ["https://sre.google/sre-book/table-of-contents/", "https://owasp.org/www-project-devsecops-guideline/"],
        status: "advanced"
      }
    ]
  },
  {
    id: "roadmap-full-stack",
    title: "Full-Stack",
    slug: "full-stack",
    description: "A balanced roadmap for developers who want to build and ship complete web products across frontend, backend, data, and deployment.",
    steps: [
      {
        id: "fullstack-1",
        title: "HTML, CSS, and JavaScript",
        description: "Build a strong browser-side foundation before adding frameworks and abstractions.",
        resources: ["https://developer.mozilla.org/en-US/docs/Learn", "https://web.dev/learn"],
        status: "beginner"
      },
      {
        id: "fullstack-2",
        title: "React and component thinking",
        description: "Learn stateful UI composition, forms, events, and reusable client architecture.",
        resources: ["https://react.dev/learn", "https://kentcdodds.com/blog/application-state-management-with-react"],
        status: "beginner"
      },
      {
        id: "fullstack-3",
        title: "Next.js app architecture",
        description: "Use routing, layouts, server rendering, data loading, and deployment-ready conventions.",
        resources: ["https://nextjs.org/docs", "https://nextjs.org/learn"],
        status: "intermediate"
      },
      {
        id: "fullstack-4",
        title: "Server APIs and business logic",
        description: "Design backend endpoints, validations, auth flows, and service layers.",
        resources: ["https://expressjs.com/", "https://zod.dev/"],
        status: "intermediate"
      },
      {
        id: "fullstack-5",
        title: "Databases and ORM workflows",
        description: "Model data carefully, manage migrations, and query relational data safely.",
        resources: ["https://www.prisma.io/docs", "https://postgresqltutorial.com/"],
        status: "intermediate"
      },
      {
        id: "fullstack-6",
        title: "State, caching, and async UX",
        description: "Handle optimistic updates, background revalidation, and a polished data flow.",
        resources: ["https://tanstack.com/query/latest/docs/framework/react/overview", "https://swr.vercel.app/"],
        status: "advanced"
      },
      {
        id: "fullstack-7",
        title: "Testing across the stack",
        description: "Add unit, integration, and end-to-end coverage that maps to actual user behavior.",
        resources: ["https://playwright.dev/docs/intro", "https://testing-library.com/docs/"],
        status: "advanced"
      },
      {
        id: "fullstack-8",
        title: "Deployment and production operations",
        description: "Ship to production, manage environments, monitor errors, and iterate safely.",
        resources: ["https://vercel.com/docs", "https://docs.sentry.io/"],
        status: "advanced"
      }
    ]
  },
  {
    id: "roadmap-ai-ml-basics",
    title: "AI/ML Basics",
    slug: "ai-ml-basics",
    description: "A beginner-friendly machine learning roadmap that starts with data and Python foundations before moving into modeling, evaluation, and deployment basics.",
    steps: [
      {
        id: "aiml-1",
        title: "Python programming and notebooks",
        description: "Learn core Python syntax, functions, data structures, and notebook-based workflows.",
        resources: ["https://docs.python.org/3/tutorial/", "https://jupyter.org/try"],
        status: "beginner"
      },
      {
        id: "aiml-2",
        title: "Math foundations",
        description: "Focus on linear algebra, probability, statistics, and gradients at a practical level.",
        resources: ["https://www.khanacademy.org/math/linear-algebra", "https://www.khanacademy.org/math/statistics-probability"],
        status: "beginner"
      },
      {
        id: "aiml-3",
        title: "Data analysis with NumPy and pandas",
        description: "Load, clean, transform, and inspect tabular data with standard Python tools.",
        resources: ["https://numpy.org/learn/", "https://pandas.pydata.org/docs/getting_started/index.html"],
        status: "beginner"
      },
      {
        id: "aiml-4",
        title: "Visualization and data storytelling",
        description: "Create readable charts and use exploratory analysis to understand data shape and quality.",
        resources: ["https://matplotlib.org/stable/users/explain/quick_start.html", "https://seaborn.pydata.org/tutorial.html"],
        status: "intermediate"
      },
      {
        id: "aiml-5",
        title: "Classical machine learning",
        description: "Work through supervised learning basics with regression, classification, and evaluation metrics.",
        resources: ["https://scikit-learn.org/stable/user_guide.html", "https://developers.google.com/machine-learning/crash-course"],
        status: "intermediate"
      },
      {
        id: "aiml-6",
        title: "Model evaluation and iteration",
        description: "Learn train/validation/test splits, cross-validation, overfitting, and feature engineering.",
        resources: ["https://developers.google.com/machine-learning/guides/rules-of-ml", "https://scikit-learn.org/stable/modules/model_evaluation.html"],
        status: "intermediate"
      },
      {
        id: "aiml-7",
        title: "Neural network basics",
        description: "Understand tensors, layers, activation functions, optimization, and basic deep learning workflows.",
        resources: ["https://pytorch.org/tutorials/", "https://www.tensorflow.org/learn"],
        status: "advanced"
      },
      {
        id: "aiml-8",
        title: "Serving and responsible usage",
        description: "Package a model, monitor it, and think through bias, drift, and model failure modes.",
        resources: ["https://mlflow.org/docs/latest/index.html", "https://developers.google.com/machine-learning/fairness-overview"],
        status: "advanced"
      }
    ]
  }
];

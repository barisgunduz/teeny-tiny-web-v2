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
  },
  {
    id: "roadmap-mobile-developer",
    title: "Mobile Developer",
    slug: "mobile-developer",
    description: "Build a clear path through native concepts, app architecture, and mobile shipping workflows.",
    steps: [
      {
        id: "mobile-developer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/mobile-developer"],
        status: "beginner"
      },
      {
        id: "mobile-developer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/mobile-developer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-data-engineering",
    title: "Data Engineering",
    slug: "data-engineering",
    description: "Learn pipelines, warehousing, orchestration, and the systems behind production data workflows.",
    steps: [
      {
        id: "data-engineering-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/data-engineering"],
        status: "beginner"
      },
      {
        id: "data-engineering-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/data-engineering/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-cybersecurity",
    title: "Cybersecurity",
    slug: "cybersecurity",
    description: "Work through modern security concepts, defensive practices, and foundational cyber workflows.",
    steps: [
      {
        id: "cybersecurity-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/cybersecurity"],
        status: "beginner"
      },
      {
        id: "cybersecurity-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/cybersecurity/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-react",
    title: "React",
    slug: "react",
    description: "Learn React from component basics through state, rendering, testing, and production patterns.",
    steps: [
      {
        id: "react-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/react"],
        status: "beginner"
      },
      {
        id: "react-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/react/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-nextjs",
    title: "Next.js",
    slug: "nextjs",
    description: "Follow a focused learning path for routing, data fetching, rendering, and shipping apps with Next.js.",
    steps: [
      {
        id: "nextjs-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/nextjs"],
        status: "beginner"
      },
      {
        id: "nextjs-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/nextjs/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-vue",
    title: "Vue",
    slug: "vue",
    description: "Build up from Vue fundamentals to components, state, routing, and app architecture.",
    steps: [
      {
        id: "vue-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/vue"],
        status: "beginner"
      },
      {
        id: "vue-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/vue/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-angular",
    title: "Angular",
    slug: "angular",
    description: "Learn Angular modules, components, services, forms, and enterprise app structure.",
    steps: [
      {
        id: "angular-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/angular"],
        status: "beginner"
      },
      {
        id: "angular-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/angular/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-react-native",
    title: "React Native",
    slug: "react-native",
    description: "Learn cross-platform mobile development with React Native from setup to shipping.",
    steps: [
      {
        id: "react-native-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/react-native"],
        status: "beginner"
      },
      {
        id: "react-native-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/react-native/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-flutter",
    title: "Flutter",
    slug: "flutter",
    description: "Build a roadmap for widgets, app layout, state handling, and Flutter delivery.",
    steps: [
      {
        id: "flutter-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/flutter"],
        status: "beginner"
      },
      {
        id: "flutter-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/flutter/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-api-developer",
    title: "API Developer",
    slug: "api-developer",
    description: "Focus on API design, contracts, auth, versioning, observability, and reliability.",
    steps: [
      {
        id: "api-developer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/api-developer"],
        status: "beginner"
      },
      {
        id: "api-developer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/api-developer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-nodejs-backend",
    title: "Node.js Backend",
    slug: "nodejs-backend",
    description: "Learn backend development with Node.js, services, APIs, data access, and deployment.",
    steps: [
      {
        id: "nodejs-backend-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/nodejs-backend"],
        status: "beginner"
      },
      {
        id: "nodejs-backend-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/nodejs-backend/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-python-backend",
    title: "Python Backend",
    slug: "python-backend",
    description: "Build Python backend skills across APIs, services, databases, and async workflows.",
    steps: [
      {
        id: "python-backend-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/python-backend"],
        status: "beginner"
      },
      {
        id: "python-backend-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/python-backend/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-java-backend",
    title: "Java Backend",
    slug: "java-backend",
    description: "Follow a backend path for Java services, frameworks, APIs, and production architecture.",
    steps: [
      {
        id: "java-backend-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/java-backend"],
        status: "beginner"
      },
      {
        id: "java-backend-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/java-backend/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-dotnet-backend",
    title: ".NET Backend",
    slug: "dotnet-backend",
    description: "Learn .NET backend patterns for APIs, data access, architecture, and deployment.",
    steps: [
      {
        id: "dotnet-backend-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/dotnet-backend"],
        status: "beginner"
      },
      {
        id: "dotnet-backend-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/dotnet-backend/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-go-backend",
    title: "Go Backend",
    slug: "go-backend",
    description: "Build backend systems in Go with services, concurrency, APIs, and production tooling.",
    steps: [
      {
        id: "go-backend-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/go-backend"],
        status: "beginner"
      },
      {
        id: "go-backend-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/go-backend/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-microservices",
    title: "Microservices",
    slug: "microservices",
    description: "Understand service boundaries, messaging, contracts, resilience, and distributed systems tradeoffs.",
    steps: [
      {
        id: "microservices-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/microservices"],
        status: "beginner"
      },
      {
        id: "microservices-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/microservices/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-database-engineer",
    title: "Database Engineer",
    slug: "database-engineer",
    description: "Focus on schema design, performance, indexing, replication, and database operations.",
    steps: [
      {
        id: "database-engineer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/database-engineer"],
        status: "beginner"
      },
      {
        id: "database-engineer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/database-engineer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-software-architect",
    title: "Software Architect",
    slug: "software-architect",
    description: "Study systems thinking, tradeoffs, patterns, reliability, and large-scale technical design.",
    steps: [
      {
        id: "software-architect-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/software-architect"],
        status: "beginner"
      },
      {
        id: "software-architect-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/software-architect/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-kubernetes",
    title: "Kubernetes",
    slug: "kubernetes",
    description: "Learn Kubernetes concepts, workloads, networking, storage, operations, and production readiness.",
    steps: [
      {
        id: "kubernetes-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/kubernetes"],
        status: "beginner"
      },
      {
        id: "kubernetes-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/kubernetes/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-aws",
    title: "AWS",
    slug: "aws",
    description: "Build cloud foundations across AWS services, networking, IAM, deployment, and operations.",
    steps: [
      {
        id: "aws-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/aws"],
        status: "beginner"
      },
      {
        id: "aws-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/aws/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-azure",
    title: "Azure",
    slug: "azure",
    description: "Learn Azure services, identity, deployment patterns, and platform operations.",
    steps: [
      {
        id: "azure-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/azure"],
        status: "beginner"
      },
      {
        id: "azure-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/azure/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-gcp",
    title: "GCP",
    slug: "gcp",
    description: "Follow a Google Cloud roadmap across compute, storage, networking, and managed services.",
    steps: [
      {
        id: "gcp-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/gcp"],
        status: "beginner"
      },
      {
        id: "gcp-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/gcp/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-sre",
    title: "SRE",
    slug: "sre",
    description: "Focus on reliability, observability, incident response, SLIs, SLOs, and production health.",
    steps: [
      {
        id: "sre-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/sre"],
        status: "beginner"
      },
      {
        id: "sre-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/sre/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-platform-engineer",
    title: "Platform Engineer",
    slug: "platform-engineer",
    description: "Build internal platform skills for developer experience, infrastructure, and service enablement.",
    steps: [
      {
        id: "platform-engineer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/platform-engineer"],
        status: "beginner"
      },
      {
        id: "platform-engineer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/platform-engineer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-cloud-security",
    title: "Cloud Security",
    slug: "cloud-security",
    description: "Learn cloud-native security concepts across IAM, networks, secrets, and posture management.",
    steps: [
      {
        id: "cloud-security-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/cloud-security"],
        status: "beginner"
      },
      {
        id: "cloud-security-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/cloud-security/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-networking-engineer",
    title: "Networking Engineer",
    slug: "networking-engineer",
    description: "Develop networking fundamentals across routing, switching, addressing, DNS, and troubleshooting.",
    steps: [
      {
        id: "networking-engineer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/networking-engineer"],
        status: "beginner"
      },
      {
        id: "networking-engineer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/networking-engineer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-linux-administrator",
    title: "Linux Administrator",
    slug: "linux-administrator",
    description: "Learn Linux administration, services, permissions, logs, networking, and system operations.",
    steps: [
      {
        id: "linux-administrator-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/linux-administrator"],
        status: "beginner"
      },
      {
        id: "linux-administrator-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/linux-administrator/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-data-analyst",
    title: "Data Analyst",
    slug: "data-analyst",
    description: "Build analysis skills around SQL, spreadsheets, dashboards, metrics, and storytelling.",
    steps: [
      {
        id: "data-analyst-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/data-analyst"],
        status: "beginner"
      },
      {
        id: "data-analyst-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/data-analyst/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-data-scientist",
    title: "Data Scientist",
    slug: "data-scientist",
    description: "Learn statistics, modeling, experimentation, feature work, and practical data science workflows.",
    steps: [
      {
        id: "data-scientist-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/data-scientist"],
        status: "beginner"
      },
      {
        id: "data-scientist-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/data-scientist/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-machine-learning-engineer",
    title: "Machine Learning Engineer",
    slug: "machine-learning-engineer",
    description: "Focus on ML systems, training pipelines, serving, evaluation, and production model workflows.",
    steps: [
      {
        id: "machine-learning-engineer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/machine-learning-engineer"],
        status: "beginner"
      },
      {
        id: "machine-learning-engineer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/machine-learning-engineer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-mlops",
    title: "MLOps",
    slug: "mlops",
    description: "Learn how to operate machine learning systems with automation, tracking, deployment, and monitoring.",
    steps: [
      {
        id: "mlops-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/mlops"],
        status: "beginner"
      },
      {
        id: "mlops-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/mlops/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-llm-engineer",
    title: "LLM Engineer",
    slug: "llm-engineer",
    description: "Build a roadmap for prompts, retrieval, agents, evaluation, and LLM-powered product systems.",
    steps: [
      {
        id: "llm-engineer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/llm-engineer"],
        status: "beginner"
      },
      {
        id: "llm-engineer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/llm-engineer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-prompt-engineer",
    title: "Prompt Engineer",
    slug: "prompt-engineer",
    description: "Learn prompt design, examples, role framing, evaluation, and workflow integration.",
    steps: [
      {
        id: "prompt-engineer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/prompt-engineer"],
        status: "beginner"
      },
      {
        id: "prompt-engineer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/prompt-engineer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-ai-product-builder",
    title: "AI Product Builder",
    slug: "ai-product-builder",
    description: "Focus on shipping AI products by combining UX, orchestration, prompts, and product thinking.",
    steps: [
      {
        id: "ai-product-builder-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/ai-product-builder"],
        status: "beginner"
      },
      {
        id: "ai-product-builder-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/ai-product-builder/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-cybersecurity-beginner",
    title: "Cybersecurity Beginner",
    slug: "cybersecurity-beginner",
    description: "Start learning cybersecurity with a beginner-first path through core concepts and safety practices.",
    steps: [
      {
        id: "cybersecurity-beginner-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/cybersecurity-beginner"],
        status: "beginner"
      },
      {
        id: "cybersecurity-beginner-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/cybersecurity-beginner/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-web-application-security",
    title: "Web Application Security",
    slug: "web-application-security",
    description: "Learn to secure web apps through auth, input safety, headers, abuse prevention, and testing.",
    steps: [
      {
        id: "web-application-security-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/web-application-security"],
        status: "beginner"
      },
      {
        id: "web-application-security-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/web-application-security/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-penetration-testing",
    title: "Penetration Testing",
    slug: "penetration-testing",
    description: "Build offensive security knowledge around recon, enumeration, exploitation, and reporting.",
    steps: [
      {
        id: "penetration-testing-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/penetration-testing"],
        status: "beginner"
      },
      {
        id: "penetration-testing-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/penetration-testing/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-blue-team",
    title: "Blue Team",
    slug: "blue-team",
    description: "Focus on defensive security workflows, monitoring, detection, and operational response.",
    steps: [
      {
        id: "blue-team-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/blue-team"],
        status: "beginner"
      },
      {
        id: "blue-team-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/blue-team/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-soc-analyst",
    title: "SOC Analyst",
    slug: "soc-analyst",
    description: "Learn alert triage, incident investigation, logging, and detection workflows for SOC work.",
    steps: [
      {
        id: "soc-analyst-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/soc-analyst"],
        status: "beginner"
      },
      {
        id: "soc-analyst-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/soc-analyst/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-security-engineer",
    title: "Security Engineer",
    slug: "security-engineer",
    description: "Build toward security engineering with systems, appsec, cloud, and automation practices.",
    steps: [
      {
        id: "security-engineer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/security-engineer"],
        status: "beginner"
      },
      {
        id: "security-engineer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/security-engineer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-iam",
    title: "IAM",
    slug: "iam",
    description: "Learn identity and access management concepts, policies, federation, roles, and governance.",
    steps: [
      {
        id: "iam-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/iam"],
        status: "beginner"
      },
      {
        id: "iam-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/iam/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-qa-engineer",
    title: "QA Engineer",
    slug: "qa-engineer",
    description: "Build testing discipline through quality strategy, test design, coverage, and release confidence.",
    steps: [
      {
        id: "qa-engineer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/qa-engineer"],
        status: "beginner"
      },
      {
        id: "qa-engineer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/qa-engineer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-test-automation",
    title: "Test Automation",
    slug: "test-automation",
    description: "Learn how to automate quality workflows across UI, API, and regression testing.",
    steps: [
      {
        id: "test-automation-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/test-automation"],
        status: "beginner"
      },
      {
        id: "test-automation-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/test-automation/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-playwright-testing",
    title: "Playwright Testing",
    slug: "playwright-testing",
    description: "Build end-to-end testing skills using Playwright for automation, assertions, and CI integration.",
    steps: [
      {
        id: "playwright-testing-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/playwright-testing"],
        status: "beginner"
      },
      {
        id: "playwright-testing-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/playwright-testing/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-performance-testing",
    title: "Performance Testing",
    slug: "performance-testing",
    description: "Learn load, stress, and performance-testing workflows for systems and APIs.",
    steps: [
      {
        id: "performance-testing-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/performance-testing"],
        status: "beginner"
      },
      {
        id: "performance-testing-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/performance-testing/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-reliability-engineering",
    title: "Reliability Engineering",
    slug: "reliability-engineering",
    description: "Focus on reliability, failure handling, operational excellence, and resilient system design.",
    steps: [
      {
        id: "reliability-engineering-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/reliability-engineering"],
        status: "beginner"
      },
      {
        id: "reliability-engineering-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/reliability-engineering/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-ui-designer",
    title: "UI Designer",
    slug: "ui-designer",
    description: "Learn visual hierarchy, layout, typography, components, and polished interface design.",
    steps: [
      {
        id: "ui-designer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/ui-designer"],
        status: "beginner"
      },
      {
        id: "ui-designer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/ui-designer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-ux-designer",
    title: "UX Designer",
    slug: "ux-designer",
    description: "Build user experience skills around research, flows, usability, and interaction design.",
    steps: [
      {
        id: "ux-designer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/ux-designer"],
        status: "beginner"
      },
      {
        id: "ux-designer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/ux-designer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-product-designer",
    title: "Product Designer",
    slug: "product-designer",
    description: "Combine UX, UI, product thinking, and systems design into a practical design roadmap.",
    steps: [
      {
        id: "product-designer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/product-designer"],
        status: "beginner"
      },
      {
        id: "product-designer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/product-designer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-design-systems",
    title: "Design Systems",
    slug: "design-systems",
    description: "Learn the structure, governance, tokens, components, and adoption patterns behind design systems.",
    steps: [
      {
        id: "design-systems-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/design-systems"],
        status: "beginner"
      },
      {
        id: "design-systems-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/design-systems/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-product-manager",
    title: "Product Manager",
    slug: "product-manager",
    description: "Follow a product path through discovery, prioritization, delivery, communication, and metrics.",
    steps: [
      {
        id: "product-manager-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/product-manager"],
        status: "beginner"
      },
      {
        id: "product-manager-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/product-manager/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-technical-writer",
    title: "Technical Writer",
    slug: "technical-writer",
    description: "Build technical writing skills for docs, onboarding, reference content, and product communication.",
    steps: [
      {
        id: "technical-writer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/technical-writer"],
        status: "beginner"
      },
      {
        id: "technical-writer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/technical-writer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-computer-science-fundamentals",
    title: "Computer Science Fundamentals",
    slug: "computer-science-fundamentals",
    description: "Study algorithms, data structures, complexity, systems, and core programming concepts.",
    steps: [
      {
        id: "computer-science-fundamentals-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/computer-science-fundamentals"],
        status: "beginner"
      },
      {
        id: "computer-science-fundamentals-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/computer-science-fundamentals/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-open-source-contributor",
    title: "Open Source Contributor",
    slug: "open-source-contributor",
    description: "Learn how to navigate codebases, contribute cleanly, collaborate, and build an OSS track record.",
    steps: [
      {
        id: "open-source-contributor-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/open-source-contributor"],
        status: "beginner"
      },
      {
        id: "open-source-contributor-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/open-source-contributor/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-freelance-developer",
    title: "Freelance Developer",
    slug: "freelance-developer",
    description: "Build a roadmap for freelance delivery, client communication, scoping, and professional systems.",
    steps: [
      {
        id: "freelance-developer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/freelance-developer"],
        status: "beginner"
      },
      {
        id: "freelance-developer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/freelance-developer/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-indie-hacker",
    title: "Indie Hacker",
    slug: "indie-hacker",
    description: "Learn to design, build, launch, validate, and iterate on solo software products.",
    steps: [
      {
        id: "indie-hacker-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/indie-hacker"],
        status: "beginner"
      },
      {
        id: "indie-hacker-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/indie-hacker/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-startup-cto",
    title: "Startup CTO",
    slug: "startup-cto",
    description: "Build leadership, architecture, hiring, delivery, and scaling judgment for startup technical leadership.",
    steps: [
      {
        id: "startup-cto-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/startup-cto"],
        status: "beginner"
      },
      {
        id: "startup-cto-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/startup-cto/resources"],
        status: "intermediate"
      }
    ]
  },
  {
    id: "roadmap-junior-to-senior-developer",
    title: "Junior-to-Senior Developer",
    slug: "junior-to-senior-developer",
    description: "Develop the habits, technical depth, communication, and ownership needed to grow as an engineer.",
    steps: [
      {
        id: "junior-to-senior-developer-1",
        title: "Roadmap outline in progress",
        description: "This roadmap has been added to the library and a full step-by-step path will be published here soon.",
        resources: ["https://example.com/roadmaps/junior-to-senior-developer"],
        status: "beginner"
      },
      {
        id: "junior-to-senior-developer-2",
        title: "Detailed learning path coming soon",
        description: "Future updates will expand this placeholder into a complete sequence with curated resources and progression stages.",
        resources: ["https://example.com/roadmaps/junior-to-senior-developer/resources"],
        status: "intermediate"
      }
    ]
  },
];

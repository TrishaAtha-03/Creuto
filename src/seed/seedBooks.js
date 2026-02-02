require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("../models/book.model");

const books = [
  {
    name: "Clean Code Explained",
    description:
      "This book focuses on writing readable, maintainable, and efficient code. It discusses naming conventions, functions, classes, and common coding mistakes. The goal is to help developers think clearly about how their code communicates intent to other developers over time.",
    author: "Robert C. Martin",
    publishDate: "2008-08-01"
  },
  {
    name: "Refactoring Legacy Systems",
    description:
      "A practical guide to improving existing codebases without breaking functionality. The book explains common refactoring techniques, code smells, and step-by-step strategies to safely modernize legacy systems used in production environments.",
    author: "Martin Fowler",
    publishDate: "2018-11-20"
  },
  {
    name: "The Pragmatic Developer",
    description:
      "This book explores the mindset and habits of highly effective software developers. It covers problem-solving approaches, debugging strategies, and career growth while emphasizing continuous learning and adaptability.",
    author: "Andrew Hunt",
    publishDate: "1999-10-20"
  },
  {
    name: "Design Patterns in Practice",
    description:
      "An in-depth explanation of common object-oriented design patterns such as Singleton, Factory, Observer, and Strategy. Each pattern is explained using real-world examples and practical use cases.",
    author: "Erich Gamma",
    publishDate: "1994-10-21"
  },
  {
    name: "Modern JavaScript Foundations",
    description:
      "Covers modern JavaScript features including ES6+, closures, promises, async/await, and modules. This book helps developers understand how JavaScript works under the hood and how to write scalable frontend and backend applications.",
    author: "Jane Doe",
    publishDate: "2016-05-15"
  },
  {
    name: "Node.js Backend Architecture",
    description:
      "Explains how to design scalable backend systems using Node.js. Topics include REST APIs, middleware, database integration, error handling, and performance optimization techniques.",
    author: "John Smith",
    publishDate: "2019-02-10"
  },
  {
    name: "Mastering MongoDB",
    description:
      "A comprehensive guide to MongoDB covering schema design, indexing strategies, aggregation pipelines, and performance tuning. Ideal for developers building data-intensive applications.",
    author: "Jane Doe",
    publishDate: "2020-07-01"
  },
  {
    name: "API Design Best Practices",
    description:
      "Focuses on designing clean and consistent REST APIs. Topics include HTTP methods, status codes, pagination, filtering, authentication, and documentation using OpenAPI specifications.",
    author: "John Smith",
    publishDate: "2021-03-18"
  },
  {
    name: "Scalable Web Applications",
    description:
      "Discusses techniques for building scalable web applications, including load balancing, caching strategies, database sharding, and horizontal scaling in cloud environments.",
    author: "Robert C. Martin",
    publishDate: "2017-09-12"
  },
  {
    name: "Software Testing Strategies",
    description:
      "Covers unit testing, integration testing, and end-to-end testing. The book explains testing tools, mocking techniques, and how to write reliable tests that improve code confidence.",
    author: "Martin Fowler",
    publishDate: "2015-01-05"
  },
  {
    name: "Clean Architecture Fundamentals",
    description:
      "Introduces architectural principles such as separation of concerns, dependency inversion, and layered architecture. Helps developers design systems that are easy to maintain and evolve.",
    author: "Robert C. Martin",
    publishDate: "2012-11-10"
  },
  {
    name: "Database Design Essentials",
    description:
      "Explains relational and non-relational database design concepts. Covers normalization, indexing, relationships, and performance considerations when working with large datasets.",
    author: "Jane Doe",
    publishDate: "2014-04-22"
  },
  {
    name: "System Design Interview Guide",
    description:
      "A practical guide to preparing for system design interviews. Covers common questions, scalability concepts, trade-offs, and real-world architecture examples.",
    author: "John Smith",
    publishDate: "2022-06-30"
  },
  {
    name: "Cloud Computing Basics",
    description:
      "Introduces cloud computing concepts including IaaS, PaaS, and SaaS. Explains how applications are deployed and scaled using modern cloud platforms.",
    author: "Jane Doe",
    publishDate: "2018-08-14"
  },
  {
    name: "DevOps for Developers",
    description:
      "Covers DevOps principles such as CI/CD pipelines, containerization, monitoring, and infrastructure automation. Focuses on collaboration between development and operations teams.",
    author: "John Smith",
    publishDate: "2019-12-01"
  },
  {
    name: "Microservices Architecture",
    description:
      "Explains how to design and build microservices-based systems. Discusses service communication, data consistency, deployment strategies, and common challenges.",
    author: "Martin Fowler",
    publishDate: "2016-03-09"
  },
  {
    name: "Web Security Essentials",
    description:
      "Focuses on common web security threats such as SQL injection, XSS, CSRF, and authentication vulnerabilities. Provides best practices to secure web applications.",
    author: "Jane Doe",
    publishDate: "2020-10-05"
  },
  {
    name: "Performance Optimization Techniques",
    description:
      "Discusses strategies for improving application performance including profiling, caching, efficient algorithms, and database query optimization.",
    author: "Robert C. Martin",
    publishDate: "2013-07-19"
  },
  {
    name: "Introduction to RESTful Services",
    description:
      "Explains REST principles, stateless communication, and resource-oriented design. Includes examples of building REST APIs using Node.js.",
    author: "John Smith",
    publishDate: "2011-02-28"
  },
  {
    name: "Full Stack Development Guide",
    description:
      "A complete guide covering frontend, backend, databases, and deployment. Helps developers understand how all parts of a web application work together.",
    author: "Jane Doe",
    publishDate: "2023-01-10"
  }
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log("✅ Database seeded with 20 unique books");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
})();

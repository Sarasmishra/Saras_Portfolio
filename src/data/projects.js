import lms from "../assets/lms.png"
import bookShow from "../assets/BookShow.png"
import blog from "../assets/BlogPlatform.png"
export const projects = [
    {
      id: 1,
      title: "Learning Management System",
      description:
        "A role-based learning platform for managing courses, users, and learning progress.",
      image: lms,
      tags: ["React", "Redux", "Tailwind CSS","Express","Mongodb"],
      demoUrl: " https://learning-hub-1-hg4b.onrender.com",
      githubUrl: "https://github.com/Sarasmishra/Learning_Hub",
      slug: "learning-management-system",
      
    },
    {
      id: 2,
      title: "BookShow",
      description:
      "Role-based MERN library system with reader and admin management dashboards.",
      image:bookShow,
      tags: ["React", "Redux", "Tailwind CSS","Express","Mongodb"
      ],
      demoUrl: "https://bookshow-1-i5nt.onrender.com/",
      githubUrl: "https://github.com/Sarasmishra/BookShow",
      slug: "bookshow-platform"
    },
    {
      id: 3,
      title: "Blog Platform (Appwrite)",
      description:
        "A modern blog platform using Appwrite as Backend-as-a-Service with focus on frontend architecture.",
      image:blog,
      tags: ["React","Redux", "Appwrite", "Tailwind CSS","Shadcn/ui"],
      demoUrl: "https://react-appwrite-blog-tau.vercel.app/",
      githubUrl: "https://github.com/Sarasmishra/react-appwrite-blog",
      slug: "blog-platform-appwrite"
    
    },
  ];
  
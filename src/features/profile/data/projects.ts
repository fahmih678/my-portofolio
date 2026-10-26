import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "shop-management-system",
    title: "Shop Management System",
    period: { start: "12.2023" },
    link: "https://github.com/abdulrehmanwaseem/Shop-Management-System",
    skills: [
      "React",
      "Redux Toolkit",
      "Handsontable",
      "Express.js",
      "PostgreSQL",
    ],
    isExpanded: true,

    description: `A complete shop management system built using the PERN stack.  
- Authentication and invoice management  
- Real-time financial tracking and dashboards  
- Inventory and cash flow monitoring  
- Handsontable for dynamic data grids`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Shop+Management+System",
  },
  {
    id: "zombie-invasion-game",
    title: "3D Zombie Invasion Game",
    period: { start: "02.2024" },
    link: "https://github.com/abdulrehmanwaseem/3d-Zombie-Invasion-Game",
    skills: [
      "React",
      "Three.js",
      "React Three Fiber",
      "React-Three/drei",
      "React-Three/Rapiar",
      "TypeScript",
    ],
    description: `A thrilling 3D zombie survival game built with React and Three.js.  
- Immersive post-apocalyptic city environment  
- Real-time physics and collisions  
- Custom camera controls and smooth movement  
- Optimized for web browsers  

**Demo:** [Play Online](https://zombie-invasion-three.vercel.app)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=3D+Zombie+Invasion+Game",
  },
];

import { Timeline } from "@/components/ui/timeline"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  BookOpen,
  Users,
  Lightbulb,
  Target,
  Palette,
  Briefcase,
  Search,
  TestTube,
  Zap,
  Layers,
  Rocket,
} from "lucide-react"

const courseData = {
  courseTitle: "UX Design Course",
  curriculum: [
    {
      month: 1,
      monthTitle: "Foundations of UX Design",
      weeks: [
        {
          week: 1,
          weekTitle: "Introduction to UX Design",
          topics: [
            "What is UX Design? History and evolution of UX Design",
            "Difference between UX and UI",
            "Principles of UX: Usability, Accessibility, and User-Centered Design",
            "Role of a UX Designer in the Product & Service companies",
            "Jobs in the field of user experience",
            "Job responsibilities of entry-level UX designers",
            "Specialists, generalists, and T-shaped designers",
          ],
          task: "Write a note what they like in UX Design and which specialisation they want to get into.",
        },
        {
          week: 2,
          weekTitle: "Design Thinking and User-Centered Design",
          topics: [
            "Introduction to the Design Thinking process",
            "Stages: Empathize, Define, Ideate, Prototype, Test",
            "Importance of User-Centered Design (UCD)",
            "Understand UX Design Research Framework",
            "Double Diamond process",
            "Agile UX",
            "User-Centered Testing Methods",
          ],
          task: "Write down all the Methodology and design process they want to Choose.",
        },
        {
          week: 3,
          weekTitle: "Empathy Research Methods",
          notes: [
            "Before students start they have to choose a Project topic",
            "Mentor can give or students can choose",
          ],
          topics: ["Understand the User (Who are users, why users matters etc)"],
          task: "Identify a product or service you recently used and understand how u felt",
          userResearch: {
            qualitative: ["Interviews", "Focus groups", "Diary studies", "Participatory sessions"],
            quantitative: ["Surveys and questionnaires", "Analytics and metrics analysis"],
          },
          empathyMapping: ["Identify user pain points", "Understand personas", "Competitive analysis"],
          empathyTask:
            "Conduct a User Interview and get the data. Create user pain points frustrations & empathy mapping.",
        },
        {
          week: 4,
          weekTitle: "User Personas and Journey Mapping",
          topics: [
            "Problem Statement Creation",
            "User Persona",
            "How Might We (HMW) Questions",
            "Writing Clear and Actionable Problem Statements",
            "Defining Goals",
            "User Goals vs. Business Goals",
            "Prioritizing Pain Points",
            "Mapping the User Journey",
            "Scope Definition",
            "Feasibility, Viability, and Desirability Analysis",
            "Information Architecture",
            "Type of Information architecture",
            "Information architecture vs User Flow",
          ],
          task: "Create a user persona for a chosen audience. Develop a user journey map for a common scenario. Create user personas and journey maps for your project. Create Information Architecture.",
        },
      ],
    },
    {
      month: 2,
      monthTitle: "Ideation, Wireframing, and Prototyping",
      weeks: [
        {
          week: 5,
          weekTitle: "Ideation Techniques",
          topics: [
            "Understand design ideation",
            "Brainstorming techniques: Crazy 8s, SCAMPER",
            "Converting insights into actionable ideas",
            "Crazy 8s",
            "Affinity Diagram",
            "Rapid Ideas",
            "Exploration Techniques",
            "Divergent Thinking (Expanding Ideas)",
            "Convergent Thinking (Narrowing Down Ideas)",
          ],
          task: "Group brainstorming session on solving a user problem. Create 3-5 ideas to solve a UX problem of yours. Draw the first 8 diagrams. Redesign the IA or all the previous tasks.",
        },
        {
          week: 6,
          weekTitle: "Low-Fidelity Wireframes",
          topics: [
            "Introduction to wireframe",
            "Paper prototypes vs. digital wireframes",
            "Sketching the App or website (initial Design wireframes)",
            "Sketching the Site mapping",
            "Reviewing students works and helping",
          ],
          task: "Draw all the above designs for their own projects and get reviewed.",
        },
        {
          week: 6.5,
          weekTitle: "High-Fidelity Wireframes (Design Foundation)",
          topics: [
            "Design Basics and Visual Theory",
            "Elements of Design (Line, Shape, Form, Texture, Colour)",
            "Principles of Design (Balance, Contrast, Emphasis, Unity, etc.)",
            "Colour Theory in UI Design",
            "Typography in UI Design",
            "Layout and Composition for Digital Interfaces",
            "Visual Hierarchy Gestalt Principles",
            "Evolution of User Interface Design",
            "Early Graphical User Interfaces (1970s-1980s)",
            "The Rise of Web Interfaces (1990s)",
            "Skeuomorphism Era (Late 1990s-Early 2010s)",
            "Flat Design Revolution (2010s)",
            "Material Design and Beyond (2014-Present)",
            "Neomorphism and Soft UI (Late 2010s-Early 2020s)",
            "Responsive and Adaptive Design (2010s-Present)",
            "Emerging trends in UI Design (2020s and Beyond)",
            "Accessibility and Inclusive Design Through the Years",
          ],
          task: "Learn and understand the design fundamentals and make a note of your work",
        },
        {
          week: 7,
          weekTitle: "Design Tools and Software",
          topics: [
            "Overview of Popular UI/UX Design Tools",
            "Introduction of Figma tool",
            "Basic Navigation",
            "Drawing shapes and creating frames",
            "Grouping and organizing layers",
            "Adding and styling text",
            "Google Fonts integration",
            "Managing font sizes, weights, and spacing",
            "Colors and Gradients",
            "Creating and managing color styles",
            "Elements of UI Designs",
          ],
          task: "Learn and work on the figma hands on design tools and understanding the tools.",
        },
        {
          week: 8,
          weekTitle: "Designing Digital Wireframes",
          topics: [
            "Advanced Design Tools",
            "Creating reusable components",
            "Variants and nested components",
            "Managing components in libraries",
            "Auto Layout",
            "Understanding Auto Layout basics",
            "Adding padding, spacing, and alignment",
            "Building responsive designs",
            "Grids and Constraints",
            "Setting up grids and columns",
            "Pinning and scaling objects for responsive design",
          ],
          task: "Create your Digital Wireframes with the help of knowledge you gained in the Figma tool skills. Design a Website Landing page for your project website.",
        },
      ],
    },
    {
      month: 3,
      monthTitle: "Prototyping Usability Testing & Feedbacks",
      weeks: [
        {
          week: 9,
          weekTitle: "Prototyping",
          topics: [
            "Mid-to-high-fidelity prototypes",
            "Adding interactivity to prototypes",
            "Tools: Figma's prototyping feature",
          ],
          task: "Create final Design web or app of their project and get the feedbacks and Redesign it.",
        },
        {
          week: 10,
          weekTitle: "Usability Testing and Evaluation Framework",
          topics: [
            "User-Cantered Testing Methods",
            "Eye tracking",
            "Card sorting",
            "Tree testing",
            "Prototype testing",
            "First-click testing",
            "Five-second test",
            "Guerrilla testing A/B testing",
            "Expert Evaluation Methods",
            "Heuristic evaluation",
            "Expert reviews",
            "Cognitive walkthroughs",
            "Accessibility Testing, User Behavior Analysis",
            "Screen reader testing",
            "Keyboard navigation testing",
            "Color contrast analysis",
            "WACG guidelines",
          ],
          task: "Now again redesign and evaluate the design according to the usability testing feedbacks and create the Digital wireframes.",
        },
        {
          week: 11,
          weekTitle: "Advance UX Design",
          topics: [
            "Fundamentals of UX Laws and Principles",
            "Fitts's Law",
            "Hick's Law",
            "Jakob's Law",
            "Miller's Law",
            "Parkinson's Law",
            "Tesler's Law",
            "Peak-End Rule",
            "Aesthetic-Usability Effect",
            "Interaction Design Principles",
            "Emotional Design Principles",
            "Advanced Design System",
            "Introduction to Design Systems",
            "Definition and importance",
            "Components of a design system",
            "Benefits for designers, developers, and organisations",
            "Material Design",
            "Apple Design System",
            "Carbon Design Systems",
          ],
          task: "Work on the other Design website or app and follow all of the above laws and apply them in the next design and using the design system of your choice. and adding some interactive design elements",
        },
        {
          week: 12,
          weekTitle: "Understanding Stakeholders",
          topics: [
            "Who Are Stakeholders?",
            "Internal: Product managers, developers, marketing teams, & executives",
            "External: Clients, end-users, regulatory bodies",
            "Levels of Stakeholders",
            "Primary: Decision-makers (executives, product owners)",
            "Secondary: Contributors (designers, developers, marketers)",
            "Tertiary: End-users and indirect participants",
            "The Role of Stakeholders in Project Success",
            "Key Roles in UX Design & Engagement with Stakeholders",
            "UX Strategist",
            "Product Designer",
            "UX Researcher",
            "Content Strategist",
            "Advanced Design Processes for Effective Collaboration",
            "Agile Design Process at Scale",
            "Lean UX & Agile at Scale",
            "Design Sprints",
            "Managing Enterprise UX vs. Consumer UX at Scale",
            "Enterprise UX",
            "Governance in Design Systems",
            "Complex User Ecosystems",
            "Consumer UX",
            "B2B vs. B2C Design B2B B2C",
            "Ethics & Sustainable Design Practices",
          ],
        },
      ],
    },
    {
      month: 4,
      monthTitle: "Advance UX & Portfolio Building",
      weeks: [
        {
          week: 13,
          weekTitle: "Design Hands-off",
          topics: [
            "Complex Component Systems",
            "Nested components",
            "Creating and managing design system libraries",
            "Advanced Prototyping",
            "Micro-interactions and animations",
            "Conditional logic and variables",
            "Figma Plugins and Integrations",
            "Essential plugins for UI design",
            "Integrating Figma with development workflows",
            "Collaboration and Hand off",
            "Team libraries and version history",
            "Developer hand-off best practices",
            "Performance Optimization",
            "Large file management",
            "Techniques for improving Figma performance",
            "Figma for Design Systems",
            "Creating and documenting design systems",
            "Maintaining consistency across projects",
          ],
          task: "Learn how to work on your Design systems and learn to set things up managing and developers hands off for your designs and files",
        },
        {
          week: 14,
          weekTitle: "Design Hands-off",
          topics: [
            "Capstone Project",
            "Understanding the purpose and job role of a UX portfolio",
            "Analyzing successful UX portfolios",
            "Defining your personal brand and career goals",
            "Selecting and Preparing Projects",
            "Choosing projects that showcase skills and versatility",
            "Documenting your design process",
            "Gathering and organizing project assets",
            "Crafting Compelling Case Studies",
            "Structuring Effective Case Studies",
            "Storytelling techniques for UX projects",
            "Balancing visuals and text in case studies",
          ],
          task: "Student will start select and work on the Final Major projects and Create their portfolio presentations with project presentations",
        },
        {
          week: 14.5,
          weekTitle: "Major Project",
          topics: [
            "Working on the Final projects and Case study building",
            "Design for the Social Good or Real time problem",
            "Group Sessions and interactive classes to come up with solutions",
            "Team collaboration and Ideating",
            "Working on the Designs and gaining knowledge while working",
            "Feedback and A/B testing through the students feedback",
            "Final Design hands off only after the Mentor approvals",
          ],
        },
        {
          week: 16,
          weekTitle: "Portfolio Building & Prepare for Job",
          topics: [
            "Deliver detailed case studies and presentations, incorporating all learned skills",
            "Research",
            "Personas",
            "Wireframes and Prototypes",
            "Testing and Iteration",
            "Case Study Documentation",
            "Build a Professional Presence",
            "Explore personal brands",
            "Start to build an online presence",
            "Get involved in UX design communities",
            "Network and find a mentor",
            "Introduction to the interview process",
            "Present a portfolio during interviews",
          ],
        },
      ],
    },
  ],
}

const getWeekIcon = (weekNumber: number) => {
  const icons = [
    BookOpen,
    Lightbulb,
    Users,
    Target,
    Zap,
    Palette,
    Layers,
    TestTube,
    Rocket,
    Search,
    Briefcase,
    Users,
    Layers,
    Briefcase,
    Rocket,
    Briefcase,
  ]
  return icons[weekNumber - 1] || BookOpen
}

const getMonthColor = (month: number) => {
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
  ]
  return colors[month - 1] || "from-blue-500 to-cyan-500"
}

const getMonthBadgeVariant = (month: number) => {
  const variants = ["secondary", "outline", "warning", "success"] as const
  return variants[month - 1] || "secondary"
}

export default function CoursePage() {
  const timelineData = courseData.curriculum.flatMap((month) =>
    month.weeks.map((week) => ({
      title: `Week ${week.week}`,
      content: (
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
          <div className="mb-4">
            <Badge
              variant={getMonthBadgeVariant(month.month)}
              className="mb-3 text-xs md:text-sm px-3 md:px-4 py-1 md:py-2"
            >
              Month {month.month}: {month.monthTitle}
            </Badge>

            {week.notes && (
              <div className="mb-3">
                {week.notes.map((note, index) => (
                  <Badge key={index} variant="warning" className="mb-2 mr-2 text-xs px-2 py-1">
                    {note}
                  </Badge>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${getMonthColor(month.month)} flex items-center justify-center text-white shadow-lg`}
              >
                {(() => {
                  const IconComponent = getWeekIcon(week.week)
                  return <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                })()}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {week.weekTitle}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300">
                  Week {week.week} • {month.monthTitle}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            {/* Topics Section */}
            {week.topics && week.topics.length > 0 && (
              <div
                className={`bg-white dark:bg-white rounded-xl p-4 md:p-6 border ${
                  month.month === 1
                    ? "border-blue-200/50"
                    : month.month === 2
                      ? "border-purple-200/50"
                      : month.month === 3
                        ? "border-green-200/50"
                        : "border-orange-200/50"
                } shadow-sm`}
              >
                <h4
                  className={`text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2 ${
                    month.month === 1
                      ? "text-blue-700"
                      : month.month === 2
                        ? "text-purple-700"
                        : month.month === 3
                          ? "text-green-700"
                          : "text-orange-700"
                  }`}
                >
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                  Topics Covered:
                </h4>
                <div className="grid gap-2 md:gap-3">
                  {week.topics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 group">
                      <CheckCircle
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          month.month === 1
                            ? "text-blue-500"
                            : month.month === 2
                              ? "text-purple-500"
                              : month.month === 3
                                ? "text-green-500"
                                : "text-orange-500"
                        } mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0`}
                      />
                      <span
                        className={`text-sm md:text-base text-neutral-700 group-hover:${
                          month.month === 1
                            ? "text-blue-600"
                            : month.month === 2
                              ? "text-purple-600"
                              : month.month === 3
                                ? "text-green-600"
                                : "text-orange-600"
                        } transition-colors`}
                      >
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* User Research Section */}
            {week.userResearch && (
              <div className="bg-white dark:bg-white rounded-xl p-4 md:p-6 border border-indigo-200/50 shadow-sm">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2 text-indigo-700">
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                  User Research Methods:
                </h4>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h5 className="font-medium text-neutral-800 mb-2 text-sm md:text-base">
                      Qualitative Research:
                    </h5>
                    <div className="ml-3 md:ml-4 space-y-1 md:space-y-2">
                      {week.userResearch.qualitative.map((method, index) => (
                        <div key={index} className="flex items-start gap-2 md:gap-3">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base text-neutral-700">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-800 mb-2 text-sm md:text-base">
                      Quantitative Research:
                    </h5>
                    <div className="ml-3 md:ml-4 space-y-1 md:space-y-2">
                      {week.userResearch.quantitative.map((method, index) => (
                        <div key={index} className="flex items-start gap-2 md:gap-3">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm md:text-base text-neutral-700">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Empathy Mapping Section */}
            {week.empathyMapping && (
              <div className="bg-white dark:bg-white rounded-xl p-4 md:p-6 border border-teal-200/50 shadow-sm">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2 text-teal-700">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  Empathy Mapping:
                </h4>
                <div className="grid gap-2 md:gap-3">
                  {week.empathyMapping.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 group">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-teal-500 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span className="text-sm md:text-base text-neutral-700 group-hover:text-teal-600 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tasks Section */}
            {(week.task || week.empathyTask) && (
              <div className="bg-white dark:bg-white rounded-xl p-4 md:p-6 border border-green-200/50 shadow-sm">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2 text-green-700">
                  <Target className="w-4 h-4 md:w-5 md:h-5" />
                  Tasks to Complete:
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {week.task && (
                    <div className="flex items-start gap-2 md:gap-3 group cursor-pointer">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 group-hover:text-green-600 transition-colors flex-shrink-0" />
                      <span className="text-sm md:text-base text-neutral-700 group-hover:text-green-600 transition-colors">
                        {week.task}
                      </span>
                    </div>
                  )}
                  {week.empathyTask && (
                    <div className="flex items-start gap-2 md:gap-3 group cursor-pointer">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 group-hover:text-green-600 transition-colors flex-shrink-0" />
                      <span className="text-sm md:text-base text-neutral-700 group-hover:text-green-600 transition-colors">
                        {week.empathyTask}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ),
    })),
  )

  return (
    <div className="w-full min-h-screen">
      <Timeline data={timelineData} />
    </div>
  )
}

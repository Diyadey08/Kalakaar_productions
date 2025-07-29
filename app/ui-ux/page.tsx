"use client"
import Link from "next/link"
import { Timeline } from "@/components/ui/timeline"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react"
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
  ArrowRight,
  Star,
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

interface Week {
  week: number;
  weekTitle: string;
  topics: string[];
  task?: string;
  notes?: string[];
  userResearch?: {
    qualitative: string[];
    quantitative: string[];
  };
  empathyMapping?: string[];
  empathyTask?: string;
}

interface Month {
  month: number;
  monthTitle: string;
  weeks: Week[];
}

interface CourseData {
  courseTitle: string;
  curriculum: Month[];
}

const courseData: CourseData = {
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
  const variants = ["secondary", "outline", "secondary", "outline"] as const
  return variants[month - 1] || "secondary"
}

interface WeekCardProps {
  week: Week;
  month: Month;
  isLeft?: boolean;
}

function WeekCard({ week, month, isLeft = false }: WeekCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`w-full ${isLeft ? 'lg:w-[45%] lg:mr-auto' : 'lg:w-[45%] lg:ml-auto'}`}>
      <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/20 overflow-hidden">
        {/* Card Header - Always Visible */}
        <div 
          className="p-4 lg:p-6 cursor-pointer hover:bg-white/50 dark:hover:bg-slate-700/50 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Badge
            variant={getMonthBadgeVariant(month.month)}
            className="mb-2 lg:mb-3 text-xs px-2 py-1 lg:text-sm lg:px-3 lg:py-2"
          >
            Month {month.month}: {month.monthTitle}
          </Badge>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 lg:gap-3">
              <div
                className={`w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full bg-gradient-to-br ${getMonthColor(month.month)} flex items-center justify-center text-white shadow-lg`}
              >
                {(() => {
                  const IconComponent = getWeekIcon(week.week)
                  return <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                })()}
              </div>
              <div>
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {week.weekTitle}
                </h3>
                <p className="text-xs lg:text-sm xl:text-base text-neutral-600 dark:text-neutral-300">
                  Week {week.week} • {month.monthTitle}
                </p>
              </div>
            </div>
            <div className="text-neutral-400 hover:text-primary transition-colors">
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 lg:w-6 lg:h-6" />
              ) : (
                <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
              )}
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-4 lg:px-6 pb-4 lg:pb-6 space-y-3 lg:space-y-4 xl:space-y-6">
            {/* Topics Section */}
            {week.topics && week.topics.length > 0 && (
              <div
                className={`bg-gradient-to-br ${
                  month.month === 1
                    ? "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200/50 dark:border-blue-700/50"
                    : month.month === 2
                      ? "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 dark:border-purple-700/50"
                      : month.month === 3
                        ? "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200/50 dark:border-green-700/50"
                        : "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200/50 dark:border-orange-700/50"
                } rounded-xl p-3 lg:p-4 xl:p-6 border`}
              >
                <h4
                  className={`text-sm lg:text-base xl:text-lg font-semibold mb-2 lg:mb-3 xl:mb-4 flex items-center gap-2 ${
                    month.month === 1
                      ? "text-blue-700 dark:text-blue-300"
                      : month.month === 2
                        ? "text-purple-700 dark:text-purple-300"
                        : month.month === 3
                          ? "text-green-700 dark:text-green-300"
                          : "text-orange-700 dark:text-orange-300"
                  }`}
                >
                  <BookOpen className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                  Topics Covered:
                </h4>
                <div className="grid gap-1.5 lg:gap-2 xl:gap-3">
                  {week.topics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-1.5 lg:gap-2 xl:gap-3 group">
                      <div
                        className={`w-1 h-1 lg:w-1.5 lg:h-1.5 xl:w-2 xl:h-2 ${
                          month.month === 1
                            ? "bg-blue-500"
                            : month.month === 2
                              ? "bg-purple-500"
                              : month.month === 3
                                ? "bg-green-500"
                                : "bg-orange-500"
                        } rounded-full mt-1.5 lg:mt-2 group-hover:scale-125 transition-transform flex-shrink-0`}
                      />
                      <span
                        className={`text-xs lg:text-sm xl:text-base text-neutral-700 dark:text-neutral-300 group-hover:${
                          month.month === 1
                            ? "text-blue-600 dark:group-hover:text-blue-400"
                            : month.month === 2
                              ? "text-purple-600 dark:group-hover:text-purple-400"
                              : month.month === 3
                                ? "text-green-600 dark:group-hover:text-green-400"
                                : "text-orange-600 dark:group-hover:text-orange-400"
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
            {(week as any).userResearch && (
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-4 md:p-6 border border-indigo-200/50 dark:border-indigo-700/50">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                  User Research Methods:
                </h4>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h5 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2 text-sm md:text-base">
                      Qualitative Research:
                    </h5>
                    <div className="ml-3 md:ml-4 space-y-1 md:space-y-2">
                      {(week as any).userResearch.qualitative.map((method: string, index: number) => (
                        <div key={index} className="flex items-start gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2 text-sm md:text-base">
                      Quantitative Research:
                    </h5>
                    <div className="ml-3 md:ml-4 space-y-1 md:space-y-2">
                      {(week as any).userResearch.quantitative.map((method: string, index: number) => (
                        <div key={index} className="flex items-start gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Empathy Mapping Section */}
            {(week as any).empathyMapping && (
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-4 md:p-6 border border-teal-200/50 dark:border-teal-700/50">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2 text-teal-700 dark:text-teal-300">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  Empathy Mapping:
                </h4>
                <div className="grid gap-2 md:gap-3">
                  {(week as any).empathyMapping.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 group">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-500 rounded-full mt-2 group-hover:scale-125 transition-transform flex-shrink-0" />
                      <span className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tasks Section - Always Visible at Bottom */}
        {(week.task || (week as any).empathyTask) && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 md:p-6 border-t border-green-200/50 dark:border-green-700/50">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 flex items-center gap-2 text-green-700 dark:text-green-300">
              <Target className="w-4 h-4 md:w-5 md:h-5" />
              Tasks to Complete:
            </h4>
            <div className="space-y-2 md:space-y-3">
              {week.task && (
                <div className="flex items-start gap-2 md:gap-3 group cursor-pointer">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 group-hover:text-green-600 transition-colors flex-shrink-0" />
                  <span className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {week.task}
                  </span>
                </div>
              )}
              {(week as any).empathyTask && (
                <div className="flex items-start gap-2 md:gap-3 group cursor-pointer">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 group-hover:text-green-600 transition-colors flex-shrink-0" />
                  <span className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {(week as any).empathyTask}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CoursePage() {
  // Create flat array of all weeks with their month info
  const allWeeks = courseData.curriculum.flatMap((month) =>
    month.weeks.map((week) => ({ week, month }))
  );

  // Timeline scroll progress using Framer Motion - like the Timeline component
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Convert to percentage for mobile indicator
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest * 100);
  });

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 bg-white/10 text-white border-white/20">
              <Star className="w-4 h-4 mr-2" />
              Premium Course
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            UI/UX Design
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mastery
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master the art of creating beautiful, functional, and user-centered digital experiences. 
            Learn from industry experts and build a portfolio that gets you hired.
          </p>

          {/* Course Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-white">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-lg">16 Weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-lg">Live Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-pink-400" />
              <span className="text-lg">Certificate</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-green-400" />
              <span className="text-lg">Portfolio Building</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Enquire Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            {/* <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              View Curriculum
            </Button> */}
          </div>
        </div>
      </section>

      {/* Course Timeline Section */}
      <div className="bg-background" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive 16-week journey that takes you from beginner to professional UI/UX designer
            </p>
          </div>
          
          {/* Week Cards Layout - Following Timeline component structure */}
          <div ref={ref} className="relative">
            {/* Progress Line - Desktop */}
            <div 
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 w-[1px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
              style={{ height: height + "px" }}
            >
              {/* Animated Progress Bar */}
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[1px] bg-gradient-to-b from-amber-400 via-yellow-500 to-amber-600 rounded-full shadow-lg"
                initial={{ height: 0 }}
                animate={{ 
                  boxShadow: [
                    '0 0 15px rgba(245, 158, 11, 0.5)',
                    '0 0 20px rgba(245, 158, 11, 0.7)',
                    '0 0 15px rgba(245, 158, 11, 0.5)'
                  ],
                  filter: [
                    'drop-shadow(0 0 6px rgba(245, 158, 11, 0.6))',
                    'drop-shadow(0 0 10px rgba(245, 158, 11, 0.8))',
                    'drop-shadow(0 0 6px rgba(245, 158, 11, 0.6))'
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Magical Glowing Orb */}
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-radial from-amber-300 to-amber-600 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 10px rgba(245, 158, 11, 0.7)',
                      '0 0 15px rgba(245, 158, 11, 0.9)',
                      '0 0 10px rgba(245, 158, 11, 0.7)'
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            </div>

            {/* Weeks Container - For Scroll Tracking */}
            <div>
              {/* Mobile Layout - Same as Desktop but Single Column */}
              <div className="lg:hidden relative">
                {/* Progress Line - Mobile (Full Height) */}
                <div 
                  className="absolute left-8 top-0 w-[1px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                  style={{ height: height + "px" }}
                >
                  {/* Animated Progress Bar - Mobile */}
                  <motion.div
                    style={{
                      height: heightTransform,
                      opacity: opacityTransform,
                    }}
                    className="absolute inset-x-0 top-0 w-[1px] bg-gradient-to-b from-amber-400 via-yellow-500 to-amber-600 rounded-full shadow-lg"
                    initial={{ height: 0 }}
                    animate={{ 
                      boxShadow: [
                        '0 0 8px rgba(245, 158, 11, 0.5)',
                        '0 0 12px rgba(245, 158, 11, 0.7)',
                        '0 0 8px rgba(245, 158, 11, 0.5)'
                      ],
                      filter: [
                        'drop-shadow(0 0 3px rgba(245, 158, 11, 0.6))',
                        'drop-shadow(0 0 6px rgba(245, 158, 11, 0.8))',
                        'drop-shadow(0 0 3px rgba(245, 158, 11, 0.6))'
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {/* Magical Glowing Orb - Mobile */}
                    <motion.div 
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-radial from-amber-300 to-amber-600 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 6px rgba(245, 158, 11, 0.7)',
                          '0 0 10px rgba(245, 158, 11, 0.9)',
                          '0 0 6px rgba(245, 158, 11, 0.7)'
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  </motion.div>
                </div>

                <div className="space-y-8">
                  {allWeeks.map(({ week, month }, index) => (
                    <div key={`mobile-${month.month}-${week.week}`} className="relative">
                      {/* Week Number Circle */}
                      <div className="flex absolute left-8 transform -translate-x-1/2 top-8 z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-background">
                          {week.week}
                        </div>
                      </div>

                      {/* Week Card - Right Side */}
                      <div className="ml-20">
                        <WeekCard 
                          week={week} 
                          month={month} 
                          isLeft={false}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block space-y-12 lg:space-y-16">
                {allWeeks.map(({ week, month }, index) => (
                  <div key={`${month.month}-${week.week}`} className="relative">
                    {/* Week Number Circle - Centered */}
                    <div className="flex absolute left-1/2 transform -translate-x-1/2 top-8 z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-background">
                        {week.week}
                      </div>
                    </div>

                    {/* Card Container */}
                    <div className="flex items-start gap-8">
                      <WeekCard 
                        week={week} 
                        month={month} 
                        isLeft={index % 2 === 0} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

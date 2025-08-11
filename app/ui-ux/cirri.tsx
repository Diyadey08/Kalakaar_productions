import { CheckCircle, Layers, Lightbulb, Target } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Timeline } from "@/components/ui/timeline"

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

export function CurriculumSection() {
  const getMonthIcon = (month: number) => {
    switch (month) {
      case 1:
        return <Lightbulb className="w-12 h-12 text-[#246CF4]" />
      case 2:
        return <Layers className="w-12 h-12 text-[#246CF4]" />
      case 3:
        return <Target className="w-12 h-12 text-[#246CF4]" />
      case 4:
        return <Layers className="w-12 h-12 text-[#246CF4]" />
      default:
        return <Lightbulb className="w-12 h-12 text-[#246CF4]" />
    }
  }

  const timelineData = courseData.curriculum.flatMap((month) =>
    month.weeks.map((week, weekIndex) => ({
      title: `Week ${week.week}: ${week.weekTitle}`,
      content: (
        <div
          key={weekIndex}
          className="group relative bg-gradient-to-br from-white/5 to-white/10 dark:from-white/5 dark:to-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-white/20 dark:border-white/20 hover:border-[#246CF4]/50 dark:hover:border-[#246CF4]/50 transition-all duration-500 ease-out transform hover:scale-[1.01] hover:shadow-[#246CF4]/20 bg-white/95 dark:bg-transparent max-w-4xl mx-auto"
        >
          <div className="mb-4">
            <Badge variant="secondary" className="text-xs px-3 py-1 bg-[#246CF4]/20 text-[#246CF4] border border-[#246CF4]/30 font-medium mb-3">
              Month {month.month}: {month.monthTitle}
            </Badge>
            <h3 className="text-xl md:text-2xl font-bold text-[#246CF4] mb-1">Week {week.week}</h3>
            <h4 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white/90">{week.weekTitle}</h4>
          </div>
          
          <div className="space-y-4">
            {/* Topics Section */}
            {week.topics && week.topics.length > 0 && (
              <div className="bg-gray-50/80 dark:bg-white/5 rounded-lg p-4 border border-gray-200/50 dark:border-white/10">
                <h5 className="text-base font-semibold mb-3 flex items-center gap-2 text-[#246CF4]">
                  📚 Topics Covered
                </h5>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {week.topics.slice(0, 5).map((topic, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-white/80 leading-relaxed">{topic}</span>
                    </div>
                  ))}
                  {week.topics.length > 5 && (
                    <div className="text-xs text-gray-500 dark:text-white/60 italic">
                      +{week.topics.length - 5} more topics...
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Research Methods - Compact */}
            {(week as any).userResearch && (
              <div className="bg-gray-50/80 dark:bg-white/5 rounded-lg p-4 border border-gray-200/50 dark:border-white/10">
                <h5 className="text-base font-semibold mb-3 flex items-center gap-2 text-[#246CF4]">
                  🔍 Research Methods
                </h5>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-800 dark:text-white/90">Qualitative:</span>
                    <span className="text-gray-700 dark:text-white/80 ml-2">
                      {(week as any).userResearch.qualitative.slice(0, 2).join(", ")}
                      {(week as any).userResearch.qualitative.length > 2 && "..."}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800 dark:text-white/90">Quantitative:</span>
                    <span className="text-gray-700 dark:text-white/80 ml-2">
                      {(week as any).userResearch.quantitative.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Tasks Section - Compact */}
            {(week.task || (week as any).empathyTask) && (
              <div className="bg-gradient-to-r from-[#246CF4]/10 to-purple-500/10 rounded-lg p-4 border border-[#246CF4]/30">
                <h5 className="text-base font-semibold mb-3 flex items-center gap-2 text-[#246CF4]">
                  🎯 Tasks & Assignments
                </h5>
                <div className="space-y-2 text-sm">
                  {week.task && (
                    <div className="bg-white/50 dark:bg-white/5 p-3 rounded-lg">
                      <span className="font-medium text-[#246CF4] block mb-1">Main Task:</span>
                      <span className="text-gray-700 dark:text-white/90 leading-relaxed">
                        {week.task.length > 100 ? `${week.task.substring(0, 100)}...` : week.task}
                      </span>
                    </div>
                  )}
                  {(week as any).empathyTask && (
                    <div className="bg-white/50 dark:bg-white/5 p-3 rounded-lg">
                      <span className="font-medium text-purple-600 dark:text-purple-400 block mb-1">Empathy Task:</span>
                      <span className="text-gray-700 dark:text-white/90 leading-relaxed">
                        {(week as any).empathyTask.length > 100 ? `${(week as any).empathyTask.substring(0, 100)}...` : (week as any).empathyTask}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ),
    }))
  )

  return (
    <section className="w-full bg-v0-dark-purple text-v0-text-light py-16 md:py-24 lg:py-32">
      <div className="container">
        {/* Main Section: Skills You'll Master with Image on the right */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
          {/* Text content */}
          <div className="space-y-6 md:space-y-8 md:max-w-xl">
            <Badge variant="secondary" className="px-3 py-1 text-sm bg-[#246CF4]/20 text-[#246CF4]">
              CURRICULUM
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#246CF4]">
              Skills You&apos;ll Master
            </h2>
            <p className="text-base md:text-lg text-v0-text-light max-w-md">
              Develop complete UI/UX expertise enhanced with revolutionary AI technology. From concept ideation to
              interactive prototypes, you&apos;ll acquire professional-grade techniques powered by artificial
              intelligence - positioning you ahead in the competitive design landscape.
            </p>
          </div>
          {/* Image */}
          <div className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gradient-to-br from-[#246CF4]/20 to-[#246CF4]/30 rounded-xl p-4 overflow-hidden md:max-w-md">
            <Image
              src="/uiUx 2nd.webp"
              alt="Design Process Illustration"
              width={400}
              height={300}
              className="object-contain w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* You could dynamically change this icon based on scroll position or active month */}
              {getMonthIcon(1)} {/* Example: showing month 1 icon */}
            </div>
          </div>
        </div>

        {/* Timeline of Week Details (now below the main section) */}
        <div className="space-y-8 overflow-hidden">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-[#246CF4]/20 text-[#246CF4] border border-[#246CF4]/30 mb-8">
              DETAILED CURRICULUM
            </Badge>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#246CF4] mb-6">
              Week-by-Week Learning Path
            </h3>
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Follow our comprehensive 16-week journey designed to transform you from a beginner to a professional UX designer
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Timeline data={timelineData} />
          </div>
        </div>
      </div>
    </section>
  )
}

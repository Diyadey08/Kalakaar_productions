"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BookOpen, Target } from "lucide-react"
import type React from "react"

interface WeekCardProps {
  title: string
  subtitle: string
  monthBadge?: string
  topics: string[]
  tasks: string[]
  badgeVariant?: "secondary" | "success" | "warning" | "outline"
  icon?: React.ReactNode
}

export function WeekCard({
  title,
  subtitle,
  monthBadge,
  topics,
  tasks,
  badgeVariant = "secondary",
  icon = <BookOpen className="w-5 h-5" />,
}: WeekCardProps) {
  return (
    <div className="space-y-6">
      {monthBadge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            {monthBadge}
          </Badge>
        </motion.div>
      )}

      <div className="mb-6">
        <motion.h3
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-lg text-neutral-600 dark:text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      </div>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-300">
            {icon}
            Topics Covered:
          </h4>
          <div className="grid gap-3">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform" />
                <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {topic}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-700/50"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-700 dark:text-green-300">
            <Target className="w-5 h-5" />
            Tasks to Complete:
          </h4>
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                className="flex items-start gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:text-green-600 transition-colors" />
                <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {task}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

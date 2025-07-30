"use client"
import { motion } from "framer-motion"
import { Users, Clock, Award, BookOpen } from "lucide-react"

const stats = [
  { icon: Clock, label: "Course Duration", value: "16 Weeks", color: "from-blue-500 to-cyan-500" },
  { icon: BookOpen, label: "Learning Modules", value: "4 Months", color: "from-purple-500 to-pink-500" },
  { icon: Award, label: "Portfolio Projects", value: "3-5 Projects", color: "from-green-500 to-emerald-500" },
  { icon: Users, label: "Career Ready", value: "100% Focus", color: "from-orange-500 to-red-500" },
]

export function InteractiveStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative group"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity`}
          />
          <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 dark:border-slate-700/20">
            <stat.icon className="w-8 h-8 mx-auto mb-2 text-neutral-600 dark:text-neutral-300" />
            <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-1">{stat.value}</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

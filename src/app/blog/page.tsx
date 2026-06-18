"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

import { posts } from "@/data/blog";
export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Solar Insights & News</h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest in solar technology, government subsidies, and energy-saving tips from HighTech Solar System.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-border/50 group flex flex-col"
            >
              <div 
                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${post.image}')` }}
              />
              <div className="p-8 flex-1 flex flex-col relative bg-card/80 backdrop-blur-md">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/50 pt-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                    </div>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary font-bold mt-6 group/link">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

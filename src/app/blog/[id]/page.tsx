"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { posts } from "@/data/blog";

export default function BlogPost() {
  const params = useParams();
  const postId = params.id as string;
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-primary font-bold mb-8 hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>

          <div className="h-64 md:h-96 w-full rounded-3xl overflow-hidden mb-10 border border-border/50 shadow-xl">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${post.image}')` }}
            />
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              {post.excerpt}
            </p>
            <p className="leading-relaxed">
              {post.content}
            </p>
            
            <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to go solar?</h3>
              <p className="mb-6 text-muted-foreground">Get a free consultation and exact quote tailored to your energy needs.</p>
              <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
                Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

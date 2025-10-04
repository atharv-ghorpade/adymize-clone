import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, User, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Featured blog posts
const blogPosts = [
  {
    id: 1,
    title: "Top 5 Marketing Automation Tools Every Business Should Use",
    excerpt: "Discover the most powerful marketing automation tools that can streamline your processes, increase efficiency, and boost your ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    author: "ADMark Tech Team",
    date: "Oct 15, 2024",
    category: "Marketing Automation"
  },
  {
    id: 2,
    title: "Why Every Startup Needs a Strong Digital Marketing Strategy",
    excerpt: "Learn why having a solid digital marketing foundation is crucial for startup success and how to build one from the ground up.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
    author: "ADMark Tech Team",
    date: "Oct 12, 2024",
    category: "Startup Marketing"
  },
  {
    id: 3,
    title: "Web3 and Marketing: Preparing for the Next Digital Era",
    excerpt: "Explore how Web3 technologies are reshaping digital marketing and what businesses need to know to stay ahead of the curve.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
    author: "ADMark Tech Team",
    date: "Oct 10, 2024",
    category: "Web3 Marketing"
  }
];

// Additional blog posts that can be loaded with "Load More" functionality
const additionalBlogPosts = [
  // Future blog posts will be added here
  // When new blogs are added, they can be appended to the main blogPosts array
  // or loaded dynamically through this array
];

const Blog = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [displayedPosts, setDisplayedPosts] = useState(blogPosts);
  const [hasMorePosts, setHasMorePosts] = useState(additionalBlogPosts.length > 0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current.children,
        {
          y: 60,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Blog cards animation
      gsap.fromTo(cardsRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToCardsRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const handleLoadMore = () => {
    // When new blog posts are added to additionalBlogPosts, 
    // they will be appended to displayedPosts
    if (additionalBlogPosts.length > 0) {
      setDisplayedPosts([...displayedPosts, ...additionalBlogPosts]);
      setHasMorePosts(false);
    } else {
      // Provide user feedback when no additional posts are available
      alert("Great news! More amazing articles are coming soon. Stay tuned for fresh insights and tips!");
    }
  };

  return (
    <div ref={containerRef} id="blog" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-16 sm:py-20 lg:py-24 overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16">
          {/* Special Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-8 py-3 rounded-full">
              <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wide">
                BLOG • BLOG • BLOG
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-2">
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent relative pb-4">
                Latest Insights & Updates
                {/* Underline decoration */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] h-1">
                  <svg viewBox="0 0 300 10" className="w-full h-full">
                    <path
                      d="M5 5 Q150 0 295 5"
                      stroke="url(#blogGradient)"
                      strokeWidth="3"
                      fill="none"
                      className="opacity-70"
                    />
                    <defs>
                      <linearGradient id="blogGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#0891b2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed px-2">
              Stay updated with the latest trends, tips, and insights in digital marketing, web development, and business growth.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
          {displayedPosts.map((post, index) => (
            <article
              key={post.id}
              ref={addToCardsRefs}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 hover:-translate-y-2 w-full max-w-sm"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6 sm:p-8">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300 group-hover:gap-3">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-16">
          <button 
            onClick={handleLoadMore}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Load More Articles
          </button>
          {!hasMorePosts && (
            <p className="text-slate-600 text-sm mt-4">
              More articles coming soon! Check back for fresh insights.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
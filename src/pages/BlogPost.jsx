import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Copy, ArrowRight } from 'lucide-react';
import { getPostById, getRelatedPosts } from '../data/blogData';

gsap.registerPlugin(ScrollTrigger);

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const relatedRef = useRef([]);
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const foundPost = getPostById(id);
    if (foundPost) {
      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(foundPost.id, foundPost.category));
    } else {
      // Redirect to blog list if post not found
      navigate('/blog');
    }
  }, [id, navigate]);

  useEffect(() => {
    if (post) {
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
            ease: "power3.out"
          }
        );

        // Content animation
        gsap.fromTo(contentRef.current.children,
          {
            y: 40,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.3
          }
        );

        // Related posts animation
        if (relatedRef.current.length > 0) {
          gsap.fromTo(relatedRef.current,
            {
              y: 60,
              opacity: 0,
              scale: 0.9
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: relatedRef.current[0],
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }, containerRef);

      return () => ctx.revert();
    }
  }, [post, relatedPosts]);

  const addToRelatedRefs = (el) => {
    if (el && !relatedRef.current.includes(el)) {
      relatedRef.current.push(el);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title;
    const text = post.excerpt;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
        break;
      default:
        break;
    }
    setShowShareMenu(false);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Back to Blog Button */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <header ref={headerRef} className="mb-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            {post.featured && (
              <span className="ml-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
            
            {/* Share Button */}
            <div className="relative ml-auto">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200 hover:bg-white transition-all duration-300"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
              
              {/* Share Menu */}
              {showShareMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 py-2 min-w-[160px] z-10">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Facebook</span>
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-blue-400" />
                    <span>Twitter</span>
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-700" />
                    <span>LinkedIn</span>
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <Copy className="w-4 h-4 text-gray-600" />
                    <span>{copySuccess ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-white/60 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full border border-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article ref={contentRef} className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <p className="text-lg text-slate-700 leading-relaxed m-0">
              {post.content.introduction}
            </p>
          </div>

          {/* Content Sections */}
          {post.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
                {section.heading}
              </h2>
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                  {section.content}
                </p>
                {section.image && (
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-8 border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Conclusion</h2>
            <p className="text-slate-700 leading-relaxed text-lg m-0">
              {post.content.conclusion}
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Ready to Take Action?</h3>
            <p className="mb-6 text-purple-100">
              {post.content.callToAction}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  ref={addToRelatedRefs}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-2 text-sm">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300 text-sm"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogPost;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-brand-dark border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">DataLabA1x</span>
            </Link>
          </div>

          {!isMobile && (
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-10 text-gray-300 hover:text-white">Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-brand-dark-100 text-white border border-white/10">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-purple-500/30 to-brand-purple-900/30 p-6 no-underline outline-none focus:shadow-md"
                              to="/services"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                Data Labeling Services
                              </div>
                              <p className="text-sm leading-tight text-gray-300">
                                High-quality data annotation services for all types of AI training data.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <Link
                            to="/services#image-labeling"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">Image Labeling</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              Bounding boxes, segmentation, and classification for images.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services#text-annotation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">Text Annotation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              Named entity recognition, sentiment analysis, and content moderation.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services#video-annotation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">Video Annotation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              Object tracking and frame-by-frame video labeling.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services#audio-transcription"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">Audio Transcription</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              Multi-language audio transcription and classification.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services#image-labeling"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">AI Chatbot for Guidance</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Chatbot trained on reporting formats, UGC/NAAC norms, Helps users generate or fix parts of their report, Multilingual capability (English + regional).
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services#image-labeling"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">AI Knowledge Base Builder</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Turn scattered PDFs, PPTs, Docs into a searchable internal knowledge base, AI auto-tags, summarizes and connects documents.
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/pricing" className={cn(
                      "block px-3 py-2 text-sm font-medium",
                      location.pathname === "/pricing" 
                        ? "text-brand-purple-400" 
                        : "text-gray-300 hover:text-white"
                    )}>
                      Pricing
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-10 text-gray-300 hover:text-white">Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[250px] gap-3 p-4 bg-brand-dark-100 text-white border border-white/10">
                        <li>
                          <Link
                            to="/task-demo"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">Task Demo</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              Try our interactive labeling interface.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/case-studies"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">Case Studies</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              See how companies use DataLabA1x.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/documentation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">Documentation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              Platform guides and API references.
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blog"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">Blog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              Latest news and articles.
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/for-workers" className={cn(
                      "block px-3 py-2 text-sm font-medium",
                      location.pathname === "/for-workers" 
                        ? "text-brand-purple-400" 
                        : "text-gray-300 hover:text-white"
                    )}>
                      For Labelers
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/contact" className={cn(
                      "block px-3 py-2 text-sm font-medium",
                      location.pathname === "/contact" 
                        ? "text-brand-purple-400" 
                        : "text-gray-300 hover:text-white"
                    )}>
                      Contact
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Log in
              </Link>
              <Button variant="default" className="bg-brand-purple-500 hover:bg-brand-purple-600 text-white" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          )}

          {isMobile && (
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-purple-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="sm:hidden bg-brand-dark-100 border-b border-white/10 animate-fade-in">
          <div className="pt-2 pb-3 space-y-1">
            {/* Services Submenu */}
            <div className="mobile-dropdown">
              <button className="w-full flex items-center justify-between pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-6 space-y-1">
                <Link
                  to="/services"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Services
                </Link>
                <Link
                  to="/services#image-labeling"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Image Labeling
                </Link>
                <Link
                  to="/services#text-annotation"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Text Annotation
                </Link>
                <Link
                  to="/services#video-annotation"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Video Annotation
                </Link>
                <Link
                  to="/services#audio-transcription"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Audio Transcription
                </Link>
              </div>
            </div>
            
            <Link
              to="/pricing"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            
            {/* Resources Submenu */}
            <div className="mobile-dropdown">
              <button className="w-full flex items-center justify-between pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-6 space-y-1">
                <Link
                  to="/task-demo"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Task Demo
                </Link>
                <Link
                  to="/case-studies"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  to="/documentation"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Documentation
                </Link>
                <Link
                  to="/blog"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>
            
            <Link
              to="/for-workers"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              For Labelers
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <div className="px-3 py-2">
              <Button variant="default" className="w-full bg-brand-purple-500 hover:bg-brand-purple-600" asChild>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

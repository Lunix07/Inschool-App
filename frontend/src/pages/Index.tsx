import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Github,
  Download,
  Menu,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

const Index = () => {
  const twitterPosts = [
    {
      author: "@john_smith",
      content: "hello im on twitter",
      time: "2h",
    },
    {
      author: "@mary_jones",
      content: "hello im on twitter",
      time: "4h",
    },
    {
      author: "@alex_brown",
      content: "hello im on twitter",
      time: "6h",
    },
    {
      author: "@emma_wilson",
      content: "hello im on twitter",
      time: "8h",
    },
    {
      author: "@mike_davis",
      content: "hello im on twitter",
      time: "12h",
    },
    {
      author: "@lisa_taylor",
      content: "hello im on twitter",
      time: "1d",
    },
  ];

  const articles = [
    {
      title: "Animals",
      description: "Animals are good",
      image: article1,
      badge: "Featured",
    },
    {
      title: "Herbs",
      description: "Herbs are useful",
      image: article2,
      badge: "Popular",
    },
    {
      title: "Plants",
      description: "Plants are nice",
      image: article3,
      badge: "New",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Inschool app
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#articles"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Articles
              </a>
              <a
                href="#docs"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Docs
              </a>
              <a
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Together We Shape
                <span className="block text-hero-accent">
                  The Next Generations
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
                Discover the future of education with our innovative platform.
                collaborative tools, and personalized
                learning paths designed for modern learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero-outline" size="lg" className="group">
                  <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View on GitHub
                </Button>
                <Button variant="hero" size="lg" className="group">
                  <Download className="h-5 w-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
                  Download Now
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src={heroImage}
                  alt="Students learning together"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      50K+
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Active Learners
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-sm font-bold text-foreground">95%</div>
                    <div className="text-xs text-muted-foreground">
                      Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-24 bg-article-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends in education technology and
              learning methodologies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Articles Column */}
            <div className="lg:col-span-2 space-y-8">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="md:flex">
                    <div className="md:w-64 relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge
                        variant={
                          article.badge === "Featured"
                            ? "default"
                            : article.badge === "Popular"
                            ? "secondary"
                            : "outline"
                        }
                        className="absolute top-4 left-4"
                      >
                        {article.badge}
                      </Badge>
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {article.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-medium"
                      >
                        Read More
                        <BookOpen className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Twitter Feed Column */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 bg-twitter-bg">
                <div className="p-6 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground flex items-center">
                    <div className="w-6 h-6 bg-primary rounded mr-3"></div>
                    Community Buzz
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    What educators are saying
                  </p>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {twitterPosts.map((post, index) => (
                    <div
                      key={index}
                      className="p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {post.author.charAt(1).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-foreground">
                              {post.author}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              •
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {post.time}
                            </span>
                          </div>
                          <p className="text-sm text-foreground mt-1 leading-relaxed">
                            {post.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">LearnHub</span>
            </div>
            <p className="text-white/80 mb-6">
              Empowering learners worldwide with innovative educational
              technology
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-white/80 text-sm">contact@learnhub.com</p>
                <p className="text-white/80 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-white/80 text-sm">123 Education Street</p>
                <p className="text-white/80 text-sm">San Francisco, CA 94105</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Hours</h4>
                <p className="text-white/80 text-sm">Mon-Fri: 9AM-6PM</p>
                <p className="text-white/80 text-sm">Sat: 10AM-4PM</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

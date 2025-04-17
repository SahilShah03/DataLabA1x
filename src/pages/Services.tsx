
import { ArrowRight, ImageIcon, FileText, Video, AudioLines } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: ImageIcon,
    title: "Image Labeling",
    description: "Bounding boxes, segmentation, classification, and more for computer vision",
    tasks: ["Object Detection", "Semantic Segmentation", "Image Classification", "Landmark Detection"]
  },
  {
    icon: FileText,
    title: "Text Annotation",
    description: "Text classification, sentiment analysis, and entity recognition",
    tasks: ["Named Entity Recognition", "Sentiment Analysis", "Content Moderation", "Text Classification"]
  },
  {
    icon: Video,
    title: "Video Annotation",
    description: "Frame-by-frame video labeling and tracking for ML models",
    tasks: ["Object Tracking", "Activity Recognition", "Scene Classification", "Video Segmentation"]
  },
  {
    icon: AudioLines,
    title: "Audio Transcription",
    description: "Multi-language audio transcription and classification",
    tasks: ["Speech-to-Text", "Audio Classification", "Speaker Identification", "Language Detection"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Data Labeling <span className="text-brand-blue-600">Services</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            High-quality data labeling services powered by skilled Indian workforce
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="border-2 hover:border-brand-blue-500 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <service.icon className="h-8 w-8 text-brand-blue-600" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.tasks.map((task) => (
                    <li key={task} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-brand-blue-500" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full" asChild>
                  <Link to="/signup">Start Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

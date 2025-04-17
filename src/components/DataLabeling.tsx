
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Image, FileText, Video, Music } from 'lucide-react';

const DataLabeling = () => {
  return (
    <div className="bg-brand-dark-100 py-24 relative overflow-hidden">
      <div className="pattern-dots absolute inset-0 opacity-10 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <h2 className="text-base text-brand-purple-400 font-semibold tracking-wide uppercase">Data Labeling</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              You need quality data to train the best performing models.
            </p>
            <p className="mt-6 text-lg text-gray-300">
              Scale has pioneered in the data labeling industry by combining AI-based techniques with human-in-the-loop validation, delivering labeled data at unprecedented quality, scalability, and efficiency.
            </p>
            <div className="mt-8 flex space-x-4">
              <Button className="bg-brand-purple-500 hover:bg-brand-purple-600" asChild>
                <Link to="/services">
                  Learn More
                </Link>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/task-demo">
                  See Demo
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="hero-card p-6 lg:p-8">
              <Tabs defaultValue="image" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="image" className="text-white data-[state=active]:text-brand-purple-400">
                    <Image className="mr-2 h-4 w-4" /> Image
                  </TabsTrigger>
                  <TabsTrigger value="text" className="text-white data-[state=active]:text-brand-purple-400">
                    <FileText className="mr-2 h-4 w-4" /> Text
                  </TabsTrigger>
                  <TabsTrigger value="video" className="text-white data-[state=active]:text-brand-purple-400">
                    <Video className="mr-2 h-4 w-4" /> Video
                  </TabsTrigger>
                  <TabsTrigger value="audio" className="text-white data-[state=active]:text-brand-purple-400">
                    <Music className="mr-2 h-4 w-4" /> Audio
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="image" className="mt-0">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Image Labeling Interface" 
                      className="rounded-lg w-full object-cover h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">Image Labeling</h3>
                        <p className="text-gray-200 mb-4">Bounding boxes, segmentation, keypoints, and classification for images</p>
                        <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="text" className="mt-0">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Text Annotation Interface" 
                      className="rounded-lg w-full object-cover h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">Text Annotation</h3>
                        <p className="text-gray-200 mb-4">Named entity recognition, sentiment analysis, and content moderation</p>
                        <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="video" className="mt-0">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Video Annotation Interface" 
                      className="rounded-lg w-full object-cover h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">Video Annotation</h3>
                        <p className="text-gray-200 mb-4">Object tracking and frame-by-frame video labeling</p>
                        <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="audio" className="mt-0">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Audio Transcription Interface" 
                      className="rounded-lg w-full object-cover h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">Audio Transcription</h3>
                        <p className="text-gray-200 mb-4">Multi-language audio transcription and classification</p>
                        <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataLabeling;

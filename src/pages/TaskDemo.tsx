
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageIcon, FileText, Video, AudioLines, Info, CheckCircle2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const TaskDemo = () => {
  const [selectedArea, setSelectedArea] = useState<{ x: number, y: number, width: number, height: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [brushSize, setBrushSize] = useState([20]);
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (completed) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setStartPos({ x, y });
    setSelectedArea({ x, y, width: 0, height: 0 });
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || completed) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setSelectedArea({
      x: Math.min(startPos.x, x),
      y: Math.min(startPos.y, y),
      width: Math.abs(x - startPos.x),
      height: Math.abs(y - startPos.y)
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSubmit = () => {
    toast({
      title: "Task Completed",
      description: "Your annotation has been submitted successfully!",
    });
    setCompleted(true);
  };

  const resetDemo = () => {
    setSelectedArea(null);
    setCompleted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Interactive Task Demo</h1>
            <p className="mt-2 text-lg text-gray-600">
              Try our intuitive labeling interface with this interactive demo
            </p>
          </div>
          
          <Tabs defaultValue="image" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="image" className="flex items-center gap-2">
                <ImageIcon size={18} />
                <span>Image Labeling</span>
              </TabsTrigger>
              <TabsTrigger value="text" className="flex items-center gap-2">
                <FileText size={18} />
                <span>Text Annotation</span>
              </TabsTrigger>
              <TabsTrigger value="video" className="flex items-center gap-2">
                <Video size={18} />
                <span>Video Annotation</span>
              </TabsTrigger>
              <TabsTrigger value="audio" className="flex items-center gap-2">
                <AudioLines size={18} />
                <span>Audio Transcription</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="image">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <CardContent className="p-6">
                      <div className="bg-white rounded-lg overflow-hidden border">
                        <div className="flex justify-between items-center p-3 bg-gray-100 border-b">
                          <h3 className="font-medium">Draw a bounding box around the dog</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Info size={16} className="mr-1" />
                            <span>Task 1 of 10</span>
                          </div>
                        </div>
                        
                        <div 
                          className="relative w-full h-[400px] bg-cover bg-center cursor-crosshair"
                          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)' }}
                          onMouseDown={handleMouseDown}
                          onMouseMove={handleMouseMove}
                          onMouseUp={handleMouseUp}
                          onMouseLeave={handleMouseUp}
                        >
                          {selectedArea && (
                            <div 
                              className="absolute border-2 border-red-500 bg-red-200 bg-opacity-30"
                              style={{
                                left: `${selectedArea.x}px`,
                                top: `${selectedArea.y}px`,
                                width: `${selectedArea.width}px`,
                                height: `${selectedArea.height}px`
                              }}
                            ></div>
                          )}
                          
                          {completed && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Great Job!</h3>
                                <p className="mb-4">Your annotation has been submitted.</p>
                                <Button onClick={resetDemo}>Try Again</Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-6 flex justify-between">
                    <Button variant="outline">Skip Task</Button>
                    <Button onClick={handleSubmit} disabled={!selectedArea || completed}>
                      Submit Annotation
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Instructions</h3>
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-medium mb-1">1. Draw a bounding box</p>
                          <p className="text-gray-600">Click and drag to draw a rectangle around the dog in the image.</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">2. Adjust if needed</p>
                          <p className="text-gray-600">Make sure the box tightly contains the entire dog.</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">3. Submit your annotation</p>
                          <p className="text-gray-600">Click the Submit button when you're satisfied with the bounding box.</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <h4 className="font-medium mb-3">Tools</h4>
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between mb-2">
                              <label className="text-sm">Brush Size</label>
                              <span className="text-sm text-gray-600">{brushSize[0]}px</span>
                            </div>
                            <Slider
                              value={brushSize}
                              min={5}
                              max={50}
                              step={1}
                              onValueChange={setBrushSize}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="text">
              <div className="text-center p-12 bg-white rounded-lg">
                <h3 className="text-xl font-medium mb-6">Text Annotation Demo</h3>
                <p className="mb-8">Coming soon! Try our image annotation demo in the meantime.</p>
                <Button variant="outline">Back to Image Demo</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="video">
              <div className="text-center p-12 bg-white rounded-lg">
                <h3 className="text-xl font-medium mb-6">Video Annotation Demo</h3>
                <p className="mb-8">Coming soon! Try our image annotation demo in the meantime.</p>
                <Button variant="outline">Back to Image Demo</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="audio">
              <div className="text-center p-12 bg-white rounded-lg">
                <h3 className="text-xl font-medium mb-6">Audio Transcription Demo</h3>
                <p className="mb-8">Coming soon! Try our image annotation demo in the meantime.</p>
                <Button variant="outline">Back to Image Demo</Button>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Ready to start labeling?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-3">For Companies</h3>
                <p className="mb-6 text-gray-600">Upload your data and create your own labeling tasks with our intuitive no-code interface.</p>
                <Button asChild>
                  <a href="/signup">Get Started</a>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-3">For Labelers</h3>
                <p className="mb-6 text-gray-600">Join our community of labelers and start earning money by completing tasks.</p>
                <Button variant="outline" asChild>
                  <a href="/worker-onboarding">Join as a Labeler</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TaskDemo;

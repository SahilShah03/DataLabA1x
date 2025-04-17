
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Clock, FilePlus2, FileCheck2, Users, Activity } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your labeling projects and monitor progress
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-brand-blue-600 hover:bg-brand-blue-700">
                <FilePlus2 className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-brand-blue-100 text-brand-blue-600">
                    <FileCheck2 className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Active Projects</p>
                    <p className="text-3xl font-semibold text-gray-900">5</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-brand-orange-100 text-brand-orange-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Engaged Labelers</p>
                    <p className="text-3xl font-semibold text-gray-900">108</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-green-100 text-green-600">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Completion Rate</p>
                    <p className="text-3xl font-semibold text-gray-900">68%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Avg. Turnaround</p>
                    <p className="text-3xl font-semibold text-gray-900">3.2d</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="projects">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="projects">Active Projects</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>
              <TabsContent value="projects" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Progress
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Product Image Classification</div>
                              <div className="text-sm text-gray-500">Created 2 days ago</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Image</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">75%</div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-brand-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <a href="#" className="text-brand-blue-600 hover:text-brand-blue-900 mr-3">View</a>
                              <a href="#" className="text-brand-blue-600 hover:text-brand-blue-900">Edit</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Customer Support Audio Transcription</div>
                              <div className="text-sm text-gray-500">Created 5 days ago</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Audio</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">42%</div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-brand-blue-600 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <a href="#" className="text-brand-blue-600 hover:text-brand-blue-900 mr-3">View</a>
                              <a href="#" className="text-brand-blue-600 hover:text-brand-blue-900">Edit</a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">Medical Document Annotation</div>
                              <div className="text-sm text-gray-500">Created 1 week ago</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Text</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Quality Review
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">90%</div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-brand-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <a href="#" className="text-brand-blue-600 hover:text-brand-blue-900 mr-3">View</a>
                              <a href="#" className="text-brand-blue-600 hover:text-brand-blue-900">Edit</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md">
                      <div className="text-center">
                        <BarChart className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">Analytics Dashboard</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Detailed metrics and visualizations for your projects.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="team" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md">
                      <div className="text-center">
                        <Users className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">Team Dashboard</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Manage your team members and their permissions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

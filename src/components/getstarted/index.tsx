"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Upload, MessageSquare, Zap } from "lucide-react"

export default function GetStarted() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Get Started with Designer School
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Welcome to Designer School! Follow these simple steps to start receiving expert feedback on your designs.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Sign Up Now</Button>
                <Button variant="outline" size="lg">
                  Take a Tour
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Upload className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>1. Upload Your Design</CardTitle>
                  <CardDescription>
                    Upload your design files in various formats including PSD, AI, or PNG.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Upload Design</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>2. Receive Expert Feedback</CardTitle>
                  <CardDescription>
                    Our team of design professionals will review your work and provide detailed feedback.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">View Sample Feedback</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>3. Improve Your Skills</CardTitle>
                  <CardDescription>
                    Apply the feedback, iterate on your designs, and watch your skills grow.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Explore Resources</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does it take to receive feedback?</AccordionTrigger>
                <AccordionContent>
                  Feedback time varies depending on your plan. Free users typically receive feedback within 72 hours, while premium users can get feedback in as little as 24 hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What file formats do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept a wide range of file formats including PSD, AI, PDF, PNG, and JPG. If you have a specific file type not listed here, please contact our support team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I request feedback from specific designers?</AccordionTrigger>
                <AccordionContent>
                  Premium users have the option to request feedback from specific designers in our network, subject to availability. Free users receive feedback from our general pool of expert reviewers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I upgrade my account?</AccordionTrigger>
                <AccordionContent>
                  You can upgrade your account at any time by visiting your account settings and selecting the Upgrade option. Choose the plan that best fits your needs and follow the prompts to complete your upgrade.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Elevate Your Design Skills?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join Designer School today and start receiving expert feedback on your designs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button size="lg" className="w-full">Get Started Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Designer School. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}
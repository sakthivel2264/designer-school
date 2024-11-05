"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Start for free or upgrade for more accurate and comprehensive design feedback.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Free
                <Badge variant="secondary">Freemium</Badge>
              </CardTitle>
              <CardDescription>For beginners and casual users</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$0<span className="text-sm font-normal">/month</span></div>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> 3 design uploads per day
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Basic AI-powered feedback
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Community forum access
                </li>
                <li className="flex items-center text-gray-500">
                  <X className="mr-2 h-4 w-4 text-red-500" /> Limited accuracy in feedback
                </li>
                <li className="flex items-center text-gray-500">
                  <X className="mr-2 h-4 w-4 text-red-500" /> No human expert review
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="w-full border-primary">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Pro
                <Badge variant="default">Popular</Badge>
              </CardTitle>
              <CardDescription>For individual designers and small teams</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$49<span className="text-sm font-normal">/month</span></div>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Unlimited design uploads
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Advanced AI feedback + human expert review
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Priority feedback within 24 hours
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> 1-on-1 video consultation (30 min/month)
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Access to exclusive webinars
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Upgrade to Pro</Button>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For design teams and agencies</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">Custom</div>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> All Pro features included
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Dedicated account manager
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Custom integrations
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Team training and onboarding
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> 24/7 priority support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All paid plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </div>
    </section>
  )
}
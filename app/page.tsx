"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Download, MapPin, Mail, Phone, Globe, Briefcase, Code, GraduationCap, LinkIcon } from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { Layers, FileCode, Server, Github, BrainCircuit } from "lucide-react"

export default function ResumePage() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownloadPDF = async () => {
    setIsGenerating(true)

    try {
      const resumeElement = document.getElementById("resume")
      if (!resumeElement) return

      // Set a fixed width for better PDF rendering
      const originalWidth = resumeElement.style.width
      resumeElement.style.width = "800px"

      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: "#ffffff",
      })

      // Restore original width
      resumeElement.style.width = originalWidth

      const imgData = canvas.toDataURL("image/jpeg", 1.0)
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 0

      pdf.addImage(imgData, "JPEG", imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save("Pratik_Patwe_Resume.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 shadow-lg" id="resume">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pratik-b1.jpg-PfrmNyiMZ2hRWVDU3NC1VidmLHkqs5.jpeg"
                    alt="Pratik Patwe"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Pratik Patwe</h1>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mt-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Pune, India</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-1" />
                  <a href="mailto:pratikpatwe111@gmail.com" className="text-sm hover:text-primary">
                    pratikpatwe111@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-1" />
                  <a href="tel:+918237913246" className="text-sm hover:text-primary">
                    +91 8237913246
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="h-4 w-4 mr-1" />
                  <a
                    href="https://www.pratikpatwe.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary"
                  >
                    www.pratikpatwe.xyz
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-3">
              <Briefcase className="h-5 w-5 mr-2 text-primary" />
              Summary
            </h2>
            <Separator className="mb-4" />
            <p className="text-gray-700">
              Full-stack developer passionate about building scalable web applications and SaaS products. Currently
              improving expertise in React, Next.js and backend development with Node.js.
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-3">
              <Code className="h-5 w-5 mr-2 text-primary" />
              Skills
            </h2>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 bg-blue-100 p-1.5 rounded-md">
                  <Layers className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Frontend:</h3>
                  <p className="text-gray-600">React.js, Next.js, Tailwind CSS, daisyUI, Shadcn</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 bg-green-100 p-1.5 rounded-md">
                  <Server className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Backend:</h3>
                  <p className="text-gray-600">Node.js, Express.js, Deno</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 bg-yellow-100 p-1.5 rounded-md">
                  <FileCode className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Languages:</h3>
                  <p className="text-gray-600">JavaScript, Python</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 bg-purple-100 p-1.5 rounded-md">
                  <Github className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Tools:</h3>
                  <p className="text-gray-600">Git, GitHub, Claude</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 bg-red-100 p-1.5 rounded-md">
                  <BrainCircuit className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">AI Integration:</h3>
                  <p className="text-gray-600">OpenAI API, Hugging Face</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-3">
              <Code className="h-5 w-5 mr-2 text-primary" />
              Projects
            </h2>
            <Separator className="mb-4" />

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-medium text-gray-800 mb-2">Personal Portfolio Websites</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <LinkIcon className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <a
                        href="https://pratikpatwe.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        pratikpatwe.xyz
                      </a>
                      <p className="text-gray-700">My personal portfolio showcasing my skills and projects.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <LinkIcon className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <a
                        href="https://sharmaabhay.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        sharmaabhay.vercel.app
                      </a>
                      <p className="text-gray-700">A portfolio website built for a client.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-medium text-gray-800 mb-2">Agency Work</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <LinkIcon className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <a href="#" className="font-medium text-primary hover:underline">
                        Vrittiverse
                      </a>
                      <p className="text-gray-700">Business website for a digital marketing agency.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <LinkIcon className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <a href="#" className="font-medium text-primary hover:underline">
                        Artxsoft
                      </a>
                      <p className="text-gray-700">Website for my own tech company.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-medium text-gray-800 mb-2">Micro SaaS / Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <LinkIcon className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <a href="#" className="font-medium text-primary hover:underline">
                        FinScan - AI Bank Statement Analyzer
                      </a>
                      <p className="text-gray-700">
                        A tool that analyzes bank statements using AI to provide financial insights.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-medium text-gray-800 mb-2">Other Projects</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <LinkIcon className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <a href="#" className="font-medium text-primary hover:underline">
                        Samarth Rentals
                      </a>
                      <p className="text-gray-700">A rental property listing platform.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-3">
              <GraduationCap className="h-5 w-5 mr-2 text-primary" />
              Education
            </h2>
            <Separator className="mb-4" />
            <div>
              <h3 className="font-medium text-gray-800">MIT ADT University (2024 – Present)</h3>
              <p className="text-gray-700">Bachelor of Technology (B.Tech) in Computer Science & Engineering</p>
            </div>
          </section>
        </Card>

        {/* Download Button */}
        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Download className="h-4 w-4 mr-2" />
            {isGenerating ? "Generating PDF..." : "Download Resume as PDF"}
          </Button>
        </div>
      </div>
    </main>
  )
}


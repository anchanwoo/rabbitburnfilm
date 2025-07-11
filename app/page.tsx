"use client"

import Image from "next/image"
import { Youtube, Instagram, Mail, Phone, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// 포트폴리오 데이터 (예시)
const portfolioItems = [
  {
    id: 1,
    title: "브랜드 영상 제작",
    description: "감성적인 브랜드 스토리를 담은 영상",
    image: "/placeholder.svg?height=600&width=800",
    category: "영상",
  },
  {
    id: 2,
    title: "웹사이트 디자인",
    description: "모던하고 직관적인 웹사이트 디자인",
    image: "/placeholder.svg?height=600&width=800",
    category: "웹",
  },
  {
    id: 3,
    title: "콘텐츠 기획",
    description: "창의적인 콘텐츠 기획 및 제작",
    image: "/placeholder.svg?height=600&width=800",
    category: "콘텐츠",
  },
  {
    id: 4,
    title: "브랜딩 프로젝트",
    description: "완성도 높은 브랜드 아이덴티티 구축",
    image: "/placeholder.svg?height=600&width=800",
    category: "브랜딩",
  },
]

export default function HomePage() {
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-end items-start">
        <div className="text-white text-left mr-8 w-56">
          <div className="font-bold text-xl mb-1 block font-sans text-white">토끼털을&nbsp;&nbsp;&nbsp;태웠다</div>
          <div className="font-bold text-lg mb-1 block tracking-widest font-mono text-white">RabbitBurnFilm</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Logo Section */}
        <div className="text-center">
          <div className="mb-8 cursor-pointer" onClick={() => setShowPortfolio(true)}>
            <Image
              src="/logo.png"
              alt="토끼털을 태웠다 로고"
              width={800}
              height={800}
              className="mx-auto drop-shadow-2xl transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-4 hover:rotate-2 hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)] active:scale-105 active:translate-y-0"
              priority
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 text-center text-white">
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <Link href="#" className="text-white hover:text-orange-200 transition-colors">
            <Youtube className="w-10 h-10" />
          </Link>
          <Link href="#" className="text-white hover:text-orange-200 transition-colors">
            <Instagram className="w-10 h-10" />
          </Link>
          <Link href="mailto:hello@creativecrew.com" className="text-white hover:text-orange-200 transition-colors">
            <Mail className="w-10 h-10" />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-white/90">
          <div className="flex items-center justify-center space-x-2">
            <span className="font-mono text-sm tracking-widest text-white">38, Samseongyo-ro 10ba-gil, Seongbuk-gu, Seoul, 107</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm">+82.10.3245.4641</span>
          </div>
        </div>
      </footer>

      {/* Portfolio Modal Overlay */}
      {showPortfolio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={() => setShowPortfolio(false)} />

          {/* Portfolio Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setShowPortfolio(false)}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Portfolio Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
              <h2 className="text-3xl font-bold mb-2">포트폴리오</h2>
              <p className="text-orange-100">토끼털을 태웠다의 창작물들</p>
            </div>

            {/* Portfolio Slider */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {portfolioItems.map((item) => (
                    <div key={item.id} className="w-full flex-shrink-0">
                      <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={800}
                              height={600}
                              className="rounded-lg shadow-lg w-full h-auto"
                            />
                          </div>
                          <div>
                            <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                              {item.category}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 pb-6">
                {portfolioItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

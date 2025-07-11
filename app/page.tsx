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
  const [prevSlide, setPrevSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')

  const goNextSlide = () => {
    setPrevSlide(currentSlide)
    setSlideDirection('right')
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
  }

  const goPrevSlide = () => {
    setPrevSlide(currentSlide)
    setSlideDirection('left')
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
          <Link href="https://youtube.com/@rabbit_burn-ppq?si=V8LRItnxJ1awY0e0" className="text-white hover:text-orange-200 transition-colors" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-10 h-10" />
          </Link>
          <Link href="https://www.instagram.com/rabb.itburn/" className="text-white hover:text-orange-200 transition-colors" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-10 h-10" />
          </Link>
          <Link href="mailto:honglogchan@gmail.com" className="text-white hover:text-orange-200 transition-colors">
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
        <div className="fixed inset-0 z-50">
          {/* Backdrop: 블러 + 반투명 */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg" onClick={() => setShowPortfolio(false)} />
          {/* 오버레이 컨텐츠 */}
          <div className="absolute inset-0 flex items-center justify-center" onClick={() => setShowPortfolio(false)}>
            <div
              className="flex relative max-w-[70vw] max-h-[70vh] w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-white items-center justify-center"
              style={{ zIndex: 1 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Canva embed */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "56.25%",
                  paddingBottom: 0,
                  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                  marginTop: "1.6em",
                  marginBottom: "0.9em",
                  overflow: "hidden",
                  borderRadius: "8px",
                  willChange: "transform"
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                    padding: 0,
                    margin: 0
                  }}
                  src="https://www.canva.com/design/DAGs2ceUT4o/YbwaPv9eKMmuNdRLrgm9bA/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                  title="Canva Portfolio"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

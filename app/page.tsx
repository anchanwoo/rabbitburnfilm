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
        <div className="fixed inset-0 z-50">
          {/* Backdrop: 블러 + 반투명 */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg" onClick={() => setShowPortfolio(false)} />
          {/* 오버레이 컨텐츠 */}
          <div className="absolute inset-0 flex items-center justify-center" onClick={() => setShowPortfolio(false)}>
            {/* Main Portfolio Layout */}
            <div
              className="flex relative max-w-[70vw] max-h-[70vh] w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-white"
              style={{ zIndex: 1 }}
              onClick={e => e.stopPropagation()}
              onWheel={(e) => {
                if (e.deltaY > 0) goNextSlide();
                else if (e.deltaY < 0) goPrevSlide();
              }}
            >
              {/* Left: Info/Thumbnail */}
              <div className="flex flex-col justify-between w-1/3 p-12 bg-[#ece9e2] bg-opacity-95">
                <div>
                  <div className="text-xs text-gray-500 mb-2">{portfolioItems[currentSlide].category}</div>
                  <div className="text-2xl font-bold mb-4">{portfolioItems[currentSlide].title}</div>
                  <div className="text-gray-700 text-base mb-8 max-w-xs leading-relaxed">
                    {portfolioItems[currentSlide].description}
                  </div>
                </div>
                <div className="w-32 h-32 rounded-lg overflow-hidden border border-gray-300">
                  <Image
                    src={portfolioItems[currentSlide].image || "/placeholder.svg"}
                    alt={portfolioItems[currentSlide].title}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* Center: Main Image with 애니메이션 */}
              <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-500 rounded-full border-4 border-[#ece9e2] z-10" />
                {/* 슬라이드 애니메이션 */}
                <div className="w-full h-full relative" style={{ minHeight: 400 }}>
                  {/* 이전 슬라이드 (애니메이션용) */}
                  {prevSlide !== currentSlide && (
                    <div
                      key={prevSlide + '-prev'}
                      className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out z-10
                        ${slideDirection === 'right' ? '-translate-x-0 opacity-100' : 'translate-x-0 opacity-100'}
                        ${slideDirection === 'right' ? '-translate-x-0' : ''}
                        ${slideDirection === 'right' ? '-translate-x-0' : ''}
                        ${slideDirection === 'right' ? '-translate-x-0' : ''}
                        ${slideDirection === 'right' ? '-translate-x-0' : ''}
                        ${slideDirection === 'right' ? '-translate-x-0' : ''}
                        ${slideDirection === 'right' ? 'animate-slideOutLeft' : 'animate-slideOutRight'}`}
                      style={{ pointerEvents: 'none' }}
                    >
                      <Image
                        src={portfolioItems[prevSlide].image || "/placeholder.svg"}
                        alt={portfolioItems[prevSlide].title}
                        width={400}
                        height={600}
                        className="rounded-lg shadow-xl object-cover max-h-[70vh]"
                      />
                    </div>
                  )}
                  {/* 현재 슬라이드 */}
                  <div
                    key={currentSlide + '-current'}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out z-20
                      ${slideDirection === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'}`}
                  >
                    <Image
                      src={portfolioItems[currentSlide].image || "/placeholder.svg"}
                      alt={portfolioItems[currentSlide].title}
                      width={400}
                      height={600}
                      className="rounded-lg shadow-xl object-cover max-h-[70vh]"
                    />
                  </div>
                </div>
              </div>
              {/* Right: Vertical 'portfolio' */}
              <div className="flex flex-col justify-center items-center w-24 bg-[#ece9e2] bg-opacity-95">
                <span className="text-[48px] font-extrabold text-red-600 tracking-tight rotate-90 select-none" style={{letterSpacing: '-2px'}}>portfolio</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

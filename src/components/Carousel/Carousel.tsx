import React, { useEffect, useState, useRef } from 'react'
import '@/pages/home/home.css'

import carousel1 from '@/assets/img/carousel/1.jpg'
import carousel2 from '@/assets/img/carousel/2.jpg'
import carousel3 from '@/assets/img/carousel/3.jpg'
import carousel4 from '@/assets/img/carousel/4.jpg'
import carousel5 from '@/assets/img/carousel/5.jpg'
import carousel6 from '@/assets/img/carousel/6.jpg'

const carouselImages = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6]

const scrollTexts = [
  '永不封群，不翻墙，不实名',
  '不下APP',
  '匿名收款，匿名提现',
  '群功能：可抢红包，收款，转账，自动回复，消息置顶，屏蔽群成员，禁止加好友，密码进群，收费进群……等更多功能',
  '个人功能：可建群，音视频，转账收款，二维码收款，朋友圈，公共发帖……等更多功能'
]

function Carousel(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [clickStartX, setClickStartX] = useState(0)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hasSwipedRef = useRef(false)
  
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextMenu)
    return () => document.removeEventListener('contextmenu', handleContextMenu)
  }, [])

  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
    }
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
  }

  const pauseAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = null
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }
    pauseTimeoutRef.current = setTimeout(() => {
      startAutoScroll()
    }, 10000)
  }

  useEffect(() => {
    startAutoScroll()
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(false)
    setStartX(e.pageX)
    setClickStartX(e.pageX)
    hasSwipedRef.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const diff = startX - e.pageX
    if (Math.abs(diff) > 10) {
      setIsDragging(true)
    }
    if (isDragging && Math.abs(diff) > 50 && !hasSwipedRef.current) {
      e.preventDefault()
      hasSwipedRef.current = true
      if (diff > 0 && currentIndex < carouselImages.length - 1) {
        setCurrentIndex(currentIndex + 1)
        pauseAutoScroll()
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
        pauseAutoScroll()
      }
    }
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    const diff = Math.abs(clickStartX - e.pageX)
    if (diff < 5 && !isDragging && !hasSwipedRef.current) {
      const target = e.target as HTMLElement
      const slide = target.closest('.carousel-slide')
      if (slide) {
        const imgIndex = Array.from(slide.parentElement?.children || []).indexOf(slide)
        if (imgIndex >= 0 && imgIndex < carouselImages.length) {
          setPreviewImage(carouselImages[imgIndex])
        }
      }
    }
    setIsDragging(false)
    hasSwipedRef.current = false
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(false)
    setStartX(e.touches[0].pageX)
    hasSwipedRef.current = false
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = startX - e.touches[0].pageX
    if (Math.abs(diff) > 10) {
      setIsDragging(true)
    }
    if (isDragging && Math.abs(diff) > 50 && !hasSwipedRef.current) {
      hasSwipedRef.current = true
      if (diff > 0 && currentIndex < carouselImages.length - 1) {
        setCurrentIndex(currentIndex + 1)
        pauseAutoScroll()
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
        pauseAutoScroll()
      }
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    hasSwipedRef.current = false
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    pauseAutoScroll()
  }

  const closePreview = () => {
    setPreviewImage(null)
  }

  return (
    <div className="carousel-section">
      <div className="container mx-auto px-4">
        <div 
          className="carousel-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {carouselImages.map((img, index) => {
            const offset = index - currentIndex
            const absOffset = Math.abs(offset)
            const scaleX = absOffset === 0 ? 1 : absOffset === 1 ? 0.9 : 0.8
            const scaleY = absOffset === 0 ? 1 : absOffset === 1 ? 0.75 : 0.55
            const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.6 : 0.3
            const translateX = offset * 22
            const translateZ = absOffset === 0 ? 0 : -60 * absOffset
            const translateY = absOffset === 0 ? 0 : absOffset === 1 ? -20 : -40
            
            return (
              <div 
                key={index} 
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${translateX}%) translateY(${translateY}%) scale(${scaleX}, ${scaleY}) translateZ(${translateZ}px)`,
                  transformOrigin: 'center bottom',
                  opacity: opacity,
                  zIndex: carouselImages.length - absOffset
                }}
              >
                <img 
                  src={img} 
                  alt={`轮播图${index + 1}`}
                  draggable={false}
                  onContextMenu={(e: React.MouseEvent<HTMLImageElement>) => e.preventDefault()}
                  onDragStart={(e: React.DragEvent<HTMLImageElement>) => e.preventDefault()}
                  style={{ 
                    userSelect: 'none',
                    touchAction: 'none',
                    cursor: 'pointer'
                  }}
                />
              </div>
            )
          })}
        </div>
        <div className="carousel-dots">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <div className="carousel-text-scroll">
          <div className="carousel-text-wrapper">
            {[...scrollTexts, ...scrollTexts].map((text, index) => (
              <span key={index} className="carousel-text-item">
                {text} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
      {previewImage && (
        <div 
          className="carousel-preview-overlay"
          onClick={closePreview}
        >
          <img 
            src={previewImage} 
            alt="预览"
            onClick={closePreview}
            className="carousel-preview-image"
          />
        </div>
      )}
    </div>
  )
}

export default Carousel

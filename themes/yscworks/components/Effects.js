'use client'

import { useEffect } from 'react'

/**
 * 客户端交互效果 —— 复刻 yscai101.com main.js
 * 1. consoleSignal 实时信号轮播（3.2s 切换）
 * 2. cursor-glow 鼠标光晕（仅首页 Hero）
 * 3. fade-in 滚动渐入动画
 * 4. 统计数字逐增动画
 * 5. 导航栏滚动背景
 * 6. 返回顶部按钮显隐
 */
const Effects = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const root = document.getElementById('theme-yscworks')
    if (!root) return

    const cleanups = []

    // ---- 1. consoleSignal 实时信号轮播 ----
    const signal = document.getElementById('yscworksConsoleSignal')
    if (signal) {
      let messages = []
      try { messages = JSON.parse(signal.dataset.messages || '[]') } catch (e) { messages = [] }
      if (messages.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let index = 0
        const timer = setInterval(() => {
          signal.classList.add('switching')
          setTimeout(() => {
            index = (index + 1) % messages.length
            signal.textContent = messages[index]
            signal.classList.remove('switching')
          }, 220)
        }, 3200)
        cleanups.push(() => clearInterval(timer))
      }
    }

    // ---- 2. cursor-glow 鼠标光晕（仅首页 Hero）----
    const hero = root.querySelector('.yscworks-lab-hero')
    if (hero) {
      const glow = document.createElement('div')
      glow.className = 'yscworks-cursor-glow'
      hero.style.position = 'relative'
      hero.appendChild(glow)
      const onMove = e => {
        const rect = hero.getBoundingClientRect()
        glow.style.left = (e.clientX - rect.left) + 'px'
        glow.style.top = (e.clientY - rect.top) + 'px'
      }
      hero.addEventListener('mousemove', onMove)
      cleanups.push(() => {
        hero.removeEventListener('mousemove', onMove)
        if (glow.parentNode) hero.removeChild(glow)
      })
    }

    // ---- 3. fade-in 滚动渐入 ----
    const fadeEls = root.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .yscworks-fade-in, .yscworks-fade-in-left, .yscworks-fade-in-right')
    if (fadeEls.length > 0) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              entry.target.classList.add('yscworks-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      fadeEls.forEach(el => observer.observe(el))
      cleanups.push(() => observer.disconnect())
    }

    // ---- 4. 统计数字逐增 ----
    const statEls = root.querySelectorAll('.yscworks-stat-number, .stat-number')
    if (statEls.length > 0) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
            const el = entry.target
            const target = parseInt(el.dataset.count || '0', 10)
            if (isNaN(target)) { observer.unobserve(el); return }
            const suffix = el.dataset.suffix || ''
            const duration = 1500
            const startTime = performance.now()
            function update(currentTime) {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 4)
              el.textContent = Math.floor(eased * target) + suffix
              if (progress < 1) {
                requestAnimationFrame(update)
              } else {
                el.textContent = target + suffix
              }
            }
            requestAnimationFrame(update)
            observer.unobserve(el)
          })
        },
        { threshold: 0.5 }
      )
      statEls.forEach(el => observer.observe(el))
      cleanups.push(() => observer.disconnect())
    }

    // ---- 5. 导航栏滚动背景 ----
    const nav = root.querySelector('.yscworks-nav')
    if (nav) {
      const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 50)
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      cleanups.push(() => window.removeEventListener('scroll', onScroll))
    }

    // ---- 6. 返回顶部按钮显隐 ----
    const btt = root.querySelector('.yscworks-back-to-top, .back-to-top')
    if (btt) {
      const onScroll = () => {
        btt.classList.toggle('visible', window.scrollY > 500)
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
      cleanups.push(() => window.removeEventListener('scroll', onScroll))
    }

    return () => cleanups.forEach(fn => fn())
  }, [])

  return null
}

export { Effects }

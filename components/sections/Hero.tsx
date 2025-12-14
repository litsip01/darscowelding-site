import Link from 'next/link'
import { Flame, Phone } from 'lucide-react'
import { contactInfo } from '@/lib/data'

interface HeroProps {
    title: string
    subtitle: string
    primaryCTA?: { text: string; href: string }
    secondaryCTA?: { text: string; href: string }
    badge?: string
}

export default function Hero({ title, subtitle, primaryCTA, secondaryCTA, badge }: HeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20" />

            {/* Sparks animation effect */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                {badge && (
                    <div className="text-center mb-6">
                        <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-2 rounded-full border border-amber-500/30">
                            <Flame className="w-4 h-4" />
                            {badge}
                        </span>
                    </div>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 text-center leading-tight">
                    {title.split(' ').map((word, i) => (
                        <span key={i}>
                            {word.toLowerCase() === 'welding' || word.toLowerCase() === 'fabrication' || word.toLowerCase() === 'mobile' ? (
                                <span className="text-amber-400">{word}</span>
                            ) : (
                                word
                            )}{' '}
                        </span>
                    ))}
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-10 text-center max-w-3xl mx-auto">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {primaryCTA && (
                        <Link
                            href={primaryCTA.href}
                            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 text-center text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                        >
                            {primaryCTA.text}
                        </Link>
                    )}
                    {secondaryCTA && (
                        <a
                            href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                            className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-lg font-bold hover:bg-amber-500/10 text-center text-lg transition-all flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            {secondaryCTA.text}
                        </a>
                    )}
                </div>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-amber-400">✓</span> Certified Welders
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-amber-400">✓</span> 24/7 Emergency Service
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-amber-400">✓</span> Mobile On-Site
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-amber-400">✓</span> Free Quotes
                    </div>
                </div>
            </div>
        </section>
    )
}

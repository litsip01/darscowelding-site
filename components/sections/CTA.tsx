import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { contactInfo } from '@/lib/data'

interface CTAProps {
    title?: string
    subtitle?: string
    primaryText?: string
    primaryHref?: string
    showPhone?: boolean
}

export default function CTA({
    title = "Ready to Get Started?",
    subtitle = "Contact us today for a free quote. We bring professional welding services directly to your location.",
    primaryText = "Request Quote",
    primaryHref = "/contact/",
    showPhone = true
}: CTAProps) {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href={primaryHref}
                        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                    >
                        {primaryText}
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {showPhone && (
                        <a
                            href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                            className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-lg font-bold hover:bg-amber-500/10 text-lg transition-all inline-flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Call {contactInfo.phone}
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
    title: string
    description: string
    href: string
    icon?: React.ReactNode
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
    return (
        <Link
            href={href}
            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200 relative overflow-hidden"
        >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
                {icon && (
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md">
                        {icon}
                    </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 mb-4">
                    {description}
                </p>

                <span className="inline-flex items-center text-amber-600 font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        </Link>
    )
}

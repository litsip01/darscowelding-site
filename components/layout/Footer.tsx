import Link from 'next/link'
import { Phone, Mail, MapPin, Flame } from 'lucide-react'
import { brandName, contactInfo, services, industries, cities } from '@/lib/data'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                        Contact us today for a free quote. Mobile welding services available 24/7 across the Greater Edmonton Area.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                            className="bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
                        >
                            Call {contactInfo.phone}
                        </a>
                        <Link
                            href="/contact/"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition"
                        >
                            Request Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                <div className="lg:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <Flame className="w-8 h-8 text-amber-500" />
                        <h3 className="text-white font-bold text-xl">{brandName}</h3>
                    </div>
                    <p className="text-sm mb-6 text-gray-400">
                        Mobile professional welding and fabrication services for Alberta businesses.
                        Certified welders, on-site service, quality guaranteed.
                    </p>

                    <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-amber-500" />
                            <span>{contactInfo.address.street}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-amber-500" />
                            <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition">
                                {contactInfo.phone}
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-amber-500" />
                            <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition">
                                {contactInfo.email}
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
                    <ul className="space-y-2 text-sm">
                        {services.map(s => (
                            <li key={s.id}>
                                <Link href={`/services/${s.slug}/`} className="hover:text-amber-400 transition">
                                    {s.shortName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Industries</h4>
                    <ul className="space-y-2 text-sm">
                        {industries.map(i => (
                            <li key={i.id}>
                                <Link href={`/industries/${i.slug}/`} className="hover:text-amber-400 transition">
                                    {i.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Service Areas</h4>
                    <ul className="space-y-2 text-sm">
                        {cities.map(c => (
                            <li key={c.id}>
                                <Link href={`/locations/${c.slug}/`} className="hover:text-amber-400 transition">
                                    {c.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about/" className="hover:text-amber-400 transition">About</Link></li>
                            <li><Link href="/gallery/" className="hover:text-amber-400 transition">Our Work</Link></li>
                            <li><Link href="/contact/" className="hover:text-amber-400 transition">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy-policy/" className="hover:text-gray-300 transition">Privacy Policy</Link>
                            <Link href="/terms/" className="hover:text-gray-300 transition">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

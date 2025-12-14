'use client'

import Link from 'next/link'
import { Phone, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { brandName, contactInfo, services, industries, cities } from '@/lib/data'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
            {/* Top bar */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2">
                <div className="container mx-auto px-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                        <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 hover:text-amber-200 transition">
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">{contactInfo.phone}</span>
                        </a>
                        <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-amber-200 transition">
                            <Mail className="w-4 h-4" />
                            <span className="hidden sm:inline">{contactInfo.email}</span>
                        </a>
                    </div>
                    <span className="hidden md:flex items-center gap-2">
                        <span className="animate-pulse">🔥</span>
                        24/7 Emergency Mobile Welding Available
                    </span>
                </div>
            </div>

            {/* Main navigation */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="text-2xl font-black text-amber-600 tracking-tight">DARSCO</div>
                    <div className="text-lg font-medium text-gray-700 hidden sm:block">
                        WELDING
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-6">
                    <div className="relative group">
                        <Link href="/services/" className="hover:text-amber-600 font-medium transition py-2">Services</Link>
                        <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                            {services.map(s => (
                                <Link key={s.id} href={`/services/${s.slug}/`} className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition">
                                    {s.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="relative group">
                        <Link href="/industries/" className="hover:text-amber-600 font-medium transition py-2">Industries</Link>
                        <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                            {industries.map(i => (
                                <Link key={i.id} href={`/industries/${i.slug}/`} className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition">
                                    {i.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="relative group">
                        <Link href="/locations/" className="hover:text-amber-600 font-medium transition py-2">Service Areas</Link>
                        <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                            {cities.map(c => (
                                <Link key={c.id} href={`/locations/${c.slug}/`} className="block px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition">
                                    {c.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <Link href="/about/" className="hover:text-amber-600 font-medium transition">About</Link>
                    <Link href="/gallery/" className="hover:text-amber-600 font-medium transition">Our Work</Link>
                    <Link href="/contact/" className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2.5 rounded-lg hover:from-amber-600 hover:to-amber-700 font-semibold shadow-md hover:shadow-lg transition-all">
                        Get Quote
                    </Link>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-gray-600 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t shadow-lg">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
                        <Link href="/services/" className="py-2 font-medium hover:text-amber-600" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                        <Link href="/industries/" className="py-2 font-medium hover:text-amber-600" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
                        <Link href="/locations/" className="py-2 font-medium hover:text-amber-600" onClick={() => setMobileMenuOpen(false)}>Service Areas</Link>
                        <Link href="/about/" className="py-2 font-medium hover:text-amber-600" onClick={() => setMobileMenuOpen(false)}>About</Link>
                        <Link href="/gallery/" className="py-2 font-medium hover:text-amber-600" onClick={() => setMobileMenuOpen(false)}>Our Work</Link>
                        <Link href="/contact/" className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
                            Get Quote
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

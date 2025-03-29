// components/ProductGrid.tsx
'use client'
import { useState } from "react"

// Add props type definition
type ProductGridProps = {
  title?: string;
  subtitle?: string;
}

// Update component to accept props
export default function ProductGrid({ title, subtitle }: ProductGridProps) {
  // ... existing component code ...
  
  return (
    <section className="p-4">
      {/* Add title and subtitle */}
      <div className="text-center mb-12">
        {title && <h2 className="text-3xl font-bold text-gray-800">{title}</h2>}
        {subtitle && <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
      
      {/* Rest of existing code */}
    </section>
  )
}
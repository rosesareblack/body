'use client'

import React from 'react'

const GlassTypography = () => {
  return (
    <div className="glass-card p-8">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold glass-text text-center">
          Glass Typography
        </h1>
        
        <h2 className="text-4xl font-semibold glass-text">
          Beautiful Transparent Text
        </h2>
        
        <p className="text-xl text-gray-700 leading-relaxed">
          This component demonstrates glass typography effects using modern CSS
          properties like backdrop-filter and gradient backgrounds for stunning
          visual effects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="glass-card p-6">
            <h3 className="text-2xl font-bold glass-text mb-3">
              Production Ready
            </h3>
            <p className="text-gray-600">
              Optimized for Vercel deployment with proper build configuration
              and environment variable handling.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-2xl font-bold glass-text mb-3">
              Preview Support
            </h3>
            <p className="text-gray-600">
              Supports both production and preview environments with appropriate
              configuration for each deployment type.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlassTypography
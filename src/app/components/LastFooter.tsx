import React from 'react'

const lastfooter = () => {
  return (
    <div>
        <div>
        {/* Footer */}
      <footer className=" text-white text-center py-6 border-t border-gray-800">
        <div className="container mx-auto">
          <p>
            © {new Date().getFullYear()} Sheikh Muhammad Ismail. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default lastfooter
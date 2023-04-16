//'use client'

import '../styles/globals.css'


export default async function RootLayout({children}) {
  

  return (
    <html lang="en">
    <body className='bg-white text-black'>
  
    <div className='font-Sa' >
      
        {/* Header */}
      {/* <Header /> */}
      {children}
        {/*Footer */}
      {/* <Footer /> */}
      </div>
      
      </body>
  </html>
  )
}

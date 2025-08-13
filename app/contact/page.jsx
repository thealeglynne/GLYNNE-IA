// app/arquitectura/page.jsx
'use client'
import Regisstro from './components/reistro'
import Header from './components/header'
export default function ArquitecturaPage() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Header />
        <Regisstro />
      </div>
    );
  }
  
import React from 'react'
import { ShoppingCart } from 'lucide-react';

export default function Funcionamiento() {
  return (
    <div className='flex bg-gradient-to-br from-amber-50 to-[#c69d46] px-4 py-8 rounded-xl shadow-lg'>
      <div className='px-3 flex items-center'>
        <ShoppingCart size={40} className='text-white' />
      </div>

      <div className='flex flex-col gap-3'>
        <h3 className='font-semibold text-red-500 text-xl'>
          ¿Cómo funciona?
        </h3>

        <p className="text-black">
          <strong>1. Explora productos únicos</strong><br/>
          Navega por nuestra selección de artesanías hechas a mano, desde joyería hasta decoración y más.
        </p>
        <p className="text-black">
          <strong>2. Compra directamente a los artesanos</strong><br/>
          Elige tus productos favoritos y realiza tu pedido con total seguridad y transparencia.
        </p>
        <p className="text-black">
          <strong>3. Recibe en la comodidad de tu hogar</strong><br/>
          Te llevamos los productos directamente a tu puerta, con opciones de envío confiables.
        </p>
        <p className="text-black">
          <strong>4. ¿Eres artesano? Regístrate y vende</strong><br/>
          Crea tu perfil, sube tus productos y accede a una comunidad que valora tu talento.
        </p>
      </div>
    </div>
  )
}

import logoUts from './assets/Logo-UTS-1.png'
import chicaUts from './assets/chica-uteista.png'

function HeaderApp() {
  return (
    <>
      <header className='bg-gray-100 flex justify-evenly shadow-xl pb-3 mb-12'>
        <img className="w-[200px]" src={logoUts} alt="" />
        <nav className='flex justify-between gap-3 items-center'>
          <a className='hover:bg-green-500 hover:text-white px-10 py-2 rounded-[10px]' href="">Inicio</a>
          <a className='hover:bg-green-500 hover:text-white px-10 py-2 rounded-[10px]' href="">Estudiantes</a>
          <a className='hover:bg-green-500 hover:text-white px-10 py-2 rounded-[10px]' href="">Docentes</a>
          <a className='hover:bg-green-500 hover:text-white px-10 py-2 rounded-[10px]' href="">Nosotros</a>
          <a className='hover:bg-green-500 hover:text-white px-10 py-2 rounded-[10px]' href="">Investigacion</a>
        </nav>
        <button className='bg-green-300 hover:bg-green-400 px-5 py-1 h-8 mt-11 rounded-full'>Soy Uteista</button>
      </header>
    </>
  )
}

function BannerApp() {
  return (
    <>
      <main className='flex justify-center gap-20 items-center mb-40'>
        <section>
          <h1 className='text-[40px] w-[400px] font-bold'>Contruimos los futuros lideres del pais</h1>
          <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <button className='rounded-md bg-green-300 hover:bg-green-400 px-5 py-1 h-8 mt-11'>Revista</button>
        </section>
        <img className='w-[400px]' src={chicaUts} alt="" />
      </main>
    </>
  )
}

function App() {

  return (
    <>
      <HeaderApp />
      <BannerApp />
    </>
  )
}

export default App




const backgroundStyle = {
    backgroundColor: '#146c94',
  };
  export default function Home() {
    return (
      <div className="flex justify-center items-center h-screen" style={backgroundStyle}>
        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
          <div className='w-full max-w-md md:max-w-lg xl:max-w-2xl px-6 md:px-8 py-8 rounded-3xl bg-white border-2 border-gray-100'>
            <h1 className='text-3xl md:text-5xl font-semibold text-center mb-4'>Bienvenido a LookStyle</h1>
            <p className='text-sm md:text-lg text-gray-500 text-center mb-6'>Bienvenido, Por favor ingresa tus datos.</p>
  
            <form >
              <div className='mt-6'>
                <div className='mb-4'>
                  <label className='text-base md:text-lg font-medium'>UserName</label>
                  <input
                    className='w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 bg-transparent'
                    placeholder="Ingresa Email"
                    name="name"
                    //onChange={handleChange}
                  />
                </div>
                <div className='mb-4'>
                  <label className='text-base md:text-lg font-medium'>Password</label>
                  <input
                    className='w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 bg-transparent'
                    placeholder="Ingresa Contraseña"
                    type="password"
                    name="password"
                    //onChange={handleChange}
                  />
                </div>
                {/* Resto del formulario... */}
                <div className='mt-6 flex justify-center items-center'>
                  <p className='text-base'>¿No tienes cuenta? Regístrate</p>
                  <button className='ml-2 text-base text-violet-500'>Registrarse</button>
                </div>
                <div className='mt-6'>
                  <button type="submit" className='w-full py-3 md:py-4 bg-violet-500 rounded-xl text-white font-semibold text-lg'>
                    Iniciar Sesión
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      
    )
  }
  



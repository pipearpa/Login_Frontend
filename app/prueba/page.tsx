import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">LookStyle</h2>
          <p className="text-gray-500 mb-6">Bienvenido a LookStyle, ingresa tus datos </p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Informacion Personal</p>
                <p>Porfavor Ingresa Tus Datos.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Name</label>
                    <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
                  </div>
                   <div className="md:col-span-5">
                    <label htmlFor="full_name">Last Name</label>
                    <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="password" />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="cra 25 # 41-40" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Cuidad" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                      <button  className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                      <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
                  </div>

                  
                  {/* Agregar los campos adicionales aquí */}
                  
                  {/* Ejemplo de campo adicional */}
                  <div className="md:col-span-5">
                    <label htmlFor="additional_field">Informacion Adicional</label>
                    <input type="text" name="additional_field" id="additional_field" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Registrarme</button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Page;

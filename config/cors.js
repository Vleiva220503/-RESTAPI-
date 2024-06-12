'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Origen (Origin)
  |--------------------------------------------------------------------------
  |
  | Establece una lista de orígenes permitidos. El valor puede ser uno de los siguientes:
  |
  | Booleano: true: Permitir el origen de la solicitud actual
  | Booleano: false: Prohibir todos los orígenes
  | Cadena: Lista de orígenes permitidos separados por comas
  | Arreglo: Un arreglo de orígenes permitidos
  | Cadena: * - Un comodín para permitir el origen de la solicitud actual
  | Función: Recibe el origen actual y debe devolver uno de los valores anteriores
  |
  */
  origin: false,

  /*
  |--------------------------------------------------------------------------
  | Métodos (Methods)
  |--------------------------------------------------------------------------
  |
  | Métodos HTTP permitidos. El valor puede ser uno de los siguientes:
  |
  | Cadena: Lista de métodos permitidos separados por comas
  | Arreglo: Un arreglo de métodos permitidos
  |
  */
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],

  /*
  |--------------------------------------------------------------------------
  | Cabeceras (Headers)
  |--------------------------------------------------------------------------
  |
  | Lista de cabeceras permitidas a través del encabezado Access-Control-Request-Headers.
  | El valor puede ser uno de los siguientes.
  |
  | Booleano: true - Permitir las cabeceras de la solicitud actual
  | Booleano: false - Prohibir todas las cabeceras
  | Cadena: Lista de cabeceras permitidas separadas por comas
  | Arreglo: Un arreglo de cabeceras permitidas
  | Cadena: * - Un comodín para permitir las cabeceras de la solicitud actual
  | Función: Recibe la cabecera actual y debe devolver uno de los valores anteriores
  |
  */
  headers: true,

  /*
  |--------------------------------------------------------------------------
  | Exponer Cabeceras (Expose Headers)
  |--------------------------------------------------------------------------
  |
  | Una lista de cabeceras para exponer a través del encabezado `Access-Control-Expose-Headers`.
  | El valor puede ser uno de los siguientes.
  |
  | Booleano: false - Prohibir todas
  | Cadena: Lista de cabeceras permitidas separadas por comas
  | Arreglo: Un arreglo de cabeceras permitidas
  |
  */
  exposeHeaders: false,

  /*
  |--------------------------------------------------------------------------
  | Credenciales (Credentials)
  |--------------------------------------------------------------------------
  |
  | Define el encabezado Access-Control-Allow-Credentials. Siempre debe ser un booleano.
  |
  */
  credentials: false,

  /*
  |--------------------------------------------------------------------------
  | Edad Máxima (MaxAge)
  |--------------------------------------------------------------------------
  |
  | Define el encabezado Access-Control-Allow-Max-Age
  |
  */
  maxAge: 90
}

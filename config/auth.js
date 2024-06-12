'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Autenticador
  |--------------------------------------------------------------------------
  |
  | La autenticación es una combinación de serializador y esquema con
  | configuración adicional para definir cómo autenticar a un usuario.
  |
  | Esquemas Disponibles - basic, session, jwt, api
  | Serializadores Disponibles - lucid, database
  |
  | Aquí se establece el autenticador por defecto que se utilizará.
  |
  */
  authenticator: 'jwt',

  /*
  |--------------------------------------------------------------------------
  | Sesión
  |--------------------------------------------------------------------------
  |
  | El autenticador de sesión utiliza sesiones para autenticar a un usuario.
  | La autenticación de sesión siempre es persistente.
  |
  | serializer: Define el serializador a utilizar. En este caso, 'lucid' se
  | utiliza para trabajar con modelos de base de datos.
  |
  | model: El modelo de usuario que se utilizará para la autenticación.
  |
  | scheme: Define el esquema de autenticación. Aquí se usa 'session'.
  |
  | uid: El campo del modelo que se utilizará como identificador de usuario.
  |
  | password: El campo del modelo que se utilizará como contraseña.
  |
  */
  session: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'session',
    uid: 'email',
    password: 'password'
  },

  /*
  |--------------------------------------------------------------------------
  | Autenticación Básica
  |--------------------------------------------------------------------------
  |
  | El autenticador de autenticación básica utiliza el encabezado de
  | autenticación básica para autenticar a un usuario.
  |
  | NOTA:
  | Este esquema no es persistente y los usuarios deben pasar
  | las credenciales de inicio de sesión en cada solicitud.
  |
  | serializer, model, uid y password funcionan igual que en la configuración
  | de sesión.
  |
  */
  basic: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'basic',
    uid: 'email',
    password: 'password'
  },

  /*
  |--------------------------------------------------------------------------
  | Jwt
  |--------------------------------------------------------------------------
  |
  | El autenticador jwt funciona pasando un token jwt en cada solicitud HTTP
  | a través del encabezado HTTP `Authorization`.
  |
  | options: Configuración adicional para el esquema JWT. El secreto del JWT
  | se obtiene de la variable de entorno APP_KEY.
  |
  */
  jwt: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'jwt',
    uid: 'email',
    password: 'password',
    options: {
      secret: Env.get('APP_KEY')
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Api
  |--------------------------------------------------------------------------
  |
  | El esquema Api utiliza tokens personales de API para autenticar a un usuario.
  |
  | serializer, model, uid y password funcionan igual que en la configuración
  | de sesión.
  |
  */
  api: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'api',
    uid: 'email',
    password: 'password'
  }
}

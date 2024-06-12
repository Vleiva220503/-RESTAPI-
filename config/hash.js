'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Controlador (Driver)
  |--------------------------------------------------------------------------
  |
  | Controlador a utilizar para el hashing de valores. El mismo controlador es
  | utilizado por el módulo de autenticación también.
  |
  */
  driver: Env.get('HASH_DRIVER', 'bcrypt'),

  /*
  |--------------------------------------------------------------------------
  | Bcrypt
  |--------------------------------------------------------------------------
  |
  | Configuración relacionada con el hashing de bcrypt. Se utiliza el paquete
  | https://www.npmjs.com/package/bcrypt internamente.
  |
  */
  bcrypt: {
    rounds: 10
  },

  /*
  |--------------------------------------------------------------------------
  | Argon
  |--------------------------------------------------------------------------
  |
  | Configuración relacionada con argon. Se utiliza el paquete
  | https://www.npmjs.com/package/argon2 internamente.
  |
  | Dado que argon es opcional, tendrás que instalar la dependencia tú mismo
  |
  |============================================================================
  | npm i argon2
  |============================================================================
  |
  */
  argon: {
    type: 1
  }
}

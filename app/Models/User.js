'use strict'

/** Importar la clase Model de Lucid para definir el modelo de usuario */
const Model = use('Model')

/** Importar el módulo Hash para cifrar contraseñas */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * Gancho (hook) que se ejecuta antes de guardar el usuario en la base de datos.
     * Aquí ciframos la contraseña del usuario antes de guardarla.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * Definición de la relación de un usuario con sus tokens.
   * Esta relación es necesaria para que la autenticación funcione correctamente.
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  /**
   * Definición de la relación de un usuario con sus proyectos.
   * Esta relación indica que un usuario puede tener varios proyectos asociados.
   */
  proyectos () {
    return this.hasMany('App/Models/Proyecto')
  }
}

module.exports = User

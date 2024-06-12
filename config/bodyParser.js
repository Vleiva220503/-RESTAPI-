'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Analizador JSON (JSON Parser)
  |--------------------------------------------------------------------------
  |
  | Las siguientes configuraciones se aplican cuando el cuerpo de la solicitud
  | contiene una carga útil JSON. Si deseas que el analizador de cuerpo ignore
  | las cargas útiles JSON, simplemente establece `types` en un array vacío.
  */
  json: {
    /*
    |--------------------------------------------------------------------------
    | Límite (limit)
    |--------------------------------------------------------------------------
    |
    | Define el límite de JSON que puede ser enviado por el cliente. Si la carga
    | útil supera 1MB, no será procesada.
    |
    */
    limit: '1mb',

    /*
    |--------------------------------------------------------------------------
    | Estricto (strict)
    |--------------------------------------------------------------------------
    |
    | Cuando `strict` está establecido en true, el analizador de cuerpo solo
    | analizará Arrays y Objetos. De lo contrario, todo lo que sea analizadle
    | por el método `JSON.parse` será analizado.
    |
    */
    strict: true,

    /*
    |--------------------------------------------------------------------------
    | Tipos (types)
    |--------------------------------------------------------------------------
    |
    | Qué tipos de contenido son procesados como cargas útiles JSON. Puedes
    | añadir tus propios tipos aquí, pero el cuerpo de la solicitud debe ser
    | analizadle por el método `JSON.parse`.
    |
    */
    types: [
      'application/json',
      'application/json-patch+json',
      'application/vnd.api+json',
      'application/csp-report'
    ]
  },

  /*
  |--------------------------------------------------------------------------
  | Analizador de Texto Plano (Raw Parser)
  |--------------------------------------------------------------------------
  |
  | Configuraciones para analizar contenido de tipo texto plano.
  |
  */
  raw: {
    types: [
      'text/*'
    ]
  },

  /*
  |--------------------------------------------------------------------------
  | Analizador de Formularios (Form Parser)
  |--------------------------------------------------------------------------
  |
  | Configuraciones para analizar contenido de formularios URL codificados.
  |
  */
  form: {
    types: [
      'application/x-www-form-urlencoded'
    ]
  },

  /*
  |--------------------------------------------------------------------------
  | Analizador de Archivos (Files Parser)
  |--------------------------------------------------------------------------
  |
  | Configuraciones para analizar contenido de tipo multipart/form-data,
  | generalmente usado para subir archivos.
  |
  */
  files: {
    types: [
      'multipart/form-data'
    ],

    /*
    |--------------------------------------------------------------------------
    | Tamaño Máximo (Max Size)
    |--------------------------------------------------------------------------
    |
    | El valor siguiente es el tamaño máximo de todos los archivos subidos al
    | servidor. Se valida incluso antes de que los archivos hayan sido procesados
    | y se lanza una excepción si se excede.
    |
    | Considera establecer un valor razonable aquí, de lo contrario, las personas
    | pueden cargar archivos de varios GB que mantendrán ocupado tu servidor.
    |
    | También se considera este valor cuando `autoProcess` está establecido en true.
    |
    */
    maxSize: '20mb',

    /*
    |--------------------------------------------------------------------------
    | Proceso Automático (Auto Process)
    |--------------------------------------------------------------------------
    |
    | Determina si los archivos deben procesarse automáticamente o no. Dado que
    | los servidores HTTP manejan archivos a través de un par de endpoints
    | específicos, es mejor establecer este valor en false y procesar los archivos
    | manualmente cuando sea necesario.
    |
    | Este valor puede ser un booleano o un array de patrones de rutas que se
    | deben procesar automáticamente.
    */
    autoProcess: true,

    /*
    |--------------------------------------------------------------------------
    | Procesar Manualmente (Process Manually)
    |--------------------------------------------------------------------------
    |
    | La lista de rutas que no deben procesar archivos automáticamente y en su
    | lugar dependerán del proceso manual. Esta lista solo debe contener rutas
    | cuando autoProcess está en true. De lo contrario, todo se procesa manualmente.
    |
    */
    processManually: []

    /*
    |--------------------------------------------------------------------------
    | Nombre Temporal del Archivo (Temporary File Name)
    |--------------------------------------------------------------------------
    |
    | Define una función que debe devolver una cadena que se utilizará como
    | el nombre del archivo temporal.
    |
    | Si no se define, Bodyparser utilizará `uuid` como nombre del archivo temporal.
    |
    | Para definirla, asegúrate de devolver un valor desde la función.
    |
    | tmpFileName () {
    |   return 'some-unique-value'
    | }
    |
    */
  }
}

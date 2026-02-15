import type { HttpContext } from '@adonisjs/core/http'
import { fooValidator } from '#validators/foo'

export default class FooController {
  async bar({ request }: HttpContext) {
    await request.validateUsing(fooValidator);
  }
}

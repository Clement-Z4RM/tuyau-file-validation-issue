import vine from '@vinejs/vine'

export const fooValidator = vine.compile(
  vine.object({
    file: vine.file()
  })
);

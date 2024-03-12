export function cx(...args: unknown[]): string {
  return [...new Set(classList(args))].join(' ');
}

function * classList(args: unknown[]): Generator<string> {
  for (const item of args) {
    if (item) {
      if (typeof item === 'string') {
        for (const cln of item.split(' ')) {
          if (cln) {
            yield cln;
          }
        }
      } else if (typeof item === 'object') {
        if (Array.isArray(item)) {
          for (const cln of classList(item)) {
            yield cln;
          }
        } else {
          for (const [key, condition] of Object.entries(item)) {
            if (condition) {
              for (const cln of key.split(' ')) {
                if (cln) {
                  yield cln;
                }
              }
            }
          }
        }
      }
    }
  }
}

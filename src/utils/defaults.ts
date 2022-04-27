export const defaults = <T extends {}>(def: T, src: T): T => {
	return Object.assign(def, src)
}

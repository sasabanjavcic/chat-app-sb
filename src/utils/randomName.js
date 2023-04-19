const usedNames = new Set()

export const randomName = () => {
  const adjectives = ['Brzi', 'Ljuti', 'Gladan', 'Zgodan', 'Morski', 'Divlji']
  const nouns = ['Mačak', 'Zec', 'Ris', 'Vuk', 'Galeb', 'Poskok', 'Tuljan']
  const randomIndex = (array) => Math.floor(Math.random() * array.length)

  let adjective, noun, name
  do {
    adjective = adjectives[randomIndex(adjectives)]
    noun = nouns[randomIndex(nouns)]
    name = `${adjective} ${noun}`
  } while (usedNames.has(name))

  usedNames.add(name)
  return name
}

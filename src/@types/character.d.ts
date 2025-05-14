export interface Character {
  id: string
  image: string
  name: string
  gender: string
  species: string
  origin: Origin
}

export interface Origin {
  name: string
}

export interface Info {
  pages: number
  count: number
}

export interface CharactersResponse {
  characters: {
    results: Character[]
    info: Info
  }
}

export interface CharacterVariables {
  page: number
  filter: {
    name: string
  }
}

export interface Episode {
  id: string
  episode: string
  air_date: string
}

interface CharacterDetail {
  id: string
  image: string
  name: string
  gender: string
  species: string
  origin: {
    name: string
  }
  episode: Episode[]
}

interface CharacterResponse {
  character: CharacterDetail
}

export type Todo = {
  id: number
  completed: boolean
  text: string
}

export enum VisibilityFilterKinds {
  ALL = 'SHOW_ALL',
  COMPLETED = 'SHOW_COMPLETED',
  ACTIVE = 'SHOW_ACTIVE',
}

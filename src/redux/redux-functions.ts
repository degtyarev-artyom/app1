import { TComponentsActions } from "./pages/components/components-types"

export type TAction = (obj: any) => TComponentsActions

export const action: TAction = (obj: any): TComponentsActions => {
  const { type, payload } = obj
  return { type, payload }
}

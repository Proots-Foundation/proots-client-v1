import { ReactNode } from 'react'

import produce from 'immer'
import create from 'zustand'

export interface NotificationInfo {
  type?: 'success' | 'warning' | 'error' | 'info' | 'confirm'
  title?: ReactNode
  description?: ReactNode
  show: boolean
  id: number
}

export interface ConfirmDialogInfo extends NotificationInfo {
  cardWidth?: 'md' | 'lg'

  additionalContent?: ReactNode
  onlyConfirmButton?: boolean
  confirmButtonText?: ReactNode
  cancelButtonText?: ReactNode
  onCancel?(): void
  onConfirm?(): void
}

export interface NotificationStore {
  notificationIdCounter: number
  notifications: (NotificationInfo | ConfirmDialogInfo)[]
  set: (x: (x: NotificationStore) => void) => void
}

const useNotification = create<NotificationStore>((set) => ({
  notificationIdCounter: 0,
  notifications: [],
  set: (fn) => set(produce(fn)),
}))

export default useNotification

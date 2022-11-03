import { ReactNode } from 'react'

import useNotification, { NotificationInfo } from '../stores/useNotification'

export function notify(newNotification: {
  type?: 'success' | 'warning' | 'error' | 'info'
  title: ReactNode
  description?: ReactNode
}) {
  const setNotificationStore = useNotification.getState().set
  const notifications = useNotification.getState().notifications
  const lastId = useNotification.getState().notificationIdCounter
  const newId = lastId + 1

  const newNotify: NotificationInfo = {
    id: newId,
    type: 'success',
    show: true,
    description: null,
    ...newNotification,
  }

  setNotificationStore((state) => {
    state.notificationIdCounter = newId
    state.notifications = [...notifications, newNotify]
  })
}

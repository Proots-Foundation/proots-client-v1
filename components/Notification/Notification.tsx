import { useEffect } from 'react'

import {
  CheckCircleIcon,
  InfoIcon,
  NotAllowedIcon,
  SmallCloseIcon,
  StarIcon,
  WarningTwoIcon,
} from '@chakra-ui/icons'
import { Box, Flex, Link, ScaleFade } from '@chakra-ui/react'

import useNotification, { NotificationInfo } from '../../stores/useNotification'

const NotificationList = () => {
  const notifications = useNotification((state) => state.notifications)
  const reversedNotifications = [...notifications].reverse()
  return (
    <Flex position="fixed" right="1rem" bottom="1rem">
      <Flex flexDir="column">
        {reversedNotifications.map((n) => (
          <Notification key={n.id} notification={n} />
        ))}
      </Flex>
    </Flex>
  )
}

const Notification = ({ notification }: { notification: NotificationInfo }) => {
  const setNotificationStore = useNotification((s) => s.set)
  const { type = 'success', title, description, show, id } = notification
  const them = {
    success: {
      bg: 'rgba(118, 226, 104, 0.15)',
      icon: <CheckCircleIcon w="4" color="green.500" />,
    },
    warning: {
      bg: 'rgb(228,12,116, 0.15)',
      icon: <WarningTwoIcon w="4" color="pink.500" />,
    },
    error: {
      bg: 'rgba(234,57,67, 0.15)',
      icon: <NotAllowedIcon w="4" color="red.500" />,
    },
    info: {
      bg: 'rgba(95,151,255, 0.15)',
      icon: <InfoIcon w="4" color="blue.500" />,
    },
    confirm: {
      bg: 'rgba(118, 226, 104, 0.15)',
      icon: <StarIcon w="4" color="green.500" />,
    },
  }

  const hideNotification = () => {
    setNotificationStore((s) => {
      const newNotifications = s.notifications.map((n) =>
        n.id === id ? { ...n, show: false } : n,
      )
      s.notifications = newNotifications
    })
  }

  useEffect(() => {
    const id = setTimeout(
      () => {
        if (show) {
          hideNotification()
        }
      },
      type === 'confirm' || type === 'error' ? 8000 : 5000,
    )

    return () => {
      clearInterval(id)
    }
  })

  return (
    <ScaleFade initialScale={0.9} in={show} unmountOnExit={true}>
      <Flex
        my="0.5rem"
        p="1rem 1.5rem"
        align="center"
        justify="space-between"
        borderRadius="0.5rem"
        w="20.375rem"
        bg={them[type].bg}
        zIndex="99"
      >
        {them[type].icon}
        <Flex px="1rem" flexDir="column" color="white">
          {<Box fontWeight="600">{title}</Box> ?? null}

          {description ?? null}
        </Flex>
        <SmallCloseIcon
          color="white"
          w="5"
          h="5"
          onClick={() => hideNotification()}
        />
      </Flex>
    </ScaleFade>
  )
}

export default NotificationList

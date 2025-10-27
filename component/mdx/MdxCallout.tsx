import { Alert, AlertRootProps } from '@chakra-ui/react'
import React, { isValidElement } from 'react'

interface CalloutProps extends AlertRootProps {
  'data-type': string
  children: React.ReactNode
}

export const MdxCallout = (props: CalloutProps) => {
  return (
    <Alert.Root
      variant="surface"
      ps="7"
      mt="6"
      mb="4"
      padding="16px"
      status={props.status}
    >
      <Alert.Indicator />
      <Alert.Title>
        {isValidElement(props.children) && props.children}
      </Alert.Title>
    </Alert.Root>
  )
}

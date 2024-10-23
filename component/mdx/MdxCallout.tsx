import { Alert, AlertIcon, AlertProps, Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const MdxCallout = ({
  children,
  status,
}: PropsWithChildren<AlertProps>) => {
  return (
    <Alert status={status} ps="7" mt="6" mb="4">
      <AlertIcon />
      <Box>{children}</Box>
    </Alert>
  )
}

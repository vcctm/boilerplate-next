import { Box, Typography } from '@mui/material'

export const HomePage = () => {
  return (
    <Box
      display={'flex'}
      width={'100%'}
      height={'100vh'}
      justifyContent={'center'}
      textAlign={'center'}
      flexDirection={'column'}>
      <Typography fontSize={'24px'} fontWeight={'bold'}>
        React Boilerplate
      </Typography>
      <Typography>
        Typescript + MUIv5 + Framer Motion + Recoil + Storybook + Plop
      </Typography>
    </Box>
  )
}

export default HomePage

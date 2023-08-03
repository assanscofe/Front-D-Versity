import React from 'react'
import { Stack,Typography } from '@mui/material'
import {Masonry} from '@mui/lab'

const ListArticles = ({idPassion}) => {
  return (
    <Stack direction='column' spacing={2} sx={{
      width: '100%',
      height: 'calc(100% - 8vh)',
      bgcolor:'red'
    }}>
      <Stack direction='column'>
        <Typography variant='h6' color={'primary.main'}>Articles Musique</Typography>
      </Stack>
      <Masonry spacing={1} columns={'4'}>

      </Masonry>
    </Stack>
  )
}

export default ListArticles
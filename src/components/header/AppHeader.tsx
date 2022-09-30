import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'

const AppHeader: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center", padding: 1 }}>
            SHOP
          </Typography>
      </AppBar>
    </Box>
  )
}

export default AppHeader
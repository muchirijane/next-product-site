import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import useMediaQuery from "@mui/material/useMediaQuery"
import IconButton from "@mui/material/IconButton"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"

const useStyles = makeStyles({
  link: {
    "&:hover": {
      color: "#02897A",
      fontWeight: "bold",
      Transition: "all 0.3s ease-in-out",
    },
  },
})

const Navbar = () => {
  const classes = useStyles()
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
        dark: "#22343D",
      },
      secondary: {
        main: "#02897A",
      },
    },
  })
  const [anchorEl, setAnchorEl] = React.useState(null)

  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <Box component="span" sx={{ mr: 3 }}>
                <img src="/logo.svg" alt="logo" />
              </Box>
              <Typography variant="h4">
                <Box sx={{ fontWeight: "bold" }}>Product</Box>
              </Typography>
            </Box>

            <div>
              {isMobile ? (
                <>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    sx={{ padding: "20px 30px" }}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link
                        className={classes.link}
                        color="inherit"
                        underline="none"
                        href="/"
                      >
                        Product
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        className={classes.link}
                        color="inherit"
                        underline="none"
                        href="/customers"
                      >
                        Customers
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        className={classes.link}
                        color="inherit"
                        underline="none"
                        href="/pricing"
                      >
                        Pricing
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        className={classes.link}
                        color="inherit"
                        underline="none"
                        href="/resources"
                      >
                        Resources
                      </Link>
                    </MenuItem>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                      <Button variant="outlined" color="success">
                        Sign In
                      </Button>
                      <Button variant="contained" color="success">
                        Sign Up
                      </Button>
                    </Stack>
                  </Menu>
                </>
              ) : (
                <>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link
                      className={classes.link}
                      href="/product"
                      color="inherit"
                      underline="none"
                      mr={3}
                    >
                      Product
                    </Link>

                    <Link
                      className={classes.link}
                      href="/customers"
                      color="inherit"
                      underline="none"
                      mr={3}
                    >
                      Customers
                    </Link>

                    <Link
                      className={classes.link}
                      href="/pricing"
                      color="inherit"
                      underline="none"
                      mr={3}
                    >
                      Pricing
                    </Link>

                    <Link
                      className={classes.link}
                      href="/resources"
                      color="inherit"
                      underline="none"
                      mr={3}
                    >
                      Resources
                    </Link>

                    <Stack direction="row">
                      <Button variant="outlined" color="secondary" sx={{ mr: 4 }}>
                        Sign In
                      </Button>
                      <Button variant="contained" color="secondary">
                        Sign Up
                      </Button>
                    </Stack>
                  </Box>
                </>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navbar
